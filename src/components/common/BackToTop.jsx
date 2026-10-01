import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 15, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.8 }}
          whileHover={{
            scale: 1.08,
            backgroundColor: "#ffbd21",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25 }}
          aria-label="Back to top"
          className="
            fixed
            bottom-6
            right-5
            z-[100]
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-[#009b62]
            text-white
            shadow-[0_6px_20px_rgba(0,0,0,0.18)]
            transition-colors
            duration-300
            sm:bottom-7
            sm:right-7
            sm:h-12
            sm:w-12
          "
        >
          <ArrowUp size={19} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;