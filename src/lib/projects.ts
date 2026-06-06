// Projects database for One Point Architecture Studio
// Using existing high-quality assets to showcase capabilities across categories

function imgResturant(filename: string): string {
  return `/assets/Changoz resturatant/${encodeURIComponent(filename)}`;
}

function imgPrivateHouse(filename: string): string {
  return `/assets/private residence/${encodeURIComponent(filename)}`;
}

function imgDrawingRoom(filename: string): string {
  return `/assets/Drawing room/${encodeURIComponent(filename)}`;
}

function imgGridHouse(filename: string): string {
  return `/assets/The grid house/${encodeURIComponent(filename)}`;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Residential" | "Hospitality" | "Commercial" | "Institutional" | "Urban Design";
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
    id: "changoz-restaurant",
    slug: "changoz-restaurant",
    title: "Changoz Restaurant",
    category: "Hospitality",
    location: "Lucknow, Uttar Pradesh",
    year: "2025",
    scope: "Architecture & Interior Design",
    description:
      "A premium fine-dining experience defined by spatial fluidity, warm wood accents, and custom ambient lighting. The project features a sequence of intimate booths, dynamic spatial zones, and rich material selections that elevated the dining atmosphere from ordinary to extraordinary. The design emphasizes clean horizontal lines, integrated lighting coves, and high-end artisanal finishes.",
    heroImage: imgResturant("WhatsApp Image 2026-05-26 at 12.53.59.jpeg"),
    galleryImages: [
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.53.59.jpeg"),
        alt: "Changoz Restaurant - Main dining hall overview",
        caption: "Main dining hall overview showcasing custom timber ceiling fins and seating zoning.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.00.jpeg"),
        alt: "Changoz Restaurant - Table seating layout detail",
        caption: "Detailed view of the banquette seating and warm wood wall cladding.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.00 (1).jpeg"),
        alt: "Changoz Restaurant - Atmospheric spot lighting",
        caption: "Close-up of ambient brass pendant lamps casting soft warm light over tables.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.00 (2).jpeg"),
        alt: "Changoz Restaurant - Interiors perspective view",
        caption: "Spatial perspective detailing transition from public dining to private lounge.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03.jpeg"),
        alt: "Changoz Restaurant - Seating and lighting details",
        caption: "Perspective showcasing the integrated custom lighting and booth layouts.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (1).jpeg"),
        alt: "Changoz Restaurant - Lounge and corridor details",
        caption: "Refined details showing modern woodwork and ambient shadows.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (2).jpeg"),
        alt: "Changoz Restaurant - Architectural view",
        caption: "A wider view highlighting the ceiling design and layout transition.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (3).jpeg"),
        alt: "Changoz Restaurant - Detail view",
        caption: "Focus on materiality and premium finishes.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (5).jpeg"),
        alt: "Changoz Restaurant - Custom fixtures",
        caption: "Custom designed partition walls and architectural elements.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (6).jpeg"),
        alt: "Changoz Restaurant - Interior partition",
        caption: "Bespoke partition screen design separating dining sections.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (7).jpeg"),
        alt: "Changoz Restaurant - Dining ambience",
        caption: "Atmospheric evening lighting setting a luxury vibe.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (8).jpeg"),
        alt: "Changoz Restaurant - Spatial flow",
        caption: "View showcasing transition spaces and spatial flow.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (9).jpeg"),
        alt: "Changoz Restaurant - Furniture details",
        caption: "Close-up of premium fabric choice and woodwork.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (10).jpeg"),
        alt: "Changoz Restaurant - Lounge area",
        caption: "Comfortable lounge area highlighting texture and materials.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (11).jpeg"),
        alt: "Changoz Restaurant - Interior view",
        caption: "Overview of the restaurant showing structural elements.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (12).jpeg"),
        alt: "Changoz Restaurant - Lighting fixture",
        caption: "Detail of bespoke architectural light fitting.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (13).jpeg"),
        alt: "Changoz Restaurant - Dining zone",
        caption: "Intimate family dining zone with warm acoustics.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (14).jpeg"),
        alt: "Changoz Restaurant - Backlit panels",
        caption: "Custom brass backlight wall panels creating visual depth.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (15).jpeg"),
        alt: "Changoz Restaurant - Modern corner",
        caption: "Modern geometric corners illustrating precision design.",
      },
      {
        src: imgResturant("WhatsApp Image 2026-05-26 at 12.54.03 (16).jpeg"),
        alt: "Changoz Restaurant - Overview perspective",
        caption: "Elegant perspective of the central dining layout.",
      },
    ],
  },
  {
    id: "private-residence",
    slug: "private-residence",
    title: "Private Residence",
    category: "Residential",
    location: "Noida, NCR",
    year: "2024",
    scope: "Architecture & Interior Design",
    description:
      "A private urban sanctuary designed for a multi-generational family. Built around an internal double-height courtyard, the residence features micro-concrete flooring, large custom steel pivot doors, and a curated interplay of shadows and daylight. Natural cooling strategies and lush interior pockets make this home feel disconnected from the city's chaos.",
    heroImage: imgPrivateHouse("IMG_20210223_112429.jpg"),
    galleryImages: [
      {
        src: imgPrivateHouse("IMG_20210223_112429.jpg"),
        alt: "Private Residence - Exquisite modernist exterior elevation",
        caption: "Double-height facade utilizing localized brick screening and structural concrete arches.",
      },
      {
        src: imgPrivateHouse("IMG_20201109_162511.jpg"),
        alt: "Private Residence - Entrance foyer detailing",
        caption: "A bright entry vestibule highlighting shadow gap detailing and structural arches.",
      },
      {
        src: imgPrivateHouse("IMG_20201109_162649_1.jpg"),
        alt: "Private Residence - Living pavilion interior",
        caption: "Bright and airy living pavilion showcasing natural wood textures and premium seating.",
      },
      {
        src: imgPrivateHouse("IMG_20201109_162908_1.jpg"),
        alt: "Private Residence - Double-height central pavilion",
        caption: "Main living hall exhibiting premium wood cladding and bespoke modern layout.",
      },
      {
        src: imgPrivateHouse("IMG_20201109_163332.jpg"),
        alt: "Private Residence - Exterior facade view",
        caption: "Architectural detail of concrete arches and brickwork screen.",
      },
      {
        src: imgPrivateHouse("IMG_20201109_163444.jpg"),
        alt: "Private Residence - Clerestory windows detail",
        caption: "Strategic architectural windows capturing high-angle light during mid-day sun.",
      },
      {
        src: imgPrivateHouse("IMG_20201109_163452.jpg"),
        alt: "Private Residence - Shadow and light detailing",
        caption: "Dramatic light patterns casting shadows onto raw textured wall surfaces.",
      },
      {
        src: imgPrivateHouse("IMG_20201109_165840_1.jpg"),
        alt: "Private Residence - Modern hallway",
        caption: "Corridor detailed with shadow gap and monolithic flooring.",
      },
      {
        src: imgPrivateHouse("IMG_20210223_112445_1.jpg"),
        alt: "Private Residence - Terrace deck",
        caption: "Sunset terrace deck showcasing localized vegetation and relaxing seating area.",
      },
    ],
  },
  {
    id: "drawing-room",
    slug: "drawing-room",
    title: "Drawing Room",
    category: "Residential",
    location: "Lucknow, Uttar Pradesh",
    year: "2025",
    scope: "Interior Design",
    description:
      "A premium formal drawing room featuring refined materials, sophisticated spatial layouts, and bespoke lighting fixtures. Designed to host guests in comfort while presenting a striking architectural statement, this interior combines soft textures with hard geometric accents to create a timeless, inviting ambience.",
    heroImage: imgDrawingRoom("WhatsApp Image 2026-06-06 at 5.55.24 PM.jpeg"),
    galleryImages: [
      {
        src: imgDrawingRoom("WhatsApp Image 2026-06-06 at 5.55.24 PM.jpeg"),
        alt: "Drawing Room Design - Main Lounge Area",
        caption: "Main lounge layout highlighting bespoke seating and geometric wall paneling.",
      },
      {
        src: imgDrawingRoom("WhatsApp Image 2026-06-06 at 5.55.24 PM (1).jpeg"),
        alt: "Drawing Room Design - Accent detailing",
        caption: "Close-up of premium fabric textures and modern partition screens.",
      },
      {
        src: imgDrawingRoom("WhatsApp Image 2026-06-06 at 5.55.24 PM (2).jpeg"),
        alt: "Drawing Room Design - Corner perspective",
        caption: "Bespoke corner table and layered ambient lighting profiles.",
      },
      {
        src: imgDrawingRoom("WhatsApp Image 2026-06-06 at 5.55.25 PM.jpeg"),
        alt: "Drawing Room Design - Wall styling",
        caption: "Elegant shelving detailing integrated into custom wall panels.",
      },
      {
        src: imgDrawingRoom("WhatsApp Image 2026-06-06 at 5.55.25 PM (1).jpeg"),
        alt: "Drawing Room Design - Ceiling features",
        caption: "Bespoke lighting fixtures casting a warm glow across the room.",
      },
      {
        src: imgDrawingRoom("WhatsApp Image 2026-06-06 at 5.55.26 PM.jpeg"),
        alt: "Drawing Room Design - Sofa detailing",
        caption: "Comfort-first seating arrangements tailored for hosting conversations.",
      },
      {
        src: imgDrawingRoom("WhatsApp Image 2026-06-06 at 5.55.26 PM (1).jpeg"),
        alt: "Drawing Room Design - Material close-up",
        caption: "Interplay of natural wood and custom metallic details.",
      },
      {
        src: imgDrawingRoom("WhatsApp Image 2026-06-06 at 5.55.26 PM (2).jpeg"),
        alt: "Drawing Room Design - Window details",
        caption: "Strategic window dressings allowing optimal soft daylight dispersion.",
      },
      {
        src: imgDrawingRoom("WhatsApp Image 2026-06-06 at 5.55.27 PM.jpeg"),
        alt: "Drawing Room Design - Entrance view",
        caption: "Transition view from the entrance foyer into the formal drawing room.",
      },
      {
        src: imgDrawingRoom("WhatsApp Image 2026-06-06 at 5.55.27 PM (1).jpeg"),
        alt: "Drawing Room Design - Lighting profiles",
        caption: "Integrated warm LED strips detailing spatial geometry.",
      },
      {
        src: imgDrawingRoom("WhatsApp Image 2026-06-06 at 5.55.28 PM.jpeg"),
        alt: "Drawing Room Design - Textures",
        caption: "Polished floors reflecting elegant lighting layers.",
      },
      {
        src: imgDrawingRoom("WhatsApp Image 2026-06-06 at 5.55.28 PM (1).jpeg"),
        alt: "Drawing Room Design - Seating view",
        caption: "Bespoke armchairs blending luxury with ergonomic form.",
      },
      {
        src: imgDrawingRoom("WhatsApp Image 2026-06-06 at 5.55.28 PM (2).jpeg"),
        alt: "Drawing Room Design - Accessory detail",
        caption: "Curated styling details elevating the overall premium vibe.",
      },
      {
        src: imgDrawingRoom("WhatsApp Image 2026-06-06 at 5.55.29 PM.jpeg"),
        alt: "Drawing Room Design - Full panoramic perspective",
        caption: "Overview of the drawing room showcasing absolute design cohesion.",
      },
    ],
  },
  {
    id: "the-grid-house",
    slug: "the-grid-house",
    title: "The Grid House",
    category: "Residential",
    location: "Lucknow, Uttar Pradesh",
    year: "2025",
    scope: "Architecture & Interior Design",
    description:
      "A modern residence defined by rigorous structural lines and visual transparency. Organized around a strong geometric grid, the design plays with deep vistas, shaded courtyards, and premium natural materials. The interiors follow the structural logic of the grid, creating a seamless connection between inside and out while ensuring complete functional efficiency.",
    heroImage: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.50 PM.jpeg"),
    galleryImages: [
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.50 PM.jpeg"),
        alt: "The Grid House - Front Elevation",
        caption: "Front elevation highlighting the rigorous structural grid and large openings.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.51 PM.jpeg"),
        alt: "The Grid House - Living Lounge",
        caption: "Main living room reflecting pure geometric alignment.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.52 PM.jpeg"),
        alt: "The Grid House - Entry foyer",
        caption: "Entry foyer leading into the grid-aligned circulation pathways.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.52 PM (2).jpeg"),
        alt: "The Grid House - Staircase design",
        caption: "Bespoke sculptural staircase matching the modernist geometric lines.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.53 PM (1).jpeg"),
        alt: "The Grid House - Double height ceiling",
        caption: "Double-height central living space capturing dynamic lighting patterns.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.54 PM (1).jpeg"),
        alt: "The Grid House - Exterior detail",
        caption: "Architectural close-up highlighting materials and clean joinery details.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.55 PM.jpeg"),
        alt: "The Grid House - Shading screen",
        caption: "Custom metal louvers filtering mid-day sun to create soft interiors.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.55 PM (2).jpeg"),
        alt: "The Grid House - Dining room overview",
        caption: "Open-plan dining zone connecting to the landscaped backyard.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.56 PM.jpeg"),
        alt: "The Grid House - Kitchen workspace",
        caption: "Minimalist modular kitchen design focusing on ergonomic flow.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.56 PM (1).jpeg"),
        alt: "The Grid House - Master bedroom",
        caption: "Master bedroom suite with integrated dressing area and warm flooring.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.57 PM.jpeg"),
        alt: "The Grid House - Bathroom interior",
        caption: "Luxury master bath utilizing premium stone and built-in vanity.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.57 PM (1).jpeg"),
        alt: "The Grid House - Secondary bedroom",
        caption: "Secondary bedroom showcasing smart space-saving custom joinery.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.57 PM (2).jpeg"),
        alt: "The Grid House - Lobby design",
        caption: "First-floor lounge area overlooking the double-height space below.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.58 PM.jpeg"),
        alt: "The Grid House - Terrace landscaping",
        caption: "Upper deck garden terrace highlighting integrated planting boxes.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.58 PM (1).jpeg"),
        alt: "The Grid House - Facade illumination",
        caption: "Evening facade view emphasizing the structural column arrangement.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.59 PM.jpeg"),
        alt: "The Grid House - Study room",
        caption: "A quiet reading nook featuring custom shelves and soft task lighting.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.59 PM (1).jpeg"),
        alt: "The Grid House - Kids room layout",
        caption: "Vibrant kids room focusing on flexibility and playfulness.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.54.59 PM (2).jpeg"),
        alt: "The Grid House - Guest bedroom design",
        caption: "Warm and inviting guest room featuring textured wall finishes.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.55.00 PM.jpeg"),
        alt: "The Grid House - Courtyard garden",
        caption: "Internal courtyard pocket allowing cross ventilation.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.55.00 PM (1).jpeg"),
        alt: "The Grid House - Stairwell skylight",
        caption: "Strategic skylight details flooding the central core with light.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.55.00 PM (2).jpeg"),
        alt: "The Grid House - Material finishes",
        caption: "Tactile material details combining slate, brick, and teakwood.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.55.01 PM.jpeg"),
        alt: "The Grid House - Lounge view",
        caption: "Perspective from the mezzanine looking towards the entry layout.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.55.01 PM (1).jpeg"),
        alt: "The Grid House - Balcony deck",
        caption: "Private bedroom balcony detailed with steel railings.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.55.02 PM.jpeg"),
        alt: "The Grid House - Corridor shadow play",
        caption: "Visual lines created by natural light filtering through slats.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.55.02 PM (1).jpeg"),
        alt: "The Grid House - Main gate detail",
        caption: "Bespoke metal and timber boundary wall detailing.",
      },
      {
        src: imgGridHouse("WhatsApp Image 2026-06-06 at 5.55.02 PM (2).jpeg"),
        alt: "The Grid House - Side setback design",
        caption: "Lush landscape strip along the side path of the house.",
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
