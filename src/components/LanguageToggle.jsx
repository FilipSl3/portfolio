import { useLanguage } from "../context/LanguageContext.jsx";

/** PL / EN segmented switch. */
export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  const base =
    "cursor-pointer rounded-md px-[9px] py-[5px] font-body text-xs font-semibold tracking-[0.04em] transition-colors";
  const active = "bg-accent text-white shadow-[0_2px_10px_var(--accent-glow)]";
  const idle = "text-text-3 hover:text-text-2";

  return (
    <div className="flex gap-[2px] rounded-[9px] border border-border bg-surface p-[3px]">
      {["pl", "en"].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={`${base} ${lang === code ? active : idle}`}
          aria-pressed={lang === code}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
