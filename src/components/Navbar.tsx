"use client";

import { useLang } from "@/contexts/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/skills", label: t.nav.skills },
    { href: "/projects", label: t.nav.projects },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2.5">
          <span className="inline-block h-2.5 w-2.5 translate-y-[-1px] bg-lotus" aria-hidden />
          <span className="font-display text-[19px] font-bold leading-none tracking-tight">
            Hồ Quốc Thắng
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-text-secondary sm:inline">
            Portfolio
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-[11.5px] uppercase tracking-[0.14em] transition-colors ${
                isActive(link.href)
                  ? "text-primary underline decoration-lotus decoration-2 underline-offset-8"
                  : "text-text-secondary hover:text-ink"
              }`}
            >
              <span className="mr-1 text-[9px] text-lotus">0{i + 1}</span>
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="border border-border bg-surface px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-text-secondary transition-colors hover:border-primary hover:text-primary"
            aria-label="Switch language"
          >
            {lang === "vi" ? "VI / EN" : "EN / VI"}
          </button>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="border border-border bg-surface p-2 text-ink md:hidden"
          aria-label="Menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-bg md:hidden"
            aria-label="Mobile"
          >
            <div className="px-4 py-3">
              {links.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-baseline gap-3 border-b border-border/60 py-3 font-mono text-xs uppercase tracking-[0.14em] last:border-0 ${
                    isActive(link.href) ? "text-primary" : "text-text-secondary"
                  }`}
                >
                  <span className="text-[9px] text-lotus">0{i + 1}</span>
                  {link.label}
                </Link>
              ))}
              <button
                onClick={toggleLang}
                className="mb-2 mt-3 border border-border bg-surface px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-text-secondary"
              >
                {lang === "vi" ? "VI / EN" : "EN / VI"}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
