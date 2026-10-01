import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Makes links like "/#services" scroll to the right section,
// even when they are clicked from another route.
function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // wait one tick so the page (and its sections) are mounted
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash, key]);

  return null;
}

export default ScrollToHash;
