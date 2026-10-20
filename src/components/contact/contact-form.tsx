"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { business, web3forms } from "@/config/site";

export type ContactFormState = "idle" | "submitting" | "success" | "error";

const budgetOptions = [
  "Not sure yet",
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "₹2,00,000+",
];

const timelineOptions = [
  "Flexible",
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3+ months",
];

type FieldErrors = Record<string, string>;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<ContactFormState>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    service: "",
    description: "",
    budget: "",
    timeline: "",
    "company-website": "",
  });

  const update = (field: keyof typeof values, value: string) =>
    setValues((prev) => ({ ...prev, [field]: value }));

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!values.service) next.service = "Please select a service.";
    if (!values.description.trim()) next.description = "Please describe your project.";
    return next;
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Prevent duplicate submissions while a request is in flight.
    if (state === "submitting") return;

    // Clear setup message instead of failing silently when the key is missing.
    if (!web3forms.configured || !web3forms.accessKey) {
      setState("error");
      setMessage(
        `The contact form isn't configured yet. Please email us directly at ${business.email} while this is being set up.`,
      );
      return;
    }

    const clientErrors = validate();
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setState("error");
      setMessage("Please fix the highlighted fields and try again.");
      return;
    }

    setErrors({});
    setState("submitting");
    setMessage("");

    try {
      // Web3Forms' supported free-plan integration submits from the browser.
      const formData = new FormData();
      formData.append("access_key", web3forms.accessKey);
      formData.append("subject", `New enquiry from ${values.name} — ${business.name}`);
      formData.append("from_name", `${business.name} Website`);
      // The visitor's email is used as reply-to, never as the sender.
      formData.append("replyto", values.email);
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("service", values.service);
      formData.append("description", values.description);
      formData.append("budget", values.budget || "Not specified");
      formData.append("timeline", values.timeline || "Not specified");
      // Web3Forms' own honeypot field: a truthy value marks the submission as spam.
      formData.append("botcheck", values["company-website"] ? "true" : "");

      const response = await fetch(web3forms.endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        setState("error");
        setMessage(
          result.message ??
            "We couldn't send your message right now. Please try again, or email us directly.",
        );
        return;
      }

      // Reset only after confirmed success.
      setState("success");
      setMessage(
        "Thank you — your message has been sent. We'll get back to you shortly.",
      );
      setValues({
        name: "",
        email: "",
        service: "",
        description: "",
        budget: "",
        timeline: "",
        "company-website": "",
      });
      formRef.current?.reset();
    } catch {
      setState("error");
      setMessage(
        "We couldn't send your message right now. Please check your connection and try again.",
      );
    }
  }

  const fieldClass = (field: string) =>
    [
      "mt-2 w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-navy transition-colors",
      errors[field]
        ? "border-red-500 focus:border-red-500"
        : "border-slate-border focus:border-blue",
    ].join(" ");

  const describedBy = (field: string) =>
    errors[field] ? `${field}-error` : undefined;

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
      aria-label="Project enquiry form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-navy">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={fieldClass("name")}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name")}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-xs text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClass("email")}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email")}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="text-sm font-medium text-navy">
          Service of interest <span className="text-red-600">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          className={fieldClass("service")}
          value={values.service}
          onChange={(event) => update("service", event.target.value)}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={describedBy("service")}
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.id} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
        {errors.service ? (
          <p id="service-error" className="mt-1.5 text-xs text-red-600">
            {errors.service}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="description" className="text-sm font-medium text-navy">
          Project description <span className="text-red-600">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          className={fieldClass("description")}
          value={values.description}
          onChange={(event) => update("description", event.target.value)}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={describedBy("description")}
        />
        {errors.description ? (
          <p id="description-error" className="mt-1.5 text-xs text-red-600">
            {errors.description}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className="text-sm font-medium text-navy">
            Budget range <span className="text-slate-muted">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            className={fieldClass("budget")}
            value={values.budget}
            onChange={(event) => update("budget", event.target.value)}
          >
            <option value="">Select a range</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="text-sm font-medium text-navy">
            Preferred timeline <span className="text-slate-muted">(optional)</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            className={fieldClass("timeline")}
            value={values.timeline}
            onChange={(event) => update("timeline", event.target.value)}
          >
            <option value="">Select a timeline</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Honeypot for basic bot filtering. Hidden from real users. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company-website">Leave this field empty</label>
        <input
          id="company-website"
          name="company-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values["company-website"]}
          onChange={(event) => update("company-website", event.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={state === "submitting"}>
          {state === "submitting" ? "Sending…" : "Send enquiry"}
        </Button>
        <p className="text-xs text-slate-muted">
          Fields marked <span className="text-red-600">*</span> are required.
        </p>
      </div>

      <div aria-live="polite" role="status" className="min-h-[1.5rem]">
        {message ? (
          <p
            className={[
              "rounded-md px-4 py-3 text-sm",
              state === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-700",
            ].join(" ")}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
