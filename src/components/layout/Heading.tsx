import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
  variant?: "hero" | "title" | "section" | "card" | "meta";
}

export function Heading({
  children,
  className,
  as: Component,
  variant = "section",
  ...props
}: HeadingProps) {
  // Determine default HTML tag based on variant if not specified
  const DefaultComponent = Component 
    ? Component 
    : variant === "hero" 
      ? "h1" 
      : variant === "title" 
        ? "h1" 
        : variant === "section" 
          ? "h2" 
          : variant === "card" 
            ? "h3" 
            : "span";

  return (
    <DefaultComponent
      className={cn(
        "text-brand-charcoal dark:text-brand-alabaster transition-colors duration-300",
        {
          // Display.Hero: 80-96px desktop, 64px tablet, 40-48px mobile. Leading 0.9, Tracking -0.03em
          "font-serif font-medium text-4xl sm:text-[64px] lg:text-[80px] xl:text-[96px] tracking-[-0.03em] leading-[0.9]": 
            variant === "hero",
          
          // Display.Title: 72px / 40px. Leading 1.0, Tracking -0.02em
          "font-serif font-medium text-3xl sm:text-[40px] lg:text-[72px] tracking-[-0.02em] leading-[1.0]": 
            variant === "title",
          
          // Heading.Section: 48px / 32px. Leading 1.1
          "font-serif font-normal text-2xl sm:text-[32px] lg:text-[48px] tracking-normal leading-[1.1]": 
            variant === "section",
          
          // Heading.Card: 28px / 22px. Leading 1.2
          "font-serif font-normal text-lg sm:text-[22px] lg:text-[28px] tracking-normal leading-[1.2]": 
            variant === "card",
            
          // Label.Meta: Inter (sans-serif), 12px / 11px. Tracking 0.25em, Leading 1.4
          "font-sans font-medium text-[11px] sm:text-xs tracking-[0.25em] uppercase leading-[1.4] text-brand-gold": 
            variant === "meta",
        },
        className
      )}
      {...props}
    >
      {children}
    </DefaultComponent>
  );
}
