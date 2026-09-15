import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Hammer } from "lucide-react";
import { business, nav } from "../data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-ink/90 backdrop-blur-md border-b border-paper/10" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-amber text-ink group-hover:rotate-6 transition-transform duration-300">
            <Hammer size={20} strokeWidth={2.5} />
          </span>
          <span className="font-display font-extrabold text-xl tracking-tight text-paper">
            JMK <span className="text-amber">Renovations</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative text-sm font-semibold uppercase tracking-wide transition-colors ${
                  isActive ? "text-amber" : "text-paper/80 hover:text-paper"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-paper/90 hover:text-amber transition-colors"
          >
            <Phone size={16} />
            {business.phone}
          </a>
          <Link
            to="/contact"
            className="rounded-sm bg-amber px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(245,166,35,0.6)]"
          >
            Free Quote
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
            className="md:hidden overflow-hidden border-t border-paper/10 bg-ink"
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
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
