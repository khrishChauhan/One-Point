"use client";

import { motion } from "framer-motion";
import { Users, Compass, Recycle } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Human-Centric Design",
    description:
      "We design spaces around the rituals, needs, and emotional responses of the people who inhabit them. Our architecture serves as a functional, elegant backdrop for human experience.",
  },
  {
    icon: Compass,
    title: "End-to-End Management",
    description:
      "From initial feasibility studies and master planning to construction oversight and final interior details, we maintain absolute design integrity at every single stage.",
  },
  {
    icon: Recycle,
    title: "Sustainable & Future-Ready",
    description:
      "We integrate passive heating/cooling, smart material sourcing, and adaptive layouts to ensure that our structures endure both ecologically and aesthetically for decades.",
  },
];

export function KeyBenefits() {
  return (
    <section className="bg-[#FAF9F6] py-24 md:py-32 border-b border-black/5">
      <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-light mb-4">
            Our Core Pillars
          </p>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-black leading-tight">
            How We Deliver Value
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                className="flex flex-col items-start p-6 bg-white rounded-xl shadow-xs border border-black/5"
              >
                <div className="w-12 h-12 rounded-lg bg-[#E40F14]/5 flex items-center justify-center text-[#E40F14] mb-6">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-black mb-4">
                  {pillar.title}
                </h3>
                <p className="text-black/60 font-light text-sm md:text-base leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
