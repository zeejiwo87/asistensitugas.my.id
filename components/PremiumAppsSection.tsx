"use client";

import { useState } from "react";
import { useCopy } from "./LanguageProvider";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Sparkles,
  MonitorSmartphone,
} from "lucide-react";

const WHATSAPP_NUMBER = "6285876846768";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function PremiumAppsSection() {
  const { premiumApps } = useCopy();
  const ITEMS = premiumApps.apps;
  const [activeIndex, setActiveIndex] = useState(0);

  const waHref = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    `${premiumApps.title} – ${premiumApps.cta}`
  )}`;

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % Math.max(ITEMS.length, 1));
  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? Math.max(ITEMS.length - 1, 0) : prev - 1
    );

  return (
    <section id="premium-apps" className="py-14 md:py-20">
      <div className="section-wrapper">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
              {premiumApps.eyebrow}
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              {premiumApps.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
              {premiumApps.subtitle}
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <p className="text-[11px] text-slate-400">{premiumApps.note}</p>
            <a href={waHref} target="_blank" rel="noreferrer" className="btn-secondary">
              <Play className="h-4 w-4" />
              <span>{premiumApps.cta}</span>
            </a>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="mt-8 hidden gap-6 md:grid md:grid-cols-3 lg:grid-cols-5">
          {ITEMS.map((app) => (
            <article
              key={app.id}
              className="card-surface flex flex-col border-slate-800/80 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brand-teal/50"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900">
                    <MonitorSmartphone className="h-3.5 w-3.5 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-slate-50">
                      {app.name}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {app.category}
                    </p>
                  </div>
                </div>
                <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
              </div>
              <p className="text-[11px] leading-relaxed text-slate-300">
                {app.description}
              </p>
              <div className="mt-3 rounded-full bg-slate-900/80 px-3 py-1 text-[10px] text-slate-400">
                * Harga tergantung durasi & tipe paket.
              </div>
            </article>
          ))}
        </div>

        {/* MOBILE: Carousel */}
        <div className="mt-8 md:hidden">
          <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 shadow-soft-lg">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {ITEMS.map((app) => (
                <div key={app.id} className="w-full shrink-0 px-4 py-5">
                  <article className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/90 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900">
                          <MonitorSmartphone className="h-3.5 w-3.5 text-brand-teal" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-slate-50">
                            {app.name}
                          </h3>
                          <p className="text-[11px] text-slate-400">
                            {app.category}
                          </p>
                        </div>
                      </div>
                      <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
                    </div>
                    <p className="text-xs leading-relaxed text-slate-300">
                      {app.description}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      * Pricing depends on duration & plan.
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={prev}
              className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-100"
            >
              <ChevronLeft className="h-3 w-3" />
              <span>Prev</span>
            </button>

            <div className="flex items-center gap-2">
              {ITEMS.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIndex ? "w-4 bg-brand-gold" : "w-1.5 bg-slate-600"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-100"
            >
              <span>Next</span>
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
