"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { getText, type Lang } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ContactModal } from "@/components/ContactModal";
import { HeroArt } from "@/components/Sections";

export default function Page() {
  const [lang, setLang] = useState<Lang>("da"); // default dansk
  const [contactOpen, setContactOpen] = useState(false);
  const t = useMemo(() => getText(lang), [lang]);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mt-4 rounded-2xl glass px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="SH Software Solutions" width={280} height={44} />
            </div>

            <div className="flex items-center gap-3">
              <nav className="hidden md:flex items-center gap-4 text-sm text-white/75">
                <a href="#services" className="hover:text-white transition">{t.nav.services}</a>
                <a href="#cases" className="hover:text-white transition">{t.nav.cases}</a>
                <a href="#about" className="hover:text-white transition">{t.nav.about}</a>
              </nav>

              <LanguageToggle lang={lang} setLang={setLang} />

              <button
                onClick={() => setContactOpen(true)}
                className="hfont rounded-xl px-4 py-2 bg-white/10 hover:bg-white/15 transition border border-white/10"
              >
                {t.nav.contact}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        <section className="pt-14 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="hfont text-4xl sm:text-5xl font-semibold leading-tight"
              >
                {t.heroTitle}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="mt-5 text-white/75 text-base sm:text-lg leading-relaxed"
              >
                {t.heroSub}
              </motion.p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => setContactOpen(true)}
                  className="hfont rounded-xl px-5 py-3 bg-gradient-to-r from-cyan-400/90 via-blue-500/90 to-purple-500/90 text-black font-semibold hover:opacity-95 transition"
                >
                  {t.primaryCta}
                </button>
                <a
                  href="#services"
                  className="hfont rounded-xl px-5 py-3 bg-white/10 hover:bg-white/15 transition border border-white/10"
                >
                  {t.secondaryCta}
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {t.cards.map((c, i) => (
                  <div key={i} className="rounded-2xl glass p-4 hover:bg-white/7 transition">
                    <div className="hfont font-semibold">{c.title}</div>
                    <div className="mt-2 text-sm text-white/70">{c.body}</div>
                  </div>
                ))}
              </div>
            </div>

            <HeroArt />
          </div>
        </section>

        <section id="services" className="py-10">
          <h2 className="hfont text-2xl sm:text-3xl font-semibold">{t.servicesTitle}</h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.services.map((s, i) => (
              <div key={i} className="rounded-2xl glass glow p-5 hover:bg-white/7 transition">
                <div className="hfont font-semibold">{s.title}</div>
                <div className="mt-2 text-sm text-white/70 leading-relaxed">{s.body}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="cases" className="py-10">
          <h2 className="hfont text-2xl sm:text-3xl font-semibold">{t.casesTitle}</h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.cases.map((c, i) => (
              <div key={i} className="rounded-2xl glass p-5 hover:bg-white/7 transition">
                <div className="hfont font-semibold">{c.title}</div>
                <div className="mt-2 text-sm text-white/70">{c.body}</div>
                <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400/60 via-blue-500/60 to-purple-500/60" />
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl glass p-6">
            <h2 className="hfont text-2xl font-semibold">{t.aboutTitle}</h2>
            <p className="mt-3 text-white/75 leading-relaxed">
              {t.aboutBody}
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-white/60">{t.companyInfo.cvr}:</span>
                <span className="text-white/90">{t.companyInfo.cvrNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/60">{t.companyInfo.phone}:</span>
                <a href={`tel:${t.companyInfo.phoneNumber.replace(/\s/g, '')}`} className="text-white/90 hover:text-white transition">{t.companyInfo.phoneNumber}</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/60">{t.companyInfo.email}:</span>
                <a href={`mailto:${t.companyInfo.emailAddress}`} className="text-white/90 hover:text-white transition">{t.companyInfo.emailAddress}</a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl glass p-6">
            <h3 className="hfont text-xl font-semibold">{t.processTitle}</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {t.process.map((p, i) => (
                <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="hfont font-semibold">{p.title}</div>
                  <div className="mt-1 text-sm text-white/70">{p.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="rounded-[28px] glass glow p-8 text-center">
            <h2 className="hfont text-2xl sm:text-3xl font-semibold">{t.bottomTitle}</h2>
            <button
              onClick={() => setContactOpen(true)}
              className="mt-5 hfont rounded-xl px-6 py-3 bg-gradient-to-r from-cyan-400/90 via-blue-500/90 to-purple-500/90 text-black font-semibold hover:opacity-95 transition"
            >
              {t.bottomCta}
            </button>
          </div>
        </section>

        <footer className="pb-10 text-center text-xs text-white/45">
          <div className="mb-3">
            {t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
          </div>
          <div className="flex justify-center gap-4">
            <a href="/terms" className="hover:text-white/70 transition">{t.footer.terms}</a>
            <span>•</span>
            <a href="/privacy" className="hover:text-white/70 transition">{t.footer.privacy}</a>
            <span>•</span>
            <a href="/cookies" className="hover:text-white/70 transition">{t.footer.cookies}</a>
          </div>
        </footer>
      </main>

      <ContactModal lang={lang} open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
