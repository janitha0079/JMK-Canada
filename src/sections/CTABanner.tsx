import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { business } from "../data/content";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-amber py-20 text-ink sm:py-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ink/5" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-ink/5" />
      <div className="container-x relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Ready to start your project?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-lg text-base leading-relaxed text-ink/75">
            Tell us about your space. We'll walk the site, talk through the details and give you a
            clear, honest quote — free, no pressure.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-sm bg-ink px-8 py-4 text-sm font-bold uppercase tracking-wide text-paper transition-transform hover:-translate-y-0.5"
            >
              Get Your Free Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 rounded-sm border-2 border-ink px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              <Phone size={16} /> {business.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
