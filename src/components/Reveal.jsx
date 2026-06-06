import { motion } from "framer-motion";
import { EASE } from "../lib/motion.js";

export default function Reveal({ children, delay = 0, y = 26, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
