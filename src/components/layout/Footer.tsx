import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { Heading } from "./Heading";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    studio: [
      { name: "About Us", href: "/#about" },
      { name: "Our Services", href: "/#services" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Contact", href: "/#contact" },
    ],
    contact: [
      { name: "info@onepointstudio.in", href: "mailto:info@onepointstudio.in" },
      { name: "+91 XXXXXXXXXX", href: "tel:+91XXXXXXXXXX" },
      { name: "Lucknow, Uttar Pradesh, India", href: "#" },
    ],
  };

  return (
    <footer className="bg-brand-charcoal text-white pt-20 pb-12 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Statement */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/assets/logo.png" 
                alt="ONE POINT ARCHITECTURE STUDIO Logo" 
                width={180} 
                height={40} 
                className="w-auto h-8 sm:h-10 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <p className="font-sans font-light text-brand-stone text-sm max-w-sm leading-relaxed">
              Where Ideas Take Shape. Lucknow-based firm specializing in Architecture, Interiors, and Urban Design.
            </p>
          </div>

          {/* Studio Links */}
          <div className="space-y-6">
            <Heading variant="meta" className="text-[10px] tracking-[0.2em] font-semibold text-[#E40F14]">
              Studio
            </Heading>
            <ul className="space-y-3">
              {links.studio.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans font-light text-brand-stone hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <Heading variant="meta" className="text-[10px] tracking-[0.2em] font-semibold text-[#E40F14]">
              Contact
            </Heading>
            <ul className="space-y-3">
              {links.contact.map((link) => (
                <li key={link.name}>
                  {link.href !== "#" ? (
                    <a
                      href={link.href}
                      className="font-sans font-light text-brand-stone hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <span className="font-sans font-light text-brand-stone text-sm">
                      {link.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright block */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans font-light text-brand-stone text-xs">
            &copy; {currentYear} One Point Architecture Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="font-sans font-light text-brand-stone hover:text-white text-xs transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-sans font-light text-brand-stone hover:text-white text-xs transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
