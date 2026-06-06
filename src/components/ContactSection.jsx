import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { CONTACT } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-28 px-6 py-[100px]">
      <div className="mx-auto max-w-wrap">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(160deg,var(--accent-soft),var(--card)_60%)] px-[26px] py-[50px] text-center shadow-lg sm:px-14 sm:py-[72px]">
            {/* glow */}
            <div
              className="pointer-events-none absolute -top-[40%] left-1/2 h-[400px] w-[600px] max-w-full -translate-x-1/2 blur-[30px]"
              style={{
                background:
                  "radial-gradient(circle, var(--accent-soft), transparent 65%)",
              }}
            />

            <div className="relative mb-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
              {t.sections.contact.kicker}
            </div>
            <h2 className="relative mb-[18px] text-[clamp(32px,4.5vw,56px)] text-text">
              {t.sections.contact.title}
            </h2>
            <p className="relative mx-auto mb-9 max-w-[480px] text-[17px] text-text-2">
              {t.sections.contact.sub}
            </p>

            <div className="relative flex flex-wrap justify-center gap-[14px]">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-[10px] rounded-[13px] bg-accent px-7 py-[15px] font-sans text-[15.5px] font-semibold text-white shadow-[0_12px_30px_-8px_var(--accent-glow)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <Mail size={18} />
                {t.contact.cta}
              </a>
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="inline-flex items-center gap-[10px] rounded-[13px] border border-border-strong bg-card px-7 py-[15px] font-sans text-[15.5px] font-semibold text-text shadow-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <Phone size={18} />
                {CONTACT.phone}
              </a>
            </div>

            <div className="relative mt-[34px] flex justify-center gap-3">
              <SocialButton href={CONTACT.github} label="GitHub">
                <Github size={20} />
              </SocialButton>
              <SocialButton href={CONTACT.linkedin} label="LinkedIn">
                <Linkedin size={20} />
              </SocialButton>
              <SocialButton href={`mailto:${CONTACT.email}`} label="Email" internal>
                <Mail size={20} />
              </SocialButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SocialButton({ href, label, children, internal }) {
  const props = internal ? {} : { target: "_blank", rel: "noopener noreferrer" };
  return (
    <a
      href={href}
      aria-label={label}
      {...props}
      className="grid h-[46px] w-[46px] place-items-center rounded-xl border border-border bg-card text-text-2 shadow-sm transition-[color,border-color,transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:border-accent hover:text-accent hover:shadow-md"
    >
      {children}
    </a>
  );
}
