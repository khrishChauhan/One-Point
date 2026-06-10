import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    studio: [
      { name: "About Us", href: "/#about" },
      { name: "Why Us", href: "/#why-us" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Contact", href: "/#contact" },
    ],
    contact: [
      { name: "Onepointarchitecturestudio@gmail.com", href: "mailto:Onepointarchitecturestudio@gmail.com" },
      { name: "+91 7042747493", href: "tel:+917042747493" },
      { name: "WhatsApp: +91 7042747493", href: "https://wa.me/917042747493" },
      { name: "Lucknow, India | Projects Across India", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#111111] text-white pt-24 md:pt-36 pb-12 overflow-hidden relative">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-24 md:mb-36">
          {/* Logo & Statement */}
          <div className="md:col-span-6 lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block group mb-2">
              <Image
                src="/assets/logo.png"
                alt="ONE POINT ARCHITECTURE STUDIO Logo"
                width={320}
                height={80}
                className="w-auto h-12 md:h-14 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <p className="font-sans font-light text-neutral-400 text-sm md:text-base max-w-sm leading-relaxed">
              Where Ideas Take Shape. Lucknow-based firm specializing in Architecture, Interiors, and Urban Design.
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-6 lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8">
            {/* Studio Links */}
            <div className="space-y-8">
              <span className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-medium block">
                Studio
              </span>
              <ul className="space-y-4">
                {links.studio.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-sans font-light text-neutral-300 hover:text-white text-base transition-colors duration-400 block w-fit group relative"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-400 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <span className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-medium block">
                Connect
              </span>
              <ul className="space-y-4">
                {links.contact.map((link) => (
                  <li key={link.name}>
                    {link.href !== "#" ? (
                      <a
                        href={link.href}
                        className="font-sans font-light text-neutral-300 hover:text-white text-base transition-colors duration-400 block w-fit group relative"
                      >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-400 group-hover:w-full" />
                      </a>
                    ) : (
                      <span className="font-sans font-light text-neutral-300 text-base block">
                        {link.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-center md:text-left">
          <div className="flex flex-col gap-2 md:gap-1 items-center md:items-start">
            <p className="font-sans font-light text-neutral-500 text-xs tracking-wider">
              &copy; {currentYear} ONE POINT ARCHITECTURE STUDIO. ALL RIGHTS RESERVED.
            </p>
            <p className="font-sans font-light text-neutral-500 text-xs tracking-wider">
              Developed by <a href="https://clickaarambh.com/" target="_blank" rel="noopener noreferrer" className="text-[#E40F14] hover:text-white transition-colors duration-300 font-medium">Click Aarambh Ventures</a>
            </p>
          </div>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="font-sans font-light text-neutral-500 hover:text-white text-xs tracking-wider transition-colors duration-300 uppercase"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="font-sans font-light text-neutral-500 hover:text-white text-xs tracking-wider transition-colors duration-300 uppercase"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
