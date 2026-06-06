import { AnimatePresence, motion } from "framer-motion";
import { Download } from "lucide-react";
import { EASE } from "../lib/motion.js";
import { CONTACT } from "../data/content.js";

/** Full-screen mobile navigation, revealed by the hamburger. */
export default function MobileMenu({ open, links, onClose, cvLabel }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[89] px-7 pb-10 pt-[100px] backdrop-blur-xl lg:hidden"
          style={{ background: "var(--menu-bg)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE }}
        >
          <nav className="flex flex-col">
            {links.map(([id, label], i) => (
              <motion.a
                key={id}
                href={`#${id}`}
                onClick={onClose}
                className="border-b border-border py-[18px] font-sans text-[26px] font-semibold text-text"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: EASE }}
              >
                {label}
              </motion.a>
            ))}
            <a
              href={CONTACT.cv}
              download
              onClick={onClose}
              className="mt-7 inline-flex items-center gap-2 self-start rounded-[9px] bg-cv-bg px-[15px] py-[11px] font-sans text-[13px] font-semibold text-cv-fg"
            >
              <Download size={15} />
              {cvLabel}
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
