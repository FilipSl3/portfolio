import { motion, useScroll } from "framer-motion";

/** Thin accent progress bar pinned to the top, scaled by scroll position. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-[2px] w-full origin-left bg-accent transform-gpu"
      style={{
        scaleX: scrollYProgress,
        boxShadow: "0 0 12px var(--accent-glow)",
      }}
    />
  );
}
