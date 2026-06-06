"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Human-Centric Design",
    desc: "We design spaces around the rituals, needs, and emotional responses of the people who will inhabit them. Our architecture is always a backdrop for human experience, never just a statement of form.",
  },
  {
    title: "End-to-End Management",
    desc: "From the first conceptual sketch to the final interior styling, we offer unified oversight. This ensures that the design intent is rigorously maintained through the complex realities of construction.",
  },
  {
    title: "Sustainable & Future-Ready",
    desc: "We integrate passive climate strategies, sustainable material sourcing, and adaptive spatial planning to ensure our structures endure aesthetically and environmentally.",
  },
];

export function WhyOnePoint() {
  return (
    <section id="why-us" className="bg-[#1E1E1E] py-24 md:py-36">
      <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-light mb-6">
              WHY ONE POINT
            </p>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-white leading-tight mb-8">
              Architecture Built on Rigor & Empathy
            </h2>
            <p className="text-white/60 font-light text-lg leading-relaxed mb-12">
              Our studio operates at the intersection of meticulous structural logic and deep human empathy. We don&apos;t just build enclosures; we craft enduring environments.
            </p>
            
            <a
              href="#contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#E40F14] hover:text-white transition-colors duration-500"
            >
              Start a Conversation
            </a>
          </motion.div>

          <div className="lg:col-span-7 space-y-12 lg:space-y-20 pt-8 lg:pt-0">
            {reasons.map((reason, idx) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="relative pl-8 md:pl-12 border-l border-white/10"
              >
                {/* Red dot indicator */}
                <div className="absolute top-3 -left-[5px] w-[9px] h-[9px] rounded-full bg-[#E40F14]" />
                
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
                  {reason.title}
                </h3>
                <p className="text-white/60 font-light text-base md:text-lg leading-relaxed max-w-2xl">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
