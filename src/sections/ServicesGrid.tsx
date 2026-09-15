import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { StaggerGroup, StaggerItem } from "../components/Reveal";
import { services } from "../data/content";

export function ServicesGrid() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="What We Do" title="Renovation & construction services, done right." light />
          <p className="max-w-sm text-sm leading-relaxed text-paper/55">
            Every trade coordinated under one roof — so your project moves forward without the
            back-and-forth of managing separate contractors.
          </p>
        </div>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                to={`/services#${service.slug}`}
                className="group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden bg-ink p-7 transition-colors hover:bg-ink-soft"
              >
                <img
                  src={service.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-25"
                />
                <div className="relative z-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber/70">
                    0{services.indexOf(service) + 1}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold leading-snug text-paper">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper/55">{service.short}</p>
                </div>
                <div className="relative z-10 mt-6 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-paper/70 transition-colors group-hover:text-amber">
                  Learn more
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
