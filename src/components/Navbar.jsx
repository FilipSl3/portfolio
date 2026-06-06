import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useActiveSection, useScrolled } from "../hooks/useActiveSection.js";
import { CONTACT } from "../data/content.js";
import ThemeToggle from "./ThemeToggle.jsx";
import LanguageToggle from "./LanguageToggle.jsx";
import MobileMenu from "./MobileMenu.jsx";

const SECTION_IDS = ["home", "about", "work", "experience", "more", "contact"];

export default function Navbar() {
  const { t } = useLanguage();
  const scrolled = useScrolled(20);
  const active = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["home", t.nav.home],
    ["about", t.nav.about],
    ["work", t.nav.work],
    ["experience", t.nav.experience],
    ["more", t.nav.more],
    ["contact", t.nav.contact],
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[90] flex justify-center px-6 py-[18px]">
        <div
          className={`flex w-full max-w-wrap items-center justify-between gap-6 rounded-2xl border bg-[var(--nav-bg)] py-[11px] pl-[22px] pr-[11px] backdrop-blur-[18px] backdrop-saturate-150 transition-[background-color,border-color,box-shadow] duration-300 ${
            scrolled
              ? "border-border-strong bg-[var(--nav-bg-2)] shadow-md"
              : "border-border shadow-sm"
          }`}
        >
          {/* Brand */}
          <a href="#home" className="flex items-center gap-[11px] font-sans font-semibold">
            <span className="grid h-[34px] w-[34px] place-items-center rounded-[9px] border border-accent-border bg-accent-soft text-sm tracking-[-0.03em] text-accent">
              FŚ
            </span>
            <span className="text-[14.5px] tracking-[-0.01em]">
              Filip Ślemp <span className="font-normal text-text-3">/ dev</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`relative rounded-[9px] px-[13px] py-2 text-[13.5px] font-medium transition-colors ${
                  active === id
                    ? "text-text after:absolute after:inset-x-[13px] after:bottom-[3px] after:h-[2px] after:rounded-sm after:bg-accent after:shadow-[0_0_8px_var(--accent-glow)] after:content-['']"
                    : "text-text-2 hover:bg-hover hover:text-text"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-[10px]">
            <ThemeToggle />
            <LanguageToggle />
            <a
              href={CONTACT.cv}
              download
              className="hidden items-center gap-2 whitespace-nowrap rounded-[9px] bg-cv-bg px-[15px] py-[9px] font-sans text-[13px] font-semibold text-cv-fg transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-md md:inline-flex"
            >
              <Download size={15} />
              {t.cv}
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((m) => !m)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              className="grid h-[38px] w-[38px] place-items-center rounded-[9px] border border-border bg-surface text-text md:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        links={links}
        cvLabel={t.cv}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
