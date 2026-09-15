import { Link } from "react-router-dom";
import { Hammer, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { FacebookIcon } from "./icons/FacebookIcon";
import { business, nav, services } from "../data/content";

export function Footer() {
  return (
    <footer className="relative bg-ink border-t border-paper/10 pt-20 pb-8">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-amber text-ink">
                <Hammer size={18} strokeWidth={2.5} />
              </span>
              <span className="font-display font-extrabold text-lg text-paper">JMK</span>
            </Link>
            <p className="text-paper/60 text-sm leading-relaxed mb-5">{business.tagline}.</p>
            <a
              href={business.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-paper/80 hover:text-amber transition-colors"
            >
              <FacebookIcon size={18} /> Follow us on Facebook
            </a>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-amber mb-5">Navigate</h4>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-paper/70 hover:text-paper text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-amber mb-5">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services#${s.slug}`} className="text-paper/70 hover:text-paper text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-amber mb-5">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-paper/70">
                <MapPin size={18} className="text-amber shrink-0 mt-0.5" />
                Serving {business.city} &amp; area
              </li>
              <li className="flex items-start gap-3 text-paper/70">
                <Phone size={18} className="text-amber shrink-0 mt-0.5" />
                <a href={business.phoneHref} className="hover:text-paper transition-colors">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-paper/70">
                <Mail size={18} className="text-amber shrink-0 mt-0.5" />
                <a href={`mailto:${business.email}`} className="hover:text-paper transition-colors">
                  {business.email}
                </a>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-1.5 rounded-sm bg-amber px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5"
            >
              Request a Quote <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-center justify-between gap-4 border-t border-paper/10 pt-8 text-xs text-paper/45 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>Licensed &amp; Insured · Edmonton, Alberta</p>
        </div>
      </div>
    </footer>
  );
}
