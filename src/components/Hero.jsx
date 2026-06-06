import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import { EASE } from "../lib/motion.js";
import { CONTACT } from "../data/content.js";
import Canvas3D from "./Canvas3D.jsx";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

export default function Hero() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-28 items-center px-6 pb-[90px] pt-[150px]"
    >
      <div className="mx-auto grid w-full max-w-wrap items-center gap-11 lg:grid-cols-[1.08fr_0.92fr] lg:gap-[60px]">
        {/* Left — copy */}
        <div>
          <motion.span
            {...fadeUp(0)}
            className="mb-[26px] inline-flex items-center gap-[9px] rounded-full border border-border bg-card px-[14px] py-[7px] font-sans text-[13px] tracking-[0.02em] text-text-2 shadow-sm"
          >
            <span className="h-[7px] w-[7px] animate-pulse-dot rounded-full bg-dot-live" />
            {t.hero.available}
          </motion.span>

          <motion.h1
            {...fadeUp(0.12)}
            className="font-sans text-[clamp(46px,6.4vw,92px)] font-bold leading-[0.96] tracking-[-0.035em] text-text"
          >
            {t.hero.name}
          </motion.h1>

          <motion.p
            {...fadeUp(0.22)}
            className="mt-4 font-sans text-[clamp(21px,2.9vw,36px)] font-semibold leading-[1.08] tracking-[-0.02em] text-text"
          >
            {t.hero.roleLead} <span className="text-accent">{t.hero.roleAccent}</span>
          </motion.p>

          <motion.p
            {...fadeUp(0.34)}
            className="mt-6 max-w-[500px] text-[clamp(16px,1.4vw,19px)] text-text-2"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div {...fadeUp(0.44)} className="mt-9 flex flex-wrap gap-3">
            <a
              href={CONTACT.cv}
              download
              className="inline-flex items-center gap-[9px] rounded-xl bg-accent px-[22px] py-[13px] font-sans text-[14.5px] font-semibold text-white shadow-accent-glow transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-accent-glow-lg"
            >
              <Download size={16} />
              {t.hero.ctaCv}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-[9px] rounded-xl border border-border-strong bg-card px-[22px] py-[13px] font-sans text-[14.5px] font-semibold text-text shadow-sm transition-[transform,box-shadow,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-accent-border hover:text-accent hover:shadow-md"
            >
              <Mail size={16} />
              {t.hero.ctaContact}
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.54)} className="mt-[34px] flex flex-wrap gap-[10px]">
            <ContactChip href={CONTACT.github} icon={<Github size={16} />} label="GitHub" external />
            <ContactChip href={CONTACT.linkedin} icon={<Linkedin size={16} />} label="LinkedIn" external />
            <ContactChip href={`mailto:${CONTACT.email}`} icon={<Mail size={16} />} label={CONTACT.email} />
          </motion.div>
        </div>

        {/* Right — 3D canvas */}
        <motion.div
          className="mx-auto w-full max-w-[440px] lg:mx-0"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: EASE }}
        >
          <div className="relative aspect-square overflow-hidden rounded-[28px] border border-border-strong bg-[radial-gradient(120%_120%_at_50%_0%,var(--accent-soft),var(--card)_58%)] shadow-lg">
            {/* masked inner grid */}
            <div
              className="absolute inset-0 opacity-[0.85]"
              style={{
                backgroundImage:
                  "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage:
                  "radial-gradient(ellipse 82% 82% at 50% 45%, #000 28%, transparent 78%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 82% 82% at 50% 45%, #000 28%, transparent 78%)",
              }}
            />
            <div
              className="pointer-events-none absolute left-1/2 top-[46%] h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 opacity-45 blur-[36px]"
              style={{
                background:
                  "radial-gradient(circle, var(--accent-glow), transparent 62%)",
              }}
            />

            {/* Three.js mount — remounts on theme change to re-read the accent */}
            <Canvas3D key={theme} />

            <span className="absolute left-4 top-4 z-[3] inline-flex items-center gap-2 rounded-full border border-border-strong bg-[var(--nav-bg-2)] px-3 py-[7px] font-sans text-[11.5px] font-semibold tracking-[0.03em] shadow-sm backdrop-blur-md">
              <span className="h-[6px] w-[6px] animate-pulse-dot rounded-full bg-dot-live shadow-[0_0_7px_var(--dot-live)]" />
              {t.hero.canvasLabel}
            </span>
            <span className="absolute bottom-[15px] right-[18px] z-[3] font-sans text-[11.5px] font-medium tracking-[0.04em] text-text-3">
              {t.hero.canvasHint}
            </span>
            <span className="absolute right-[13px] top-[13px] z-[3] h-4 w-4 rounded-tr-md border-r-[1.5px] border-t-[1.5px] border-border-strong" />
            <span className="absolute bottom-[13px] left-[13px] z-[3] h-4 w-4 rounded-bl-md border-b-[1.5px] border-l-[1.5px] border-border-strong" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactChip({ href, icon, label, external }) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a
      href={href}
      {...externalProps}
      className="group inline-flex items-center gap-[9px] rounded-[11px] border border-border bg-card px-[14px] py-[9px] text-[13.5px] font-medium text-text-2 shadow-sm transition-[color,border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:text-text hover:shadow-md"
    >
      <span className="text-text-3 transition-colors group-hover:text-accent">
        {icon}
      </span>
      {label}
    </a>
  );
}
