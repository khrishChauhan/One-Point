"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { cn } from "@/lib/utils";

interface HeaderProps {
  transparentInitially?: boolean;
}

export function Header({ transparentInitially = true }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  // Determine if header should be transparent
  const isTransparent = transparentInitially && !isScrolled && pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full h-20 z-50 transition-all duration-500 ease-architectural flex items-center",
        isScrolled
          ? "bg-brand-alabaster/95 backdrop-blur-md border-b border-brand-gold/20 shadow-sm"
          : isTransparent
          ? "bg-transparent border-b border-transparent"
          : "bg-brand-alabaster border-b border-brand-gold/10"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group z-50">
          <Image 
            src="/assets/logo.png" 
            alt="One Point Architecture Studio Logo" 
            width={180} 
            height={40} 
            className={cn(
              "transition-all duration-500 w-auto h-8 sm:h-10",
              isTransparent ? "brightness-0 invert" : "brightness-100"
            )}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-sans text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-500 relative py-2 block",
                  isTransparent
                    ? isActive
                      ? "text-brand-gold"
                      : "text-white/80 hover:text-white"
                    : isActive
                    ? "text-brand-red font-semibold"
                    : "text-brand-charcoal/80 hover:text-brand-gold",
                  // Underline hover effect
                  "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-500 after:ease-architectural"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col items-end justify-center size-8 space-y-1.5 focus:outline-none z-50"
          aria-label="Toggle Navigation Menu"
        >
          <span
            className={cn(
              "h-[1px] w-6 transition-all duration-500 ease-architectural transform origin-right",
              isTransparent ? "bg-white" : "bg-brand-charcoal",
              isOpen && "rotate-[45deg] -translate-x-[2px] bg-brand-charcoal"
            )}
          />
          <span
            className={cn(
              "h-[1px] w-4 transition-all duration-500 ease-architectural",
              isTransparent ? "bg-white" : "bg-brand-charcoal",
              isOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-[1px] w-5 transition-all duration-500 ease-architectural transform origin-right",
              isTransparent ? "bg-white" : "bg-brand-charcoal",
              isOpen && "-rotate-[45deg] -translate-x-[2px] bg-brand-charcoal"
            )}
          />
        </button>
      </Container>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed inset-0 bg-brand-alabaster flex flex-col justify-center items-center z-40 transition-all duration-700 ease-architectural",
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-10"
        )}
      >
        <nav className="flex flex-col items-center space-y-8 text-center">
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "font-sans text-xl uppercase tracking-[0.2em] font-normal transition-all duration-500",
                  isActive ? "text-brand-red font-semibold scale-105" : "text-brand-charcoal hover:text-brand-gold",
                  "transition-transform transform",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
