// Business facts. Core contact/address details were supplied directly by the
// client via their design handoff; anything still marked PLACEHOLDER should
// be confirmed before launch.

export const business = {
  name: "JMK Constructions",
  shortName: "JMK",
  tagline: "Building dreams, one renovation at a time",
  phone: "(587) 930-5746",
  phoneHref: "tel:+15879305746",
  // Same number as `phone` — confirm this is the right line for WhatsApp Business
  // before launch if JMK uses a separate number for messaging.
  whatsapp: "15879305746",
  email: "info@jmkcanada.com", // PLACEHOLDER — confirm exact inbox with JMK
  city: "Edmonton, Alberta",
  addressLine1: "12251 Fort Rd NW",
  addressLine2: "Edmonton, AB T5B 4H2",
  serviceArea:
    "Edmonton, St. Albert, Sherwood Park, Spruce Grove & the surrounding Alberta capital region",
  facebook: "https://www.facebook.com/JMKCustomRenovationsNHomes",
  tiktok: "https://www.tiktok.com/@jmkcustomrenovation",
  founded: "2024",
  owner: "Krishna Mahajan",
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export type Service = {
  slug: string;
  num: string;
  name: string;
  short: string;
  description: string;
  bullets: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "full-home-renovations",
    num: "01",
    name: "Full Home Renovations",
    short: "Concept to completion — we manage every trade, permit and finish so the whole house lands as one cohesive vision.",
    description:
      "From single-room refreshes to whole-house transformations, we manage every trade and every detail — design, permits, materials and finishing — so your home comes together as one cohesive vision.",
    bullets: ["Whole-home concept to completion", "Every trade & permit coordinated", "One point of contact throughout"],
    image:
      "https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/GettyImages-601799249-5890dfb55f9b5874ee7dcd57.jpg/:/rs=w:1200,cg:true",
  },
  {
    slug: "commercial-renovations",
    num: "02",
    name: "Commercial Renovations",
    short: "Modernize, reconfigure or expand your business space with minimal downtime and maximum functionality.",
    description:
      "Retail, office and commercial spaces modernized or reconfigured on a schedule built around your business, so you stay open — or reopen fast.",
    bullets: ["Retail, office & commercial spaces", "Phased work to minimize downtime", "Code-compliant reconfigurations"],
    image:
      "https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/commercial-renovation-considerations-1024x536.png/:/rs=w:1200,cg:true",
  },
  {
    slug: "basement-development",
    num: "03",
    name: "Basement Development",
    short: "Legal suites, media rooms and gyms — framed, insulated, wired and finished to Alberta building code.",
    description:
      "Legal basement suites, media rooms, home gyms or an extra bedroom — framing, insulation, egress, electrical and finishing carried out to Alberta building code.",
    bullets: ["Legal suites & egress windows", "Framing, insulation & finishing", "Built to Alberta building code"],
    image:
      "https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/an-edmonton-basement-that-has-bee-renovated-s.webp/:/rs=w:1200,cg:true",
  },
  {
    slug: "structural-additions",
    num: "04",
    name: "Structural Additions",
    short: "Garages, extensions and new structures engineered to read as though they were always part of the house.",
    description:
      "Detached garages, home additions and new structures engineered and built to blend seamlessly with your existing home — sized for Alberta vehicles and Alberta winters.",
    bullets: ["Garages & home extensions", "Engineered new structures", "Seamlessly matched to your home"],
    image:
      "https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/Houseextension-GettyImages-139527979-5ca7dc3ed.jpg/:/rs=w:1200,cg:true",
  },
  {
    slug: "outdoor-construction",
    num: "05",
    name: "Outdoor Construction",
    short: "Decks, fences, gates and railings built to take Edmonton's freeze-thaw cycle season after season.",
    description:
      "Custom decks, privacy fencing, gates and railings designed to your style and built to handle Edmonton's freeze-thaw cycles year after year.",
    bullets: ["Custom decks & railings", "Privacy fencing & gates", "Built for Alberta freeze-thaw"],
    image:
      "https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/TimberTech-Deck-Building-Resource-Center-Cont.webp/:/rs=w:1200,cg:true",
  },
  {
    slug: "plumbing",
    num: "06",
    name: "Plumbing",
    short: "Rough-in and finish plumbing handled in-house and scheduled in step with the rest of your renovation.",
    description:
      "Rough-in and finish plumbing handled in-house — not subcontracted out — and scheduled in step with the rest of your renovation timeline.",
    bullets: ["Rough-in & finish plumbing", "In-house, not subcontracted", "Scheduled with your renovation"],
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=80",
  },
];

