import { NextResponse } from "next/server";
import { web3forms } from "@/config/server";
import { business } from "@/config/site";

export const runtime = "nodejs";

const MAX_LENGTHS = {
  name: 120,
  email: 200,
  service: 80,
  description: 4000,
  budget: 80,
  timeline: 80,
} as const;

const ALLOWED_FIELDS = Object.keys(MAX_LENGTHS) as (keyof typeof MAX_LENGTHS)[];

/** Simple in-memory rate limiter. Best-effort abuse protection per instance. */
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic cleanup to avoid unbounded growth.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((time) => now - time >= WINDOW_MS)) hits.delete(key);
    }
  }

  return recent.length > MAX_REQUESTS;
}

function sanitise(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!web3forms.configured) {
    // Clear setup error instead of a silent failure.
    return NextResponse.json(
      {
        ok: false,
        error:
          "The contact form is not configured yet. Please email us directly while this is being set up.",
      },
      { status: 503 },
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please wait a moment and try again." },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (typeof payload !== "object" || payload === null) {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const raw = payload as Record<string, unknown>;

  // Honeypot check: a filled hidden field indicates an automated submission.
  if (typeof raw["company-website"] === "string" && raw["company-website"].trim() !== "") {
    // Respond as success without doing anything, so bots get no signal.
    return NextResponse.json({ ok: true });
  }

  // Restrict accepted fields to the expected schema.
  const data = ALLOWED_FIELDS.reduce<Record<string, string>>((acc, field) => {
    acc[field] = sanitise(raw[field], MAX_LENGTHS[field]);
    return acc;
  }, {});

  const errors: Record<string, string> = {};
  if (!data.name) errors.name = "Please enter your name.";
  if (!data.email) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!data.service) errors.service = "Please select a service.";
  if (!data.description) errors.description = "Please describe your project.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const body = {
    access_key: web3forms.accessKey,
    subject: `New enquiry from ${data.name} — ${business.name}`,
    from_name: `${business.name} Website`,
    // The visitor's email is used as reply-to, never as the sender.
    replyto: data.email,
    name: data.name,
    email: data.email,
    service: data.service,
    description: data.description,
    budget: data.budget || "Not specified",
    timeline: data.timeline || "Not specified",
    botcheck: false,
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = (await response.json()) as { success?: boolean; message?: string };

    if (!response.ok || !result.success) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "We couldn't send your message right now. Please try again, or email us directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't send your message right now. Please try again, or email us directly.",
      },
      { status: 502 },
    );
  }
}
