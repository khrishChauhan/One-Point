"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
];

export function TrustStrip() {
  return (
    <section className="bg-white border-y border-black/5 py-12 md:py-16">
      <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-black/5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center justify-center text-center p-4"
            >
              <span className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-black tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-black/40 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-light max-w-[150px] leading-relaxed">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
