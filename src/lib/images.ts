// Central image registry for One Point Architecture Studio
// All images are in /public/assets/
import { projects } from "./projects";

function imgResturant(filename: string): string {
  return `/assets/Changoz resturatant/${encodeURIComponent(filename)}`;
}

function imgPrivateHouse(filename: string): string {
  return `/assets/private residence/${encodeURIComponent(filename)}`;
}

export interface ProjectImage {
  src: string;
  alt: string;
  category: "Residential" | "Hospitality" | "Final Interiors" | "Concept / Development" | "Site / Structure";
  title: string;
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
export const allImages: ProjectImage[] = projects.flatMap((project) =>
  project.galleryImages.map((img) => ({
    src: img.src,
    alt: img.alt,
    category: project.category === "Residential" ? ("Residential" as const) : ("Hospitality" as const),
    title: img.caption,
  }))
);

// Fallbacks for layout imports
export const finalImages = allImages;
export const constructionImages = allImages;
export const conceptImages = allImages;
