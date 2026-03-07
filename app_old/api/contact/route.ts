import { NextResponse } from "next/server";
import { getResend } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const { message, email, lang } = await req.json();

    if (typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from) {
      return NextResponse.json({ ok: false, error: "Missing env" }, { status: 500 });
    }

    const resend = getResend();

    const subject =
      lang === "en"
        ? "New inquiry — SH Software Solutions"
        : "Ny henvendelse — SH Software Solutions";

    const safeEmail = typeof email === "string" ? email.trim() : "";

    await resend.emails.send({
      from,
      to,
      subject,
      text: [
        "New message received:",
        "",
        message.trim(),
        "",
        safeEmail ? `Reply email: ${safeEmail}` : "Reply email: (not provided)",
      ].join("\n"),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
