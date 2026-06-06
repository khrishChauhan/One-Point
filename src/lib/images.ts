// Central image registry for One Point Architecture Studio
// All images are in /public/assets/

function imgResturant(filename: string): string {
  return `/assets/resturant/${encodeURIComponent(filename)}`;
}

function imgPrivateHouse(filename: string): string {
  return `/assets/private house/${encodeURIComponent(filename)}`;
}

export interface ProjectImage {
  src: string;
  alt: string;
  category: "Residential" | "Hospitality" | "Final Interiors" | "Concept / Development" | "Site / Structure";
  title: string;
}

// Curated top-tier landscape images for hero rotation
export const heroImages: string[] = [
  imgPrivateHouse("IMG_20210223_112429.jpg"),
  imgResturant("WhatsApp Image 2026-05-26 at 12.53.59.jpeg"),
  imgPrivateHouse("IMG_20201109_162908_1.jpg"),
  imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (16).jpeg"),
  imgPrivateHouse("IMG_20201109_163444.jpg"),
];

// All available images structured for portfolio sections
export const allImages: ProjectImage[] = [
  // Private House (Residential)
  {
    src: imgPrivateHouse("IMG_20201109_162511.jpg"),
    alt: "Luxury Residence — Entrance Foyer",
    category: "Residential",
    title: "Entrance Foyer",
  },
  {
    src: imgPrivateHouse("IMG_20201109_162649_1.jpg"),
    alt: "Luxury Residence — Living Pavilion",
    category: "Residential",
    title: "Living Pavilion",
  },
  {
    src: imgPrivateHouse("IMG_20201109_162908_1.jpg"),
    alt: "Luxury Residence — Double-Height Courtyard",
    category: "Residential",
    title: "Double-Height Courtyard",
  },
  {
    src: imgPrivateHouse("IMG_20201109_163332.jpg"),
    alt: "Luxury Residence — Main Facade Detail",
    category: "Residential",
    title: "Main Facade Detail",
  },
  {
    src: imgPrivateHouse("IMG_20201109_163444.jpg"),
    alt: "Luxury Residence — Clerestory Windows",
    category: "Residential",
    title: "Clerestory Windows",
  },
  {
    src: imgPrivateHouse("IMG_20201109_163452.jpg"),
    alt: "Luxury Residence — Shadow play",
    category: "Residential",
    title: "Shadow Play",
  },
  {
    src: imgPrivateHouse("IMG_20201109_165840_1.jpg"),
    alt: "Luxury Residence — Skylight Corridor",
    category: "Residential",
    title: "Skylight Corridor",
  },
  {
    src: imgPrivateHouse("IMG_20210223_112429.jpg"),
    alt: "Luxury Residence — Exterior Elevation",
    category: "Residential",
    title: "Exterior Elevation",
  },
  {
    src: imgPrivateHouse("IMG_20210223_112445_1.jpg"),
    alt: "Luxury Residence — Sunset Terrace",
    category: "Residential",
    title: "Sunset Terrace",
  },

  // Restaurant (Hospitality)
  {
    src: imgResturant("WhatsApp Image 2026-05-26 at 12.53.59.jpeg"),
    alt: "Boutique Hospitality — Main dining lounge",
    category: "Hospitality",
    title: "Main Dining Lounge",
  },
  {
    src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.00.jpeg"),
    alt: "Boutique Hospitality — Wood finish banquette",
    category: "Hospitality",
    title: "Banquette Seating",
  },
  {
    src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.00 (1).jpeg"),
    alt: "Boutique Hospitality — Lighting detail",
    category: "Hospitality",
    title: "Acoustic Ceilings",
  },
  {
    src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.00 (2).jpeg"),
    alt: "Boutique Hospitality — VIP Dining room",
    category: "Hospitality",
    title: "VIP Dining Room",
  },
  {
    src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (16).jpeg"),
    alt: "Boutique Hospitality — Lounge reception",
    category: "Hospitality",
    title: "Lobby Lounge Reception",
  },
  {
    src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (15).jpeg"),
    alt: "Boutique Hospitality — Monolithic Spa Lounge",
    category: "Hospitality",
    title: "Monolithic Spa Lounge",
  },
  {
    src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (12).jpeg"),
    alt: "Boutique Hospitality — Wood structure bedroom suite",
    category: "Hospitality",
    title: "Bespoke Suite Interiors",
  },
  {
    src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (10).jpeg"),
    alt: "Boutique Hospitality — Scenic viewing deck",
    category: "Hospitality",
    title: "Sunset Viewing Deck",
  },
];

// Fallbacks for layout imports
export const finalImages = allImages;
export const constructionImages = allImages;
export const conceptImages = allImages;
