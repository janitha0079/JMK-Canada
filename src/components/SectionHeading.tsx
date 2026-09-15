import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, align = "left", light = false }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      <Reveal>
        <span
          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
            light ? "text-amber" : "text-amber"
          }`}
        >
          <span className="h-px w-8 bg-amber" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl ${
            light ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
