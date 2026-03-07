import { NextResponse } from "next/server";
import { getResend } from "@/lib/mail";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { message, email, lang } = await req.json();

    if (typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json({ ok: false, error: "Message is too short" }, { status: 400 });
    }

    const to = "shsoftwareudvikling@gmail.com";
    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const safeEmail = typeof email === "string" ? email.trim() : "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(safeEmail)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    const resend = getResend();

    const subject =
      lang === "en"
        ? "New inquiry — SH Software Solutions"
        : "Ny henvendelse — SH Software Solutions";

    const result = await resend.emails.send({
      from,
      to,
      replyTo: safeEmail,
      subject,
      text: [
        "New message received:",
        "",
        message.trim(),
        "",
        `Reply email: ${safeEmail}`,
      ].join("\n"),
    });

    if (result.error) {
      throw new Error(result.error.message || "Resend send failed");
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[contact] send failed:", message);

    return NextResponse.json(
      {
        ok: false,
        error: process.env.NODE_ENV === "development" ? message : "Could not send email",
      },
      { status: 500 }
    );
  }
}
