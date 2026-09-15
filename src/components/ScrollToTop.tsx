import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "../lib/useLenis";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
        return;
      }
    }
    scrollToTop();
  }, [pathname, hash]);

  return null;
}
