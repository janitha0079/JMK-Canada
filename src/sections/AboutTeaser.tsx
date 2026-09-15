import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Counter } from "../components/Counter";
import { business, stats } from "../data/content";

export function AboutTeaser() {
  return (
    <section className="bg-paper py-24 text-ink sm:py-32">
      <div className="container-x grid gap-16 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
              alt="Contractor reviewing renovation plans on site"
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden max-w-[220px] rounded-sm bg-ink p-5 shadow-xl sm:block">
              <p className="font-display text-3xl font-extrabold text-amber">{business.founded}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-paper/70">
                Founded in Edmonton, built on craftsmanship
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber">
              <span className="h-px w-8 bg-amber" /> Who We Are
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Local craftsmanship, <span className="text-amber">honest process.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/70">
              {business.name} is an owner-led renovation and construction company serving{" "}
              {business.city} and the surrounding area. We bring fresh energy and hands-on attention
              to every project — from a single room to a full home — backed by licensed, insured
              trade work and a straight-talk approach to budgets and timelines.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-xs font-medium leading-snug text-ink/55">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:border-amber hover:text-amber"
            >
              More About Us <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
