import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { business, nav } from "../data/content";
import { Logo } from "./icons/Logo";
import { useMagnetic } from "../lib/useMagnetic";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.22);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[78px] transition-[background,border-color,backdrop-filter] duration-500 ${
        scrolled || open ? "border-b border-paper/10 bg-ink-deep/90 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-full items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo tone="dark" compact />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative text-xs font-bold uppercase tracking-[0.12em] transition-colors ${
                  isActive ? "text-amber" : "text-paper/[0.78] hover:text-amber"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-paper/90 hover:text-amber transition-colors"
          >
            <Phone size={16} />
            {business.phone}
          </a>
          <Link
            ref={ctaRef}
            to="/contact"
            className="inline-flex min-h-11 items-center whitespace-nowrap rounded-sm bg-amber px-5 text-xs font-extrabold uppercase tracking-[0.1em] text-ink transition-[background,box-shadow] duration-300 will-change-transform hover:bg-amber-soft hover:shadow-[0_14px_34px_-14px_rgba(217,142,62,0.8)]"
          >
            Start Your Journey
          </Link>
        </div>

        <button
          className="md:hidden text-paper"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-paper/10 bg-ink-deep"
          >
            <div className="container-x flex flex-col gap-1 py-6">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `block py-3 text-lg font-display font-bold ${isActive ? "text-amber" : "text-paper"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <a href={business.phoneHref} className="mt-3 flex items-center gap-2 text-paper/80 font-semibold">
                <Phone size={16} /> {business.phone}
              </a>
              <Link
                to="/contact"
                className="mt-4 rounded-sm bg-amber px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-ink"
              >
                Start Your Journey
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
