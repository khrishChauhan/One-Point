"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { heroImages } from "@/lib/images";

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  // Mount detection for entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Slideshow interval
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black"
    >
      {/* Slideshow Images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[current]}
            alt="ONE POINT ARCHITECTURE STUDIO Portfolio"
            fill
            sizes="100vw"
            priority
            className="object-cover scale-105"
          />
          {/* Subtle slow zoom effect on active slide */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 6, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"
          />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 md:px-16 pb-20 md:pb-32 max-w-screen-2xl mx-auto pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isReady ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-white/40" />
            <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-light">
              One Point Architecture Studio
            </p>
          </div>

          <h1 className="font-serif text-white font-light text-5xl md:text-7xl lg:text-[84px] leading-[1.05] tracking-tight mb-6 pointer-events-auto">
            Where Ideas
            <br />
            <span className="font-normal text-white/90">Take Shape</span>
          </h1>

          <p className="text-white/70 font-light text-lg md:text-xl tracking-wide mb-12">
            Architecture &bull; Interiors &bull; Urban Design
          </p>

          <div className="flex flex-wrap items-center gap-6 pointer-events-auto">
            <a
              href="#portfolio"
              className="bg-white text-black px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#E40F14] hover:text-white transition-colors duration-500"
            >
              Explore Our Work
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-white/10 transition-colors duration-500"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>

      {/* Supporting Metrics */}
      <div className="hidden lg:flex absolute bottom-32 right-16 xl:right-32 z-20 flex-col gap-10 pointer-events-auto text-right">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isReady ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <span className="block text-white text-4xl font-serif font-light mb-2">8+</span>
          <span className="block text-white/50 text-[9px] uppercase tracking-[0.3em]">Years Experience</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isReady ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
        >
          <span className="block text-white text-4xl font-serif font-light mb-2">180+</span>
          <span className="block text-white/50 text-[9px] uppercase tracking-[0.3em]">Projects Delivered</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isReady ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        >
          <span className="block text-white text-4xl font-serif font-light mb-2">100%</span>
          <span className="block text-white/50 text-[9px] uppercase tracking-[0.3em]">Client Satisfaction</span>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-6 md:left-16 z-20 flex gap-3 pointer-events-auto">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className="group py-2"
          >
            <div
              className={`h-[2px] transition-all duration-500 rounded-full ${
                idx === current
                  ? "w-8 bg-[#E40F14]"
                  : "w-4 bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
