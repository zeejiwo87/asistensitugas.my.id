"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Laptop, GraduationCap, PlayCircle } from "lucide-react";
import { useCopy } from "./LanguageProvider";

const WHATSAPP_NUMBER = "6285876846768";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function HeroSection() {
  const { hero } = useCopy();

  const waHref = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    hero.waTemplate
  )}`;

  return (
    <section id="hero" className="py-3 md:py-16">
      <div className="section-wrapper grid items-center gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        {/* Left: copy */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/70 px-3 py-1 text-[11px] text-slate-300 shadow-soft-lg">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-teal" />
            <span>{hero.badge}</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl lg:text-5xl">
              {hero.title}
            </h1>
            <p className="max-w-xl text-balance text-sm leading-relaxed text-slate-300 md:text-base">
              {hero.subtitle}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-brand-teal/40 bg-brand-teal/10 px-3 py-1 text-[11px] font-medium text-brand-teal">
            <Laptop className="h-3 w-3" />
            <span>{hero.highlight}</span>
          </div>

          <ul className="space-y-1.5 text-sm text-slate-300">
            {hero.points.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-gold" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          {/* CTA: selalu samping-sampingan, termasuk mobile */}
          <div className="flex items-center gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="btn-primary flex-1 min-w-0 justify-center text-xs sm:text-sm"
            >
              <PlayCircle className="h-4 w-4" />
              <span>{hero.primaryCta}</span>
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("pricing");
                if (!el) return;
                const offset = 88;
                const rect = el.getBoundingClientRect();
                const targetY = rect.top + window.scrollY - offset;
                window.scrollTo({ top: targetY, behavior: "smooth" });
              }}
              className="btn-secondary flex-1 min-w-0 justify-center text-xs sm:text-sm"
            >
              <span>{hero.secondaryCta}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
            <div className="inline-flex items-center gap-2">
              <GraduationCap className="h-3.5 w-3.5 text-brand-gold" />
              <span>Asistensi tugas SMA – Kuliah – PascaSarjana</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Laptop className="h-3.5 w-3.5 text-brand-teal" />
              <span>Website modern & akun aplikasi premium</span>
            </div>
          </div>
        </motion.div>

        {/* Right: illustration */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 rounded-[2.5rem] bg-linear-to-br from-brand-teal/10 via-slate-900/20 to-brand-gold/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-4xl border border-slate-800/80 bg-slate-950/80 shadow-soft-lg">
              <div className="relative h-64 w-full md:h-80">
                <Image
                  src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80"
                  alt="Student and mentor discussing assignments in front of a laptop"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              </div>
              <div className="space-y-3 px-5 pb-5 pt-4 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium text-brand-teal">
                      Asistensitugas.id
                    </p>
                    <p className="text-xs text-slate-300">
                      1:1 guidance • Web dev • Premium apps
                    </p>
                  </div>
                  <div className="rounded-full bg-slate-900/90 px-3 py-1 text-[11px] text-slate-200">
                    Live via chat / call
                  </div>
                </div>
                <div className="grid gap-3 text-xs text-slate-200 md:grid-cols-2">
                  <div className="rounded-2xl bg-slate-900/80 p-3 ring-1 ring-slate-800/80">
                    <p className="mb-1 text-[11px] font-semibold text-slate-100">
                      Assignment & review
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Share your draft, get structured feedback and clear
                      explanations.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-900/80 p-3 ring-1 ring-slate-800/80">
                    <p className="mb-1 text-[11px] font-semibold text-slate-100">
                      Website & premium apps
                    </p>
                    <p className="text-[11px] text-slate-400">
                      From landing pages to Netflix, Spotify, Canva, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
