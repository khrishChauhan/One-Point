"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutStudio() {
  const projectImage = "/assets/about_feature_new.jpg";

  return (
    <section id="about" className="bg-white py-32 md:py-48">
      <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left: Design Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div>
              <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-medium mb-6">
                Design Philosophy
              </p>
              <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-black leading-[1.15] tracking-tight">
                Designing Spaces <br className="hidden md:block" />
                With Purpose.
              </h2>
            </div>

            <div className="space-y-6 text-black/60 font-sans font-light text-sm md:text-base leading-relaxed max-w-md">
              <p>
                At One Point Architecture Studio, we create architecture, interiors, and urban environments that balance creativity, functionality, and timeless design.
              </p>
              <p>
                Every project is shaped through thoughtful planning, material sensitivity, and human-centered thinking to create spaces that feel purposeful, enduring, and authentic.
              </p>
            </div>
          </motion.div>

          {/* Right: Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] md:h-[700px] w-full"
          >
            <div className="absolute inset-0 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <Image
                src={projectImage}
                alt="One Point Architecture Project"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

