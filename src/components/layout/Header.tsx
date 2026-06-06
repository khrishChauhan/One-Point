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
        className="fixed top-4 md:top-6 left-1/2 w-[calc(100%-2rem)] max-w-screen-xl z-[60]"
      >
        <div className={cn(
          "backdrop-blur-2xl saturate-[1.5] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] px-5 md:px-8 py-3 md:py-4 flex items-center justify-between transition-all duration-500",
          isOpen ? "bg-white/0 border-transparent shadow-none rounded-full" : "bg-white/70 rounded-full"
        )}>
          
          {/* Logo */}
          <Link href="/" className="group z-50 flex-shrink-0 relative">
            <div className="relative h-[36px] md:h-[40px] transition-all duration-500">
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
            className="md:hidden relative flex flex-col items-center justify-center w-11 h-11 gap-1.5 focus:outline-none z-50 bg-black/5 hover:bg-black/10 rounded-full transition-colors duration-300"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            <span
              className={cn(
                "absolute h-[1.5px] w-5 rounded-full bg-neutral-900 transition-all duration-500",
                isOpen ? "rotate-45" : "-translate-y-1.5"
              )}
            />
            <span
              className={cn(
                "absolute h-[1.5px] w-5 rounded-full bg-neutral-900 transition-all duration-500",
                isOpen && "opacity-0 scale-x-0"
              )}
            />
            <span
              className={cn(
                "absolute h-[1.5px] w-5 rounded-full bg-neutral-900 transition-all duration-500",
                isOpen ? "-rotate-45" : "translate-y-1.5"
              )}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay - Premium Glassmorphism */}
      <div
        className={cn(
          "fixed inset-0 bg-white/98 backdrop-blur-3xl flex flex-col justify-center items-center z-50 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
          isOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-8 mt-12 w-full px-8">
          {navLinks.map((link, idx) => {
            const isActive = activeLinkName === link.name;
            return (
              <div key={link.name} className="overflow-hidden relative pb-2">
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "block font-serif text-4xl md:text-5xl uppercase tracking-[0.1em] font-light transition-all duration-500 relative z-10",
                    isActive ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-900",
                    isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  )}
                  style={{ transitionDelay: `${isOpen ? idx * 100 + 200 : 0}ms` }}
                >
                  {link.name}
                </Link>
                {/* Mobile Active Underline Animation */}
                <div 
                  className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#E40F14] transition-all duration-700",
                    isActive && isOpen ? "w-1/2 opacity-100" : "w-0 opacity-0"
                  )}
                  style={{ transitionDelay: `${isOpen ? idx * 100 + 400 : 0}ms` }}
                />
              </div>
            );
          })}
        </nav>

        <div 
          className={cn(
            "absolute bottom-12 text-center transition-all duration-700",
            isOpen ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-4"
          )}
        >
          <p className="text-neutral-400 text-[10px] uppercase tracking-[0.4em] mb-4">
            Where Ideas Take Shape
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://www.instagram.com/onepointarchitecturestudio?igsh=enIwZjBka3l0YTlu" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-[#E40F14] transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/neha-vaish-91763365?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-[#E40F14] transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
