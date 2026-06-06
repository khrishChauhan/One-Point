"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reasons = [
  {
    num: "01",
    title: "Human-Centric Design",
    desc: "Designing spaces around people, with precision and purpose.",
  },
  {
    num: "02",
    title: "Sustainable & Future-Ready",
    desc: "Creating responsible spaces built to endure.",
  },
  {
    num: "03",
    title: "End-to-End Management",
    desc: "From concept to completion with seamless execution.",
  },
];

export function WhyOnePoint() {
  return (
    <section id="why-us" className="bg-[#111] text-white py-24 md:py-36 relative overflow-hidden">
      <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Content */}
          <div className="space-y-16 md:space-y-24">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-medium mb-6"
              >
                Our Approach
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.0, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif font-light text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8 max-w-lg"
              >
                Built on Rigor <br/>
                <span className="italic text-white/70">&amp; Empathy.</span>
              </motion.h2>
            </div>
 
            {/* Reasons List */}
            <div className="space-y-12">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.0, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="pl-6 border-l border-white/20 hover:border-[#E40F14] transition-colors duration-500 group"
                >
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-[#E40F14] font-sans text-[10px] tracking-widest font-medium">
                      {reason.num}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-light group-hover:text-white transition-colors duration-300">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-white/50 font-sans font-light text-base leading-relaxed max-w-md">
                    {reason.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="#team"
                className="inline-block border border-white/20 text-white px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-500 shadow-sm"
              >
                Meet The Team
              </a>
            </motion.div>
          </div>

          {/* Right: Sticky Visual Anchor */}
          <div className="hidden lg:block sticky top-32 h-[80vh] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/private residence/IMG_20201109_165840_1.jpg"
              alt="Architectural details emphasizing rigor and empathy"
              fill
              sizes="50vw"
              className="object-cover"
            />
            {/* Dark gradient overlay for elegance */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 via-transparent to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}
