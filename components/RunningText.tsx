"use client";

import { useCopy } from "./LanguageProvider";

export default function RunningText() {
  const { runningText } = useCopy();

  const items = [...runningText.items, ...runningText.items];

  return (
    <section
      aria-label="Keunggulan Asistensitugas.id"
      className="mt-2 md:mt-10 lg:mt-14" // 🔹 jarak atas lebih besar di desktop
    >
      <div className="border-y border-slate-800/80 bg-slate-950/90">
        <div className="section-wrapper relative py-3">
          <div className="marquee-gradient-left" />
          <div className="marquee-gradient-right" />
          <div className="overflow-hidden">
            <div className="marquee-track gap-8 text-[11px] font-medium uppercase tracking-wide text-slate-300">
              {items.map((item, idx) => (
                <div
                  key={`${item}-${idx}`}
                  className="flex items-center gap-2"
                >
                  <span className="h-1 w-1 rounded-full bg-brand-gold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
