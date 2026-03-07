"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { getText, type Lang } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";

export default function PrivacyPage() {
  const [lang, setLang] = useState<Lang>("da");
  const t = useMemo(() => getText(lang), [lang]);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mt-4 rounded-2xl glass px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.svg" alt="SH Software Solutions" width={280} height={44} />
            </Link>

            <div className="flex items-center gap-3">
              <LanguageToggle lang={lang} setLang={setLang} />
              <Link
                href="/"
                className="hfont rounded-xl px-4 py-2 bg-white/10 hover:bg-white/15 transition border border-white/10"
              >
                {lang === "da" ? "Tilbage" : "Back"}
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-2xl glass p-8">
          <h1 className="hfont text-3xl font-semibold mb-6">{t.legal.privacyTitle}</h1>
          <div 
            className="legal-content prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: t.legal.privacyContent }}
          />
        </div>

        <Link 
          href="/"
          className="inline-block mt-6 text-white/60 hover:text-white transition"
        >
          ← {lang === "da" ? "Tilbage til forsiden" : "Back to homepage"}
        </Link>
      </main>

      <style jsx global>{`
        .legal-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: rgba(255, 255, 255, 0.95);
        }
        .legal-content p {
          margin-bottom: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.75);
        }
        .legal-content h3:first-child {
          margin-top: 0;
        }
      `}</style>
    </div>
  );
}
