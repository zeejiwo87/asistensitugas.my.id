"use client";

import { useCopy } from "./LanguageProvider";
import { ArrowRight, ListChecks } from "lucide-react";

export default function ProcessSection() {
  const { process } = useCopy();

  return (
    <section id="process" className="py-14 md:py-20">
      <div className="section-wrapper">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
              {process.eyebrow}
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              {process.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
              {process.subtitle}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-[11px] text-slate-300">
            <ListChecks className="h-3.5 w-3.5 text-brand-gold" />
            <span>Step-by-step dengan update berkala.</span>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {process.steps.map((step, index) => (
            <article
              key={step.id}
              className="relative flex flex-col gap-2 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 text-xs text-slate-300"
            >
              <div className="mb-1 flex items-center justify-between gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-slate-50">
                  {index + 1}
                </span>
                {index < process.steps.length - 1 && (
                  <ArrowRight className="h-3 w-3 text-slate-600" />
                )}
              </div>
              <h3 className="text-[11px] font-semibold text-slate-100">
                {step.title}
              </h3>
              <p className="text-[11px] leading-relaxed text-slate-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
