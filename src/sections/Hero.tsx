import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";
import { business } from "../data/content";

const easeOut = [0.16, 1, 0.3, 1] as const;

const headline = ["Building", "Dreams,", "One Reno", "at a Time."];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-20">
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-[1.15]">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
          alt="Custom home renovation build in progress"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
      </motion.div>

      <div className="noise-overlay absolute inset-0" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-x relative z-10 grid gap-10 py-24 md:grid-cols-[1.4fr_1fr] md:items-end"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber"
          >
            <ShieldCheck size={14} /> Licensed &amp; Insured · Edmonton, AB
          </motion.div>

          <h1 className="font-display text-[13vw] font-extrabold uppercase leading-[0.92] tracking-tight text-paper sm:text-[9vw] md:text-[6.2vw]">
            {headline.map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.09, ease: easeOut }}
                >
                  {word === "Reno" ? (
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: easeOut }}
            className="mt-8 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg"
          >
            {business.name} designs and builds custom renovations, kitchens, basements, garages
            and outdoor living spaces across {business.city} — one crew, one quote, no surprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.78, ease: easeOut }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-sm bg-amber px-7 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(245,166,35,0.65)]"
            >
              Get a Free Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-sm border border-paper/25 px-7 py-4 text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:border-paper hover:bg-paper/5"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: easeOut }}
          className="hidden md:block"
        >
          <div className="border-l-2 border-amber/50 pl-6">
            <p className="font-display text-lg font-bold text-paper">Free, No-Pressure Estimates</p>
            <p className="mt-2 text-sm text-paper/60">
              Call {business.phone} or send us your project details — we'll walk the site and quote it
              transparently before any work begins.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-paper/50"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
