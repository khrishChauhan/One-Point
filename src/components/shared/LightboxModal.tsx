"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectImage } from "@/lib/images";

interface LightboxModalProps {
  images: ProjectImage[];
  initialIndex: number;
  onClose: () => void;
}

export function LightboxModal({ images, initialIndex, onClose }: LightboxModalProps) {
  const [current, setCurrent] = useState(initialIndex);

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const image = images[current];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-6 right-6 text-white/60 hover:text-white text-xs uppercase tracking-[0.2em] flex items-center gap-2 z-10 transition-colors duration-300"
      >
        Close <span className="text-base">×</span>
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 text-white/40 text-xs font-light tracking-[0.2em]">
        {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>

      {/* Image */}
      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full h-full max-w-6xl max-h-[85vh] mx-auto px-16 md:px-24"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Caption */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
          {image.category}
        </p>
        <p className="text-white/70 text-sm font-light mt-1">{image.title}</p>
      </div>

      {/* Prev / Next */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Previous image"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-2xl transition-colors duration-300 p-4"
      >
        ←
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Next image"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-2xl transition-colors duration-300 p-4"
      >
        →
      </button>
    </motion.div>
  );
}
