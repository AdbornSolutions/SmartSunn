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
          aria-label="Back to top"
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.8,
          }}
          whileHover={{
            scale: 1.08,
            backgroundColor: "#FFC629",
          }}
          whileTap={{
            scale: 0.94,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            fixed
            bottom-6
            right-5
            z-[9999]
            isolate
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border-2
            border-black
            bg-[#009b62]
            text-black
            shadow-[0_6px_20px_rgba(0,0,0,0.25)]
            sm:bottom-7
            sm:right-7
            sm:h-12
            sm:w-12
          "
        >
          <ArrowUp
            size={21}
            strokeWidth={3.2}
            className="relative z-10 text-black"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;