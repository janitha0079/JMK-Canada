import { Reveal } from "../components/Reveal";
import { FacebookIcon } from "../components/icons/FacebookIcon";
import { business } from "../data/content";

export function ReviewsCTA() {
  return (
    <section id="reviews" className="bg-ink py-[clamp(4rem,9vw,7.5rem)]">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-6 text-center">
            <span className="text-[0.688rem] font-bold uppercase tracking-[0.24em] text-amber">04 — In their words</span>
            <p className="max-w-xl text-balance font-display text-[clamp(1.4rem,3.2vw,2.4rem)] font-bold leading-[1.22] tracking-[-0.025em] text-paper">
              We're building our story in {business.city} — come see the work for yourself.
            </p>
            <p className="max-w-lg text-sm leading-relaxed text-paper/[0.68]">
              Follow the crew's latest projects and client feedback on Facebook, or reach out
              directly for references from recent builds.
            </p>
            <a
              href={business.facebook}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex min-h-[52px] items-center gap-2.5 whitespace-nowrap rounded-sm bg-amber px-7 text-[0.813rem] font-extrabold uppercase tracking-[0.08em] text-ink transition-[background,box-shadow] hover:bg-amber-soft hover:shadow-[0_18px_40px_-16px_rgba(217,142,62,0.8)]"
            >
              <FacebookIcon size={17} /> See Our Facebook Page
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
