"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/lib/projects";
import { motion as m, AnimatePresence as Ap } from "framer-motion";

export default function PortfolioPage() {
  const commercialProjects = projects.filter((p) => p.category === "Commercial");
  const residentialProjects = projects.filter((p) => p.category === "Residential");

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.0, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative block w-full"
    >
      <Link href={`/portfolio/${project.slug}`} className="block w-full">
        <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-xl bg-black/5 mb-6 border border-black/5">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
        </div>
        <div className="flex flex-col items-start px-2">
          <h3 className="font-serif text-2xl md:text-3xl font-light text-black group-hover:text-[#E40F14] transition-colors duration-500">
            {project.title}
          </h3>
        </div>
      </Link>
    </m.div>
  );

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
              Every detail is a decision. Explore our complete archive of space, form, and texture across all completed commercial and residential projects.
            </p>
          </div>

          <Ap mode="popLayout">
            {/* Commercial Projects */}
            {commercialProjects.length > 0 && (
              <div className="mb-24 md:mb-36">
                <m.div
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
                </m.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                  {commercialProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              </div>
            )}

            {/* Residential Projects */}
            {residentialProjects.length > 0 && (
              <div className="mb-16">
                <m.div
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
                </m.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                  {residentialProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              </div>
            )}
          </Ap>
        </div>
      </main>

      <Footer />
    </>
  );
}
