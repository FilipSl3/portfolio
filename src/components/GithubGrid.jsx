import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { containerVariants, itemVariants } from "../lib/motion.js";
import Reveal from "./Reveal.jsx";

export default function GithubGrid() {
  const { t } = useLanguage();

  return (
    <section id="more" className="scroll-mt-28 px-6 py-[100px]">
      <div className="mx-auto max-w-wrap">
        <Reveal className="mb-12">
          <div className="mb-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            {t.sections.more.kicker}
          </div>
          <h2 className="mb-[14px] text-[clamp(30px,3.6vw,46px)] text-text">
            {t.sections.more.title}
          </h2>
          <p className="max-w-[560px] text-[16.5px] text-text-2">
            {t.sections.more.sub}
          </p>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {t.more.map((m, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex min-h-[210px] transform-gpu flex-col rounded-[18px] border border-border bg-card p-[26px] shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-lg"
            >
              <div className="mb-[18px] grid h-[46px] w-[46px] place-items-center rounded-xl border border-accent-border bg-accent-soft text-[22px]">
                {m.emoji}
              </div>
              <h3 className="mb-[10px] text-[18px] tracking-[-0.01em] text-text">
                {m.name}
              </h3>
              <p className="flex-1 text-sm text-text-2">{m.desc}</p>
              <div className="mt-[18px] flex items-center justify-between gap-[10px]">
                <div className="flex flex-wrap gap-2">
                  {m.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[7px] border border-border bg-tag-bg px-[11px] py-[5px] font-sans text-xs font-medium text-text-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {m.link && (
                  <span className="inline-flex items-center gap-[6px] whitespace-nowrap font-sans text-[12.5px] font-semibold text-accent">
                    {t.linkLabels[m.link.label] || m.link.label}
                    <ArrowRight size={13} />
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
