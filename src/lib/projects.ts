// Projects database for One Point Architecture Studio
// Using existing high-quality assets to showcase capabilities across categories

function imgResturant(filename: string): string {
  return `/assets/Changoz Restaurant/${encodeURIComponent(filename)}`;
}

function imgPrivateHouse(filename: string): string {
  return `/assets/private residence/${encodeURIComponent(filename)}`;
}

function imgTravelLines(filename: string): string {
  return `/assets/Travel Lines Office/${encodeURIComponent(filename)}`;
}

function imgGridHouse(filename: string): string {
  return `/assets/The grid house/${encodeURIComponent(filename)}`;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Commercial" | "Residential";
  projectType: string;
  location: string;
  year: string;
  scope: string;
  description: string;
  coverImage: string;
  heroImage: string;
  completedImages: ProjectImage[];
  constructionImages: ProjectImage[];
}

export const projects: Project[] = [
  // -----------------------------------------------------
  // RESIDENTIAL PROJECTS
  // -----------------------------------------------------
  {
    id: "private-residence",
    slug: "private-residence",
    title: "Private Residence",
    category: "Residential",
    projectType: "Residential Architecture",
    location: "Noida, NCR",
    year: "2024",
    scope: "Architecture & Interior Design",
    description:
      "A private urban sanctuary designed for a multi-generational family. Built around an internal double-height courtyard, the residence features micro-concrete flooring, large custom steel pivot doors, and a curated interplay of shadows and daylight. Natural cooling strategies and lush interior pockets make this home feel disconnected from the city's chaos.",
    coverImage: imgPrivateHouse("IMG_20210223_112429.jpg"),
    heroImage: imgPrivateHouse("IMG_20210223_112429.jpg"),
    completedImages: [
      { src: imgPrivateHouse("IMG_20210223_112429.jpg"), alt: "Private Residence - Exquisite modernist exterior elevation", caption: "Double-height facade utilizing localized brick screening and structural concrete arches." },
      { src: imgPrivateHouse("IMG_20201109_162511.jpg"), alt: "Private Residence - Entrance foyer detailing", caption: "A bright entry vestibule highlighting shadow gap detailing and structural arches." },
      { src: imgPrivateHouse("IMG_20201109_162649_1.jpg"), alt: "Private Residence - Living pavilion interior", caption: "Bright and airy living pavilion showcasing natural wood textures and premium seating." },
      { src: imgPrivateHouse("IMG_20201109_162908_1.jpg"), alt: "Private Residence - Double-height central pavilion", caption: "Main living hall exhibiting premium wood cladding and bespoke modern layout." },
      { src: imgPrivateHouse("IMG_20201109_163332.jpg"), alt: "Private Residence - Exterior facade view", caption: "Architectural detail of concrete arches and brickwork screen." },
      { src: imgPrivateHouse("IMG_20201109_163444.jpg"), alt: "Private Residence - Clerestory windows detail", caption: "Strategic architectural windows capturing high-angle light during mid-day sun." },
      { src: imgPrivateHouse("IMG_20201109_163452.jpg"), alt: "Private Residence - Shadow and light detailing", caption: "Dramatic light patterns casting shadows onto raw textured wall surfaces." },
      { src: imgPrivateHouse("IMG_20201109_165840_1.jpg"), alt: "Private Residence - Modern hallway", caption: "Corridor detailed with shadow gap and monolithic flooring." },
      { src: imgPrivateHouse("IMG_20210223_112445_1.jpg"), alt: "Private Residence - Terrace deck", caption: "Sunset terrace deck showcasing localized vegetation and relaxing seating area." },
    ],
    constructionImages: [],
  },
  {
    id: "the-grid-house",
    slug: "the-grid-house",
    title: "The Grid House",
    category: "Residential",
    projectType: "Residential Architecture",
    location: "Lucknow, Uttar Pradesh",
    year: "2023",
    scope: "Architecture & Interior Design",
    description: "A meticulously crafted residence characterized by its rigid structural grid and expansive use of natural light. The design vocabulary focuses on geometric precision, integrating indoor and outdoor living spaces seamlessly.",
    coverImage: imgGridHouse("grid_house_cover_new.jpg"), // Strong completed image
    heroImage: imgGridHouse("grid_house_cover_new.jpg"),
    completedImages: [
      { src: imgGridHouse("grid_house_cover_new.jpg"), alt: "The Grid House - Main Cover Perspective" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.59 PM (1).jpeg"), alt: "The Grid House - Main exterior perspective" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.50 PM (1).jpeg"), alt: "The Grid House - Detail View" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.50 PM.jpeg"), alt: "The Grid House - Exterior detail" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.51 PM (1).jpeg"), alt: "The Grid House - Perspective" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.51 PM.jpeg"), alt: "The Grid House - Facade view" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.52 PM (1).jpeg"), alt: "The Grid House - Structural elements" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.52 PM (2).jpeg"), alt: "The Grid House - Living space" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.52 PM.jpeg"), alt: "The Grid House - Internal courtyard" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.53 PM (1).jpeg"), alt: "The Grid House - Design details" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.53 PM.jpeg"), alt: "The Grid House - Corridors" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.54 PM (1).jpeg"), alt: "The Grid House - Lighting effects" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.54 PM (2).jpeg"), alt: "The Grid House - Shadows and light" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.54 PM.jpeg"), alt: "The Grid House - Exterior entry" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.55 PM (1).jpeg"), alt: "The Grid House - Elevation" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.55 PM (2).jpeg"), alt: "The Grid House - Pathway" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.55 PM.jpeg"), alt: "The Grid House - Landscaping" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.56 PM (1).jpeg"), alt: "The Grid House - Facade screening" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.56 PM.jpeg"), alt: "The Grid House - Roof slab" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.57 PM (1).jpeg"), alt: "The Grid House - Interior volumes" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.57 PM (2).jpeg"), alt: "The Grid House - Bedroom design" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.57 PM.jpeg"), alt: "The Grid House - Open plan layout" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.58 PM (1).jpeg"), alt: "The Grid House - Joinery details" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.58 PM.jpeg"), alt: "The Grid House - Stairs and circulation" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.59 PM (2).jpeg"), alt: "The Grid House - Master bedroom" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.59 PM.jpeg"), alt: "The Grid House - Dining area" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.55.00 PM (1).jpeg"), alt: "The Grid House - Balcony view" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.55.00 PM (2).jpeg"), alt: "The Grid House - Window detailing" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.55.00 PM.jpeg"), alt: "The Grid House - Structural grid" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.55.01 PM (1).jpeg"), alt: "The Grid House - Evening lighting" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.55.01 PM.jpeg"), alt: "The Grid House - Night perspective" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.55.02 PM (1).jpeg"), alt: "The Grid House - Details" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.55.02 PM (2).jpeg"), alt: "The Grid House - Finishing" },
      { src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.55.02 PM.jpeg"), alt: "The Grid House - Materiality" },
    ],
    constructionImages: [],
  },

  // -----------------------------------------------------
  // COMMERCIAL PROJECTS
  // -----------------------------------------------------
  {
    id: "changoz-restaurant",
    slug: "changoz-restaurant",
    title: "Changoz Restaurant",
    category: "Commercial",
    projectType: "Commercial Interior",
    location: "Lucknow, Uttar Pradesh",
    year: "2022",
    scope: "Architecture & Interior Design",
    description:
      "A premium fine-dining experience defined by spatial fluidity, warm wood accents, and custom ambient lighting. The project features a sequence of intimate booths, dynamic spatial zones, and rich material selections that elevated the dining atmosphere from ordinary to extraordinary. The design emphasizes clean horizontal lines, integrated lighting coves, and high-end artisanal finishes.",
    coverImage: imgResturant("changoz_cover.png"),
    heroImage: imgResturant("changoz_cover.png"),
    completedImages: [
      { src: imgResturant("changoz_cover.png"), alt: "Changoz Restaurant - Premium Cover View" },
      { src: imgResturant("new_hero_1.png"), alt: "Changoz Restaurant - Premium Interior View 1" },
      { src: imgResturant("new_hero_2.png"), alt: "Changoz Restaurant - Premium Interior View 2" },
      { src: imgResturant("new_hero_3.png"), alt: "Changoz Restaurant - Premium Interior View 3" },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.53.59.jpeg"), alt: "Changoz Restaurant - Main dining hall overview", caption: "Main dining hall overview showcasing custom timber ceiling fins and seating zoning." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.00.jpeg"), alt: "Changoz Restaurant - Table seating layout detail", caption: "Detailed view of the banquette seating and warm wood wall cladding." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.00 (1).jpeg"), alt: "Changoz Restaurant - Atmospheric spot lighting", caption: "Close-up of ambient brass pendant lamps casting soft warm light over tables." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.00 (2).jpeg"), alt: "Changoz Restaurant - Interiors perspective view", caption: "Spatial perspective detailing transition from public dining to private lounge." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03.jpeg"), alt: "Changoz Restaurant - Seating and lighting details", caption: "Perspective showcasing the integrated custom lighting and booth layouts." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (1).jpeg"), alt: "Changoz Restaurant - Lounge and corridor details", caption: "Refined details showing modern woodwork and ambient shadows." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (2).jpeg"), alt: "Changoz Restaurant - Architectural view", caption: "A wider view highlighting the ceiling design and layout transition." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (3).jpeg"), alt: "Changoz Restaurant - Detail view", caption: "Focus on materiality and premium finishes." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (5).jpeg"), alt: "Changoz Restaurant - Custom fixtures", caption: "Custom designed partition walls and architectural elements." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (6).jpeg"), alt: "Changoz Restaurant - Interior partition", caption: "Bespoke partition screen design separating dining sections." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (7).jpeg"), alt: "Changoz Restaurant - Dining ambience", caption: "Atmospheric evening lighting setting a luxury vibe." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (8).jpeg"), alt: "Changoz Restaurant - Spatial flow", caption: "View showcasing transition spaces and spatial flow." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (9).jpeg"), alt: "Changoz Restaurant - Furniture details", caption: "Close-up of premium fabric choice and woodwork." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (10).jpeg"), alt: "Changoz Restaurant - Lounge area", caption: "Comfortable lounge area highlighting texture and materials." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (11).jpeg"), alt: "Changoz Restaurant - Interior view", caption: "Overview of the restaurant showing structural elements." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (12).jpeg"), alt: "Changoz Restaurant - Lighting fixture", caption: "Detail of bespoke architectural light fitting." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (13).jpeg"), alt: "Changoz Restaurant - Dining zone", caption: "Intimate family dining zone with warm acoustics." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (14).jpeg"), alt: "Changoz Restaurant - Backlit panels", caption: "Custom brass backlight wall panels creating visual depth." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (15).jpeg"), alt: "Changoz Restaurant - Modern corner", caption: "Modern geometric corners illustrating precision design." },
      { src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (16).jpeg"), alt: "Changoz Restaurant - Overview perspective", caption: "Elegant perspective of the central dining layout." },
    ],
    constructionImages: [],
  },
  {
    id: "travel-lines-office",
    slug: "travel-lines-office",
    title: "Travel Lines Office",
    category: "Commercial",
    projectType: "Commercial Office Interior",
    location: "Lucknow, Uttar Pradesh",
    year: "2020",
    scope: "Architecture & Interior Design",
    description:
      "A dynamic commercial office interior designed for Travel Lines. The space prioritizes natural light, ergonomic workflows, and premium materials to create a highly efficient yet aesthetically inspiring work environment. Completed in 2020, this project exemplifies modern office design tailored for collaboration.",
    coverImage: imgTravelLines("image9d138cf8.jpg"),
    heroImage: imgTravelLines("image9d138cf8.jpg"),
    completedImages: [
      { src: imgTravelLines("image9d138cf8.jpg"), alt: "Travel Lines Office - Completed Work Area" },
      { src: imgTravelLines("imagea2bc6a9c.jpg"), alt: "Travel Lines Office - Meeting Room" },
      { src: imgTravelLines("imagee05e03a1.jpg"), alt: "Travel Lines Office - Perspective 1" },
      { src: imgTravelLines("imagee0b259cb.jpg"), alt: "Travel Lines Office - Perspective 2" },
      { src: imgTravelLines("imagee744ca83.jpg"), alt: "Travel Lines Office - Details" },
      { src: imgTravelLines("image_extra.jpg"), alt: "Travel Lines Office - Additional View" },
    ],
    constructionImages: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
}

export function getNextProject(currentSlug: string): Project {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === projects.length - 1) {
    return projects[0];
  }
  return projects[currentIndex + 1];
}
