import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function isAuthorised(request: Request, secret: string): boolean {
  const header = request.headers.get("x-webhook-secret");
  if (header && timingSafeEqual(header, secret)) return true;

  const url = new URL(request.url);
  const query = url.searchParams.get("secret");
  return Boolean(query && timingSafeEqual(query, secret));
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;

  let result = 0;
  for (let i = 0; i < a.length; i += 1) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (!secret) {
    return NextResponse.json(
      { revalidated: false, message: "Revalidation is not configured." },
      { status: 501 },
    );
  }

  if (!isAuthorised(request, secret)) {
    return NextResponse.json(
      { revalidated: false, message: "Invalid secret." },
      { status: 401 },
    );
  }

  revalidateTag("articles", "max");
  revalidateTag("featured-article", "max");
  revalidateTag("article-slugs", "max");
  revalidateTag("categories", "max");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
