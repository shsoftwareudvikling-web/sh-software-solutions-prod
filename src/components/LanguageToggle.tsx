"use client";

import type { Lang } from "@/lib/i18n";

export function LanguageToggle({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full glass px-2 py-1">
      <button
        className={`px-3 py-1 rounded-full text-sm transition ${
          lang === "da" ? "bg-white/10" : "hover:bg-white/5"
        }`}
        onClick={() => setLang("da")}
        aria-label="Skift til dansk"
      >
        DA
      </button>
      <button
        className={`px-3 py-1 rounded-full text-sm transition ${
          lang === "en" ? "bg-white/10" : "hover:bg-white/5"
        }`}
        onClick={() => setLang("en")}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
