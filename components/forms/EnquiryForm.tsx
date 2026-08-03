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

  const inputClass =
    "w-full rounded-[clamp(0.375rem,1vw,0.5rem)] border border-gray-700 bg-gray-800/60 px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.5rem,1.5vw,0.75rem)] text-[clamp(0.875rem,1.3vw,1rem)] text-white placeholder-gray-500 outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30";

  const errorClass = "mt-1 text-[clamp(0.7rem,1vw,0.8rem)] text-red-400";

  if (submitted) {
    return (
      <div className="rounded-[clamp(0.75rem,2vw,1rem)] border border-green-800 bg-green-900/20 p-[clamp(1.5rem,5vw,2.5rem)] text-center">
        <div className="mx-auto mb-[clamp(0.75rem,2vw,1rem)] flex h-[clamp(3rem,8vw,4rem)] w-[clamp(3rem,8vw,4rem)] items-center justify-center rounded-full bg-green-900/40">
          <svg className="icon-lg text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-[clamp(1.125rem,2.5vw,1.5rem)] font-bold text-white">
          Enquiry Sent!
        </h3>
        <p className="mt-[clamp(0.375rem,1vw,0.5rem)] text-[clamp(0.85rem,1.2vw,0.95rem)] text-gray-400">
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
      className="space-y-[clamp(0.75rem,2.5vw,1.25rem)]"
    >
      {/* Honeypot — hidden from real users, caught by bots */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {error && (
        <div className="rounded-lg border border-red-800 bg-red-900/20 px-4 py-3 text-[clamp(0.8rem,1.1vw,0.875rem)] text-red-400">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-[clamp(0.75rem,2.5vw,1.25rem)] sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-name" className="mb-[clamp(0.25rem,0.8vw,0.375rem)] block text-[clamp(0.8rem,1.1vw,0.875rem)] font-medium text-gray-300">
            Name <span className="text-amber-500">*</span>
          </label>
          <input id="enquiry-name" name="name" type="text" required placeholder="Your full name" className={inputClass} />
          {fieldErrors.name && <p className={errorClass}>{fieldErrors.name[0]}</p>}
        </div>
        <div>
          <label htmlFor="enquiry-company" className="mb-[clamp(0.25rem,0.8vw,0.375rem)] block text-[clamp(0.8rem,1.1vw,0.875rem)] font-medium text-gray-300">
            Company
          </label>
          <input id="enquiry-company" name="company" type="text" placeholder="Company name" className={inputClass} />
          {fieldErrors.company && <p className={errorClass}>{fieldErrors.company[0]}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[clamp(0.75rem,2.5vw,1.25rem)] sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-email" className="mb-[clamp(0.25rem,0.8vw,0.375rem)] block text-[clamp(0.8rem,1.1vw,0.875rem)] font-medium text-gray-300">
            Email <span className="text-amber-500">*</span>
          </label>
          <input id="enquiry-email" name="email" type="email" required placeholder="you@company.com" className={inputClass} />
          {fieldErrors.email && <p className={errorClass}>{fieldErrors.email[0]}</p>}
        </div>
        <div>
          <label htmlFor="enquiry-phone" className="mb-[clamp(0.25rem,0.8vw,0.375rem)] block text-[clamp(0.8rem,1.1vw,0.875rem)] font-medium text-gray-300">
            Phone <span className="text-amber-500">*</span>
          </label>
          <input id="enquiry-phone" name="phone" type="tel" required placeholder="+91 98765 43210" className={inputClass} />
          {fieldErrors.phone && <p className={errorClass}>{fieldErrors.phone[0]}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-product" className="mb-[clamp(0.25rem,0.8vw,0.375rem)] block text-[clamp(0.8rem,1.1vw,0.875rem)] font-medium text-gray-300">
          Product of Interest
        </label>
        <input
          id="enquiry-product"
          name="product"
          type="text"
          defaultValue={prefilledProduct ?? ""}
          placeholder="e.g. Spiral Wound Gasket"
          className={inputClass}
        />
        {fieldErrors.product && <p className={errorClass}>{fieldErrors.product[0]}</p>}
      </div>

      <div>
        <label htmlFor="enquiry-message" className="mb-[clamp(0.25rem,0.8vw,0.375rem)] block text-[clamp(0.8rem,1.1vw,0.875rem)] font-medium text-gray-300">
          Message <span className="text-amber-500">*</span>
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your requirements..."
          className={inputClass + " resize-y"}
        />
        {fieldErrors.message && <p className={errorClass}>{fieldErrors.message[0]}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={loading}>
        {loading ? "Sending..." : "Send Enquiry"}
      </Button>
    </form>
  );
}
