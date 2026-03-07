import { Resend } from "resend";
import fs from "node:fs";
import path from "node:path";

function parseResendKeyFromEnvFile(filePath: string) {
  if (!fs.existsSync(filePath)) return "";
  const text = fs.readFileSync(filePath, "utf8");
  const match = text
    .split(/\r?\n/)
    .map((entry) => entry.replace(/^\uFEFF/, "").trim())
    .map((entry) => entry.match(/^RESEND_API_KEY\s*=\s*(.+)$/i))
    .find((entry) => Boolean(entry));

  if (!match || !match[1]) return "";
  return match[1]
    .trim()
    .replace(/^['"]|['"]$/g, "");
}

export function getResend() {
  const directKey = process.env.RESEND_API_KEY;

  const fallbackKey = Object.entries(process.env).find(([name, value]) => {
    if (typeof value !== "string" || value.trim().length === 0) return false;
    const normalizedName = name.replace(/^\uFEFF/, "").trim();
    return normalizedName === "RESEND_API_KEY";
  })?.[1];

  const cwd = process.cwd();
  const fileFallbackKey = [
    path.join(cwd, ".env.local"),
    path.join(cwd, "..", ".env.local"),
    path.join(cwd, "sh-software-solutions", ".env.local"),
  ]
    .map((candidatePath) => parseResendKeyFromEnvFile(candidatePath))
    .find((candidate) => candidate.length > 0);

  const key = [directKey, fallbackKey, fileFallbackKey]
    .find((candidate) => typeof candidate === "string" && candidate.trim().length > 0)
    ?.trim()
    .replace(/^['"]|['"]$/g, "") ?? "";

  if (!key) throw new Error("Missing RESEND_API_KEY");
  return new Resend(key);
}
