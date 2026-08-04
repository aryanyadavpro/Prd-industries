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
    "w-full rounded-2xl neu-inset px-4 py-3.5 text-[clamp(0.9rem,1.3vw,1rem)] text-[#3D4852] placeholder-[#6B7280]/60 outline-none transition-all duration-300 focus:neu-inset-deep focus:ring-2 focus:ring-[#6C63FF]";

  const errorClass = "mt-1.5 text-xs font-semibold text-rose-500";

  if (submitted) {
    return (
      <div className="rounded-[32px] neu-extruded p-[clamp(2rem,5vw,3rem)] text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl neu-inset text-[#38B2AC]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-[clamp(1.25rem,2.5vw,1.5rem)] font-bold text-[#3D4852]">
          Enquiry Sent!
        </h3>
        <p className="mt-2 text-[clamp(0.85rem,1.2vw,0.95rem)] text-[#6B7280]">
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
      className="space-y-[clamp(1rem,2.5vw,1.5rem)]"
    >
      {/* Honeypot — hidden from real users, caught by bots */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {error && (
        <div className="rounded-2xl neu-inset p-4 text-xs font-semibold text-rose-500">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-[clamp(1rem,2.5vw,1.5rem)] sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-name" className="mb-2 block text-[clamp(0.8rem,1.1vw,0.875rem)] font-display font-bold text-[#3D4852]">
            Name <span className="text-[#6C63FF]">*</span>
          </label>
          <input id="enquiry-name" name="name" type="text" required placeholder="Your full name" className={inputClass} />
          {fieldErrors.name && <p className={errorClass}>{fieldErrors.name[0]}</p>}
        </div>
        <div>
          <label htmlFor="enquiry-company" className="mb-2 block text-[clamp(0.8rem,1.1vw,0.875rem)] font-display font-bold text-[#3D4852]">
            Company
          </label>
          <input id="enquiry-company" name="company" type="text" placeholder="Company name" className={inputClass} />
          {fieldErrors.company && <p className={errorClass}>{fieldErrors.company[0]}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[clamp(1rem,2.5vw,1.5rem)] sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-email" className="mb-2 block text-[clamp(0.8rem,1.1vw,0.875rem)] font-display font-bold text-[#3D4852]">
            Email <span className="text-[#6C63FF]">*</span>
          </label>
          <input id="enquiry-email" name="email" type="email" required placeholder="you@company.com" className={inputClass} />
          {fieldErrors.email && <p className={errorClass}>{fieldErrors.email[0]}</p>}
        </div>
        <div>
          <label htmlFor="enquiry-phone" className="mb-2 block text-[clamp(0.8rem,1.1vw,0.875rem)] font-display font-bold text-[#3D4852]">
            Phone <span className="text-[#6C63FF]">*</span>
          </label>
          <input id="enquiry-phone" name="phone" type="tel" required placeholder="+91 98765 43210" className={inputClass} />
          {fieldErrors.phone && <p className={errorClass}>{fieldErrors.phone[0]}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-product" className="mb-2 block text-[clamp(0.8rem,1.1vw,0.875rem)] font-display font-bold text-[#3D4852]">
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
        <label htmlFor="enquiry-message" className="mb-2 block text-[clamp(0.8rem,1.1vw,0.875rem)] font-display font-bold text-[#3D4852]">
          Message <span className="text-[#6C63FF]">*</span>
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
