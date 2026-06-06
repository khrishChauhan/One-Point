"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { finalImages } from "@/lib/images";

export function AboutStudio() {
  const aboutImage = finalImages[0]; // Using a strong interior shot as placeholder

  return (
    <section id="about" className="bg-white py-24 md:py-36">
      <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 lg:sticky lg:top-32"
          >
            <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-light mb-6">
              WHY ONE POINT
            </p>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-black leading-tight mb-2">
              Architecture Built on Rigor & Empathy
            </h2>
            <p className="text-black/40 font-light text-lg mb-10">
              Led by Ar. Neha Vaish, Founder & Principal Architect
            </p>

            <div className="space-y-8 mb-12">
              <p className="text-black/60 font-light text-base leading-relaxed">
                One Point Architecture Studio is a Lucknow-based design practice specializing in Architecture, Interiors, and Urban Design. Guided by Ar. Neha Vaish, our work balances structural precision with material honesty to shape contemporary residential and commercial landmarks.
              </p>
              
              <div className="grid grid-cols-1 gap-6 pt-4 border-t border-black/5">
                {[
                  {
                    title: "Human-Centric Design",
                    desc: "We believe architecture must respond to how people inhabit space—balancing emotional resonance with structural precision, light, and material honesty.",
                  },
                  {
                    title: "Sustainable & Future-Ready",
                    desc: "Integrating solar-passive orientations, natural ventilation pathways, and locally sourced materials to create structures that endure responsibly.",
                  },
                  {
                    title: "End-to-End Project Management",
                    desc: "From concept to commissioning, we oversee all aspects of site coordination, detailed drawings, vendor integration, and strict quality control.",
                  },
                ].map((pill, pidx) => (
                  <div key={pidx} className="flex gap-4">
                    <span className="text-[#E40F14] font-mono text-xs mt-1">0{pidx + 1}.</span>
                    <div>
                      <h4 className="font-serif text-lg text-black mb-1">{pill.title}</h4>
                      <p className="text-black/50 font-light text-sm leading-relaxed">{pill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block border border-black/10 text-black px-8 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:border-[#E40F14] hover:text-[#E40F14] transition-colors duration-500"
            >
              Meet the Team
            </a>
          </motion.div>

          {/* Right: Studio Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6 relative aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <Image
              src={aboutImage.src}
              alt="ONE POINT ARCHITECTURE STUDIO"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
