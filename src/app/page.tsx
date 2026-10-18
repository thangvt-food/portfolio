"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { projects } from "@/lib/projects";
import ProjectIndex from "@/components/ProjectIndex";

const getNestedValue = (obj: any, path: string) =>
  path.split(".").reduce((acc, part) => acc?.[part], obj);

function SectionHead({ index, vi, en, lang }: { index: string; vi: string; en: string; lang: string }) {
  return (
    <div className="mb-10 flex items-baseline justify-between border-b-2 border-ink pb-4">
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{lang === "vi" ? vi : en}</h2>
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-secondary">
        <span className="mr-2 text-lotus">{index}</span>
        {lang === "vi" ? "Mục" : "Section"} {index}
      </span>
    </div>
  );
}

export default function Home() {
  const { t, lang } = useLang();
  const vi = lang === "vi";

  const notes = [
    {
      title: vi ? "Từ ruộng đồng Đồng Tháp" : "From the fields of Dong Thap",
      body: vi
        ? "Lớn lên giữa vùng nông sản Đồng bằng sông Cửu Long, tôi chọn học Bảo quản & chế biến nông sản và Vi sinh thực phẩm tại Đại học Nông Lâm TP.HCM — ngành học bắt đầu từ chính nơi mình sinh ra."
        : "Growing up among the Mekong Delta's farmland, I chose to study Agricultural Preservation & Processing and Food Microbiology at Nong Lam University, Ho Chi Minh City — a field that starts where I come from.",
    },
    {
      title: vi ? "Làm sản phẩm cùng AI" : "Making products with AI",
      body: vi
        ? "Tôi không chế tạo AI. Tôi cộng tác với AI agent như một đồng nghiệp: tôi giữ phần ý tưởng, chuyên môn và quyết định cuối cùng; AI hỗ trợ thực thi nhanh hơn. Sản phẩm là thật, và trách nhiệm về nó là của tôi."
        : "I don't build AI. I cowork with AI agents as collaborators: I keep the ideas, the domain expertise and the final decisions; AI helps execute faster. The products are real, and the responsibility for them is mine.",
    },
    {
      title: vi ? "Cho tập thể trước tiên" : "For the collective first",
      body: vi
        ? "Dự án đầu tay của tôi không phải để trưng bày — đó là web quản lý hoạt động Đoàn – Hội cho chính lớp DH23VT, và website cho FiRE English Club. Làm cho người mình biết, việc mình thấy mỗi ngày."
        : "My first projects weren't for show — a union management web app for my own class DH23VT, and a website for the FiRE English Club. Built for people I know, for work I see every day.",
    },
  ];

  const projectRows = projects.map((p) => ({
    id: p.id,
    title: getNestedValue(t, p.titleKey),
    desc: getNestedValue(t, p.descKey),
    tech: p.tech,
    image: p.image,
    inProgress: p.inProgress,
    inProgressLabel: t.projects.inProgress,
  }));

  return (
    <div className="paper-grain">
      {/* ——— Hero ——— */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 sm:pt-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-text-secondary">
              <span className="mr-2 text-lotus">●</span>
              {t.hero.greeting} — {vi ? "hồ sơ một sinh viên công nghệ thực phẩm" : "profile of a food technology student"}
            </p>
            <h1 className="mt-6 font-display text-[56px] font-semibold leading-[1.02] tracking-tight sm:text-[84px]">
              Hồ Quốc{" "}
              <em className="text-primary">Thắng</em>
            </h1>
            <p className="mt-5 font-display text-[22px] italic leading-snug text-text-secondary sm:text-2xl">
              {t.hero.tagline}.
            </p>
            <p className="mt-7 max-w-xl text-[17px] leading-[1.75] text-text/85">{t.about.bio}</p>

            <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4">
              {[
                { k: vi ? "Trường" : "University", v: vi ? "ĐH Nông Lâm TP.HCM" : "Nong Lam Univ." },
                { k: vi ? "Quê quán" : "From", v: t.about.from },
                { k: vi ? "Lớp" : "Class", v: "DH23VT" },
                { k: "GPA", v: "3.36 / 4" },
              ].map((f) => (
                <div key={f.k}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">{f.k}</dt>
                  <dd className="mt-1.5 text-[15px] font-semibold">{f.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                {vi ? "Xem các dự án" : "View projects"} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold underline decoration-lotus decoration-2 underline-offset-8 transition-colors hover:text-primary"
              >
                {vi ? "Đọc thêm về tôi" : "More about me"}
              </Link>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -right-3 -top-3 h-full w-full border border-primary/30" aria-hidden />
              <Image
                src="/images/avatar.jpeg"
                alt={t.hero.name}
                width={560}
                height={700}
                className="relative aspect-[4/5] w-full object-cover"
                priority
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">
              <span>{t.hero.name}</span>
              <span>{t.about.from} — VN</span>
            </figcaption>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{t.about.status}.</p>
          </motion.figure>
        </div>
      </section>

      {/* ——— Notes ——— */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <SectionHead index="01" vi="Ghi chép" en="Field notes" lang={lang} />
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {notes.map((n, i) => (
            <motion.article
              key={n.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border-t-2 border-ink pt-5"
            >
              <p className="font-mono text-xs text-lotus">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-[22px] font-semibold leading-snug tracking-tight">{n.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-text-secondary">{n.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ——— Projects index ——— */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <SectionHead index="02" vi="Dự án" en="Projects" lang={lang} />
        <ProjectIndex items={projectRows.slice(0, 5)} />
        <div className="mt-8 text-right">
          <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-lotus decoration-2 underline-offset-8 hover:text-primary">
            {vi ? `Tất cả ${projects.length} dự án` : `All ${projects.length} projects`} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ——— Working principle ——— */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-secondary">
            <span className="mr-2 text-lotus">✳</span>
            {t.about.workStyle}
          </p>
          <blockquote className="mt-6 max-w-4xl font-display text-[28px] font-medium italic leading-[1.4] tracking-tight sm:text-[38px]">
            “{t.about.workValues[1]}”
          </blockquote>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-text-secondary">
            — {t.hero.name}
          </p>
        </div>
      </section>

      {/* ——— Capabilities, compact ——— */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHead index="03" vi="Năng lực" en="Capabilities" lang={lang} />
        <div className="grid gap-12 md:grid-cols-2">
          {[
            { title: t.skills.foodtech, items: [t.skills.items.preservation, t.skills.items.microbiology, t.skills.items.word, t.skills.items.powerpoint, t.skills.items.excel, t.skills.items.access] },
            { title: t.skills.tech, items: [t.skills.items.aiagent, t.skills.items.webdev, t.skills.items.qrscan, t.skills.items.banking] },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="mb-2 font-display text-xl font-semibold">{col.title}</h3>
              <ul>
                {col.items.map((s) => (
                  <li key={s} className="border-b border-border py-3 text-[15px] text-text/85">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/skills" className="inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-lotus decoration-2 underline-offset-8 hover:text-primary">
            {vi ? "Trang kỹ năng đầy đủ" : "Full skills page"} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
