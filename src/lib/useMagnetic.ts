import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Magnetic hover: element eases toward the cursor and settles back with momentum. */
export function useMagnetic<T extends HTMLElement>(strength = 0.28) {
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
