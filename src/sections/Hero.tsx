import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, ChevronDown, Phone } from "lucide-react";
import { business } from "../data/content";

const easeOut = [0.16, 1, 0.3, 1] as const;

const headline = ["Building", "Dreams,", "One Reno", "at a Time."];

type Panel = { id: string; label: string; title: string; blurb: string; image: string };

const panels: Panel[] = [
  {
    id: "home",
    label: "Full Home",
    title: "Full Home Renovations",
    blurb: "Concept to completion — complete home makeovers across Edmonton, tailored to your style.",
    image:
      "https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/GettyImages-601799249-5890dfb55f9b5874ee7dcd57.jpg/:/rs=w:1200,cg:true",
  },
  {
    id: "basement",
    label: "Basements",
    title: "Basement Development",
    blurb: "Custom basement designs that add real living space — and real value — to your home.",
    image:
      "https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/an-edmonton-basement-that-has-bee-renovated-s.webp/:/rs=w:1200,cg:true",
  },
  {
    id: "additions",
    label: "Additions",
    title: "Structural Additions",
    blurb: "Seamless home extensions, garages and new structures, built in Edmonton with precision.",
    image:
      "https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/Houseextension-GettyImages-139527979-5ca7dc3ed.jpg/:/rs=w:1200,cg:true",
  },
  {
    id: "outdoor",
    label: "Outdoor",
    title: "Outdoor Construction",
    blurb: "Decks and fencing that combine function, beauty and durability through Alberta seasons.",
    image:
      "https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/TimberTech-Deck-Building-Resource-Center-Cont.webp/:/rs=w:1200,cg:true",
  },
  {
    id: "commercial",
    label: "Commercial",
    title: "Commercial Renovations",
    blurb: "Modernize, reconfigure or expand your business space for maximum functionality and appeal.",
    image:
      "https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/commercial-renovation-considerations-1024x536.png/:/rs=w:1200,cg:true",
  },
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Magnetic hover: element eases toward the cursor and settles back with momentum. */
function useMagnetic<T extends HTMLElement>(strength = 0.32) {
  const ref = useRef<T | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      target.current = {
        x: (e.clientX - (r.left + r.width / 2)) * strength,
        y: (e.clientY - (r.top + r.height / 2)) * strength,
      };
    };
    const reset = () => {
      target.current = { x: 0, y: 0 };
    };
    const tick = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.16);
      current.current.y = lerp(current.current.y, target.current.y, 0.16);
      el.style.transform = `translate3d(${current.current.x.toFixed(2)}px, ${current.current.y.toFixed(2)}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", reset);
    el.addEventListener("blur", reset);
    raf = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", reset);
      el.removeEventListener("blur", reset);
      cancelAnimationFrame(raf);
    };
  }, [strength, reduced]);

  return ref;
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  const primaryRef = useMagnetic<HTMLAnchorElement>();
  const secondaryRef = useMagnetic<HTMLAnchorElement>();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // Auto-cycle the focal panel, paused on hover/focus.
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((i) => (i + 1) % panels.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  // Cursor-follow glow + momentum tilt on the focal card.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const p = { tx: 0, ty: 0, x: 0, y: 0, gtx: 0, gty: 0, gx: 0, gy: 0 };
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      const r = section.getBoundingClientRect();
      p.gtx = e.clientX - r.left;
      p.gty = e.clientY - r.top;
      p.tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      p.ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      if (glowRef.current) glowRef.current.style.opacity = "1";
    };
    const onLeave = () => {
      p.tx = 0;
      p.ty = 0;
      if (glowRef.current) glowRef.current.style.opacity = "0";
    };
    const tick = () => {
      p.x = lerp(p.x, p.tx, 0.075);
      p.y = lerp(p.y, p.ty, 0.075);
      p.gx = lerp(p.gx, p.gtx, 0.11);
      p.gy = lerp(p.gy, p.gty, 0.11);
      if (glowRef.current) glowRef.current.style.transform = `translate3d(${p.gx}px, ${p.gy}px, 0)`;
      if (cardRef.current && !reduced) {
        cardRef.current.style.transform =
          `rotateX(${(-p.y * 5).toFixed(3)}deg) rotateY(${(p.x * 6.5).toFixed(3)}deg) ` +
          `translate3d(${(p.x * -10).toFixed(2)}px, ${(p.y * -8).toFixed(2)}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const selectPanel = useCallback((i: number) => setActive(i), []);

  return (
    <section
      ref={sectionRef}
      aria-label="JMK Custom Renovations hero"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink"
    >
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-0 -ml-[22rem] -mt-[22rem] h-[44rem] w-[44rem] opacity-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(245,166,35,0.16) 0%, rgba(245,166,35,0.06) 38%, rgba(245,166,35,0) 68%)",
        }}
      />
      <div aria-hidden className="noise-overlay pointer-events-none absolute inset-0 z-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "radial-gradient(120% 90% at 78% 12%, rgba(245,166,35,0.07) 0%, rgba(20,23,28,0) 55%)",
        }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-x relative z-10 grid flex-1 content-center gap-10 py-28 md:gap-16 md:grid-cols-2"
      >
        {/* ── Left: statement ─────────────────────────────── */}
        <div className="flex min-w-0 flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: easeOut }}
            className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 text-[0.688rem] font-bold uppercase tracking-[0.16em] text-amber"
          >
            <ShieldCheck size={14} /> Licensed &amp; Insured · Edmonton, AB
          </motion.span>

          <h1 className="mt-6 font-display text-[clamp(2.7rem,7.2vw,6rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.035em] text-paper">
            {headline.map((word, i) => (
              <span key={word} className="block overflow-hidden pb-[0.04em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "112%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.14 + i * 0.08, ease: easeOut }}
                >
                  {word === "One Reno" ? (
                    <>
                      One <span className="text-amber">Reno</span>
                    </>
                  ) : (
                    word
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: easeOut }}
            className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-paper/70 sm:text-lg"
          >
            {business.name} builds full home and commercial renovations, basements, structural additions
            and outdoor living across Edmonton — one crew, one quote, no surprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.72, ease: easeOut }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              ref={primaryRef}
              className="group inline-flex min-h-[56px] items-center gap-2.5 whitespace-nowrap rounded-sm bg-amber px-[1.9rem] text-sm font-bold uppercase tracking-wide text-ink transition-[background,box-shadow] duration-300 will-change-transform hover:bg-amber-soft hover:shadow-[0_18px_40px_-16px_rgba(245,166,35,0.75)]"
            >
              Get a Free Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/gallery"
              ref={secondaryRef}
              className="inline-flex min-h-[56px] items-center whitespace-nowrap rounded-sm border border-paper/25 px-[1.9rem] text-sm font-bold uppercase tracking-wide text-paper transition-colors duration-300 will-change-transform hover:border-paper hover:bg-paper/5"
            >
              View Our Work
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: easeOut }}
            className="mt-12 grid w-full max-w-xl grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6 border-t border-paper/10 pt-7"
          >
            {[
              { v: "8", suffix: "+", label: "Trades in-house" },
              { v: "1", suffix: "", label: "Point of contact" },
              { v: "$0", suffix: "", label: "For your first quote" },
            ].map((s) => (
              <div key={s.label} className="min-w-0">
                <dt className="font-display text-3xl font-extrabold tracking-tight text-paper">
                  {s.v}
                  <span className="text-amber">{s.suffix}</span>
                </dt>
                <dd className="mt-1.5 text-xs uppercase tracking-[0.12em] text-paper/55">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* ── Right: interactive focal card ───────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: easeOut }}
          className="flex min-w-0 flex-col justify-center gap-5 [perspective:1200px]"
        >
          <div role="tablist" aria-label="Project types" className="flex flex-wrap gap-2">
            {panels.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => selectPanel(i)}
                onFocus={() => selectPanel(i)}
                className={`min-h-[44px] rounded-full border px-4 text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-300 ${
                  i === active
                    ? "border-amber bg-amber text-ink"
                    : "border-paper/15 bg-paper/5 text-paper/70 hover:border-amber/55"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div
            ref={cardRef}
            onPointerEnter={() => setPaused(true)}
            onPointerLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            className="relative aspect-[4/5] max-h-[62vh] min-h-[420px] overflow-hidden rounded-[10px] border border-paper/10 bg-ink-soft shadow-[0_50px_90px_-50px_rgba(0,0,0,0.9)] will-change-transform [transform-style:preserve-3d]"
          >
            {panels.map((p, i) => (
              <img
                key={p.id}
                src={p.image}
                alt={p.title}
                loading={i === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  i === active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
                }`}
              />
            ))}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent"
            />
            <div aria-live="polite" className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-6">
              <span className="font-display text-xl font-extrabold tracking-tight text-paper">
                {panels[active].title}
              </span>
              <span className="max-w-md text-sm leading-relaxed text-paper/75">{panels[active].blurb}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span aria-hidden className="h-px flex-1 bg-paper/15" />
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-paper/75 transition-colors hover:text-amber"
            >
              <Phone size={15} /> Call {business.phone}
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="relative z-10 flex justify-center pb-7"
      >
        <motion.span
          animate={reduced ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex flex-col items-center gap-1 text-[0.625rem] font-bold uppercase tracking-[0.24em] text-paper/45"
        >
          Scroll
          <ChevronDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  );
}
