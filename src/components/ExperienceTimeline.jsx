import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";
import { containerVariants, itemVariants } from "../lib/motion.js";
import Reveal from "./Reveal.jsx";

export default function ExperienceTimeline() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-28 px-6 py-[100px]">
      <div className="mx-auto max-w-wrap">
        <Reveal className="mb-12">
          <div className="mb-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            {t.sections.experience.kicker}
          </div>
          <h2 className="mb-[14px] text-[clamp(30px,3.6vw,46px)] text-text">
            {t.sections.experience.title}
          </h2>
          <p className="max-w-[560px] text-[16.5px] text-text-2">
            {t.sections.experience.sub}
          </p>
        </Reveal>

        <motion.div
          className="relative mx-auto max-w-[820px] pl-2 before:absolute before:bottom-[6px] before:left-[7px] before:top-[6px] before:w-[1.5px] before:bg-[linear-gradient(var(--accent),var(--border-strong)_12%,var(--border-strong)_88%,transparent)] before:content-['']"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {t.experience.map((e, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative pb-[38px] pl-[42px] last:pb-0"
            >
              {/* node */}
              <span className="absolute left-0 top-[5px] grid h-4 w-4 place-items-center rounded-full border-2 border-border-strong bg-bg shadow-sm transition-colors group-hover:border-accent">
                <span className="h-[6px] w-[6px] rounded-full bg-text-3 transition-all group-hover:bg-accent group-hover:shadow-[0_0_8px_var(--accent-glow)]" />
              </span>

              {/* card */}
              <div className="rounded-2xl border border-border bg-card px-6 py-[22px] shadow-sm transition-[border-color,box-shadow,transform] duration-300 group-hover:translate-x-1 group-hover:border-border-strong group-hover:shadow-md">
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-[19px] text-text">{e.company}</h3>
                  <span className="whitespace-nowrap font-sans text-[12.5px] font-medium text-accent">
                    {e.period}
                  </span>
                </div>
                <div className="mb-[10px] font-sans text-sm font-semibold text-text">
                  {e.role}
                </div>
                <p className="text-[14.5px] text-text-2">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
