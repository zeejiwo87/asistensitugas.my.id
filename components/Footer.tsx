"use client";

import { useCopy } from "./LanguageProvider";
import Link from "next/link";

export default function Footer() {
  const { footer } = useCopy();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90">
      <div className="section-wrapper py-6 text-xs text-slate-400">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-slate-200">{footer.tagline}</p>
            <p className="text-[11px] text-slate-500">{footer.builtWith}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="https://github.com/fckveza"
              target="_blank"
              className="text-[11px] text-slate-300 underline-offset-4 hover:text-slate-100 hover:underline"
            >
              {footer.backendRepoLabel}
            </Link>
            <Link
              href="https://github.com/zeejiwo87"
              target="_blank"
              className="text-[11px] text-slate-300 underline-offset-4 hover:text-slate-100 hover:underline"
            >
              {footer.frontendRepoLabel}
            </Link>
          </div>

          <div className="text-[11px] text-slate-500">
            © {year} Asistensitugas.id. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
