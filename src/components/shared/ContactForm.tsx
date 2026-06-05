import React from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <form className="w-full max-w-2xl space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {/* Name Input */}
        <div className="relative group">
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder=" "
            className="peer w-full bg-transparent border-b border-brand-charcoal/30 py-3 text-base text-brand-charcoal placeholder-transparent focus:outline-none focus:border-brand-gold transition-colors duration-500 ease-architectural"
          />
          <label
            htmlFor="name"
            className="absolute left-0 top-3 -translate-y-7 scale-75 origin-top-left text-xs uppercase tracking-widest text-brand-stone peer-placeholder-shown:text-base peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-brand-gold peer-focus:-translate-y-7 peer-focus:scale-75 transition-all duration-500 ease-architectural pointer-events-none"
          >
            Your Name
          </label>
        </div>

        {/* Email Input */}
        <div className="relative group">
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder=" "
            className="peer w-full bg-transparent border-b border-brand-charcoal/30 py-3 text-base text-brand-charcoal placeholder-transparent focus:outline-none focus:border-brand-gold transition-colors duration-500 ease-architectural"
          />
          <label
            htmlFor="email"
            className="absolute left-0 top-3 -translate-y-7 scale-75 origin-top-left text-xs uppercase tracking-widest text-brand-stone peer-placeholder-shown:text-base peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-brand-gold peer-focus:-translate-y-7 peer-focus:scale-75 transition-all duration-500 ease-architectural pointer-events-none"
          >
            Email Address
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {/* Phone Input */}
        <div className="relative group">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder=" "
            className="peer w-full bg-transparent border-b border-brand-charcoal/30 py-3 text-base text-brand-charcoal placeholder-transparent focus:outline-none focus:border-brand-gold transition-colors duration-500 ease-architectural"
          />
          <label
            htmlFor="phone"
            className="absolute left-0 top-3 -translate-y-7 scale-75 origin-top-left text-xs uppercase tracking-widest text-brand-stone peer-placeholder-shown:text-base peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-brand-gold peer-focus:-translate-y-7 peer-focus:scale-75 transition-all duration-500 ease-architectural pointer-events-none"
          >
            Phone Number
          </label>
        </div>

        {/* Project Type Dropdown */}
        <div className="relative group">
          <select
            id="projectType"
            name="projectType"
            required
            className="peer w-full bg-transparent border-b border-brand-charcoal/30 py-3 text-base text-brand-charcoal focus:outline-none focus:border-brand-gold transition-colors duration-500 ease-architectural appearance-none"
          >
            <option value="" disabled selected hidden></option>
            <option value="residential">Residential Architecture</option>
            <option value="commercial">Commercial Design</option>
            <option value="interior">Luxury Interior Design</option>
            <option value="landscape">Landscape Architecture</option>
            <option value="other">Other Inquiry</option>
          </select>
          {/* Custom Arrow */}
          <div className="absolute right-0 bottom-4 pointer-events-none text-brand-stone group-hover:text-brand-gold transition-colors duration-300">
            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <label
            htmlFor="projectType"
            className="absolute left-0 top-3 -translate-y-7 scale-75 origin-top-left text-xs uppercase tracking-widest text-brand-stone peer-placeholder-shown:text-base peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-brand-gold peer-focus:-translate-y-7 peer-focus:scale-75 transition-all duration-500 ease-architectural pointer-events-none"
          >
            Project Type
          </label>
        </div>
      </div>

      {/* Message Textarea */}
      <div className="relative group">
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder=" "
          className="peer w-full bg-transparent border-b border-brand-charcoal/30 py-3 text-base text-brand-charcoal placeholder-transparent focus:outline-none focus:border-brand-gold transition-colors duration-500 ease-architectural resize-none"
        ></textarea>
        <label
          htmlFor="message"
          className="absolute left-0 top-3 -translate-y-7 scale-75 origin-top-left text-xs uppercase tracking-widest text-brand-stone peer-placeholder-shown:text-base peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-brand-gold peer-focus:-translate-y-7 peer-focus:scale-75 transition-all duration-500 ease-architectural pointer-events-none"
        >
          Message / Brief Description
        </label>
      </div>

      <div className="pt-6">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Send Message
        </Button>
      </div>
    </form>
  );
}
