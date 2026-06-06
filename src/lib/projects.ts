// Projects database for One Point Architecture Studio
// Using existing high-quality assets to showcase capabilities across categories

function imgResturant(filename: string): string {
  return `/assets/resturant/${encodeURIComponent(filename)}`;
}

function imgPrivateHouse(filename: string): string {
  return `/assets/private house/${encodeURIComponent(filename)}`;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category:
    | "Hotels"
    | "Resorts"
    | "Restaurants"
    | "Residences"
    | "Institutions"
    | "Commercial"
    | "Landscape"
    | "Urban Design";
  location: string;
  year: string;
  scope: string;
  description: string;
  heroImage: string;
  galleryImages: {
    src: string;
    alt: string;
    caption: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "luxe-dine",
    slug: "luxe-dine-restaurant",
    title: "Luxe Dine Restaurant & Lounge",
    category: "Restaurants",
    location: "Lucknow, Uttar Pradesh",
    year: "2025",
    scope: "Architecture & Interior Design",
    description:
      "A premium fine-dining experience defined by spatial fluidity, warm wood accents, and custom ambient lighting. The project features a sequence of intimate booths, dynamic spatial zones, and rich material selections that elevated the dining atmosphere from ordinary to extraordinary. The design emphasizes clean horizontal lines, integrated lighting coves, and high-end artisanal finishes.",
    heroImage: imgResturant("WhatsApp Image 2026-05-26 at 12.53.59.jpeg"),
    galleryImages: [
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.53.59.jpeg"),
        alt: "Main dining hall overview",
        caption: "Main dining hall overview showcasing custom timber ceiling fins and seating zoning.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.00.jpeg"),
        alt: "Table seating layout detail",
        caption: "Detailed view of the banquette seating and warm wood wall cladding.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.00 (1).jpeg"),
        alt: "Atmospheric spot lighting",
        caption: "Close-up of ambient brass pendant lamps casting soft warm light over tables.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.00 (2).jpeg"),
        alt: "Interiors perspective view",
        caption: "Spatial perspective detailing transition from public dining to private lounge.",
      },
    ],
  },
  {
    id: "alila-retreat",
    slug: "alila-retreat-resort",
    title: "Alila Retreat & Wellness Resort",
    category: "Resorts",
    location: "Dehradun, Uttarakhand",
    year: "2024",
    scope: "Architecture, Interior & Landscape Design",
    description:
      "Nestled in the serene foothills, this wellness retreat features local timber structure and stone masonry that blends into the mountain silhouette. The design adopts a minimalist approach to luxury, creating calm, distraction-free environments focused on natural ventilation, passive solar gain, and panoramic views of the valley.",
    heroImage: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (16).jpeg"),
    galleryImages: [
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (16).jpeg"),
        alt: "Resort wellness lobby lounge",
        caption: "Lobby lounge showcasing floor-to-ceiling glazing and custom timber framework.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (15).jpeg"),
        alt: "Minimalist spa relaxation room",
        caption: "Relaxation chamber detail showcasing monolithic clay-plaster walls.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (12).jpeg"),
        alt: "Luxury wooden suite suite interior",
        caption: "Guest suite interior detailed with local cedarwood framing and hand-woven textiles.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (10).jpeg"),
        alt: "Panoramic resort view deck",
        caption: "Outdoor viewing deck seamlessly extending the indoor lounge out to the valley.",
      },
    ],
  },
  {
    id: "serene-oasis",
    slug: "serene-oasis-villa",
    title: "Serene Oasis Villa",
    category: "Residences",
    location: "Noida, NCR",
    year: "2024",
    scope: "Architecture & Interior Design",
    description:
      "A private urban sanctuary designed for a multi-generational family. Built around an internal double-height courtyard, the residence features micro-concrete flooring, large custom steel pivot doors, and a curated interplay of shadows and daylight. Natural cooling strategies and lush interior pockets make this home feel disconnected from the city's chaos.",
    heroImage: imgPrivateHouse("IMG_20210223_112429.jpg"),
    galleryImages: [
      {
        src: imgPrivateHouse("IMG_20210223_112429.jpg"),
        alt: "Exquisite modernist exterior elevation",
        caption: "Double-height facade utilizing localized brick screening and structural concrete arches.",
      },
      {
        src: imgPrivateHouse("IMG_20201109_162511.jpg"),
        alt: "Entrance foyer detailing",
        caption: "A bright entry vestibule highlighting shadow gap detailing and structural arches.",
      },
      {
        src: imgPrivateHouse("IMG_20201109_162908_1.jpg"),
        alt: "Double-height central pavilion",
        caption: "Main living hall exhibiting premium wood cladding and bespoke modern layout.",
      },
      {
        src: imgPrivateHouse("IMG_20201109_163444.jpg"),
        alt: "Clerestory windows detail",
        caption: "Strategic architectural windows capturing high-angle light during mid-day sun.",
      },
    ],
  },
  {
    id: "vanguard-hq",
    slug: "vanguard-commercial-hq",
    title: "Vanguard Commercial Headquarters",
    category: "Commercial",
    location: "Bangalore, Karnataka",
    year: "2025",
    scope: "Interior & Workspace Architecture",
    description:
      "Redefining corporate workspace as a collaborative hub, the Vanguard HQ features flexible modular hot desks, biophilic partitions, and private focus pods. The layout maximizes daylight penetrations, while sound-dampening felt panels and custom lighting profiles ensure high productivity and employee well-being.",
    heroImage: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (14).jpeg"),
    galleryImages: [
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (14).jpeg"),
        alt: "Co-working community table",
        caption: "Main work cafe area showing warm ash wood tables and integrated charging slots.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (9).jpeg"),
        alt: "Executive meeting room",
        caption: "Formal board room setup with architectural acoustic plaster ceiling.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03.jpeg"),
        alt: "Workspace breakout area",
        caption: "Lounge zone featuring local stone wall details and custom task lighting.",
      },
    ],
  },
  {
    id: "urban-canopy",
    slug: "urban-canopy-pavilion",
    title: "Urban Canopy Public Plaza",
    category: "Urban Design",
    location: "Lucknow, Uttar Pradesh",
    year: "2023",
    scope: "Landscape & Urban Intervention",
    description:
      "A civic intervention designed to reclaim urban space for pedestrians. Centered around a lightweight steel pavilion canopy, the plaza includes bioswales for rainwater harvesting, native tree plantations, and modular step-seating. It serves as a social container that cools the local microclimate and fosters community interactions.",
    heroImage: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (5).jpeg"),
    galleryImages: [
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (5).jpeg"),
        alt: "Steel pavilion structure",
        caption: "Lightweight structural steel grid framing the public plaza walkway.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (6).jpeg"),
        alt: "Plaza pedestrian walkway",
        caption: "Finished paved walkway showing native shadow beds and bioswales integration.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (8).jpeg"),
        alt: "Plaza step seating detail",
        caption: "Exposed precast concrete steps serving as amphitheater seating for visitors.",
      },
    ],
  },
  {
    id: "radisson-boutique",
    slug: "radisson-boutique-hotel",
    title: "The Radisson Boutique Hotel",
    category: "Hotels",
    location: "Varanasi, Uttar Pradesh",
    year: "2025",
    scope: "Architecture & Interior Design",
    description:
      "A hospitality project that fuses traditional Varanasi motifs with modern architectural forms. The hotel boasts a double-height grand lobby, a rooftop infinity pool overlooking the Ganges landscape, and luxury suites styled with handcrafted local brass, marble, and custom woodwork that highlights regional craftsmanship.",
    heroImage: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (1).jpeg"),
    galleryImages: [
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (1).jpeg"),
        alt: "Boutique hotel lobby framing",
        caption: "Lobby entrance frame featuring structural stone pillars and warm cove lighting.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (2).jpeg"),
        alt: "Rooftop lounge construction",
        caption: "Structural framework of the rooftop terrace under development.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (3).jpeg"),
        alt: "Guest corridor progress",
        caption: "Progress view of guest corridors showing architectural shadow gap details.",
      },
    ],
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
