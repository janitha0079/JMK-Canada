import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";
import { gallery, galleryCategories, type GalleryCategory } from "../data/content";

export function GalleryPreview() {
  const [filter, setFilter] = useState<GalleryCategory | "All work">("All work");

  const visible = useMemo(
    () => (filter === "All work" ? gallery : gallery.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="work" className="border-t border-paper/10 bg-ink-deep py-[clamp(4rem,9vw,7.5rem)]">
      <div className="container-x flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="min-w-0">
              <span className="text-[0.688rem] font-bold uppercase tracking-[0.24em] text-amber">03 — Recent projects</span>
              <h2 className="mt-3.5 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-none tracking-[-0.035em] text-paper">
                Built around Edmonton.
              </h2>
            </div>
            <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
              {(["All work", ...galleryCategories] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={filter === cat}
                  onClick={() => setFilter(cat)}
                  className={`min-h-11 whitespace-nowrap rounded-full px-4 text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-300 ${
                    filter === cat
                      ? "bg-amber text-ink"
                      : "border border-paper/[0.18] bg-paper/[0.04] text-paper/70 hover:border-amber/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <StaggerGroup key={filter} className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {visible.map((item) => (
            <StaggerItem key={item.id}>
              <Link
                to="/gallery"
                className="group relative block aspect-[4/5] overflow-hidden rounded-[6px] border border-paper/10 bg-ink-soft transition-[border-color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-amber/60"
              >
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
                  style={{ background: "linear-gradient(to top, rgba(4,23,23,0.92), rgba(4,23,23,0) 100%)" }}
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
                  <span className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-amber">{item.tag}</span>
                  <span className="font-display text-base font-bold leading-tight tracking-[-0.01em] text-paper">
                    {item.title}
                  </span>
                </figcaption>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
