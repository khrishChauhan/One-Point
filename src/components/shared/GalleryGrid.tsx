"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { allImages, type ProjectImage } from "@/lib/images";
import { LightboxModal } from "./LightboxModal";

// Updated categories for a general architecture portfolio
const CATEGORIES = ["All", "Hospitality", "Residential", "Commercial"] as const;
type Category = typeof CATEGORIES[number];

function GalleryItem({
  image,
  index,
  onOpen,
}: {
  image: ProjectImage;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.08, ease: "easeOut" }}
      className="group relative overflow-hidden cursor-pointer bg-gray-100 rounded-xl"
      style={{
        gridRowEnd: index % 5 === 0 ? "span 2" : "span 1",
      }}
      onClick={onOpen}
    >
      <div className="relative w-full h-full min-h-[320px] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Hover overlay with reduced opacity and refined layout */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-[#E40F14]/80 transition-colors duration-500 ease-out flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <p className="text-white/80 text-[10px] uppercase tracking-[0.3em] mb-2 font-medium">
              Featured Project
            </p>
            <p className="text-white text-xl font-serif">{image.title || "Project Title"}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Since we only have restaurant images, we'll use all of them for the 'All' tab
  // and subset them for the other tabs just to demonstrate the filter functionality.
  const filtered =
    activeCategory === "All"
      ? allImages.slice(0, 9)
      : activeCategory === "Hospitality"
      ? allImages.slice(0, 6)
      : activeCategory === "Residential"
      ? allImages.slice(6, 12)
      : allImages.slice(12, 18);

  const handleOpen = (idx: number) => setLightboxIndex(idx);
  const handleClose = () => setLightboxIndex(null);

  return (
    <section id="portfolio" className="bg-white py-24 md:py-36">
      <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] mb-4 font-light">
              Featured Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-black leading-tight">
              Selected Works
            </h2>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.25em] pb-1 transition-all duration-300 relative ${
                  activeCategory === cat
                    ? "text-black font-medium"
                    : "text-black/40 hover:text-black/70"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E40F14] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((image, index) => (
              <motion.div
                key={`${image.src}-${activeCategory}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <GalleryItem
                  image={image}
                  index={index}
                  onOpen={() => handleOpen(allImages.indexOf(image))}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <LightboxModal
            images={allImages}
            initialIndex={lightboxIndex}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
