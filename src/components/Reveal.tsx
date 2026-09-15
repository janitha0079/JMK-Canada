import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Reveal({ children, delay = 0, y = 28, className, once = true }: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: easeOut },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

export function StaggerGroup({ children, className, stagger = 0.08, delay = 0 }: StaggerProps) {
  const variants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
  return (
    <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={variants}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, y = 24 }: { children: ReactNode; className?: string; y?: number }) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
