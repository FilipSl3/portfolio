import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";
import Reveal from "./Reveal.jsx";
import TiltCard from "./TiltCard.jsx";
import ImageSlot from "./ImageSlot.jsx";
import safetykleen from "../assets/Safetykleen.webp";
import cukiernia from "../assets/CukierniaPoezja.webp";
import mamaania from "../assets/Mamaania.webp";
import fostudio from "../assets/Fostudio.webp";
import meetthere from "../assets/MeetThere.webp";

const SHOTS = {
  "safetykleen": safetykleen,
  "cukiernia-poezja": cukiernia,
  "mamaania": mamaania,
  "fostudio-web": fostudio,
  "meet-there": meetthere,
};

function ProjectLink({ link, t }) {
  if (link.label === "live") {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-[7px] rounded-[9px] bg-accent px-[15px] py-[9px] font-sans text-[13px] font-semibold text-white transition-transform duration-200 hover:-translate-y-px hover:shadow-[0_8px_20px_var(--accent-glow)]"
      >
        {t.linkLabels.live}
        <ArrowUpRight size={14} />
      </a>
    );
  }
  if (link.label === "soon") {
    return (
      <span className="inline-flex cursor-default items-center gap-[7px] rounded-[9px] bg-tag-bg px-[15px] py-[9px] font-sans text-[13px] font-semibold text-text-3">
        {t.linkLabels.soon}
      </span>
    );
  }
  if (link.label === "launch") {
    return (
      <span className="inline-flex items-center gap-[7px] rounded-[9px] border border-border bg-card px-[15px] py-[9px] font-sans text-[13px] font-semibold text-text shadow-sm">
        {t.status.launch}
      </span>
    );
  }
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-[7px] rounded-[9px] border border-border bg-card px-[15px] py-[9px] font-sans text-[13px] font-semibold text-text shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-px hover:border-border-strong hover:shadow-md"
    >
      {link.label}
      <ArrowUpRight size={14} />
    </a>
  );
}

export default function FeaturedProjects() {
  const { t } = useLanguage();

  return (
    <section id="work" className="scroll-mt-28 px-6 py-[100px]">
      <div className="mx-auto max-w-wrap">
        <Reveal className="mb-12">
          <div className="mb-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            {t.sections.work.kicker}
          </div>
          <h2 className="mb-[14px] text-[clamp(30px,3.6vw,46px)] text-text">
            {t.sections.work.title}
          </h2>
          <p className="max-w-[560px] text-[16.5px] text-text-2">
            {t.sections.work.sub}
          </p>
        </Reveal>

        <div className="flex flex-col gap-[26px]">
          {t.projects.map((p, i) => {
            const mediaRight = i % 2 === 1;
            return (
              <Reveal key={p.id} delay={0.04} className="[perspective:1200px]">
                <TiltCard>
                  {/* Media */}
                  <div
                    className={`relative min-h-[200px] bg-media transform-gpu ${
                      mediaRight ? "md:order-2" : ""
                    }`}
                    style={{ transform: "translateZ(28px)" }}
                  >
                    <div className="aspect-[16/9] w-full overflow-hidden md:absolute md:inset-0 md:aspect-auto md:h-full">
                      <ImageSlot src={SHOTS[p.id]} caption={p.name} alt={p.name} className="object-top" />
                    </div>
                  </div>

                  {/* Body */}
                  <div
                    className="flex transform-gpu flex-col justify-center px-[26px] py-[30px] md:p-[42px]"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    
                    <div className="mb-[13px] font-sans text-[12.5px] font-medium uppercase tracking-[0.04em] text-accent">
                      {p.category}
                    </div>
                    <h3 className="mb-[14px] text-[clamp(24px,2.6vw,32px)] text-text">
                      {p.name}
                    </h3>
                    <p className="mb-[18px] text-[15.5px] text-text-2">{p.desc}</p>
                    <div className="mb-[20px] flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-[7px] border border-border bg-tag-bg px-[11px] py-[5px] font-sans text-xs font-medium text-text-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-[10px]">
                      {p.links.map((link, j) => (
                        <ProjectLink key={j} link={link} t={t} />
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
