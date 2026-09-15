import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { business } from "../data/content";
import { useMagnetic } from "../lib/useMagnetic";

const easeOut = [0.16, 1, 0.3, 1] as const;

const headline = [
  { text: "We Build", accent: false },
  { text: "What You", accent: false },
  { text: "Picture.", accent: true },
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const primaryRef = useMagnetic<HTMLAnchorElement>();
  const secondaryRef = useMagnetic<HTMLAnchorElement>();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  // Cursor-following glow, independent of the parallax/scroll transform above.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduced) return;
    const p = { tx: 0, ty: 0, x: 0, y: 0 };
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      const r = section.getBoundingClientRect();
      p.tx = e.clientX - r.left;
      p.ty = e.clientY - r.top;
      if (glowRef.current) glowRef.current.style.opacity = "1";
    };
    const onLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = "0";
    };
    const tick = () => {
      p.x = lerp(p.x, p.tx, 0.1);
      p.y = lerp(p.y, p.ty, 0.1);
      if (glowRef.current) glowRef.current.style.transform = `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, 0)`;
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

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-label="JMK Constructions hero"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink"
    >
      {/* 0 — parallax photo */}
      <motion.div style={{ y: photoY }} aria-hidden className="absolute -inset-y-[12%] inset-x-0 z-0 will-change-transform">
        <img
          src="https://img1.wsimg.com/isteam/ip/8079e509-4618-4d06-8a1d-f8616da0b17c/GettyImages-601799249-5890dfb55f9b5874ee7dcd57.jpg/:/rs=w:1900,cg:true"
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* 1 — gradient scrims */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to top, #072424 2%, rgba(7,36,36,0.92) 28%, rgba(7,36,36,0.68) 62%, rgba(7,36,36,0.78) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(to right, rgba(7,36,36,0.95) 0%, rgba(7,36,36,0.5) 45%, rgba(7,36,36,0.1) 100%)",
        }}
      />

      {/* 2 — blueprint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,241,234,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,234,0.055) 1px, transparent 1px)",
          backgroundSize: "74px 74px",
          maskImage: "radial-gradient(120% 90% at 20% 30%, #000 0%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(120% 90% at 20% 30%, #000 0%, transparent 72%)",
        }}
      />

      {/* 3 — cursor glow */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-[2] -ml-[21rem] -mt-[21rem] h-[42rem] w-[42rem] opacity-0 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle, rgba(217,142,62,0.18) 0%, rgba(217,142,62,0.05) 40%, rgba(217,142,62,0) 68%)",
        }}
      />

      {/* 4 — content */}
      <div className="container-x relative z-[3] flex flex-1 flex-col items-start justify-center px-[clamp(1.25rem,4vw,2.5rem)] pb-8 pt-32">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: easeOut }}
          className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-amber/45 bg-amber/[0.12] px-4 py-[0.45rem] text-[0.688rem] font-bold uppercase tracking-[0.16em] text-amber-soft"
        >
          <span aria-hidden className="h-[0.42rem] w-[0.42rem] rounded-full bg-amber shadow-[0_0_0_4px_rgba(217,142,62,0.2)]" />
          Licensed &amp; Insured · Edmonton, AB
        </motion.span>

        <h1 className="mt-[clamp(1.5rem,3.5vh,2.25rem)] max-w-[18ch] font-display text-[clamp(2.9rem,8.2vw,7.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-paper">
          {headline.map((line, i) => (
            <span key={line.text} className="block overflow-hidden pb-[0.05em]">
              <motion.span
                className={`inline-block ${line.accent ? "text-amber" : ""}`}
                initial={{ y: "112%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.95, delay: 0.14 + i * 0.09, ease: easeOut }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.62, ease: easeOut }}
          className="mt-[clamp(1.5rem,3vh,2rem)] max-w-xl text-pretty text-base leading-relaxed text-paper/[0.78] sm:text-lg"
        >
          Full home and commercial renovations, basement development, structural additions, decks, fences
          and plumbing — built across Edmonton by one crew, under one quote. {business.tagline}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.74, ease: easeOut }}
          className="mt-[clamp(2rem,4vh,3rem)] flex flex-wrap items-center gap-4"
        >
          <Link
            to="/contact"
            ref={primaryRef}
            className="group inline-flex min-h-[58px] items-center gap-2.5 whitespace-nowrap rounded-sm bg-amber px-8 text-sm font-extrabold uppercase tracking-[0.08em] text-ink transition-[background,box-shadow] duration-300 will-change-transform hover:bg-amber-soft hover:shadow-[0_20px_44px_-16px_rgba(217,142,62,0.85)]"
          >
            Start Your Journey
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={business.phoneHref}
            ref={secondaryRef}
            className="inline-flex min-h-[58px] items-center gap-2.5 whitespace-nowrap rounded-sm border border-paper/[0.28] px-8 text-sm font-bold tracking-[0.06em] text-paper transition-colors duration-300 will-change-transform hover:border-paper hover:bg-paper/[0.07]"
          >
            <Phone size={15} /> {business.phone}
          </a>
        </motion.div>
      </div>

      <div className="relative z-[3] flex justify-center pb-7">
        <motion.a
          href="#trust"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="group inline-flex flex-col items-center gap-1.5 text-[0.625rem] font-bold uppercase tracking-[0.24em] text-paper/50 transition-colors hover:text-amber"
        >
          <motion.span
            animate={reduced ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1.5"
          >
            Scroll
            <ChevronDown size={16} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
