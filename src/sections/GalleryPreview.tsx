import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { StaggerGroup, StaggerItem } from "../components/Reveal";
import { gallery } from "../data/content";

const preview = gallery.slice(0, 6);

export function GalleryPreview() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Recent Work" title="A look at builds across Edmonton & area." light />
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 whitespace-nowrap border-b-2 border-amber pb-1 text-sm font-bold uppercase tracking-wide text-amber"
          >
            Full Gallery <ArrowRight size={16} />
          </Link>
        </div>

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {preview.map((item, i) => (
            <StaggerItem key={item.id} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <Link to="/gallery" className="group relative block h-full overflow-hidden rounded-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
                    i === 0 ? "h-full min-h-[280px]" : "h-[135px] sm:h-[190px]"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-bold uppercase tracking-wide text-paper">{item.category}</span>
                  <p className="font-display text-sm font-bold text-paper">{item.title}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
