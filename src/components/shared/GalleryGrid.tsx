"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/lib/projects";

// Simplified categories for the homepage filter
const CATEGORIES = ["All", "Hospitality", "Residences", "Commercial", "Landscape & Urban"] as const;
type Category = typeof CATEGORIES[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="group relative overflow-hidden bg-[#FAF9F6] rounded-xl border border-black/5"
    >
      <Link href={`/portfolio/${project.slug}`} className="block relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-[#E40F14]/90 transition-colors duration-500 ease-out flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <span className="text-white/80 text-[9px] uppercase tracking-[0.3em] mb-2 font-medium block">
              {project.category} &bull; {project.location}
            </span>
            <h3 className="text-white text-xl font-serif font-light">{project.title}</h3>
            <span className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-medium mt-4 inline-flex items-center gap-1">
              View Project
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
      
      {/* Visual metadata visible below for screen readers and non-hover fallback */}
      <div className="p-5 flex justify-between items-center bg-white">
        <div>
          <span className="text-[#E40F14] text-[9px] uppercase tracking-[0.2em] font-semibold">
            {project.category}
          </span>
          <h4 className="text-black text-[15px] font-medium mt-1 truncate max-w-[200px] md:max-w-xs">
            {project.title}
          </h4>
        </div>
        <span className="text-black/30 text-xs font-light">
          {project.year}
        </span>
      </div>
    </motion.div>
  );
}

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Hospitality") {
      return p.category === "Hotels" || p.category === "Resorts" || p.category === "Restaurants";
    }
    if (activeCategory === "Residences") {
      return p.category === "Residences";
    }
    if (activeCategory === "Commercial") {
      return p.category === "Commercial";
    }
    if (activeCategory === "Landscape & Urban") {
      return p.category === "Landscape" || p.category === "Urban Design";
    }
    return false;
  });

  return (
    <section id="portfolio" className="bg-white py-24 md:py-36 border-b border-black/5">
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
          <div className="flex flex-wrap gap-4 md:gap-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.25em] pb-1 transition-all duration-300 relative ${
                  activeCategory === cat
                    ? "text-black font-semibold"
                    : "text-black/40 hover:text-black/70"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeFeaturedTab"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E40F14] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <div className="text-center mt-16 md:mt-20">
          <Link
            href="/portfolio"
            className="inline-block border border-black/10 text-black px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:border-[#E40F14] hover:text-white hover:bg-[#E40F14] transition-all duration-500"
          >
            Explore Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
