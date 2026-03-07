"use client";

import { useEffect, useMemo, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { getText } from "@/lib/i18n";
import { X } from "lucide-react";

export function ContactModal({
  lang,
  open,
  onClose,
}: {
  lang: Lang;
  open: boolean;
  onClose: () => void;
}) {
  const t = useMemo(() => getText(lang), [lang]);
  const [message, setMessage] = useState<string>(t.modal.placeholder);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const emailIsValid = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()), [email]);
  const canSubmit = useMemo(() => message.trim().length > 0 && emailIsValid, [message, emailIsValid]);

  useEffect(() => {
    if (open) {
      setStatus("idle");
      setMessage(t.modal.placeholder);
      setEmail("");
      setErrorMessage("");
    }
  }, [open, t.modal.placeholder]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  async function submit() {
    if (!canSubmit) return;
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message, email, lang }),
      });
      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        const apiError =
          payload && typeof payload.error === "string" && payload.error.length > 0
            ? payload.error
            : "Request failed";
        throw new Error(apiError);
      }
      setStatus("sent");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      setErrorMessage(message);
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-xl rounded-2xl glass glow p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="hfont text-xl font-semibold">{t.modal.title}</h3>
              <p className="mt-1 text-sm text-white/70">{t.modal.hint}</p>
            </div>
            <button className="p-2 rounded-xl hover:bg-white/5 transition" onClick={onClose} aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 grid gap-3">
            <label className="text-sm text-white/70">{t.modal.emailLabel}</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/20"
              placeholder="name@company.com"
            />
            {!emailIsValid && email.trim().length > 0 && (
              <span className="text-sm text-red-300">{t.modal.emailInvalid}</span>
            )}

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={7}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/20"
            />

            <div className="flex items-center gap-3">
              <button
                onClick={submit}
                disabled={status === "sending" || !canSubmit}
                className="hfont rounded-xl px-5 py-3 bg-gradient-to-r from-cyan-400/90 via-blue-500/90 to-purple-500/90 text-black font-semibold hover:opacity-95 transition disabled:opacity-60"
              >
                {status === "sending" ? t.modal.sending : t.modal.send}
              </button>

              {status === "sent" && <span className="text-sm text-emerald-300">{t.modal.sent}</span>}
              {status === "error" && (
                <span className="text-sm text-red-300">
                  {t.modal.error}
                  {errorMessage ? ` (${errorMessage})` : ""}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
