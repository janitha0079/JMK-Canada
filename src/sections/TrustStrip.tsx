import { ShieldCheck, FileText, Users, BadgeCheck } from "lucide-react";
import { StaggerGroup, StaggerItem } from "../components/Reveal";

const items = [
  { icon: ShieldCheck, label: "Licensed & fully insured" },
  { icon: FileText, label: "Free, itemized quotes" },
  { icon: Users, label: "Every trade in-house" },
  { icon: BadgeCheck, label: "Built to Alberta code" },
];

export function TrustStrip() {
  return (
    <section id="trust" className="border-y border-paper/10 bg-ink-deep">
      <div className="container-x py-9">
        <StaggerGroup className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-x-10 gap-y-6">
          {items.map((item) => (
            <StaggerItem key={item.label} y={14}>
              <div className="flex items-center gap-3.5">
                <item.icon size={18} className="shrink-0 text-amber" />
                <span className="text-[0.813rem] font-semibold tracking-wide text-paper/[0.82]">{item.label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
