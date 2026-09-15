import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { beforeAfter } from "../data/content";

export function BeforeAfterSlider() {
  const frameRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [pos, setPos] = useState(52);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [setFromClientX]);

  return (
    <section className="bg-ink px-[clamp(1.25rem,4vw,2.5rem)] pb-[clamp(4rem,9vw,7.5rem)]">
      <Reveal>
        <div className="mx-auto grid w-full max-w-[1360px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-[clamp(2rem,4vw,3.5rem)]">
          <div className="min-w-0">
            <span className="text-[0.688rem] font-bold uppercase tracking-[0.24em] text-amber">02 — The difference</span>
            <h2 className="mt-3.5 mb-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-paper">
              Drag the line.
              <br />
              See the change.
            </h2>
            <p className="mb-7 max-w-lg text-pretty text-[0.95rem] leading-[1.7] text-paper/[0.68]">
              Before-and-after is the only proof that matters in this trade — drag the divider to
              see a real basement transformation from start to finish.
            </p>
            <Link
              to="/gallery"
              className="inline-flex min-h-[52px] items-center gap-2.5 whitespace-nowrap rounded-sm border border-paper/[0.28] px-7 text-[0.813rem] font-bold uppercase tracking-[0.08em] text-paper transition-colors hover:border-paper hover:bg-paper/[0.07]"
            >
              See full gallery
            </Link>
          </div>

          <div
            ref={frameRef}
            onPointerDown={(e) => {
              draggingRef.current = true;
              setFromClientX(e.clientX);
            }}
            role="group"
            aria-label="Before and after comparison slider"
            className="relative aspect-[4/3] min-w-0 select-none overflow-hidden rounded-[6px] border border-paper/[0.14] bg-ink-deep [touch-action:pan-y]"
            style={{ cursor: "ew-resize" }}
          >
            <img src={beforeAfter.before} alt="Before renovation" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <img src={beforeAfter.after} alt="After renovation" className="h-full w-full object-cover" />
            </div>

            <div
              aria-hidden
              className="absolute top-0 bottom-0 w-0.5 bg-paper shadow-[0_0_22px_rgba(0,0,0,0.6)]"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute left-1/2 top-1/2 flex h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-amber text-sm font-extrabold text-ink shadow-[0_10px_26px_-8px_rgba(0,0,0,0.8)]">
                ↔
              </span>
            </div>

            <span className="absolute left-4 top-4 rounded-full bg-ink-deep/70 px-2.5 py-1.5 text-[0.625rem] font-bold uppercase tracking-[0.18em] text-paper">
              After
            </span>
            <span className="absolute right-4 top-4 rounded-full bg-ink-deep/70 px-2.5 py-1.5 text-[0.625rem] font-bold uppercase tracking-[0.18em] text-paper">
              Before
            </span>

            <input
              type="range"
              min={0}
              max={100}
              value={Math.round(pos)}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Reveal the after photo"
              className="absolute inset-x-4 bottom-4 h-11 opacity-[0.001]"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
