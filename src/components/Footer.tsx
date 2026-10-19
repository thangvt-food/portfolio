"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="bg-primary-dark text-[#EDEBE3]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              {lang === "vi" ? "Liên hệ" : "Contact"}
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=quocthangk23vt.food@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 inline-flex items-center gap-2 font-display text-3xl font-semibold tracking-tight underline decoration-white/30 underline-offset-8 transition-colors hover:decoration-lotus sm:text-4xl"
            >
              {lang === "vi" ? "Gửi email cho tôi" : "Send me an email"}
              <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <p className="mt-3 font-mono text-[13px] tracking-[0.03em] text-white/60">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=quocthangk23vt.food@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-lotus"
              >
                quocthangk23vt.food@gmail.com
              </a>
            </p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/60">
              Food Tech Engineer × Making Products with AI — {t.about.status} · {t.about.school}.
            </p>
          </div>
          <nav className="flex flex-col gap-2 font-mono text-[11.5px] uppercase tracking-[0.14em]" aria-label="Footer">
            {[
              { href: "/about", label: t.nav.about },
              { href: "/skills", label: t.nav.skills },
              { href: "/projects", label: t.nav.projects },
              { href: "/contact", label: t.nav.contact },
            ].map((l, i) => (
              <Link key={l.href} href={l.href} className="text-white/60 transition-colors hover:text-white">
                <span className="mr-2 text-[9px] text-lotus">0{i + 1}</span>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-white/40 sm:flex-row sm:justify-between">
          <span>{t.footer.copyright}</span>
          <span>Đồng Tháp — Việt Nam</span>
        </div>
      </div>
    </footer>
  );
}
