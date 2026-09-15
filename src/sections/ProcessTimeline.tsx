import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { process } from "../data/content";

export function ProcessTimeline() {
  return (
    <section className="bg-paper py-24 text-ink sm:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="How We Work" title="A clear process, from first call to final walkthrough." align="center" />

        <div className="relative mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-ink/10 lg:block" />
          {process.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1}>
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-paper font-display text-sm font-extrabold text-ink">
                  {step.step}
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
