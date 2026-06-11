"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/projects";

export function GalleryGrid() {
  // Group projects dynamically by category for future proofing
  const commercialProjects = projects.filter((p) => p.category === "Commercial");
  const residentialProjects = projects.filter((p) => p.category === "Residential");

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.0, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative block w-full"
    >
      <Link href={`/portfolio/${project.slug}`} className="block w-full">
        <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-xl bg-black/5 mb-6">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            priority={index === 0}
          />
          {/* Subtle hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
        </div>
        <div className="flex flex-col items-start px-2">
          <h3 className="font-serif text-2xl md:text-3xl font-light text-black group-hover:text-[#E40F14] transition-colors duration-500">
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <section id="portfolio" className="bg-white py-24 md:py-36 border-b border-black/5">
      <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-24 md:mb-32 flex flex-col items-start">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] mb-6 font-medium"
          >
            Selected Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl font-light text-black leading-[1.1] tracking-tight"
          >
            A Selection of Spatial Narratives
          </motion.h2>
        </div>
 
        {/* Residential Projects Section */}
        {residentialProjects.length > 0 && (
          <div className="mb-24 md:mb-36">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-6 mb-12 md:mb-16"
            >
              <h3 className="text-black/60 font-sans text-sm md:text-base uppercase tracking-[0.3em] font-medium whitespace-nowrap">
                Residential Projects
              </h3>
              <div className="h-[1px] w-full bg-black/10" />
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {residentialProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Commercial Projects Section */}
        {commercialProjects.length > 0 && (
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-6 mb-12 md:mb-16"
            >
              <h3 className="text-black/60 font-sans text-sm md:text-base uppercase tracking-[0.3em] font-medium whitespace-nowrap">
                Commercial Projects
              </h3>
              <div className="h-[1px] w-full bg-black/10" />
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {commercialProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
