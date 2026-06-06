import { useLanguage } from "../context/LanguageContext.jsx";
import Reveal from "./Reveal.jsx";
import ImageSlot from "./ImageSlot.jsx";

import portret from "../assets/Portret.png";

export default function AboutMe() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative scroll-mt-28 overflow-hidden border-y border-border bg-bg-2 px-6 py-[100px]"
    >
      {/* soft accent glow, top-right */}
      <div
        className="pointer-events-none absolute -right-[6%] -top-[28%] h-[46vw] max-h-[640px] w-[46vw] max-w-[640px] blur-[30px]"
        style={{
          background: "radial-gradient(circle, var(--accent-soft), transparent 64%)",
        }}
      />

      <div className="relative mx-auto max-w-wrap">
        <Reveal className="mb-12">
          <div className="mb-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            {t.about.kicker}
          </div>
          <h2 className="text-[clamp(30px,3.6vw,46px)] text-text">{t.about.title}</h2>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[60px]">
          <Reveal className="max-w-[580px]">
            {t.about.bio.map((para, i) => (
              <p
                key={i}
                className="mb-[18px] text-[clamp(15.5px,1.3vw,17.5px)] leading-[1.72] text-text-2 last:mb-0 [text-wrap:pretty]"
              >
                {para}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.12} className="relative mx-auto w-full max-w-[420px] lg:max-w-[360px]">
            <div
              className="relative rounded-[28px] border border-border-strong bg-card p-[9px]"
              style={{ boxShadow: "0 44px 100px -34px var(--accent-glow), var(--sh-lg)" }}
            >
              <ImageSlot src={portret} alt={t.about.photoCaption} radius={20} className="aspect-[4/5]" />
            </div>
            <span className="absolute -bottom-[14px] left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border-strong bg-[var(--nav-bg-2)] px-[14px] py-2 font-sans text-[12.5px] font-semibold shadow-md backdrop-blur-md">
              <span className="h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_8px_var(--accent-glow)]" />
              {t.about.photoCaption}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
