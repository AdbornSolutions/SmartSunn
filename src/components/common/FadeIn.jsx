import { motion } from "framer-motion";

// Light scroll animation: fades + slides up once when the block enters the screen.
// Used on the Services page.  (Reduced-motion users get no movement: see <MotionConfig> in the page.)
//   y      how far it travels (px)
//   delay  seconds
//   as     "div" | "li" | "section" ...
function FadeIn({ children, delay = 0, y = 28, amount = 0.2, as = "div", className = "" }) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}

export default FadeIn;
