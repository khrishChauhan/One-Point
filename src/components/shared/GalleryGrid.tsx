"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Curated list of 8 strong images for the homepage editorial grid
const selectedWorks = [
  {
    src: "/assets/private residence/IMG_20210223_112429.jpg",
    alt: "Private Residence Exterior Elevation",
    projectTitle: "Private Residence",
    projectSlug: "private-residence",
    span: "md:col-span-2 aspect-[16/10]",
  },
  {
    src: "/assets/Changoz resturatant/WhatsApp Image 2026-05-26 at 12.53.59.jpeg",
    alt: "Changoz Restaurant Dining Space",
    projectTitle: "Changoz Restaurant",
    projectSlug: "changoz-restaurant",
    span: "md:col-span-1 aspect-[3/4]",
  },
  {
    src: "/assets/private residence/IMG_20201109_162908_1.jpg",
    alt: "Private Residence Double-Height Courtyard",
    projectTitle: "Private Residence",
    projectSlug: "private-residence",
    span: "md:col-span-1 aspect-square md:-mt-12",
  },
  {
    src: "/assets/Changoz resturatant/WhatsApp Image 2026-05-26 at 12.54.03 (16).jpeg",
    alt: "Changoz Restaurant Lounge Area",
    projectTitle: "Changoz Restaurant",
    projectSlug: "changoz-restaurant",
    span: "md:col-span-2 aspect-[16/10]",
  },
  {
    src: "/assets/private residence/IMG_20201109_163444.jpg",
    alt: "Private Residence Clerestory Windows",
    projectTitle: "Private Residence",
    projectSlug: "private-residence",
    span: "md:col-span-1 aspect-[3/4] md:-mt-24",
  },
  {
    src: "/assets/Changoz resturatant/WhatsApp Image 2026-05-26 at 12.54.00 (2).jpeg",
    alt: "Changoz Restaurant Atmosphere",
    projectTitle: "Changoz Restaurant",
    projectSlug: "changoz-restaurant",
    span: "md:col-span-1 aspect-square",
  },
  {
    src: "/assets/private residence/IMG_20210223_112445_1.jpg",
    alt: "Private Residence Terrace",
    projectTitle: "Private Residence",
    projectSlug: "private-residence",
    span: "md:col-span-1 aspect-[4/3] md:mt-12",
  },
];

export function GalleryGrid() {
  return (
    <section id="portfolio" className="bg-white py-24 md:py-36 border-b border-black/5">
      <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] mb-4 font-light">
            Featured Works
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-black leading-tight">
            Selected Photography
          </h2>
          <p className="text-black/50 font-light text-sm md:text-base mt-6 leading-relaxed max-w-lg">
            A curated glimpse into our spatial narratives, showcasing light, form, and material honesty in both hospitality and residential design.
          </p>
        </div>

        {/* Responsive Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
          {selectedWorks.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: "easeOut" }}
              className={`${work.span} group relative overflow-hidden rounded-xl bg-[#FAF9F6] border border-black/5`}
            >
              <Link href={`/portfolio/${work.projectSlug}`} className="block relative w-full h-full">
                <Image
                  src={work.src}
                  alt={work.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  loading="lazy"
                />

                {/* Hover overlay with only project title */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-[#E40F14]/90 transition-colors duration-500 ease-out flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="text-white/70 text-[9px] uppercase tracking-[0.3em] mb-2 font-medium block">
                      View Project Detail
                    </span>
                    <h3 className="text-white text-2xl md:text-3xl font-serif font-light leading-tight">
                      {work.projectTitle}
                    </h3>
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
            className="inline-block border border-black/10 text-black px-12 py-5 rounded-full text-xs uppercase tracking-[0.25em] font-semibold hover:border-[#E40F14] hover:text-white hover:bg-[#E40F14] transition-all duration-500"
          >
            View Complete Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
