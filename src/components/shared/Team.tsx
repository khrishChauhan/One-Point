"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Team() {
  const team = [
    {
      name: "Kushagra",
      qualifications: "B.Arch., M.Arch. (Urban Design)",
      designation: "Founder · Principal Architect",
      shortBio: "Design-led practice focused on functionality, detail, and lasting impact.",
      fullBio: "With over 16 years of experience across architecture, urban design, and project execution, Kushagra combines a rigorous design approach with deep technical expertise. Previously an Architectural Designer at Arcop Associates, his focus is on crafting enduring spaces that integrate seamless project management.",
      image: "/assets/kushagra.jpeg"
    },
    {
      name: "Neha Vaish",
      qualifications: "B.Arch.",
      designation: "Studio Director",
      shortBio: "Design-led practice focused on functionality, detail, and lasting impact.",
      fullBio: "Neha leads the studio's Interior Design division, specializing in refined residential and corporate spaces. Her approach emphasizes functionality, user experience, and meticulous detailing, contributing significantly to the studio's contemporary design language.",
      image: "/assets/neha.jpeg"
    }
  ];

  return (
    <section id="team" className="bg-[#FAF9F6] py-24 md:py-36">
      <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 md:mb-32 max-w-3xl"
        >
          <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-medium mb-6">
            Meet the Founders
          </p>
          <h2 className="font-serif font-light text-3xl md:text-4xl text-black leading-tight">
            The visionaries behind One Point Architecture Studio.
          </h2>
        </motion.div>
 
        {/* Editorial Portraits */}
        <div className="space-y-20 md:space-y-32">
          {team.map((member, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={member.name} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
              >
                {/* Large Portrait */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-[55%] aspect-square md:aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-200"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover object-top grayscale hover:grayscale-0 hover:scale-[1.03] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </motion.div>
 
                {/* Typography Focus */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-[45%] space-y-8"
                >
                  <div>
                    <h3 className="font-serif font-light text-5xl md:text-7xl text-black tracking-tight mb-2">
                      {member.name}
                    </h3>
                    <p className="text-black/50 text-sm mb-4">
                      {member.qualifications}
                    </p>
                    <p className="text-[#E40F14] text-xs uppercase tracking-[0.25em] font-medium">
                      {member.designation}
                    </p>
                  </div>
 
                  <div className="space-y-4">
                    <p className="text-black/60 font-light text-lg md:text-xl leading-relaxed max-w-lg">
                      {member.shortBio}
                    </p>
                    <details className="group cursor-pointer">
                      <summary className="list-none text-xs uppercase tracking-widest text-black/40 hover:text-[#E40F14] transition-colors duration-300 flex items-center gap-2">
                        <span>Read Full Biography</span>
                        <svg className="w-3 h-3 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="pt-4 text-black/50 font-light text-base leading-relaxed max-w-lg animate-in fade-in slide-in-from-top-2 duration-500">
                        {member.fullBio}
                      </div>
                    </details>
                  </div>
                  
                  <div className="pt-8 border-t border-black/10 w-24" />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
