"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Architectural Design",
    desc: "From bespoke luxury residences to boutique hotels and commercial complexes, we design structures that endure in both form and function.",
    img: "/assets/private residence/IMG_20210223_112429.jpg",
  },
  {
    title: "Interior Design",
    desc: "Crafting atmospheric, human-centric interior spaces for hospitality, retail, and luxury residential projects, focusing on material honesty and spatial flow.",
    img: "/assets/Changoz resturatant/WhatsApp Image 2026-05-26 at 12.53.59.jpeg",
  },
  {
    title: "Luxury Residences",
    desc: "Bespoke high-end homes designed to reflect the unique lifestyle and personality of our clients, merging comfort with architectural elegance.",
    img: "/assets/private residence/IMG_20201109_163332.jpg",
  },
  {
    title: "Commercial Spaces",
    desc: "Innovative workspaces and retail environments that enhance brand identity, foster collaboration, and prioritize user experience.",
    img: "/assets/Changoz resturatant/WhatsApp Image 2026-05-26 at 12.54.03.jpeg",
  },
  {
    title: "Institutional Projects",
    desc: "Purpose-driven architecture for educational, cultural, and civic institutions, focusing on sustainability, community impact, and longevity.",
    img: "/assets/Changoz resturatant/WhatsApp Image 2026-05-26 at 12.54.03 (3).jpeg",
  },
  {
    title: "Urban Design & Planning",
    desc: "Master planning and community scale interventions that respond dynamically to the cultural, environmental, and infrastructure context of the modern city.",
    img: "/assets/Changoz resturatant/WhatsApp Image 2026-05-26 at 12.54.03 (6).jpeg",
  },
  {
    title: "Space Planning & Renovation",
    desc: "Strategic restructuring and modernization of existing spaces to maximize efficiency, aesthetic value, and programmatic utility.",
    img: "/assets/private residence/IMG_20201109_163452.jpg",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-default relative overflow-hidden bg-white p-8 rounded-2xl border border-black/5 min-h-[320px] flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Background Image Preview on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none z-0">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Decorative line */}
              <div className="relative z-10">
                <div className="w-12 h-[1px] bg-black/10 mb-8 group-hover:bg-[#E40F14] group-hover:w-full transition-all duration-700 ease-out" />
                <h3 className="font-serif text-2xl text-black mb-4 group-hover:text-[#E40F14] transition-colors duration-500">
                  {service.title}
                </h3>
              </div>
              
              <p className="relative z-10 text-black/60 font-light text-[14px] leading-relaxed group-hover:text-black/80 transition-colors duration-500">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
