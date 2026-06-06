import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSlideshow } from "@/components/shared/HeroSlideshow";
import { TrustStrip } from "@/components/shared/TrustStrip";
import { Services } from "@/components/shared/Services";
import { GalleryGrid } from "@/components/shared/GalleryGrid";
import { AboutStudio } from "@/components/shared/AboutStudio";
import { Testimonials } from "@/components/shared/Testimonials";
import { ContactForm } from "@/components/shared/ContactForm";

export const metadata = {
  title: "One Point Architecture Studio",
  description:
    "One Point Architecture Studio is a Lucknow-based design practice specializing in Architecture, Interiors, and Urban Design. Where Ideas Take Shape.",
};

export default function Home() {
  return (
    <>
      <Header transparentInitially={true} />

      <main>
        {/* Section 1: Hero Slideshow */}
        <HeroSlideshow />

        {/* Section 2: Trust Strip */}
        <TrustStrip />

        {/* Section 3: Services Preview */}
        <Services />

        {/* Section 5: Featured Portfolio */}
        <GalleryGrid />

        {/* Section 6: Why One Point Architecture (About Studio / Founder Bio) */}
        <AboutStudio />

        {/* Section 7: Testimonials */}
        <Testimonials />

        {/* Section 8: Contact / Lead Generation */}
        <section id="contact" className="bg-[#FAF9F6] py-24 md:py-36 border-t border-black/5">
          <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              {/* Left: Studio details */}
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-light mb-5">
                    Get In Touch
                  </p>
                  <h2 className="font-serif font-light text-4xl md:text-5xl text-black leading-tight mb-8">
                    Start Your
                    <br />Architectural Journey
                  </h2>
                  <p className="text-black/50 font-light text-base leading-relaxed max-w-md">
                    We are currently accepting commissions for luxury
                    residential, boutique hospitality, and commercial
                    developments. Initial design consultations are by
                    appointment only.
                  </p>
                </div>

                {/* Contact details */}
                <div className="space-y-6 pt-6 border-t border-black/5 max-w-md">
                  {[
                    { label: "Studio Office", value: "Lucknow, Uttar Pradesh, India" },
                    { label: "Design Inquiries", value: "info@onepointstudio.in" },
                    { label: "Connect Directly", value: "+91 XXXXXXXXXX" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="pl-4 border-l border-[#E40F14]"
                    >
                      <p className="text-black/40 text-[9px] uppercase tracking-[0.25em] mb-1 font-medium">
                        {item.label}
                      </p>
                      <p className="text-black font-light text-base">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Contact form */}
              <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl border border-black/5 shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Section 9: Footer */}
      <Footer />
    </>
  );
}
