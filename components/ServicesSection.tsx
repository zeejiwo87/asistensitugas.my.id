"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpenCheck } from "lucide-react";
import { useCopy } from "./LanguageProvider";

export default function ServicesSection() {
  const { services } = useCopy();
  const ITEMS = services.cards;
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % Math.max(ITEMS.length, 1));
  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? Math.max(ITEMS.length - 1, 0) : prev - 1
    );

  return (
    <section id="services" className="py-14 md:py-20">
      <div className="section-wrapper">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
              {services.eyebrow}
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              {services.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
              {services.subtitle}
            </p>
          </div>
        </div>

        {/* Desktop / tablet grid */}
        <div className="mt-8 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <article
              key={item.id}
              className="card-surface flex flex-col justify-between border-slate-800/90 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brand-teal/50"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-brand-teal/10 px-3 py-1 text-[11px] font-medium text-brand-teal">
                    {item.badge}
                  </span>
                  <BookOpenCheck className="h-4 w-4 text-slate-500" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                {item.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
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
              {ITEMS.map((item) => (
                <div key={item.id} className="w-full shrink-0 px-4 py-5">
                  <article className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950/90 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-brand-teal/10 px-3 py-1 text-[11px] font-medium text-brand-teal">
                        {item.badge}
                      </span>
                      <BookOpenCheck className="h-4 w-4 text-slate-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-50">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300">
                        {item.description}
                      </p>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                      {item.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-gold" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Controls + dots */}
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
