"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import {
  MessageCircle,
  Globe2,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useCopy, useLanguage } from "./LanguageProvider";

const WHATSAPP_NUMBER = "6285876846768";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

// Supaya key pasti cocok dengan t[key]
type NavKey =
  | "services"
  | "website"
  | "premiumApps"
  | "pricing"
  | "process"
  | "testimonials"
  | "faq"
  | "contact";

type NavItem = {
  id: string;
  key: NavKey;
};

const NAV_ITEMS: NavItem[] = [
  { id: "services", key: "services" },
  { id: "website", key: "website" },
  { id: "premium-apps", key: "premiumApps" },
  { id: "pricing", key: "pricing" },
  { id: "process", key: "process" },
  { id: "testimonials", key: "testimonials" },
  { id: "faq", key: "faq" },
  { id: "contact", key: "contact" },
];

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const copy = useCopy();
  const t = copy.navbar;
  const heroCopy = copy.hero;

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const waHref = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    heroCopy.waTemplate
  )}`;

  // Deteksi scroll untuk navbar background
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll saat menu mobile terbuka
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  const handleScroll = useCallback((sectionId: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(sectionId);
    if (!el) return;
    const offset = 88; // kira2 tinggi navbar
    const rect = el.getBoundingClientRect();
    const targetY = rect.top + window.scrollY - offset;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }, []);

  const handleNavClick = (id: string) => {
    handleScroll(id);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled
          ? "border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl"
          : "bg-linear-to-b from-slate-950/95 via-slate-950/80 to-transparent backdrop-blur-lg"
      }`}
    >
      <nav className="section-wrapper flex h-16 items-center justify-between gap-4 md:h-20">
        {/* Left: Brand (pakai logo.svg) */}
        <div className="flex items-center">
          <Link href="/" className="block">
            <Image
              src="/logo.svg"
              alt={t.brand}
              width={500}
              height={250}
              priority
              className="h-14 w-auto md:h-15"
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6 text-xs font-medium text-slate-300">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="inline-flex items-center gap-1 text-xs tracking-wide text-slate-300 transition hover:text-slate-50"
              >
                <span>{t[item.key]}</span>
                {item.id === "website" && (
                  <ChevronDown className="h-3 w-3 text-slate-500" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Language toggle */}
            <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 p-0.5 text-[11px] text-slate-300">
              <button
                type="button"
                onClick={() => setLang("id")}
                className={`flex items-center gap-1 rounded-full px-2.5 py-1 transition ${
                  lang === "id"
                    ? "bg-slate-100 text-slate-950"
                    : "hover:text-slate-50"
                }`}
              >
                <Globe2 className="h-3 w-3" />
                <span>{t.langToggleId}</span>
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-2.5 py-1 transition ${
                  lang === "en"
                    ? "bg-slate-100 text-slate-950"
                    : "hover:text-slate-50"
                }`}
              >
                {t.langToggleEn}
              </button>
            </div>

            {/* CTA */}
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{t.cta}</span>
            </a>
          </div>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setLang(lang === "id" ? "en" : "id")}
            className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-100"
          >
            <Globe2 className="h-3 w-3" />
            <span>{lang === "id" ? t.langToggleEn : t.langToggleId}</span>
          </button>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-100"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-slate-950 md:hidden">
          <div className="section-wrapper pt-4 pb-8">
            {/* Header dalam overlay: brand + tombol X */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <Link href="/" className="block" onClick={() => setOpen(false)}>
                  <Image
                    src="/logo.svg"
                    alt={t.brand}
                    width={500}
                    height={250}
                    priority
                    className="h-12 w-auto"
                  />
                </Link>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-6 shadow-soft-lg">
              <div className="mb-4 text-xs font-medium uppercase tracking-wide text-slate-400">
                Menu
              </div>
              <div className="flex flex-col gap-3">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className="flex items-center justify-between rounded-xl px-2 py-2 text-sm text-slate-100 hover:bg-slate-900"
                  >
                    <span>{t[item.key]}</span>
                    <span className="text-[10px] uppercase tracking-wide text-slate-500">
                      #{item.id}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{t.cta}</span>
                </a>
                <p className="text-[11px] text-slate-400">
                  Kamu bisa kirim file tugas, contoh website, atau screenshot
                  kebutuhanmu langsung lewat WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
