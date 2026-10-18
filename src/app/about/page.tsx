"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import PageHeader from "@/components/PageHeader";

export default function About() {
  const { t, lang } = useLang();
  const vi = lang === "vi";

  const info: [string, string][] = vi
    ? [
        ["Ngày sinh", t.about.birth],
        ["Quê quán", t.about.from],
        ["Ngành học", t.about.major],
        ["Trường", t.about.school],
        ["Khoa", t.about.faculty],
        ["Chuyên ngành", t.about.specialty],
        ["Chức vụ", t.about.position],
        ["Điểm số", t.about.gpa],
      ]
    : [
        ["Born", t.about.birth],
        ["From", t.about.from],
        ["Major", t.about.major],
        ["University", t.about.school],
        ["Faculty", t.about.faculty],
        ["Specialty", t.about.specialty],
        ["Role", t.about.position],
        ["Grades", t.about.gpa],
      ];

  return (
    <div className="paper-grain mx-auto max-w-6xl px-4 pb-24 pt-32 sm:px-6">
      <PageHeader index="01" eyebrow={vi ? "Hồ sơ" : "Profile"} title={t.about.title} subtitle={t.about.status} />

      <div className="grid items-start gap-12 lg:grid-cols-12">
        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -right-3 -top-3 h-full w-full border border-primary/30" aria-hidden />
            <Image src="/images/avatar.jpeg" alt={t.hero.name} width={520} height={650} className="relative aspect-[4/5] w-full object-cover" priority />
          </div>
          <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">
            {t.hero.name} — {t.about.from}
          </figcaption>
        </motion.figure>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7"
        >
          <p className="font-display text-[22px] font-medium leading-[1.55] tracking-tight text-text/90">
            {t.about.bio}
          </p>

          <dl className="mt-10 border-t border-border">
            {info.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[130px_1fr] gap-4 border-b border-border py-3.5 sm:grid-cols-[170px_1fr]">
                <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">{label}</dt>
                <dd className="text-[15px] font-medium leading-relaxed">{value}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mb-2 mt-14 font-display text-3xl font-semibold tracking-tight">{t.about.workStyle}</h2>
          <div>
            {t.about.workValues.map((value: string, i: number) => (
              <div key={i} className="grid grid-cols-[48px_1fr] gap-4 border-b border-border py-6 first:border-t">
                <span className="font-display text-2xl font-semibold italic text-lotus">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15.5px] leading-[1.75] text-text/85">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
