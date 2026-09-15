import { motion } from "framer-motion";
import { business } from "../data/content";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

const message = `Hi ${business.shortName}! I'd like a free quote for a renovation project.`;

export function WhatsAppWidget() {
  return (
    <motion.a
      href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2, ease: [0.16, 1, 0.3, 1] }}
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <span aria-hidden className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/60 motion-safe:animate-ping [animation-duration:2.4s]" />
      <WhatsAppIcon size={28} />
      <span
        aria-hidden
        className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-sm bg-ink-deep px-3 py-2 text-xs font-semibold text-paper opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
      >
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
