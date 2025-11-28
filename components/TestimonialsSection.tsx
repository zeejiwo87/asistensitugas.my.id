"use client";

import { useState } from "react";
import { useCopy } from "./LanguageProvider";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const { testimonials } = useCopy();
  const ITEMS = testimonials.items;
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % Math.max(ITEMS.length, 1));
  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? Math.max(ITEMS.length - 1, 0) : prev - 1
    );

  return (
    <section id="testimonials" className="py-14 md:py-20">
      <div className="section-wrapper">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
              {testimonials.eyebrow}
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              {testimonials.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
              {testimonials.subtitle}
            </p>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="mt-8 hidden gap-6 md:grid md:grid-cols-3">
          {ITEMS.map((item) => (
            <article
              key={item.id}
              className="card-surface flex flex-col border-slate-800/90 bg-slate-950/80"
            >
              <Quote className="h-6 w-6 text-brand-gold" />
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                “{item.quote}”
              </p>
              <div className="mt-4 flex items-center justify-between gap-2 text-xs">
                <div>
                  <p className="font-semibold text-slate-100">{item.name}</p>
                  <p className="text-[11px] text-slate-400">{item.role}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-brand-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-brand-gold" />
                  ))}
                </div>
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
              {ITEMS.map((item) => (
                <div key={item.id} className="w-full shrink-0 px-4 py-6">
                  <article className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/90 p-4">
                    <Quote className="h-6 w-6 text-brand-gold" />
                    <p className="text-sm leading-relaxed text-slate-200">
                      “{item.quote}”
                    </p>
                    <div className="mt-1 flex items-center justify-between gap-2 text-xs">
                      <div>
                        <p className="font-semibold text-slate-100">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {item.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-brand-gold">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-brand-gold" />
                        ))}
                      </div>
                    </div>
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
