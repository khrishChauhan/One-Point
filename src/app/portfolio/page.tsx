"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/lib/projects";
import { motion as m, AnimatePresence as Ap } from "framer-motion";

const FILTERS = ["All", "Architecture", "Interiors", "Landscape", "Urban Design"] as const;
type Filter = typeof FILTERS[number];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  // Map projects to filters based on category and scope
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    
    const scopeLower = project.scope.toLowerCase();
    const catLower = project.category.toLowerCase();

    if (activeFilter === "Architecture") {
      return (
        scopeLower.includes("architecture") || 
        ["residences", "resorts", "hotels", "commercial"].includes(catLower)
      );
    }
    if (activeFilter === "Interiors") {
      return (
        scopeLower.includes("interior") || 
        ["restaurants", "commercial", "residences", "hotels"].includes(catLower)
      );
    }
    if (activeFilter === "Landscape") {
      return (
        scopeLower.includes("landscape") || 
        ["landscape"].includes(catLower)
      );
    }
    if (activeFilter === "Urban Design") {
      return (
        scopeLower.includes("urban") || 
        ["urban design"].includes(catLower)
      );
    }
    return false;
  });

  return (
    <>
      <Header transparentInitially={false} />

      <main className="bg-white min-h-screen pt-32 pb-24 md:pb-36">
        <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
          {/* Page Title */}
          <div className="max-w-3xl mb-16 md:mb-24">
            <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-light mb-4">
              Portfolio
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-black leading-tight">
              Selected Works
            </h1>
            <p className="text-black/50 font-light text-sm md:text-base mt-6 leading-relaxed max-w-xl">
              A curated showcase of high-end hospitality, residential, commercial, and urban design projects reflecting our commitment to rigorous and empathetic architecture.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-4 md:gap-8 border-b border-black/5 pb-6 mb-12">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-xs uppercase tracking-[0.2em] pb-2 transition-all duration-300 relative ${
                  activeFilter === filter
                    ? "text-black font-semibold"
                    : "text-black/40 hover:text-black/70"
                }`}
              >
                {filter}
                {activeFilter === filter && (
                  <m.div
                    layoutId="portfolioActiveTab"
                    className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-[#E40F14] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <m.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            <Ap mode="popLayout">
              {filteredProjects.map((project) => (
                <m.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <Link href={`/portfolio/${project.slug}`} className="block">
                    {/* Card Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#FAF9F6] border border-black/5">
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-[#E40F14]/90 transition-colors duration-500 ease-out flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          <span className="text-white/80 text-[9px] uppercase tracking-[0.3em] mb-2 font-medium block">
                            View Details
                          </span>
                          <span className="text-white font-serif text-lg md:text-xl font-light inline-flex items-center gap-1.5">
                            {project.title}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="mt-4 flex justify-between items-start">
                      <div>
                        <span className="text-[#E40F14] text-[9px] uppercase tracking-[0.2em] font-semibold block">
                          {project.category}
                        </span>
                        <h2 className="text-black font-serif text-lg font-light mt-1 group-hover:text-[#E40F14] transition-colors duration-300">
                          {project.title}
                        </h2>
                        <span className="text-black/40 text-xs font-light block mt-0.5">
                          {project.location}
                        </span>
                      </div>
                      <span className="text-black/30 text-xs font-light pt-2">
                        {project.year}
                      </span>
                    </div>
                  </Link>
                </m.div>
              ))}
            </Ap>
          </m.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
