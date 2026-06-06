"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <form className="w-full space-y-10" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
        {/* Name */}
        <div className="relative group">
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            placeholder=" "
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            className="peer w-full bg-transparent border-b border-black/20 py-3 text-sm text-black placeholder-transparent focus:outline-none transition-colors duration-300"
            style={{ borderBottomColor: focused === "name" ? "#E40F14" : undefined }}
          />
          <label
            htmlFor="contact-name"
            className="absolute left-0 top-3 -translate-y-6 scale-75 origin-top-left text-[10px] uppercase tracking-widest text-black/40 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#E40F14] transition-all duration-300 pointer-events-none"
          >
            Full Name
          </label>
        </div>

        {/* Email */}
        <div className="relative group">
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            placeholder=" "
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            className="peer w-full bg-transparent border-b border-black/20 py-3 text-sm text-black placeholder-transparent focus:outline-none transition-colors duration-300"
            style={{ borderBottomColor: focused === "email" ? "#E40F14" : undefined }}
          />
          <label
            htmlFor="contact-email"
            className="absolute left-0 top-3 -translate-y-6 scale-75 origin-top-left text-[10px] uppercase tracking-widest text-black/40 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#E40F14] transition-all duration-300 pointer-events-none"
          >
            Email Address
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
        {/* Phone */}
        <div className="relative group">
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            placeholder=" "
            onFocus={() => setFocused("phone")}
            onBlur={() => setFocused(null)}
            className="peer w-full bg-transparent border-b border-black/20 py-3 text-sm text-black placeholder-transparent focus:outline-none transition-colors duration-300"
            style={{ borderBottomColor: focused === "phone" ? "#E40F14" : undefined }}
          />
          <label
            htmlFor="contact-phone"
            className="absolute left-0 top-3 -translate-y-6 scale-75 origin-top-left text-[10px] uppercase tracking-widest text-black/40 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#E40F14] transition-all duration-300 pointer-events-none"
          >
            Phone Number
          </label>
        </div>

        {/* Project Type */}
        <div className="relative group">
          <select
            id="contact-project-type"
            name="projectType"
            required
            onFocus={() => setFocused("type")}
            onBlur={() => setFocused(null)}
            className="peer w-full bg-transparent border-b border-black/20 py-3 text-sm text-black focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
            style={{ borderBottomColor: focused === "type" ? "#E40F14" : undefined }}
          >
            <option value="" disabled selected hidden />
            <option value="residential">Luxury Residential</option>
            <option value="hospitality">Hospitality & Restaurant</option>
            <option value="commercial">Commercial Design</option>
            <option value="interior">Interior Design Only</option>
            <option value="other">Other Inquiry</option>
          </select>
          <div className="absolute right-0 bottom-4 pointer-events-none text-black/30">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <label
            htmlFor="contact-project-type"
            className="absolute left-0 -top-5 text-[10px] uppercase tracking-widest text-black/40 pointer-events-none"
          >
            Project Type
          </label>
        </div>
      </div>

      {/* Message */}
      <div className="relative group">
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          placeholder=" "
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          className="peer w-full bg-transparent border-b border-black/20 py-3 text-sm text-black placeholder-transparent focus:outline-none transition-colors duration-300 resize-none"
          style={{ borderBottomColor: focused === "message" ? "#E40F14" : undefined }}
        />
        <label
          htmlFor="contact-message"
          className="absolute left-0 top-3 -translate-y-6 scale-75 origin-top-left text-[10px] uppercase tracking-widest text-black/40 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#E40F14] transition-all duration-300 pointer-events-none"
        >
          Project Idea
        </label>
      </div>

      {/* Submit */}
      <div className="pt-4">
        <motion.button
          type="submit"
          whileHover={{ backgroundColor: "#c00d11" }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto px-12 py-4 bg-[#E40F14] rounded-xl text-white text-xs uppercase tracking-[0.25em] font-medium transition-colors duration-300 focus:outline-none"
        >
          Send Inquiry
        </motion.button>
      </div>
    </form>
  );
}
