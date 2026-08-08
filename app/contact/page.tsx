import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { siteConfig } from "@/lib/siteConfig";
import { ScrollReveal } from "@/components/ui/AnimatedComponents";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name}. Send an enquiry, request a quote, or contact us directly.`,
};

export default function ContactPage() {
  return (
    <main className="pt-[clamp(5rem,10vh,7.5rem)]">
      <section className="section-py-sm">
        <div className="container-fluid">
          <ScrollReveal>
            <SectionHeading
              label="Get in Touch"
              title="Contact Us"
              subtitle="Have a question or need a quote? Fill out the form below or reach us directly."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-5">
            {/* Form Container */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="border border-[#E8E2D9] rounded-[clamp(0.75rem,1.5vw,1.25rem)] p-[clamp(1.5rem,4vw,3rem)] bg-[#FAF8F5]">
                  <h2 className="font-serif text-[clamp(1.25rem,2vw,1.625rem)] font-medium text-[#1A1A1A] mb-[clamp(1.5rem,3vh,2rem)]">
                    Send an Enquiry
                  </h2>
                  <EnquiryForm />
                </div>
              </ScrollReveal>
            </div>

            {/* Contact details */}
            <div className="lg:col-span-2 space-y-[clamp(1.5rem,3vh,2rem)]">
              <ScrollReveal direction="up" delay={0.25}>
                {/* Direct contact */}
                <div className="border border-[#E8E2D9] rounded-[clamp(0.75rem,1.5vw,1.25rem)] p-[clamp(1.5rem,3vw,2.25rem)] bg-[#FAF8F5]">
                  <h3 className="font-serif text-[clamp(1.125rem,1.5vw,1.375rem)] font-medium text-[#1A1A1A] mb-[clamp(1.25rem,2.5vh,2rem)]">
                    Direct Contact
                  </h3>
                  <ul className="space-y-[clamp(1.25rem,2.5vh,1.75rem)]">
                    <li className="flex items-start gap-[clamp(0.75rem,1.5vw,1rem)]">
                      <div className="flex h-[clamp(2rem,3vw,2.5rem)] w-[clamp(2rem,3vw,2.5rem)] items-center justify-center rounded-full border border-[#E8E2D9] text-[#8B7355] shrink-0">
                        <svg className="w-[clamp(0.875rem,1vw,1rem)] h-[clamp(0.875rem,1vw,1rem)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[clamp(0.6875rem,0.7vw,0.75rem)] font-medium uppercase tracking-[0.1em] text-[#7A7468] mb-[clamp(0.125rem,0.3vh,0.25rem)]">Email</p>
                        <a href={`mailto:${siteConfig.email}`} className="text-[clamp(0.8125rem,0.9vw,0.9375rem)] font-medium text-[#1A1A1A] hover:text-[#8B7355] transition-colors">
                          {siteConfig.email}
                        </a>
                      </div>
                    </li>
                    {siteConfig.phone && (
                      <li className="flex items-start gap-[clamp(0.75rem,1.5vw,1rem)]">
                        <div className="flex h-[clamp(2rem,3vw,2.5rem)] w-[clamp(2rem,3vw,2.5rem)] items-center justify-center rounded-full border border-[#E8E2D9] text-[#8B7355] shrink-0">
                          <svg className="w-[clamp(0.875rem,1vw,1rem)] h-[clamp(0.875rem,1vw,1rem)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[clamp(0.6875rem,0.7vw,0.75rem)] font-medium uppercase tracking-[0.1em] text-[#7A7468] mb-[clamp(0.125rem,0.3vh,0.25rem)]">Phone</p>
                          <a href={`tel:${siteConfig.phone}`} className="text-[clamp(0.8125rem,0.9vw,0.9375rem)] font-medium text-[#1A1A1A] hover:text-[#8B7355] transition-colors">
                            {siteConfig.phone}
                          </a>
                        </div>
                      </li>
                    )}
                    <li className="flex items-start gap-[clamp(0.75rem,1.5vw,1rem)]">
                      <div className="flex h-[clamp(2rem,3vw,2.5rem)] w-[clamp(2rem,3vw,2.5rem)] items-center justify-center rounded-full border border-[#E8E2D9] text-[#8B7355] shrink-0">
                        <svg className="w-[clamp(0.875rem,1vw,1rem)] h-[clamp(0.875rem,1vw,1rem)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[clamp(0.6875rem,0.7vw,0.75rem)] font-medium uppercase tracking-[0.1em] text-[#7A7468] mb-[clamp(0.125rem,0.3vh,0.25rem)]">Address</p>
                        <p className="text-[clamp(0.8125rem,0.9vw,0.9375rem)] text-[#1A1A1A] leading-relaxed">{siteConfig.address}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
