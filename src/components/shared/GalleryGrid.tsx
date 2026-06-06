"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Curated list of 14 strong images for the homepage editorial grid
const selectedWorks = [
  {
    src: "/assets/private residence/IMG_20210223_112429.jpg",
    alt: "Private Residence Exterior Elevation",
    projectTitle: "Private Residence",
    projectSlug: "private-residence",
  },
  {
    src: "/assets/Changoz resturatant/WhatsApp Image 2026-05-26 at 12.53.59.jpeg",
    alt: "Changoz Restaurant Dining Space",
    projectTitle: "Changoz Restaurant",
    projectSlug: "changoz-restaurant",
  },
  {
    src: "/assets/private residence/IMG_20201109_162908_1.jpg",
    alt: "Private Residence Double-Height Courtyard",
    projectTitle: "Private Residence",
    projectSlug: "private-residence",
  },
  {
    src: "/assets/Changoz resturatant/WhatsApp Image 2026-05-26 at 12.54.03 (16).jpeg",
    alt: "Changoz Restaurant Lounge Area",
    projectTitle: "Changoz Restaurant",
    projectSlug: "changoz-restaurant",
  },
  {
    src: "/assets/private residence/IMG_20201109_163444.jpg",
    alt: "Private Residence Clerestory Windows",
    projectTitle: "Private Residence",
    projectSlug: "private-residence",
  },
  {
    src: "/assets/Changoz resturatant/WhatsApp Image 2026-05-26 at 12.54.00 (2).jpeg",
    alt: "Changoz Restaurant Atmosphere",
    projectTitle: "Changoz Restaurant",
    projectSlug: "changoz-restaurant",
  },
  {
    src: "/assets/private residence/IMG_20210223_112445_1.jpg",
    alt: "Private Residence Terrace",
    projectTitle: "Private Residence",
    projectSlug: "private-residence",
  },
  {
    src: "/assets/Changoz resturatant/WhatsApp Image 2026-05-26 at 12.54.03 (7).jpeg",
    alt: "Changoz Restaurant Dining ambience",
    projectTitle: "Changoz Restaurant",
    projectSlug: "changoz-restaurant",
  },
  {
    src: "/assets/private residence/IMG_20201109_162511.jpg",
    alt: "Private Residence Entrance foyer detailing",
    projectTitle: "Private Residence",
    projectSlug: "private-residence",
  },
  {
    src: "/assets/Changoz resturatant/WhatsApp Image 2026-05-26 at 12.54.03 (11).jpeg",
    alt: "Changoz Restaurant Interior view",
    projectTitle: "Changoz Restaurant",
    projectSlug: "changoz-restaurant",
  },
  {
    src: "/assets/private residence/IMG_20201109_163452.jpg",
    alt: "Private Residence Shadow and light detailing",
    projectTitle: "Private Residence",
    projectSlug: "private-residence",
  },
  {
    src: "/assets/Changoz resturatant/WhatsApp Image 2026-05-26 at 12.54.03 (14).jpeg",
    alt: "Changoz Restaurant Backlit panels",
    projectTitle: "Changoz Restaurant",
    projectSlug: "changoz-restaurant",
  },
  {
    src: "/assets/private residence/IMG_20201109_165840_1.jpg",
    alt: "Private Residence Modern hallway",
    projectTitle: "Private Residence",
    projectSlug: "private-residence",
  },
  {
    src: "/assets/Changoz resturatant/WhatsApp Image 2026-05-26 at 12.54.03 (9).jpeg",
    alt: "Changoz Restaurant Furniture details",
    projectTitle: "Changoz Restaurant",
    projectSlug: "changoz-restaurant",
  },
];

export function GalleryGrid() {
  return (
    <section id="portfolio" className="bg-white py-24 md:py-36 border-b border-black/5">
      <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24 flex flex-col items-start">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] mb-6 font-medium"
          >
            Featured Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl font-light text-black leading-[1.1] tracking-tight mb-8"
          >
            A Selection of Spatial Narratives
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-black/50 font-light text-base md:text-xl leading-relaxed max-w-2xl"
          >
            Showcasing light, form, and material honesty across hospitality and residential spaces.
          </motion.p>
        </div>
 
        {/* Responsive CSS Columns Masonry */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {selectedWorks.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="break-inside-avoid group relative overflow-hidden rounded-lg bg-[#FAF9F6] shadow-sm hover:shadow-md transition-shadow duration-700"
            >
              <Link href={`/portfolio/${work.projectSlug}`} className="block relative w-full h-full">
                <Image
                  src={work.src}
                  alt={work.alt}
                  width={800}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-auto object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  loading="lazy"
                />
 
                {/* Minimalist Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <h3 className="text-white text-xl md:text-2xl font-serif font-light leading-tight mb-2">
                      {work.projectTitle}
                    </h3>
                    <div className="w-8 h-[1px] bg-[#E40F14] transition-all duration-500 group-hover:w-16" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
 
        {/* View Complete Portfolio CTA */}
        <div className="text-center mt-24 md:mt-32">
          <Link
            href="/portfolio"
            className="inline-block border border-black/10 text-black px-12 py-5 rounded-full text-xs uppercase tracking-[0.25em] font-medium hover:border-[#E40F14] hover:text-white hover:bg-[#E40F14] hover:scale-105 active:scale-95 transition-all duration-500 shadow-sm"
          >
            View Complete Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
