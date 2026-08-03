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
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-[clamp(0.75rem,2vw,1rem)] border border-gray-800 bg-gray-900/40 p-[clamp(1.25rem,4vw,2.5rem)]">
                <h2 className="text-[clamp(1.125rem,2.5vw,1.5rem)] font-bold text-white mb-[clamp(1rem,3vw,1.5rem)]">
                  Send an Enquiry
                </h2>
                <EnquiryForm />
              </div>
            </div>

            {/* Contact details */}
            <div className="lg:col-span-2 space-y-[clamp(1rem,3vw,1.5rem)]">
              {/* Direct contact */}
              <div className="rounded-[clamp(0.75rem,2vw,1rem)] border border-gray-800 bg-gray-900/40 p-[clamp(1rem,3vw,2rem)]">
                <h3 className="text-[clamp(1rem,1.8vw,1.25rem)] font-semibold text-white mb-[clamp(0.75rem,2vw,1rem)]">
                  Direct Contact
                </h3>
                <ul className="space-y-[clamp(0.75rem,2vw,1rem)] text-[clamp(0.85rem,1.2vw,0.95rem)]">
                  <li className="flex items-start gap-[clamp(0.5rem,1.5vw,0.75rem)]">
                    <svg className="icon-md text-amber-400 mt-[clamp(0.0625rem,0.2vw,0.125rem)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-400 text-[clamp(0.7rem,1vw,0.8rem)]">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-amber-400 transition-colors">
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-[clamp(0.5rem,1.5vw,0.75rem)]">
                    <svg className="icon-md text-amber-400 mt-[clamp(0.0625rem,0.2vw,0.125rem)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-gray-400 text-[clamp(0.7rem,1vw,0.8rem)]">Phone</p>
                      <a href={`tel:${siteConfig.phone}`} className="text-white hover:text-amber-400 transition-colors">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-[clamp(0.5rem,1.5vw,0.75rem)]">
                    <svg className="icon-md text-amber-400 mt-[clamp(0.0625rem,0.2vw,0.125rem)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-400 text-[clamp(0.7rem,1vw,0.8rem)]">Address</p>
                      <p className="text-white">{siteConfig.address}</p>
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
