"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Architecture",
    desc: "From bespoke luxury residences to boutique hotels and commercial complexes, we design structures that endure in both form and function.",
  },
  {
    title: "Interior Design",
    desc: "Crafting atmospheric, human-centric interior spaces for hospitality, retail, and luxury residential projects, focusing on material honesty and spatial flow.",
  },
  {
    title: "Landscape Design",
    desc: "Integrating the built environment with nature through thoughtful external site planning, sustainable planting strategies, and natural water systems.",
  },
  {
    title: "Urban Design",
    desc: "Master planning and community scale interventions that respond dynamically to the cultural, environmental, and infrastructure context of the modern city.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#FAF9F6] py-24 md:py-36">
      <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 md:mb-32 max-w-3xl"
        >
          <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-light mb-6">
            Our Expertise
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
            Comprehensive Design Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-default"
            >
              <div className="w-12 h-[1px] bg-black/10 mb-8 group-hover:bg-[#E40F14] group-hover:w-full transition-all duration-700 ease-out" />
              <h3 className="font-serif text-2xl text-black mb-4 group-hover:text-[#E40F14] transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-black/60 font-light text-[15px] leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
