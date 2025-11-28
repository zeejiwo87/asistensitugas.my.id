"use client";

import { useCopy } from "./LanguageProvider";
import { CheckCircle2, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "6285876846768";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function PricingSection() {
  const { pricing } = useCopy();

  const waHref = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    pricing.waTemplate
  )}`;

  const cards = [
    {
      id: "assist",
      title: pricing.assistTitle,
      price: pricing.assistPrice,
      tagline: pricing.assistTagline,
      features: pricing.assistFeatures,
      highlight: false,
      cta: pricing.assistCta,
    },
    {
      id: "web",
      title: pricing.webTitle,
      price: pricing.webPrice,
      tagline: pricing.webTagline,
      features: pricing.webFeatures,
      highlight: true,
      cta: pricing.webCta,
    },
    {
      id: "apps",
      title: pricing.appsTitle,
      price: pricing.appsPrice,
      tagline: pricing.appsTagline,
      features: pricing.appsFeatures,
      highlight: false,
      cta: pricing.appsCta,
    },
  ];

  return (
    <section id="pricing" className="py-14 md:py-20">
      <div className="section-wrapper">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
              {pricing.eyebrow}
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              {pricing.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
              {pricing.subtitle}
            </p>
          </div>
          <a href={waHref} target="_blank" rel="noreferrer" className="btn-secondary">
            <span>Diskusi dulu via WhatsApp</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              className={`card-surface flex flex-col justify-between ${
                card.highlight
                  ? "border-brand-teal/60 bg-slate-950"
                  : "border-slate-800/90 bg-slate-950/85"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-400">{card.tagline}</p>
                  </div>
                  {card.highlight && (
                    <span className="rounded-full bg-brand-teal/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-teal">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="text-lg font-semibold text-brand-gold">
                  {card.price}
                </p>
              </div>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                {card.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-brand-teal" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-between rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:border-brand-teal/60 hover:bg-slate-900"
                >
                  <span>{card.cta}</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
