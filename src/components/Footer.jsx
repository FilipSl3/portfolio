import { useLanguage } from "../context/LanguageContext.jsx";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-[100px] border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-[14px]">
        <span className="font-sans text-sm font-semibold text-text">
          Filip Ślemp
        </span>
        <span className="text-[13px] text-text-3">
          © {year} · {t.contact.rights}
        </span>
      </div>
    </footer>
  );
}
