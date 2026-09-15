import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
};

const easeOut = [0.16, 1, 0.3, 1] as const;

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-ink pt-20">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/50" />
      </div>

      <div className="container-x relative z-10 pb-16 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="mb-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-paper/50"
        >
          <Link to="/" className="hover:text-amber transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-amber">{eyebrow}</span>
        </motion.div>

        <h1 className="overflow-hidden">
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            className="block font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-paper sm:text-6xl md:text-7xl"
          >
            {title}
          </motion.span>
        </h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
            className="mt-6 max-w-xl text-base leading-relaxed text-paper/65"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
