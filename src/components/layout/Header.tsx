"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Scroll spy to determine active section
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 300) {
        setActiveHash("");
        return;
      }

      const sections = ["about", "why-us", "contact"];
      let current = "";

      // Check if we're near the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        setActiveHash("contact");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is above the middle of the viewport
          // and the bottom of the section is below the top of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      
      if (current) {
        setActiveHash(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);


  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Contact", href: "/#contact" },
  ];

  // Determine active link name for the underline animation
  const getActiveLinkName = () => {
    if (pathname === "/") {
      if (activeHash === "about") return "About";
      if (activeHash === "why-us") return "Why Us";
      if (activeHash === "contact") return "Contact";
      return "Home";
    }
    if (pathname.startsWith("/portfolio")) return "Portfolio";
    return "";
  };

  const activeLinkName = getActiveLinkName();

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only intercept hash links on the same page
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const hash = href.replace("/#", "");
      const element = document.getElementById(hash);
      if (element) {
        const offset = 100; // Account for floating header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -40, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="fixed top-4 md:top-6 left-1/2 w-[calc(100%-2rem)] max-w-screen-xl z-50"
      >
        <div className="bg-white/70 backdrop-blur-2xl saturate-[1.5] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-2xl px-5 md:px-8 py-3 md:py-4 flex items-center justify-between transition-all duration-500">
          
          {/* Logo */}
          <Link href="/" className="group z-50 flex-shrink-0 relative">
            <div className="relative h-[32px] md:h-[40px] transition-all duration-500">
              <Image
                src="/assets/logo.png"
                alt="ONE POINT ARCHITECTURE STUDIO"
                width={300}
                height={80}
                className="w-auto h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex items-center gap-2 lg:gap-4"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => {
              const isActive = activeLinkName === link.name;
              const isHovered = hoveredLink === link.name;
              
              return (
                <div 
                  key={link.name} 
                  className="relative px-3 py-2"
                  onMouseEnter={() => setHoveredLink(link.name)}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "font-sans text-sm uppercase tracking-[0.15em] font-medium transition-colors duration-300 relative z-10",
                      isActive ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-900"
                    )}
                  >
                    {link.name}
                  </Link>
                  
                  {/* Premium Animated Underline */}
                  {isActive && !hoveredLink && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#E40F14]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {isHovered && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#E40F14]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col items-end justify-center w-10 h-10 gap-1.5 focus:outline-none z-50"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            <span
              className={cn(
                "h-[1.5px] w-6 rounded-full bg-neutral-900 transition-all duration-500 origin-right",
                isOpen && "rotate-[-45deg] translate-y-[7px]"
              )}
            />
            <span
              className={cn(
                "h-[1.5px] w-4 rounded-full bg-neutral-900 transition-all duration-500",
                isOpen && "opacity-0 scale-x-0"
              )}
            />
            <span
              className={cn(
                "h-[1.5px] w-5 rounded-full bg-neutral-900 transition-all duration-500 origin-right",
                isOpen && "rotate-[45deg] -translate-y-[7px]"
              )}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay - Premium Glassmorphism */}
      <div
        className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-3xl flex flex-col justify-center items-center z-40 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
          isOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        {/* Logo inside mobile menu */}
        <Link href="/" className="absolute top-8 left-6" onClick={() => setIsOpen(false)}>
          <Image
            src="/assets/logo.png"
            alt="ONE POINT ARCHITECTURE STUDIO"
            width={280}
            height={70}
            className="w-auto h-[32px] object-contain opacity-90"
          />
        </Link>

        <nav className="flex flex-col items-center gap-8 mt-12 w-full px-8">
          {navLinks.map((link, idx) => {
            const isActive = activeLinkName === link.name;
            return (
              <div key={link.name} className="overflow-hidden">
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "block font-serif text-3xl md:text-4xl uppercase tracking-[0.15em] font-light transition-all duration-500",
                    isActive ? "text-[#E40F14]" : "text-neutral-800 hover:text-[#E40F14]",
                    isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  )}
                  style={{ transitionDelay: `${isOpen ? idx * 100 + 200 : 0}ms` }}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </nav>

        <div 
          className={cn(
            "absolute bottom-12 text-center transition-all duration-700 delay-700",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <p className="text-neutral-500 text-[10px] uppercase tracking-[0.4em]">
            Where Ideas Take Shape
          </p>
        </div>
      </div>
    </>
  );
}
