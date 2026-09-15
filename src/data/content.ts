// Verified business facts (sourced from public listings — BBB, Facebook, search
// results — since jmkcanada.com itself could not be fetched directly).
// Anything marked PLACEHOLDER should be confirmed/replaced with exact copy
// from JMK before this site goes live.

export const business = {
  name: "JMK Custom Renovations & Homes",
  shortName: "JMK",
  tagline: "Building Dreams, One Renovation at a Time",
  phone: "(587) 930-5746",
  phoneHref: "tel:+15879305746",
  email: "info@jmkcanada.com", // PLACEHOLDER — confirm exact inbox with JMK
  city: "Edmonton, Alberta",
  serviceArea:
    "Edmonton, St. Albert, Sherwood Park, Spruce Grove & the surrounding Alberta capital region",
  facebook: "https://www.facebook.com/JMKCustomRenovationsNHomes/",
  linktree: "https://linktr.ee/jmkcustomrenovations",
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
  name: string;
  short: string;
  description: string;
  bullets: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "full-home-renovations",
    name: "Full Home Renovations",
    short: "Complete home makeovers, reimagined top to bottom.",
    description:
      "From single-room refreshes to whole-house transformations, we manage every trade and every detail — design, permits, materials and finishing — so your home comes together as one cohesive vision.",
    bullets: ["Whole-home makeovers", "Design & material selection", "Single point of contact from start to finish"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "kitchen-renovations",
    name: "Kitchen Renovations",
    short: "The heart of the home, rebuilt around how you live.",
    description:
      "Custom cabinetry, countertops, layouts and lighting built for the way your family actually cooks, hosts and gathers — from a fresh facelift to a full gut renovation.",
    bullets: ["Custom cabinetry & islands", "Countertops & backsplash", "Layout & lighting redesign"],
    image:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "bathroom-renovations",
    name: "Bathroom Renovations",
    short: "Spa-level finishes, built to last Alberta winters.",
    description:
      "Tiling, custom showers, vanities and in-floor heat — we handle the plumbing and electrical alongside the finish work so nothing gets lost between trades.",
    bullets: ["Custom tile & showers", "Vanities & fixtures", "Plumbing & electrical included"],
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "basement-development",
    name: "Basement Development",
    short: "Turn unused square footage into livable space.",
    description:
      "Legal basement suites, media rooms, home gyms or an extra bedroom — framing, insulation, egress, electrical and finishing carried out to Alberta building code.",
    bullets: ["Legal suites & egress windows", "Framing, insulation & drywall", "Built to Alberta building code"],
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "garages-extensions",
    name: "Garages & Home Extensions",
    short: "New structures and additions, built precisely.",
    description:
      "Detached garages, home additions and new structures engineered and built to blend seamlessly with your existing home — sized for Alberta vehicles and Alberta winters.",
    bullets: ["Detached & attached garages", "Home additions & extensions", "Engineered for Alberta climate"],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "decks-fencing",
    name: "Decks & Fencing",
    short: "Outdoor living, built for how you actually use your yard.",
    description:
      "Custom decks, privacy fencing and gates designed to your style and built to handle freeze-thaw cycles season after season.",
    bullets: ["Custom deck design & build", "Privacy & perimeter fencing", "Gates & railings"],
    image:
      "https://images.unsplash.com/photo-1621873493135-05c2a67f6c53?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "concrete",
    name: "Concrete: Driveways & Sidewalks",
    short: "Flatwork that holds up to freeze-thaw, done right the first time.",
    description:
      "Driveways, sidewalks and pads poured and finished with proper base prep and control joints, built for Edmonton's freeze-thaw cycles.",
    bullets: ["Driveways & walkways", "Pads & flatwork", "Proper base prep for AB winters"],
    image:
      "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "electrical-plumbing",
    name: "Electrical & Plumbing",
    short: "Licensed trade work, coordinated with your renovation.",
    description:
      "Rewiring, panel and fixture upgrades, rough-in and finish plumbing — handled in-house and in step with your renovation timeline instead of juggling separate contractors.",
    bullets: ["Rough-in & finish plumbing", "Wiring & fixture upgrades", "Coordinated with your reno schedule"],
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

export type GalleryCategory = "Kitchens" | "Bathrooms" | "Basements" | "Exteriors & Decks" | "Garages";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  title: string;
  image: string;
};

export const galleryCategories: GalleryCategory[] = [
  "Kitchens",
  "Bathrooms",
  "Basements",
  "Exteriors & Decks",
  "Garages",
];

export const gallery: GalleryItem[] = [
  { id: "g1", category: "Kitchens", title: "Modern Two-Tone Kitchen", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80" },
  { id: "g2", category: "Kitchens", title: "Open-Concept Kitchen Rebuild", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" },
  { id: "g3", category: "Bathrooms", title: "Spa-Style Ensuite", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80" },
  { id: "g4", category: "Bathrooms", title: "Walk-In Custom Shower", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80" },
  { id: "g5", category: "Basements", title: "Basement Media & Living Space", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80" },
  { id: "g6", category: "Basements", title: "Legal Basement Suite", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80" },
  { id: "g7", category: "Exteriors & Decks", title: "Custom Cedar Deck", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80" },
  { id: "g8", category: "Exteriors & Decks", title: "Privacy Fencing & Gate", image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80" },
  { id: "g9", category: "Garages", title: "Detached Double Garage", image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200&q=80" },
  { id: "g10", category: "Garages", title: "Home Extension Framing", image: "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1200&q=80" },
  { id: "g11", category: "Kitchens", title: "Farmhouse Kitchen Island", image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80" },
  { id: "g12", category: "Bathrooms", title: "Powder Room Refresh", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80" },
];

export const stats = [
  { value: 8, suffix: "+", label: "Core Services Offered" },
  { value: 100, suffix: "%", label: "Licensed & Insured Work" },
  { value: 1, suffix: "", label: "Point of Contact, Start to Finish" },
  { value: 0, suffix: "", label: "Cost for Your First Quote" },
];
