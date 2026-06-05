import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/layout/Heading";

interface ProjectCardProps {
  title: string;
  category: string;
  imageSrc: string;
  href: string;
  ratio?: "portrait" | "landscape";
  className?: string;
}

export function ProjectCard({
  title,
  category,
  imageSrc,
  href,
  ratio = "portrait",
  className,
}: ProjectCardProps) {
  return (
    <Link 
      href={href} 
      className={cn("group block overflow-hidden w-full", className)}
    >
      {/* Image Container */}
      <div 
        className={cn(
          "relative overflow-hidden w-full bg-brand-charcoal/5",
          ratio === "portrait" ? "aspect-[4/5]" : "aspect-[16/10]"
        )}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover filter grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-800 ease-architectural"
        />
      </div>

      {/* Meta Content */}
      <div className="pt-6 pb-2">
        <Heading variant="meta" className="block mb-2">
          {category}
        </Heading>
        <Heading 
          variant="card" 
          className="text-brand-red font-medium relative inline-block group-hover:text-brand-gold transition-colors duration-500 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-brand-gold group-hover:after:w-full after:transition-all after:duration-500 after:ease-architectural"
        >
          {title}
        </Heading>
      </div>
    </Link>
  );
}
