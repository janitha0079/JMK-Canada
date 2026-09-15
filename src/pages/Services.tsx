import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { CTABanner } from "../sections/CTABanner";
import { services } from "../data/content";

export default function Services() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Services"
        title="Every trade your project needs."
        description="From a single-room refresh to a full home build, our crew covers carpentry, concrete, electrical and plumbing under one roof — so your project moves forward without the runaround."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="bg-paper py-4 text-ink">
        {services.map((service, i) => (
          <div
            key={service.slug}
            id={service.slug}
            className="scroll-mt-24 border-b border-ink/10 py-16 first:pt-8 sm:py-20"
          >
            <div className="container-x">
              <div
                className={`grid items-center gap-12 md:grid-cols-2 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal>
                  <div className="overflow-hidden rounded-sm">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </Reveal>

                <div>
                  <Reveal>
                    <span className="font-display text-sm font-bold text-amber">
                      0{i + 1} / {services.length}
                    </span>
                  </Reveal>
                  <Reveal delay={0.06}>
                    <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                      {service.name}
                    </h2>
                  </Reveal>
                  <Reveal delay={0.12}>
                    <p className="mt-5 text-base leading-relaxed text-ink/65">{service.description}</p>
                  </Reveal>
                  <Reveal delay={0.18}>
                    <ul className="mt-6 space-y-3">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm text-ink/75">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-amber">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={0.24}>
                    <Link
                      to="/contact"
                      className="mt-8 inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-paper transition-transform hover:-translate-y-0.5"
                    >
                      Get a Quote for This <ArrowRight size={16} />
                    </Link>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <CTABanner />
    </PageTransition>
  );
}
