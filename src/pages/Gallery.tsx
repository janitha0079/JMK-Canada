import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { PageHero } from "../components/PageHero";
import { StaggerGroup, StaggerItem } from "../components/Reveal";
import { CTABanner } from "../sections/CTABanner";
import { gallery, galleryCategories, type GalleryCategory } from "../data/content";

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | "All">("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter]
  );

  const activeItem = activeIndex !== null ? filtered[activeIndex] : null;

  const go = (dir: 1 | -1) => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + dir + filtered.length) % filtered.length);
  };

  return (
    <PageTransition>
      <PageHero
        eyebrow="Gallery"
        title="Recent builds across Edmonton."
        description="A selection of renovations, basements, structural additions and outdoor construction from around Edmonton. Ask us for references from any project you'd like to see in person."
        image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="bg-ink py-16 sm:py-20">
        <div className="container-x">
          <div className="flex flex-wrap gap-2">
            {(["All", ...galleryCategories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                  filter === cat
                    ? "border-amber bg-amber text-ink"
                    : "border-paper/20 text-paper/70 hover:border-paper/50 hover:text-paper"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <StaggerGroup
            key={filter}
            className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
          >
            {filtered.map((item, i) => (
              <StaggerItem key={item.id}>
                <button
                  onClick={() => setActiveIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-sm text-left"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-amber">{item.tag}</span>
                    <p className="font-display text-sm font-bold text-paper">{item.title}</p>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
          >
            <button
              className="absolute right-5 top-5 text-paper/70 hover:text-paper"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-paper/10 p-2 text-paper hover:bg-paper/20 sm:left-6"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-paper/10 p-2 text-paper hover:bg-paper/20 sm:right-6"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="max-h-[80vh] max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[70vh] w-full rounded-sm object-contain"
              />
              <div className="mt-4 text-center">
                <span className="text-xs font-bold uppercase tracking-wide text-amber">{activeItem.tag}</span>
                <p className="font-display text-lg font-bold text-paper">{activeItem.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABanner />
    </PageTransition>
  );
}
