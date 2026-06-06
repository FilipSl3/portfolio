import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { EASE } from "../lib/motion.js";

/** Light/Dark toggle. Icon rotates + cross-fades on change. */
export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Tryb jasny" : "Tryb ciemny"}
      className="grid h-[38px] w-[38px] place-items-center overflow-hidden rounded-[9px] border border-border bg-surface text-text-2 transition-colors hover:border-border-strong hover:text-accent"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          className="grid place-items-center"
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.28, ease: EASE }}
        >
          {isDark ? <Sun size={17} /> : <Moon size={17} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
