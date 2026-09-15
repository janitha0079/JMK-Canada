import { MapPin, ShieldCheck, HardHat, Handshake } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";
import { ProcessTimeline } from "../sections/ProcessTimeline";
import { CTABanner } from "../sections/CTABanner";
import { business } from "../data/content";

const values = [
  {
    icon: HardHat,
    title: "Craftsmanship First",
    text: "Every cut, weld and finish is done the way we'd do it in our own home — no shortcuts.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Insured",
    text: "Protected, code-compliant work for both residential and commercial projects.",
  },
  {
    icon: Handshake,
    title: "Straight Talk",
    text: "Clear quotes, honest timelines, and a single point of contact from day one.",
  },
];

const areas = [
  "Edmonton",
  "St. Albert",
  "Sherwood Park",
  "Spruce Grove",
  "Leduc",
  "Beaumont",
];

export default function About() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="About"
        title="A crew built on craftsmanship."
        description={`${business.name} is an owner-led renovation and construction company based in ${business.city}.`}
        image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="bg-paper py-24 text-ink sm:py-28">
        <div className="container-x grid gap-16 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80"
                alt="Tradesperson at work"
                className="col-span-2 aspect-[16/10] w-full rounded-sm object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=500&q=80"
                alt="Framing on a home extension"
                className="aspect-square w-full rounded-sm object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=500&q=80"
                alt="Finished kitchen renovation"
                className="aspect-square w-full rounded-sm object-cover"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading eyebrow="Our Story" title="Fresh energy. Real craftsmanship." />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70">
                <p>
                  {business.name} was founded to bring a more direct, hands-on approach to
                  renovation and construction in {business.city} — one where the person quoting
                  your project is the same person who stands behind the finished work.
                </p>
                <p>
                  Led by owner {business.owner}, our crew handles carpentry, concrete, electrical
                  and plumbing as one coordinated team, so you're not left chasing down separate
                  contractors or wondering who's responsible for what.
                </p>
                <p>
                  We're a newer name in Edmonton's renovation scene — and we intend to earn every
                  bit of the trust we ask for, one project and one honest quote at a time.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="What We Stand For" title="Values that shape every project." light align="center" />
          <StaggerGroup className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-sm border border-paper/10 p-8 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber text-ink">
                    <v.icon size={24} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-paper">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/55">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <ProcessTimeline />

      <section className="bg-paper py-24 text-ink sm:py-28">
        <div className="container-x">
          <div className="grid gap-12 rounded-sm bg-ink px-8 py-14 text-paper sm:px-14 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber">
                <MapPin size={14} /> Service Area
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                Proudly serving {business.city} &amp; the capital region.
              </h2>
            </div>
            <StaggerGroup className="flex flex-wrap gap-3">
              {areas.map((area) => (
                <StaggerItem key={area}>
                  <span className="inline-block rounded-full border border-paper/20 px-5 py-2.5 text-sm font-semibold text-paper/85">
                    {area}
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageTransition>
  );
}
