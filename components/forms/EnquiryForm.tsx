"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface EnquiryFormProps {
  prefilledProduct?: string;
}

export function EnquiryForm({ prefilledProduct }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const labelClass =
    "mb-[clamp(0.375rem,0.8vh,0.5rem)] block text-[clamp(0.6875rem,0.75vw,0.8125rem)] font-medium tracking-[0.08em] uppercase text-[#7A7468]";

  const errorClass = "mt-[clamp(0.25rem,0.5vh,0.375rem)] text-[clamp(0.6875rem,0.7vw,0.75rem)] font-medium text-rose-500";

  if (submitted) {
    return (
      <div className="border border-[#E8E2D9] rounded-[clamp(0.75rem,1.5vw,1rem)] p-[clamp(2rem,5vw,3.5rem)] text-center">
        <div className="mx-auto mb-[clamp(1rem,2vh,1.5rem)] flex h-[clamp(3rem,5vw,4rem)] w-[clamp(3rem,5vw,4rem)] items-center justify-center rounded-full border border-[#8B7355] text-[#8B7355]">
          <svg className="w-[clamp(1.25rem,2vw,1.75rem)] h-[clamp(1.25rem,2vw,1.75rem)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium text-[#1A1A1A]">
          Enquiry Sent
        </h3>
        <p className="mt-[clamp(0.375rem,0.8vh,0.5rem)] text-[clamp(0.8125rem,0.85vw,0.9375rem)] text-[#7A7468]">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setFieldErrors({});
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      product: formData.get("product") as string,
      message: formData.get("message") as string,
      website: formData.get("website") as string, // honeypot
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.issues) {
          setFieldErrors(data.issues);
        }
        setError(data.error ?? "Something went wrong.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-[clamp(1.5rem,3vw,2rem)]"
    >
      {/* Honeypot — hidden from real users, caught by bots */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {error && (
        <div className="border border-rose-200 bg-rose-50 rounded-[clamp(0.375rem,0.8vw,0.5rem)] p-[clamp(0.75rem,1.5vw,1rem)] text-[clamp(0.75rem,0.8vw,0.875rem)] font-medium text-rose-600">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-[clamp(1.5rem,3vw,2rem)] sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-name" className={labelClass}>
            Name <span className="text-[#8B7355]">*</span>
          </label>
          <input id="enquiry-name" name="name" type="text" required placeholder="Your full name" className="input-editorial" />
          {fieldErrors.name && <p className={errorClass}>{fieldErrors.name[0]}</p>}
        </div>
        <div>
          <label htmlFor="enquiry-company" className={labelClass}>
            Company
          </label>
          <input id="enquiry-company" name="company" type="text" placeholder="Company name" className="input-editorial" />
          {fieldErrors.company && <p className={errorClass}>{fieldErrors.company[0]}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[clamp(1.5rem,3vw,2rem)] sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-email" className={labelClass}>
            Email <span className="text-[#8B7355]">*</span>
          </label>
          <input id="enquiry-email" name="email" type="email" required placeholder="you@company.com" className="input-editorial" />
          {fieldErrors.email && <p className={errorClass}>{fieldErrors.email[0]}</p>}
        </div>
        <div>
          <label htmlFor="enquiry-phone" className={labelClass}>
            Phone <span className="text-[#8B7355]">*</span>
          </label>
          <input id="enquiry-phone" name="phone" type="tel" required placeholder="+91 98765 43210" className="input-editorial" />
          {fieldErrors.phone && <p className={errorClass}>{fieldErrors.phone[0]}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-product" className={labelClass}>
          Product of Interest
        </label>
        <input
          id="enquiry-product"
          name="product"
          type="text"
          defaultValue={prefilledProduct ?? ""}
          placeholder="e.g. Spiral Wound Gasket"
          className="input-editorial"
        />
        {fieldErrors.product && <p className={errorClass}>{fieldErrors.product[0]}</p>}
      </div>

      <div>
        <label htmlFor="enquiry-message" className={labelClass}>
          Message <span className="text-[#8B7355]">*</span>
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your requirements..."
          className="input-editorial resize-y !border !border-[#E8E2D9] !rounded-[clamp(0.375rem,0.8vw,0.5rem)] !p-[clamp(0.75rem,1.5vw,1rem)]"
        />
        {fieldErrors.message && <p className={errorClass}>{fieldErrors.message[0]}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={loading}>
        {loading ? "Sending..." : "Send Enquiry"}
      </Button>
    </form>
  );
}
