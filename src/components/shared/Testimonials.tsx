"use client";

import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="bg-white py-32 md:py-48 border-b border-black/5">
      <div className="px-6 md:px-16 max-w-screen-xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-medium mb-6">
            Client Feedback
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-black">
            What Our Clients Say
          </h2>
        </motion.div>
 
        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto relative"
        >
          {/* Large Quote Mark */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-[120px] leading-none font-serif text-black/5 select-none">
            &ldquo;
          </div>

          <div className="relative z-10 space-y-12">
            <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-black leading-tight">
              "Very nice, helpful & friendly."
            </blockquote>
            
            <div className="space-y-4">
              <div className="w-12 h-[1px] bg-[#E40F14] mx-auto mb-6" />
              
              <cite className="not-italic text-lg md:text-xl font-medium text-black block tracking-wide">
                — Ajay Chandani
              </cite>
              
              <span className="text-black/60 font-sans font-light text-sm md:text-base block uppercase tracking-widest mt-2">
                Home Interiors • Krishna Nagar, Lucknow
              </span>
              
              <p className="text-[#E40F14] font-sans font-light text-sm italic pt-4">
                "Got results with 100% efficiency."
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}



