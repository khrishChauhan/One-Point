import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSlideshow } from "@/components/shared/HeroSlideshow";
import { TrustStrip } from "@/components/shared/TrustStrip";
import { KeyBenefits } from "@/components/shared/KeyBenefits";
import { Services } from "@/components/shared/Services";
import { GalleryGrid } from "@/components/shared/GalleryGrid";
import { AboutStudio } from "@/components/shared/AboutStudio";
import { Testimonials } from "@/components/shared/Testimonials";
import { ContactForm } from "@/components/shared/ContactForm";

export const metadata = {
  title: "One Point Architecture Studio",
  description:
    "A premium multidisciplinary design practice based in Lucknow, specializing in high-end residential, hospitality, commercial, and institutional architecture.",
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

        {/* Section 3: Key Benefits */}
        <KeyBenefits />

        {/* Section 4: Services Preview */}
        <Services />

        {/* Section 5: Featured Portfolio */}
        <GalleryGrid />

        {/* Section 6: Why One Point Architecture (About Studio / Founder Bio) */}
        <AboutStudio />

        {/* Section 7: Testimonials */}
        <Testimonials />

        {/* Section 8: Contact / Lead Generation */}
        <section id="contact" className="bg-[#FAF9F6] py-24 md:py-36">
          <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left: Studio details */}
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-light mb-5">
                    Get In Touch
                  </p>
                  <h2 className="font-serif font-light text-3xl md:text-4xl text-black leading-tight mb-6">
                    Start Your
                    <br />Project
                  </h2>
                  <p className="text-black/50 font-light text-sm leading-relaxed">
                    We are currently accepting commissions for luxury
                    residential interiors, boutique hospitality spaces, and
                    architectural developments. Initial consultations are by
                    appointment only.
                  </p>
                </div>

                {/* Contact details */}
                <div className="space-y-5 pt-4">
                  {[
                    { label: "Studio", value: "Lucknow, Uttar Pradesh, India" },
                    { label: "Email", value: "info@onepointstudio.in" },
                    { label: "Phone", value: "+91 XXXXXXXXXX" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="pl-4 border-l-2 border-[#E40F14]/30"
                    >
                      <p className="text-black/30 text-[10px] uppercase tracking-[0.25em] mb-1 font-light">
                        {item.label}
                      </p>
                      <p className="text-black font-light text-sm">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Contact form */}
              <div className="lg:col-span-8">
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
