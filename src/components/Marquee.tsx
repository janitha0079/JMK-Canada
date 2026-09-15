type MarqueeProps = {
  items: string[];
};

export function Marquee({ items }: MarqueeProps) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-paper/10 bg-ink-soft py-4">
      <div className="flex w-max animate-marquee gap-10">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-10 shrink-0">
            <span className="font-display text-lg md:text-xl font-bold uppercase tracking-wide text-paper/70">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-amber" />
          </div>
        ))}
      </div>
    </div>
  );
}
