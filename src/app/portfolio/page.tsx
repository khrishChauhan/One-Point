"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/lib/projects";
import { motion as m, AnimatePresence as Ap } from "framer-motion";

// Map all projects' gallery images
const projectsImages = projects.map(project =>
  project.galleryImages.map(img => ({
    ...img,
    projectTitle: project.title,
    projectSlug: project.slug,
  }))
);

// Interleave the images dynamically to create a premium blended experience
const interleavedImages: Array<{ src: string; alt: string; caption: string; projectTitle: string; projectSlug: string }> = [];
const maxLen = Math.max(...projectsImages.map(arr => arr.length));

for (let idx = 0; idx < maxLen; idx++) {
  for (let pIdx = 0; pIdx < projectsImages.length; pIdx++) {
    if (idx < projectsImages[pIdx].length) {
      interleavedImages.push(projectsImages[pIdx][idx]);
    }
  }
}

export default function PortfolioPage() {
  return (
    <>
      <Header />

      <main className="bg-white min-h-screen pt-28 pb-24 md:pb-36">
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

          {/* Clean CSS Columns Masonry Layout */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <Ap mode="popLayout">
              {interleavedImages.map((image, idx) => {
                return (
                  <m.div
                    key={`${image.projectSlug}-${idx}`}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, delay: (idx % 10) * 0.05, ease: "easeOut" }}
                    className="break-inside-avoid group relative block w-full overflow-hidden rounded-2xl bg-[#FAF9F6] border border-black/5"
                  >
                    <Link href={`/portfolio/${image.projectSlug}`} className="block">
                      <div className="relative w-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={800}
                          height={1200}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Premium Minimal Hover Overlay */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/70 transition-colors duration-500 ease-out flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100">
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          <h3 className="text-white font-serif text-2xl md:text-3xl font-light leading-tight mb-3">
                            {image.projectTitle}
                          </h3>
                          <div className="w-12 h-[1px] bg-[#E40F14]" />
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
