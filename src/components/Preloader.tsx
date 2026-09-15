import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-amber">
              <motion.span
                animate={{ rotate: [0, -18, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                className="font-display text-xl font-extrabold text-ink"
              >
                J
              </motion.span>
            </span>
            <span className="font-display text-xl font-extrabold text-paper">JMK</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
