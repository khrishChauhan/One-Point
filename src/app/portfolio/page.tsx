"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/lib/projects";
import { motion as m, AnimatePresence as Ap } from "framer-motion";

// Separate projects
const changozImages = projects.find(p => p.slug === "changoz-restaurant")?.galleryImages.map(img => ({
  ...img,
  projectTitle: "Changoz Restaurant",
  projectSlug: "changoz-restaurant",
})) || [];

const residenceImages = projects.find(p => p.slug === "private-residence")?.galleryImages.map(img => ({
  ...img,
  projectTitle: "Private Residence",
  projectSlug: "private-residence",
})) || [];

// Interleave images (ratio approx 2:1) to create a premium blended experience
const interleavedImages: typeof changozImages = [];
let rIdx = 0;
let cIdx = 0;

while (cIdx < changozImages.length || rIdx < residenceImages.length) {
  if (cIdx < changozImages.length) {
    interleavedImages.push(changozImages[cIdx++]);
  }
  if (cIdx < changozImages.length) {
    interleavedImages.push(changozImages[cIdx++]);
  }
  if (rIdx < residenceImages.length) {
    interleavedImages.push(residenceImages[rIdx++]);
  }
}

// Map each index to a distinct aspect ratio and top-margin to enforce an editorial magazine aesthetic
const getEditorialStyles = (idx: number) => {
  const aspectRatios = [
    "aspect-[16/10]", // Landscape
    "aspect-[3/4]",   // Portrait
    "aspect-square",  // Square
    "aspect-[4/3]",   // Standard Landscape
    "aspect-[3/4]",   // Portrait
    "aspect-square",  // Square
  ];
  
  const verticalOffsets = [
    "mt-0",
    "md:mt-12",
    "md:mt-24",
    "mt-0",
    "md:mt-8",
    "md:-mt-12",
  ];

  return {
    aspect: aspectRatios[idx % aspectRatios.length],
    offset: verticalOffsets[idx % verticalOffsets.length],
  };
};

export default function PortfolioPage() {
  return (
    <>
      <Header transparentInitially={false} />

      <main className="bg-white min-h-screen pt-32 pb-24 md:pb-36">
        <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
          {/* Page Title */}
          <div className="max-w-3xl mb-20 md:mb-32">
            <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-light mb-4">
              Portfolio
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-black leading-tight">
              Selected Works
            </h1>
            <p className="text-black/50 font-light text-sm md:text-base mt-6 leading-relaxed max-w-xl">
              Every detail is a decision. Explore our complete archive of space, form, and texture across all completed residential and hospitality projects.
            </p>
          </div>

          {/* Masonry Columns Layout with High Gaps and Whitespace */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-12 lg:gap-16 space-y-12 lg:space-y-16">
            <Ap mode="popLayout">
              {interleavedImages.map((image, idx) => {
                const styles = getEditorialStyles(idx);
                return (
                  <m.div
                    key={`${image.projectSlug}-${idx}`}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, delay: idx * 0.05, ease: "easeOut" }}
                    className={`break-inside-avoid group relative block w-full overflow-hidden rounded-xl bg-[#FAF9F6] border border-black/5 ${styles.offset}`}
                  >
                    <Link href={`/portfolio/${image.projectSlug}`} className="block">
                      <div className={`relative w-full overflow-hidden ${styles.aspect}`}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                        />
                      </div>
                      
                      {/* Hover Overlay - Only Project Name */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-[#E40F14]/90 transition-colors duration-500 ease-out flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100">
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          <span className="text-white/70 text-[9px] uppercase tracking-[0.3em] mb-2 font-medium block">
                            View Project Detail
                          </span>
                          <h3 className="text-white font-serif text-2xl md:text-3xl font-light leading-tight">
                            {image.projectTitle}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </m.div>
                );
              })}
            </Ap>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
