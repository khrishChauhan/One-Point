"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutStudio() {
  // Use two distinct strong images for the collage
  const aboutImage1 = "/assets/private residence/IMG_20201109_162908_1.jpg";
  const aboutImage2 = "/assets/Changoz resturatant/WhatsApp Image 2026-05-26 at 12.54.03 (6).jpeg";

  return (
    <section id="about" className="bg-white py-24 md:py-36">
      <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left: Text content (Trimmed for editorial feel) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-medium mb-6">
                The Studio
              </p>
              <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-black leading-[1.1] tracking-tight">
                Crafting Spaces <br/>
                <span className="italic text-black/70">with Purpose.</span>
              </h2>
            </div>

            <div className="space-y-6 text-black/60 font-light text-base md:text-lg leading-relaxed max-w-md">
              <p>
                One Point Architecture Studio is a multidisciplinary design practice creating architecture, interiors, and urban design solutions across India. We believe thoughtful design can shape better experiences, stronger communities, and enduring environments.
              </p>
              <p>
                Through a balance of creativity, technical expertise, and practical execution, we deliver projects that are contextual, functional, and timeless.
              </p>
            </div>

            <a
              href="#team"
              className="inline-block border border-black/10 text-black px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:border-[#E40F14] hover:text-[#E40F14] hover:bg-[#E40F14]/5 transition-all duration-500"
            >
              Meet the Team
            </a>
          </motion.div>

          {/* Right: Studio Image Collage */}
          <div className="lg:col-span-7 relative h-[600px] md:h-[800px] w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 w-[70%] h-[75%] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src={aboutImage1}
                alt="Architecture details"
                fill
                sizes="(max-width: 1024px) 70vw, 40vw"
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-0 w-[55%] h-[60%] rounded-lg overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src={aboutImage2}
                alt="Interior details"
                fill
                sizes="(max-width: 1024px) 55vw, 30vw"
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
