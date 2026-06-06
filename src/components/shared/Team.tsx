"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Team() {
  const team = [
    {
      name: "Kushagra",
      designation: "Founder · Principal Architect",
      bio: "With over 16 years of experience across architecture, urban design, and project execution, Kushagra combines a rigorous design approach with deep technical expertise. Previously an Architectural Designer at Arcop Associates, his focus is on crafting enduring spaces that integrate seamless project management.",
      image: "/assets/kushagra.jpeg"
    },
    {
      name: "Neha Vaish",
      designation: "Studio Director",
      bio: "Neha leads the studio's Interior Design division, specializing in refined residential and corporate spaces. Her approach emphasizes functionality, user experience, and meticulous detailing, contributing significantly to the studio's contemporary design language.",
      image: "/assets/neha.jpeg"
    }
  ];

  return (
    <section id="team" className="bg-[#FAF9F6] py-24 md:py-36">
      <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
        
        {/* Full-width Cinematic Image Intro */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[50vh] md:h-[60vh] relative rounded-2xl overflow-hidden mb-24 md:mb-32 shadow-xl"
        >
          <Image
            src="/assets/private residence/IMG_20201109_163452.jpg"
            alt="Studio Design Philosophy"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-4">
             <h2 className="font-serif font-light text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] max-w-4xl">
               Visionary Leadership. <br/> <span className="italic text-white/80">Precise Execution.</span>
             </h2>
          </div>
        </motion.div>
 
        {/* Editorial Portraits */}
        <div className="space-y-32">
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
                  className="w-full lg:w-[55%] aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-200"
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
                    <h3 className="font-serif font-light text-5xl md:text-7xl text-black tracking-tight mb-4">
                      {member.name}
                    </h3>
                    <p className="text-[#E40F14] text-xs uppercase tracking-[0.25em] font-medium">
                      {member.designation}
                    </p>
                  </div>
 
                  <p className="text-black/60 font-light text-lg md:text-xl leading-relaxed max-w-lg">
                    {member.bio}
                  </p>
                  
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
