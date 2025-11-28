"use client";

import { useState } from "react";
import { useCopy } from "./LanguageProvider";
import { CircleHelp, ChevronDown } from "lucide-react";

export default function FAQSection() {
  const { faq } = useCopy();
  const [openId, setOpenId] = useState<string | null>(faq.items[0]?.id ?? null);

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="py-14 md:py-20">
      <div className="section-wrapper">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
              {faq.eyebrow}
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              {faq.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
              {faq.subtitle}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-[11px] text-slate-300">
            <CircleHelp className="h-3.5 w-3.5 text-brand-gold" />
            <span>Kalau masih ragu, chat saja dulu.</span>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          {faq.items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-950/90"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm"
                >
                  <span className="font-medium text-slate-100">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-800/80 px-4 py-3 text-xs leading-relaxed text-slate-300">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
