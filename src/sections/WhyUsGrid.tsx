import { ShieldCheck, HandCoins, HardHat, MapPin, Receipt, Users } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { StaggerGroup, StaggerItem } from "../components/Reveal";
import { whyUs } from "../data/content";

const icons = [ShieldCheck, HandCoins, HardHat, MapPin, Receipt, Users];

export function WhyUsGrid() {
  return (
    <section className="bg-paper py-24 text-ink sm:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Why JMK" title="What you get working with our crew." align="center" />

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem key={item.title}>
                <div className="group h-full rounded-sm border border-ink/10 bg-paper p-8 transition-all hover:-translate-y-1 hover:border-ink hover:shadow-xl">
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-ink text-amber transition-colors group-hover:bg-amber group-hover:text-ink">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
