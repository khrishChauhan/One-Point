"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getProjectBySlug, getNextProject } from "@/lib/projects";
import { LightboxModal } from "@/components/shared/LightboxModal";
import { motion, AnimatePresence } from "framer-motion";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);

  // Map project's gallery images to format expected by LightboxModal
  const mappedImages = project.galleryImages.map((img) => ({
    src: img.src,
    alt: img.alt,
    category: "Final Interiors" as const,
    title: img.caption,
  }));

  const handleOpen = (idx: number) => setLightboxIndex(idx);
  const handleClose = () => setLightboxIndex(null);

  return (
    <>
      <Header />

      <main className="bg-white min-h-screen">
        {/* Cinematic Fullscreen Hero */}
        <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden bg-black flex items-end">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            sizes="100vw"
            priority
            className="object-cover scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-10" />

          <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 md:px-16 pb-20 md:pb-24 max-w-screen-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <span className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-light mb-4 block">
                {project.category}
              </span>
              <h1 className="font-serif text-white font-light text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
                {project.title}
              </h1>
              <p className="text-white/60 font-light text-sm md:text-base tracking-widest uppercase">
                {project.location} &bull; {project.year}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Project Metadata Table Strip */}
        <section className="border-b border-black/5 py-10 bg-[#FAF9F6]">
          <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <span className="text-black/30 text-[9px] uppercase tracking-[0.25em] block">
                  Location
                </span>
                <span className="text-black font-light text-sm md:text-base mt-1 block">
                  {project.location}
                </span>
              </div>
              <div>
                <span className="text-black/30 text-[9px] uppercase tracking-[0.25em] block">
                  Year Completed
                </span>
                <span className="text-black font-light text-sm md:text-base mt-1 block">
                  {project.year}
                </span>
              </div>
              <div>
                <span className="text-black/30 text-[9px] uppercase tracking-[0.25em] block">
                  Scope of Work
                </span>
                <span className="text-black font-light text-sm md:text-base mt-1 block">
                  {project.scope}
                </span>
              </div>
              <div>
                <span className="text-black/30 text-[9px] uppercase tracking-[0.25em] block">
                  Project Type
                </span>
                <span className="text-[#E40F14] font-medium text-sm md:text-base mt-1 block">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Narrative Section */}
        <section className="py-24 md:py-32">
          <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              <div className="lg:col-span-5">
                <span className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-light mb-4 block">
                  The Design Story
                </span>
                <h2 className="font-serif font-light text-3xl md:text-4xl text-black leading-tight">
                  Shaping spaces that foster ritual & connection
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-black/70 font-light text-base md:text-lg leading-relaxed space-y-6">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Masonry */}
        <section className="py-16 md:py-24 bg-[#FAF9F6] border-y border-black/5">
          <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
            <div className="mb-12">
              <span className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-light mb-3 block">
                Visual Showcase
              </span>
              <h3 className="font-serif font-light text-2xl md:text-3xl text-black">
                Capturing the Details
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.galleryImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-white border border-black/5"
                  onClick={() => handleOpen(idx)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-[#E40F14]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <span className="text-white text-xs uppercase tracking-[0.2em] font-semibold border border-white/30 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-xs">
                      Zoom Image
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Project Footer Navigation */}
        <section className="py-24 md:py-36 bg-black text-white text-center relative overflow-hidden">
          {/* Subtle next project background image with opacity */}
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src={nextProject.heroImage}
              alt="Next Project Background"
              fill
              className="object-cover blur-xs"
            />
          </div>
          <div className="absolute inset-0 bg-black/75 z-10" />

          <div className="relative z-20 px-6 max-w-3xl mx-auto space-y-6">
            <span className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-light block">
              Up Next
            </span>
            <Link href={`/portfolio/${nextProject.slug}`} className="group inline-block">
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight group-hover:text-[#E40F14] transition-colors duration-500">
                {nextProject.title}
              </h2>
            </Link>
            <div className="pt-8">
              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="inline-block bg-white text-black px-10 py-4 rounded-2xl text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E40F14] hover:text-white transition-all duration-500"
              >
                View Project
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <LightboxModal
            images={mappedImages}
            initialIndex={lightboxIndex}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </>
  );
}
