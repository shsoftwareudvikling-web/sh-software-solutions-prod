"use client";

import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Database, Workflow, Headset } from "lucide-react";

const floatSlow = {
  animate: { y: [0, -6, 0], transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" as const } },
};

type CardKey = "web" | "data" | "auto" | "support";

type CardSpec = {
  key: CardKey;
  Icon: any;
  title: string;
  sub: string;
  detail: string;
  to: { l: number; t: number }; // percent
  delay: number;
  rot: number;
};

const CARDS: CardSpec[] = [
  {
    key: "web",
    Icon: Code2,
    title: "Softwareudvikling",
    sub: "Skræddersyede digitale løsninger",
    detail:
      "Vi udvikler skræddersyet software til virksomheder – fra webapplikationer og interne systemer til komplette digitale platforme. Har du en idé eller et problem der kan løses med software, kan vi bygge løsningen.",
    to: { l: 65, t: 15 },
    delay: 0.15,
    rot: -4,
  },
  {
    key: "data",
    Icon: Database,
    title: "Data & Integrationer",
    sub: "Systemer der arbejder sammen",
    detail:
      "Vi forbinder dine systemer og data, så din virksomhed arbejder smartere. Vi udvikler API'er, integrationer og dataløsninger der sikrer stabil kommunikation mellem platforme.",
    to: { l: 25, t: 35 },
    delay: 0.28,
    rot: 3,
  },
  {
    key: "auto",
    Icon: Workflow,
    title: "Automatisering",
    sub: "Effektivisering af arbejdsprocesser",
    detail:
      "Gentagne manuelle opgaver kan automatiseres. Vi udvikler workflows og automatiserede processer der sparer tid, reducerer fejl og gør din virksomhed mere effektiv.",
    to: { l: 75, t: 45 },
    delay: 0.40,
    rot: -2,
  },
  {
    key: "support",
    Icon: Headset,
    title: "IT Support",
    sub: "Teknisk hjælp når du har brug for det",
    detail:
      "Vi hjælper med tekniske udfordringer, systemopsætning og vedligeholdelse. Når teknologien driller, sørger vi for at få dine systemer hurtigt tilbage på sporet",
    to: { l: 35, t: 65 },
    delay: 0.52,
    rot: 2,
  },
];

export function HeroArt() {
  return (
    <div className="relative h-[320px] sm:h-[380px] lg:h-[440px]">
      <div className="absolute -inset-4 sm:-inset-10 blur-3xl opacity-60">
        <div className="h-full w-full rounded-[40px] bg-gradient-to-tr from-cyan-400/20 via-blue-500/20 to-purple-500/20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 rounded-[28px] glass glow overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        <div className="absolute -right-12 top-10 h-64 w-64 rounded-full bg-blue-500/15 blur-2xl" />
        <div className="absolute left-10 bottom-8 h-56 w-56 rounded-full bg-purple-500/15 blur-2xl" />

        <div className="relative h-full p-6 sm:p-8">
          {/* Unified stage */}
          <div className="relative h-full rounded-[24px] bg-white/5 border border-white/10 overflow-hidden">
            {/* Instruction text */}
            <div className="hidden md:block absolute right-12 top-5 text-xs sm:text-sm text-white/70 max-w-[35%]">
              <span className="hfont font-semibold text-white/85">Hiv</span> i den ydelse du har brug for for at læse mer om den
            </div>

            {/* Lamp */}
            <div className="absolute left-6 bottom-6 w-[280px] max-w-[55%]">
              <motion.div {...floatSlow}>
                <MagicLamp />
              </motion.div>
            </div>

            {/* Smoke + draggable cards */}
            <StageMagic />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StageMagic() {
  // origin near lamp spout (percent of stage)
  const origin = { l: 36, t: 68 };

  const boundsRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<CardKey | null>(null);

  // Small helper to keep the popover inside nicely (simple)
  const activeSpec = useMemo(() => CARDS.find((c) => c.key === active) ?? null, [active]);

  return (
    <div className="absolute inset-0">
      {/* This invisible box defines draggable bounds */}
      <div ref={boundsRef} className="absolute left-[86px] top-[90px] right-[86px] bottom-[90px] rounded-[20px]" />

      {/* smoke core */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          left: `${origin.l}%`,
          top: `${origin.t - 10}%`,
          width: 140,
          height: 140,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle at 30% 30%, rgba(34,211,238,0.55), rgba(59,130,246,0.25), rgba(168,85,247,0.18), transparent 70%)",
        }}
        animate={{ opacity: [0.12, 0.42, 0.12], scale: [0.95, 1.1, 0.95] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full"
          style={{
            left: `${origin.l}%`,
            top: `${origin.t}%`,
            transform: "translate(-50%, -50%)",
            background:
              i % 3 === 0
                ? "rgba(34,211,238,0.85)"
                : i % 3 === 1
                ? "rgba(59,130,246,0.85)"
                : "rgba(168,85,247,0.85)",
          }}
          initial={{ opacity: 0, x: (i - 6) * 4, y: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.8, 0],
            x: [(i - 6) * 4, (i - 6) * 10],
            y: [0, -120 - i * 3],
            scale: [0.8, 1.2, 0.6],
          }}
          transition={{
            duration: 2.6 + (i % 4) * 0.35,
            repeat: Infinity,
            delay: i * 0.08,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Popover with "read more" */}
      {activeSpec && (
        <motion.div
          className="absolute right-6 bottom-6 max-w-[360px] rounded-2xl bg-white/7 border border-white/12 p-4 pointer-events-auto z-50"
          style={{ backdropFilter: "blur(14px)" }}
          initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="hfont font-semibold">{activeSpec.title}</div>
              <div className="text-xs text-white/70">{activeSpec.sub}</div>
            </div>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="text-xs text-white rounded-lg px-2 py-1 bg-white/10 hover:bg-white/15 border border-white/10 transition pointer-events-auto whitespace-nowrap"
            >
              Luk
            </button>
          </div>
          <p className="mt-3 text-sm text-white/75 leading-relaxed">{activeSpec.detail}</p>
        </motion.div>
      )}

      {/* Cards launch once, then draggable within bounds */}
      {CARDS.map((c, idx) => (
        <motion.div
          key={idx}
          className="absolute"
          style={{
            left: `${origin.l}%`,
            top: `${origin.t}%`,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0, scale: 0.65, rotate: -8, filter: "blur(6px)" }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: c.rot,
            filter: "blur(0px)",
            left: `${c.to.l}%`,
            top: `${c.to.t}%`,
          }}
          transition={{ duration: 1.25, delay: c.delay, ease: [0.2, 0.9, 0.2, 1] }}
          drag
          dragConstraints={boundsRef}
          dragElastic={0.5}
          dragMomentum={false}
          whileDrag={{ scale: 1.03, rotate: 0 }}
          onTap={() => setActive(c.key)}
          onDragStart={() => setActive(c.key)}
        >
          <FloatingCard icon={<c.Icon className="h-5 w-5" />} title={c.title} sub={c.sub} />
        </motion.div>
      ))}
    </div>
  );
}

function FloatingCard({
  icon,
  title,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <motion.div
      {...floatSlow}
      className="w-[140px] sm:w-[172px] rounded-2xl bg-white/5 border border-white/10 p-3 sm:p-4 cursor-grab active:cursor-grabbing select-none"
      style={{
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.08), 0 0 40px rgba(59,130,246,0.16), 0 0 80px rgba(168,85,247,0.10)",
        backdropFilter: "blur(14px)",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="text-white/90">{icon}</div>
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-cyan-400/30 via-blue-500/30 to-purple-500/30" />
      </div>
      <div className="mt-3">
        <div className="hfont text-sm font-semibold text-white">{title}</div>
        <div className="mt-1 text-xs text-white/70">{sub}</div>
      </div>
    </motion.div>
  );
}

/** Aladdin-like lamp (SVG) */
function MagicLamp() {
  return (
    <svg
      width="360"
      height="160"
      viewBox="0 0 360 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="lampG" x1="60" y1="30" x2="300" y2="140" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(34,211,238,0.90)" />
          <stop offset="0.45" stopColor="rgba(59,130,246,0.90)" />
          <stop offset="1" stopColor="rgba(168,85,247,0.90)" />
        </linearGradient>
        <filter id="lampGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse cx="180" cy="146" rx="110" ry="10" fill="rgba(0,0,0,0.35)" />

      <g filter="url(#lampGlow)">
        <path d="M238 66C270 66 304 54 324 34" stroke="url(#lampG)" strokeWidth="10" strokeLinecap="round" />
        <path d="M324 34C340 18 348 12 352 18C356 24 346 40 330 50" stroke="url(#lampG)" strokeWidth="10" strokeLinecap="round" />

        <path
          d="M82 112C90 90 118 78 152 78H214C244 78 264 92 264 112C264 122 258 132 248 138C234 146 214 150 190 150H142C114 150 92 142 82 128C76 120 76 116 82 112Z"
          fill="url(#lampG)"
          opacity="0.86"
        />
        <path d="M150 70C160 58 178 52 198 52C220 52 238 60 246 72" stroke="url(#lampG)" strokeWidth="10" strokeLinecap="round" />
        <path d="M96 88C70 88 54 102 54 120C54 138 70 150 92 150" stroke="url(#lampG)" strokeWidth="10" strokeLinecap="round" />
        <path d="M120 102C130 92 150 86 174 86" stroke="rgba(255,255,255,0.35)" strokeWidth="6" strokeLinecap="round" />
      </g>
    </svg>
  );
}
