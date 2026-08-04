import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name}. Send an enquiry, request a quote, or contact us directly.`,
};

export default function ContactPage() {
  return (
    <main>
      <section className="section-py">
        <div className="container-fluid">
          <SectionHeading
            title="Get in Touch"
            subtitle="Have a question or need a quote? Fill out the form below or reach us directly."
          />

          <div className="grid grid-cols-1 gap-[clamp(1.5rem,5vw,3rem)] lg:grid-cols-5">
            {/* Form Container */}
            <div className="lg:col-span-3">
              <div className="rounded-[32px] neu-extruded p-[clamp(1.5rem,4vw,3rem)]">
                <h2 className="font-display text-[clamp(1.25rem,2.5vw,1.65rem)] font-bold text-[#3D4852] mb-[clamp(1rem,3vw,1.5rem)]">
                  Send an Enquiry
                </h2>
                <EnquiryForm />
              </div>
            </div>

            {/* Contact details */}
            <div className="lg:col-span-2 space-y-[clamp(1.25rem,3vw,1.75rem)]">
              {/* Direct contact Card */}
              <div className="rounded-[32px] neu-extruded p-[clamp(1.5rem,3vw,2.25rem)]">
                <h3 className="font-display text-[clamp(1.1rem,1.8vw,1.35rem)] font-bold text-[#3D4852] mb-6">
                  Direct Contact
                </h3>
                <ul className="space-y-6 text-[clamp(0.875rem,1.2vw,0.975rem)]">
                  <li className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl neu-inset-deep text-[#6C63FF] shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#6B7280] text-xs font-semibold uppercase tracking-wider mb-0.5">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="font-semibold text-[#3D4852] hover:text-[#6C63FF] transition-colors">
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>
                  {siteConfig.phone && (
                    <li className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl neu-inset-deep text-[#6C63FF] shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#6B7280] text-xs font-semibold uppercase tracking-wider mb-0.5">Phone</p>
                        <a href={`tel:${siteConfig.phone}`} className="font-semibold text-[#3D4852] hover:text-[#6C63FF] transition-colors">
                          {siteConfig.phone}
                        </a>
                      </div>
                    </li>
                  )}
                  <li className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl neu-inset-deep text-[#6C63FF] shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#6B7280] text-xs font-semibold uppercase tracking-wider mb-0.5">Address</p>
                      <p className="font-medium text-[#3D4852] leading-relaxed">{siteConfig.address}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