export const process = [
  {
    step: "01",
    title: "Free Consultation",
    text: "Tell us about your space and your goals. We walk the site, talk budget and scope, and answer every question — no pressure, no obligation.",
  },
  {
    step: "02",
    title: "Design & Quote",
    text: "We turn the conversation into a clear plan: materials, timeline and a transparent, itemized quote before a single tool comes out.",
  },
  {
    step: "03",
    title: "Build",
    text: "Our crew handles the trades, the permits and the daily details, with regular updates so you're never left guessing what's next.",
  },
  {
    step: "04",
    title: "Walkthrough & Warranty",
    text: "We walk the finished space with you, address every last detail, and stand behind the work after we've packed up the tools.",
  },
];

export const whyUs = [
  { title: "Licensed & Insured", text: "Fully licensed and insured for residential and commercial work across Alberta." },
  { title: "Free, No-Pressure Quotes", text: "A clear, itemized estimate before any commitment — every time." },
  { title: "Owner-Led Craftsmanship", text: "Hands-on oversight from consultation through final walkthrough." },
  { title: "Edmonton Local", text: "Based in Edmonton and built around the realities of Alberta builds and winters." },
  { title: "Transparent Pricing", text: "No surprise change orders — you know the scope and the cost upfront." },
  { title: "One Team, Every Trade", text: "Carpentry, concrete, electrical and plumbing coordinated under one roof." },
];

export type GalleryCategory = "Renovations" | "Basements" | "Additions" | "Outdoor";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  tag: string;
  title: string;
  image: string;
};

export const galleryCategories: GalleryCategory[] = ["Renovations", "Basements", "Additions", "Outdoor"];

export const gallery: GalleryItem[] = [
  {
    id: "p1",
    category: "Renovations",
    tag: "Redwater, AB",
    title: "Project at 4609 48 St",
    image:
      "https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/GettyImages-601799249-5890dfb55f9b5874ee7dcd57.jpg/:/rs=w:1200,cg:true",
  },
  {
    id: "p2",
    category: "Basements",
    tag: "Edmonton",
    title: "Project at 11633 97 St NW",
    image:
      "https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/an-edmonton-basement-that-has-bee-renovated-s.webp/:/rs=w:1200,cg:true",
  },
  {
    id: "p3",
    category: "Additions",
    tag: "Edmonton",
    title: "Project at 12034 37 St NW",
    image:
      "https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/Houseextension-GettyImages-139527979-5ca7dc3ed.jpg/:/rs=w:1200,cg:true",
  },
  {
    id: "p4",
    category: "Outdoor",
    tag: "Chappelle SW",
    title: "28 — 1140 Chappelle Blvd SW",
    image:
      "https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/TimberTech-Deck-Building-Resource-Center-Cont.webp/:/rs=w:1200,cg:true",
  },
  {
    id: "p5",
    category: "Basements",
    tag: "Edmonton",
    title: "Another Beautiful Basement Suite",
    image:
      "https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/commercial-renovation-considerations-1024x536.png/:/rs=w:1200,cg:true",
  },
  {
    id: "p6",
    category: "Additions",
    tag: "Edmonton",
    title: "Interior Rebuild & Refinish",
    image:
      "https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/MW-IL000_diypro_ZH_20200722173758.jpg/:/rs=w:1200,cg:true",
  },
];

export const beforeAfter = {
  before:
    "https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/MW-IL000_diypro_ZH_20200722173758.jpg/:/rs=w:1200,cg:true",
  after:
    "https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/an-edmonton-basement-that-has-bee-renovated-s.webp/:/rs=w:1200,cg:true",
};

export const stats = [
  { value: 6, suffix: "", label: "Core Services Offered" },
  { value: 100, suffix: "%", label: "Licensed & Insured Work" },
  { value: 1, suffix: "", label: "Point of Contact, Start to Finish" },
  { value: 0, suffix: "", label: "Cost for Your First Quote" },
];
