"use client";

import { FormEvent } from "react";
import { useCopy } from "./LanguageProvider";
import { Mail, Phone, Send, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6285876846768"; // 62 + 85876846768
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function ContactSection() {
  const { contact } = useCopy();
  const waHref = WHATSAPP_BASE_URL;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") || "").toString();
    const contactValue = (data.get("contact") || "").toString();
    const need = (data.get("need") || "").toString();
    const message = (data.get("message") || "").toString();

    // Susun pesan WhatsApp
    const text = `
Halo, saya ${name}.

Kontak: ${contactValue}
Kebutuhan: ${need}

Detail:
${message || "-"}
`.trim();

    const url = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;

    // Buka WhatsApp (app / web)
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }

    form.reset();
  };

  return (
    <section id="contact" className="py-14 md:py-20">
      <div className="section-wrapper grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        {/* Form */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
            {contact.eyebrow}
          </p>
          <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
            {contact.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
            {contact.subtitle}
          </p>
          <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] text-brand-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            <span>{contact.highlight}</span>
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-4 rounded-3xl border border-slate-800/90 bg-slate-950/90 p-5 shadow-soft-lg"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5 text-xs">
                <label className="block text-slate-200">
                  {contact.formNameLabel}
                </label>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
              </div>
              <div className="space-y-1.5 text-xs">
                <label className="block text-slate-200">
                  {contact.formContactLabel}
                </label>
                <input
                  name="contact"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <label className="block text-slate-200">
                {contact.formNeedLabel}
              </label>
              <select
                name="need"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
              >
                {contact.formNeedOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5 text-xs">
              <label className="block text-slate-200">
                {contact.formMessageLabel}
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
              />
            </div>

            <button
              type="submit"
              className="btn-secondary w-full justify-center"
            >
              <Send className="h-4 w-4" />
              <span>{contact.formButton}</span>
            </button>

            <p className="text-[11px] text-slate-500">
              Setelah mengisi form dan klik kirim, kamu akan diarahkan ke
              WhatsApp dengan pesan yang sudah terisi otomatis.
            </p>
          </form>
        </div>

        {/* WhatsApp & info */}
        <div className="space-y-4">
          <div className="card-surface border-slate-800/90 bg-slate-950/90">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-teal/10">
                <MessageCircle className="h-4 w-4 text-brand-teal" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-50">
                  {contact.whatsappTitle}
                </p>
                <p className="text-[11px] text-slate-400">
                  {contact.whatsappDescription}
                </p>
              </div>
            </div>

            <a
              href={`${waHref}?text=${encodeURIComponent(
                "Halo, saya mau konsultasi soal asistensi tugas / pembuatan website / aplikasi premium."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-4 w-full justify-center"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{contact.whatsappButton}</span>
            </a>
          </div>

          <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-4 text-xs text-slate-300">
            <p className="mb-2 font-semibold text-slate-100">
              Kontak alternatif
            </p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <Phone className="h-3.5 w-3.5" />
                <span>WhatsApp: 0858-7684-6768</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <Mail className="h-3.5 w-3.5" />
                <span>Email: (isi sendiri bila diperlukan)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
