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
              Why One Point
            </p>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-black leading-tight mb-2">
              Architecture Built on Rigor & Empathy
            </h2>
            <p className="text-black/40 font-light text-lg mb-10">
              Led by Ar. Neha Vaish, Founder & Principal Architect
            </p>

            <div className="space-y-6 mb-12">
              <p className="text-black/60 font-light text-base leading-relaxed">
                One Point Architecture Studio is a multidisciplinary design practice based in Lucknow, specializing in high-end residential, hospitality, commercial, and institutional projects.
              </p>
              <p className="text-black/60 font-light text-base leading-relaxed">
                Our approach is deeply human-centric. We believe that architecture must respond to how people inhabit space—balancing emotional resonance with structural precision. Every project is an exploration of light, proportion, and material honesty.
              </p>
              <p className="text-black/60 font-light text-base leading-relaxed">
                From broad urban interventions to meticulous interior detailing, we deliver spaces that endure beyond temporary design trends.
              </p>
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
              alt="One Point Architecture Studio"
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
