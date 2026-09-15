import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";
import { services } from "../data/content";

export function ServicesGrid() {
  return (
    <section id="services" className="bg-ink py-[clamp(4rem,9vw,7.5rem)]">
      <div className="container-x flex flex-col gap-[clamp(2.5rem,5vw,4rem)]">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-paper/10 pb-7">
            <div className="min-w-0">
              <span className="text-[0.688rem] font-bold uppercase tracking-[0.24em] text-amber">01 — What we build</span>
              <h2 className="mt-3.5 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-none tracking-[-0.035em] text-paper">
                Every trade, one crew.
              </h2>
            </div>
            <p className="max-w-md text-pretty text-[0.95rem] leading-[1.7] text-paper/65">
              No subcontractor roulette. Carpentry, concrete, framing, electrical and plumbing are
              coordinated under a single schedule and a single point of contact.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-5">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                to={`/services#${service.slug}`}
                className="group relative flex h-full flex-col gap-4 rounded-[6px] border border-paper/10 bg-ink-soft p-[1.9rem] transition-[border-color,background,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-amber/60 hover:bg-ink-lift"
              >
                <span className="font-display text-xs font-extrabold tracking-[0.2em] text-amber/90">{service.num}</span>
                <h3 className="font-display text-[1.3rem] font-extrabold leading-[1.15] tracking-[-0.015em] text-paper">
                  {service.name}
                </h3>
                <p className="text-[0.9rem] leading-relaxed text-paper/[0.68]">{service.short}</p>
                <span className="mt-auto flex items-center gap-1.5 pt-3 text-xs font-bold uppercase tracking-[0.12em] text-amber">
                  Learn more
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
