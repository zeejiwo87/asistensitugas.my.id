"use client";

import { useCopy } from "./LanguageProvider";
import { motion } from "framer-motion";
import { Code2, ArrowUpRight, CheckCircle2 } from "lucide-react";

const WHATSAPP_NUMBER = "6285876846768";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WebDevHighlight() {
  const { webdev } = useCopy();

  const waHref = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    `${webdev.title} - ${webdev.highlight}`
  )}`;

  const popularId = "business";

  return (
    <section id="website" className="py-14 md:py-20">
      <div className="section-wrapper space-y-10 md:space-y-12">
        {/* ROW 1: Copy utama + note */}
        <motion.div
          className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Kiri: copy + CTA */}
          <div className="space-y-4 md:space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-teal/40 bg-slate-950/80 px-3 py-1 text-[11px] md:text-xs text-brand-teal">
              <Code2 className="h-3 w-3 md:h-4 md:w-4" />
              <span>{webdev.eyebrow}</span>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
                {webdev.title}
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
                {webdev.subtitle}
              </p>
            </div>

            <p className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] md:text-xs font-medium text-brand-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              <span>{webdev.highlight}</span>
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs md:text-sm"
              >
                <span>{webdev.primaryCta}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#pricing"
                className="btn-secondary text-xs md:text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("pricing");
                  if (!el) return;
                  const offset = 88;
                  const rect = el.getBoundingClientRect();
                  const targetY = rect.top + window.scrollY - offset;
                  window.scrollTo({ top: targetY, behavior: "smooth" });
                }}
              >
                {webdev.secondaryCta}
              </a>
            </div>
          </div>

          {/* Kanan: note / konteks */}
          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4 md:p-5 lg:p-6 text-[11px] md:text-xs lg:text-sm text-slate-300 shadow-soft-lg">
            <p className="mb-2 text-xs font-semibold text-slate-100 md:text-sm">
              Kenapa dibuat khusus?
            </p>
            <p className="leading-relaxed text-slate-300">
              {webdev.note}
            </p>
            <div className="mt-4 grid gap-3 text-[11px] md:text-xs lg:text-sm">
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-3 py-2">
                <span className="text-slate-400">Mulai dari</span>
                <span className="font-semibold text-brand-gold">
                  {webdev.packages?.[0]?.priceLabel ?? "Mulai 1 jutaan"}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-3 py-2">
                <span className="text-slate-400">Pilihan paket</span>
                <span className="font-semibold text-slate-100">
                  {webdev.packages.length}+ paket fleksibel
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ROW 2: Paket website */}
        <motion.div
          className="relative overflow-hidden rounded-4xl border border-slate-800/90 bg-slate-950/95 p-5 md:p-7 lg:p-8 shadow-soft-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        >
          {/* glow background */}
          <div className="pointer-events-none absolute inset-x-[-120px] top-[-120px] h-64 bg-radial from-brand-teal/18 via-transparent to-transparent blur-3xl" />
          <div className="pointer-events-none absolute inset-x-[-120px] bottom-[-120px] h-64 bg-radial from-brand-gold/12 via-transparent to-transparent blur-3xl" />

          <div className="relative flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-teal">
                Paket website siap pakai
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-50 md:text-base">
                Pilih paket sesuai tahap bisnismu
              </h3>
              <p className="mt-1 text-[11px] text-slate-400 md:text-xs">
                Dari landing page sederhana sampai website bisnis yang lebih
                kompleks.
              </p>
            </div>
            <p className="text-[11px] text-slate-400 md:text-xs">
              * Paket bisa dikustom sesuai kebutuhan. Detail lengkap akan
              dibahas saat konsultasi.
            </p>
          </div>

          {/* cards: scroll di mobile, grid di desktop */}
          <div className="relative mt-5">
            <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible">
              {webdev.packages.map((pkg) => {
                const isPopular = pkg.id === popularId;

                return (
                  <div
                    key={pkg.id}
                    className={`flex min-w-[260px] flex-col rounded-2xl border bg-slate-950/90 p-4 md:min-w-0 md:p-5 lg:p-6 text-[11px] md:text-xs lg:text-sm shadow-soft-lg transition hover:-translate-y-1 ${
                      isPopular
                        ? "border-brand-teal/70 shadow-[0_0_25px_rgba(45,212,191,0.25)]"
                        : "border-slate-800/80"
                    }`}
                  >
                    <div className="mb-3 flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[11px] md:text-xs lg:text-sm font-semibold text-slate-100">
                          {pkg.name}
                        </p>
                        <p className="text-[11px] md:text-xs lg:text-[13px] text-slate-400">
                          {pkg.tag}
                        </p>
                      </div>
                      {isPopular && (
                        <span className="rounded-full bg-brand-teal/15 px-2 py-0.5 text-[10px] md:text-[11px] font-semibold uppercase tracking-wide text-brand-teal">
                          Populer
                        </span>
                      )}
                    </div>

                    <p className="text-[11px] md:text-xs lg:text-sm font-semibold text-brand-gold">
                      {pkg.priceLabel}
                    </p>

                    <p className="mt-1 text-[11px] md:text-xs lg:text-[13px] text-slate-300">
                      {pkg.description}
                    </p>

                    <ul className="mt-3 space-y-1.5 text-[11px] md:text-xs lg:text-[13px] text-slate-300">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-px h-3.5 w-3.5 text-brand-teal" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
