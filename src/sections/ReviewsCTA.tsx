import { Star } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { FacebookIcon } from "../components/icons/FacebookIcon";
import { business } from "../data/content";

export function ReviewsCTA() {
  return (
    <section className="bg-ink py-24 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-sm border border-paper/10 bg-ink-soft px-8 py-16 text-center">
            <div className="flex gap-1 text-amber">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={22} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <h2 className="max-w-xl font-display text-3xl font-extrabold leading-tight text-paper sm:text-4xl">
              We're building our story in {business.city} — come see the work for yourself.
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-paper/60">
              Follow the crew's latest projects and client feedback on Facebook, or reach out
              directly for references from recent builds.
            </p>
            <a
              href={business.facebook}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-sm bg-paper px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5"
            >
              <FacebookIcon size={18} /> See Our Facebook Page
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
