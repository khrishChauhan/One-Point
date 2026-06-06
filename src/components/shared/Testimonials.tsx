"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "One Point Architecture Studio transformed our vision for Changoz Restaurant into a stunning spatial reality. Ar. Neha Vaish and her team brought a rare combination of structural rigor and delicate artistic sensitivity. The result is a dining space that feels both incredibly luxurious and warm.",
    author: "Vikram Malhotra",
    title: "Founder, Changoz Hospitality",
  },
  {
    quote:
      "Working with One Point to design our Private Residence was a masterclass in collaboration. They listened deeply to how we lived and structured the residence around our daily routines. The courtyard design brings an abundance of light and air, making our home feel like a private oasis.",
    author: "Rohan & Shalini Sen",
    title: "Owners, Private Residence",
  },
  {
    quote:
      "For our corporate offices, we wanted a workspace that broke away from typical sterile layouts. One Point delivered a highly dynamic environment that integrates flexible zones and warm materials. It has fundamentally improved our team's daily collaboration and energy.",
    author: "Ananya Roy",
    title: "Operations Director",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-white py-24 md:py-32 border-b border-black/5">
      <div className="px-6 md:px-16 max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-light mb-4">
            Testimonials
          </p>
          <h2 className="font-serif font-light text-3xl md:text-4xl text-black">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative min-h-[350px] md:min-h-[280px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-center max-w-4xl mx-auto space-y-8"
            >
              <blockquote className="font-serif text-lg md:text-2xl lg:text-3xl font-light text-black/80 leading-relaxed italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div>
                <cite className="not-italic text-sm font-semibold text-black block tracking-wider">
                  {testimonials[current].author}
                </cite>
                <span className="text-black/40 text-xs font-light tracking-wide block mt-1">
                  {testimonials[current].title}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-12 h-12 rounded-xl border border-black/10 flex items-center justify-center text-black/60 hover:text-white hover:bg-[#E40F14] hover:border-[#E40F14] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className="py-2"
              >
                <div
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    idx === current ? "w-6 bg-[#E40F14]" : "w-2 bg-black/10 hover:bg-black/30"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-12 h-12 rounded-xl border border-black/10 flex items-center justify-center text-black/60 hover:text-white hover:bg-[#E40F14] hover:border-[#E40F14] transition-all duration-300"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
