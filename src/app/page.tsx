import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSlideshow } from "@/components/shared/HeroSlideshow";
import { GalleryGrid } from "@/components/shared/GalleryGrid";
import { AboutStudio } from "@/components/shared/AboutStudio";
import { WhyOnePoint } from "@/components/shared/WhyOnePoint";
import { Team } from "@/components/shared/Team";
import { Testimonials } from "@/components/shared/Testimonials";
import { ContactForm } from "@/components/shared/ContactForm";

export const metadata = {
  title: "One Point Architecture Studio | Lucknow",
  description:
    "One Point Architecture Studio is a Lucknow-based design practice specializing in Architecture, Interiors, and Urban Design. Where Ideas Take Shape.",
};

export default function Home() {
  return (
    <>
      {/* Fixed glassmorphism header — transparentInitially only on homepage */}
      <Header />

      <main>
        {/* ① Hero — full-screen slideshow with studio stats */}
        <HeroSlideshow />

        {/* ③ Featured Portfolio — editorial gallery grid */}
        <GalleryGrid />

        {/* ④ About Studio — studio narrative + lead architect bio */}
        <AboutStudio />

        {/* ⑤ Why One Point — numbered reasons + Meet the Team CTA */}
        <WhyOnePoint />

        {/* ⑥ Team — founder profiles (linked from WhyOnePoint CTA) */}
        <Team />

        {/* ⑦ Testimonials — client quotes */}
        <Testimonials />

        {/* ⑧ Contact — studio info + inquiry form */}
        <section id="contact" className="bg-[#FAF9F6] py-28 md:py-40 border-t border-black/5 relative overflow-hidden">
          {/* Subtle grid pattern for premium architectural theme */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          
          <div className="px-6 md:px-16 max-w-screen-2xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              {/* Left: Studio details */}
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-semibold mb-5 block">
                    Get In Touch
                  </p>
                  <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-black leading-[1.15] mb-8">
                    Start Your <br />
                    Architectural <br />
                    Journey
                  </h2>
                  <p className="text-black/55 font-sans font-light text-sm md:text-base leading-relaxed max-w-sm">
                    Accepting commissions for residential, hospitality, and commercial projects. Schedule a consultation to explore how we can realize your vision.
                  </p>
                </div>

                <div className="space-y-8 pt-8 border-t border-black/10">
                  {/* Location */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-xl bg-black/5 text-neutral-800 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-black/40 text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">
                        Location
                      </p>
                      <p className="text-neutral-800 font-sans font-light text-sm md:text-base leading-relaxed">
                        Lucknow, India | Projects Across India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-xl bg-black/5 text-neutral-800 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a20.373 20.373 0 0 1-7.147-7.147c-.445-.441-.278-.928.099-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-black/40 text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">
                        Phone
                      </p>
                      <a 
                        href="tel:+917042747493"
                        className="text-[#E40F14] hover:underline font-sans font-medium text-sm md:text-base transition-all duration-300"
                      >
                        +91 7042747493
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-xl bg-black/5 text-neutral-800 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963-1.862-1.862-4.335-2.887-6.969-2.889-5.442 0-9.87 4.37-9.874 9.8.001 2.124.57 4.196 1.654 5.998l-.999 3.648 3.784-.981zm11.226-6.425c-.244-.122-1.45-.714-1.674-.795-.224-.081-.387-.122-.55.122-.162.244-.63.795-.772.957-.142.162-.284.183-.528.061-.244-.122-.934-.343-1.78-1.096-.658-.587-1.102-1.314-1.231-1.536-.129-.223-.014-.344.108-.465.11-.11.244-.284.366-.426.122-.142.163-.244.244-.407.081-.162.041-.305-.02-.426-.061-.122-.55-1.32-.752-1.81-.197-.474-.396-.411-.55-.419-.142-.007-.305-.008-.467-.008-.162 0-.427.061-.65.305-.224.244-.854.834-.854 2.031 0 1.197.874 2.35 1.993 2.497 1.12.148 2.2 1.832 3.336 2.267.362.139.715.197 1.01.218.315.022.924-.051 1.274-.103.39-.058 1.197-.49 1.362-.962.165-.473.165-.877.116-.962-.048-.085-.182-.127-.426-.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-black/40 text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">
                        WhatsApp
                      </p>
                      <a 
                        href="https://wa.me/917042747493"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E40F14] hover:underline font-sans font-medium text-sm md:text-base transition-all duration-300"
                      >
                        +91 7042747493
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-xl bg-black/5 text-neutral-800 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-black/40 text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">
                        Email
                      </p>
                      <a 
                        href="mailto:Onepointarchitecturestudio@gmail.com"
                        className="text-[#E40F14] hover:underline font-sans font-medium text-sm md:text-base transition-all duration-300 break-all"
                      >
                        Onepointarchitecturestudio@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-xl bg-black/5 text-neutral-800 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-black/40 text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">
                        Working Hours
                      </p>
                      <p className="text-neutral-800 font-sans font-light text-sm md:text-base leading-relaxed">
                        Monday – Saturday <br className="hidden sm:inline" />
                        10:00 AM – 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-black/10">
                  <p className="text-black/40 text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">
                    Follow Our Process
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/onepointarchitecturestudio?igsh=enIwZjBka3l0YTlu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full border border-black/10 hover:border-[#E40F14] hover:text-[#E40F14] transition-all duration-300 flex items-center justify-center text-neutral-600 bg-white shadow-sm"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/neha-vaish-91763365?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full border border-black/10 hover:border-[#E40F14] hover:text-[#E40F14] transition-all duration-300 flex items-center justify-center text-neutral-600 bg-white shadow-sm"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Contact form with Glassmorphism */}
              <div className="lg:col-span-7 bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.05)] p-8 md:p-12 rounded-3xl">
                <ContactForm />
              </div>
            </div>

            {/* Google Map Section */}
            <div className="mt-16 md:mt-24">
              <div className="w-full h-[350px] md:h-[480px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-black/5 relative group bg-neutral-100">
                <iframe
                  src="https://maps.google.com/maps?q=26.8435911%2C80.8873485&z=17&hl=en&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale contrast-[1.10] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-out"
                  title="One Point Architecture Studio Location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
