import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { usePointerFine } from "../hooks/usePointerFine.js";

/**
 * 3D mouse-tilt wrapper for the featured project cards.
 */
export default function TiltCard({ children }) {
  const fine = usePointerFine();
  const ref = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [3, -3]), {
    stiffness: 90,
    damping: 20,
    mass: 0.6,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-3, 3]), {
    stiffness: 90,
    damping: 20,
    mass: 0.6,
  });

  const handleMove = (e) => {
    const node = ref.current;
    if (!node) return;
    const r = node.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    mx.set(px - 0.5);
    my.set(py - 0.5);
    node.style.setProperty("--mx", `${px * 100}%`);
    node.style.setProperty("--my", `${py * 100}%`);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const cardClass =
    "tilt-card group relative grid grid-cols-1 overflow-hidden rounded-tl-[22px] rounded-br-[22px] border border-border bg-card shadow-md transition-[border-color,box-shadow] duration-300 hover:border-border-strong hover:shadow-lg md:grid-cols-2";

  if (!fine) {
    return <div className={cardClass}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={`${cardClass} transform-gpu [transform-style:preserve-3d] [perspective:1600px] will-change-transform`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY }}
    >
      {children}
      <div className="glare" />
    </motion.div>
  );
}
