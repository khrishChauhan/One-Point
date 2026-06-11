"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Architecture Design",
    desc: "Timeless architecture rooted in context and functionality.",
    img: "/assets/private residence/IMG_20210223_112429.jpg",
  },
  {
    title: "Interior Design",
    desc: "Thoughtful interiors balancing comfort, materiality, and experience.",
    img: "/assets/Changos Restaurant/WhatsApp Image 2026-05-26 at 12.53.59.jpeg",
  },
  {
    title: "Luxury Residences",
    desc: "Personalized homes designed around lifestyle and detail.",
    img: "/assets/private residence/IMG_20201109_163332.jpg",
  },
  {
    title: "Commercial Spaces",
    desc: "Refined workplaces crafted for performance and experience.",
    img: "/assets/Changos Restaurant/WhatsApp Image 2026-05-26 at 12.54.03.jpeg",
  },
  {
    title: "Institutional Projects",
    desc: "Efficient environments designed for long-term impact.",
    img: "/assets/Changos Restaurant/WhatsApp Image 2026-05-26 at 12.54.03 (3).jpeg",
  },
  {
    title: "Urban Design & Planning",
    desc: "Strategic planning shaped around people and place.",
    img: "/assets/Changos Restaurant/WhatsApp Image 2026-05-26 at 12.54.03 (6).jpeg",
  },
  {
    title: "Space Planning & Renovation",
    desc: "Transforming existing spaces through intelligent interventions.",
    img: "/assets/private residence/IMG_20201109_163452.jpg",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#FAF9F6] py-32 md:py-48">
      <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 md:mb-32 max-w-3xl"
        >
          <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-medium mb-6">
            Our Expertise
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
            Comprehensive Design Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-default relative overflow-hidden bg-white p-10 md:p-12 rounded-xl border border-black/5 min-h-[300px] flex flex-col justify-end transition-all duration-700 hover:border-black/10"
            >
              {/* Background Image Preview on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Decorative line */}
              <div className="relative z-10 w-full mb-8">
                <div className="w-8 h-[1px] bg-black/20 group-hover:bg-[#E40F14] group-hover:w-16 transition-all duration-700 ease-out" />
              </div>

              <div className="relative z-10">
                <h3 className="font-serif text-2xl lg:text-3xl text-black mb-4 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                
                <p className="text-black/60 font-sans font-light text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



