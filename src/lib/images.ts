// Central image registry for the restaurant project
// All images are in /public/assets/resturant/

const BASE = "/assets/resturant";

function img(filename: string): string {
  return `${BASE}/${encodeURIComponent(filename)}`;
}

export interface ProjectImage {
  src: string;
  alt: string;
  category: "Final Interiors" | "Concept / Development" | "Site / Structure";
  title: string;
}

export const heroImages: string[] = [
  img("WhatsApp Image 2026-05-26 at 12.53.59.jpeg"),
  img("WhatsApp Image 2026-05-26 at 12.54.00.jpeg"),
  img("WhatsApp Image 2026-05-26 at 12.54.03 (16).jpeg"),
  img("WhatsApp Image 2026-05-26 at 12.54.03 (12).jpeg"),
  img("WhatsApp Image 2026-05-26 at 12.54.03 (10).jpeg"),
];

export const allImages: ProjectImage[] = [
  // Final Interiors — high-quality completed shots
  {
    src: img("WhatsApp Image 2026-05-26 at 12.53.59.jpeg"),
    alt: "Restaurant interior — completed view",
    category: "Final Interiors",
    title: "Dining Hall Overview",
  },
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.00.jpeg"),
    alt: "Restaurant interior — seating area",
    category: "Final Interiors",
    title: "Seating Arrangement",
  },
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.00 (1).jpeg"),
    alt: "Restaurant interior — detail shot",
    category: "Final Interiors",
    title: "Ambient Lighting",
  },
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.00 (2).jpeg"),
    alt: "Restaurant interior — wide angle",
    category: "Final Interiors",
    title: "Spatial Composition",
  },
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.03 (16).jpeg"),
    alt: "Restaurant interior — finished space",
    category: "Final Interiors",
    title: "Finished Interior",
  },
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.03 (15).jpeg"),
    alt: "Restaurant interior — focal point",
    category: "Final Interiors",
    title: "Design Focal Point",
  },
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.03 (12).jpeg"),
    alt: "Restaurant — material expression",
    category: "Final Interiors",
    title: "Material Expression",
  },
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.03 (10).jpeg"),
    alt: "Restaurant interior — perspective",
    category: "Final Interiors",
    title: "Architectural Perspective",
  },
  // Concept / Development — design progress
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.03.jpeg"),
    alt: "Restaurant — development phase",
    category: "Concept / Development",
    title: "Development Overview",
  },
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.03 (7).jpeg"),
    alt: "Restaurant — concept realization",
    category: "Concept / Development",
    title: "Concept Realization",
  },
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.03 (11).jpeg"),
    alt: "Restaurant — spatial planning",
    category: "Concept / Development",
    title: "Spatial Planning",
  },
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.03 (13).jpeg"),
    alt: "Restaurant — design development",
    category: "Concept / Development",
    title: "Design Development",
  },
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.03 (14).jpeg"),
    alt: "Restaurant — detailing phase",
    category: "Concept / Development",
    title: "Detailing Phase",
  },
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.03 (9).jpeg"),
    alt: "Restaurant — mid construction",
    category: "Concept / Development",
    title: "Progress View",
  },
  // Site / Structure — construction and raw process
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.03 (1).jpeg"),
    alt: "Restaurant — site condition",
    category: "Site / Structure",
    title: "Site Condition",
  },
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.03 (2).jpeg"),
    alt: "Restaurant — structural work",
    category: "Site / Structure",
    title: "Structural Work",
  },
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.03 (3).jpeg"),
    alt: "Restaurant — construction phase",
    category: "Site / Structure",
    title: "Construction Phase",
  },
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.03 (5).jpeg"),
    alt: "Restaurant — framework",
    category: "Site / Structure",
    title: "Structural Framework",
  },
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.03 (6).jpeg"),
    alt: "Restaurant — build progress",
    category: "Site / Structure",
    title: "Build Progress",
  },
  {
    src: img("WhatsApp Image 2026-05-26 at 12.54.03 (8).jpeg"),
    alt: "Restaurant — site execution",
    category: "Site / Structure",
    title: "Site Execution",
  },
];

export const finalImages = allImages.filter((i) => i.category === "Final Interiors");
export const constructionImages = allImages.filter((i) => i.category === "Site / Structure");
export const conceptImages = allImages.filter((i) => i.category === "Concept / Development");
