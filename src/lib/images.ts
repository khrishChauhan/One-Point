// Central image registry for One Point Architecture Studio
import { projects } from "./projects";

function imgResturant(filename: string): string {
  return `/assets/Changoz Restaurant/${encodeURIComponent(filename)}`;
}

function imgPrivateHouse(filename: string): string {
  return `/assets/private residence/${encodeURIComponent(filename)}`;
}

export interface ProjectImage {
  src: string;
  alt: string;
  category: "Completed Project" | "Construction Journey" | "Residential" | "Commercial";
  title?: string;
}

// Curated top-tier landscape images for hero rotation (used on Homepage Hero)
export const heroImages: string[] = [
  imgPrivateHouse("IMG_20210223_112429.jpg"),
  imgResturant("WhatsApp Image 2026-05-26 at 12.53.59.jpeg"),
  imgPrivateHouse("IMG_20201109_162908_1.jpg"),
  imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (16).jpeg"),
  imgPrivateHouse("IMG_20201109_163444.jpg"),
];

// All available images structured dynamically from the projects database
export const allImages: ProjectImage[] = projects.flatMap((project) => [
  ...project.completedImages.map((img) => ({
    src: img.src,
    alt: img.alt,
    category: "Completed Project" as const,
    title: img.caption,
  })),
  ...project.constructionImages.map((img) => ({
    src: img.src,
    alt: img.alt,
    category: "Construction Journey" as const,
    title: img.caption,
  })),
]);

export const finalImages = allImages.filter(img => img.category === "Completed Project");
export const constructionImages = allImages.filter(img => img.category === "Construction Journey");
export const conceptImages: ProjectImage[] = [];
