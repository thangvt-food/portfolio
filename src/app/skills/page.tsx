"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import PageHeader from "@/components/PageHeader";

export default function Skills() {
  const { t, lang } = useLang();
  const vi = lang === "vi";

  const groups = [
    {
      title: t.skills.foodtech,
      note: vi
        ? "Nền tảng chuyên môn — học từ giảng đường và thực hành, gắn với nông sản Đồng bằng sông Cửu Long."
        : "The professional foundation — learned in class and in practice, rooted in Mekong Delta agriculture.",
      items: [
        [t.skills.items.preservation, vi ? "Chuyên ngành" : "Specialty"],
        [t.skills.items.microbiology, vi ? "Chuyên ngành" : "Specialty"],
        [t.skills.items.word, "Office"],
        [t.skills.items.powerpoint, "Office"],
        [t.skills.items.excel, "Office"],
        [t.skills.items.access, "Office"],
      ] as [string, string][],
    },
    {
      title: t.skills.tech,
      note: vi
        ? "Phần tôi tự học thêm để biến ý tưởng thành sản phẩm — luôn cộng tác cùng AI, không thay thế chuyên môn."
        : "Self-taught on top of my major to turn ideas into products — always coworking with AI, never replacing expertise.",
      items: [
        [t.skills.items.aiagent, "AI"],
        [t.skills.items.webdev, "Web"],
        [t.skills.items.qrscan, vi ? "Ứng dụng" : "Applied"],
        [t.skills.items.banking, vi ? "Ứng dụng" : "Applied"],
      ] as [string, string][],
    },
  ];

  return (
    <div className="paper-grain mx-auto max-w-6xl px-4 pb-24 pt-32 sm:px-6">
      <PageHeader
        index="02"
        eyebrow={vi ? "Năng lực" : "Capabilities"}
        title={t.skills.title}
        subtitle={vi ? "Hai mảng tưởng xa nhau — Công nghệ Thực phẩm và công nghệ số — gặp nhau ở một điểm: làm ra thứ dùng được thật." : "Two seemingly distant fields — Food Technology and digital tech — meet at one point: making things that actually work."}
      />

      <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
        {groups.map((g, gi) => (
          <motion.section
            key={g.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.08 }}
          >
            <p className="font-mono text-xs text-lotus">{String(gi + 1).padStart(2, "0")}</p>
            <h2 className="mt-2 font-display text-[28px] font-semibold tracking-tight">{g.title}</h2>
            <p className="mb-6 mt-2 max-w-md leading-relaxed text-text-secondary">{g.note}</p>
            <ul className="border-t border-border">
              {g.items.map(([name, kind]) => (
                <li key={name} className="flex items-baseline justify-between gap-4 border-b border-border py-3.5">
                  <span className="text-[15.5px] font-medium">{name}</span>
                  <span className="shrink-0 font-mono text-[10.5px] uppercase tracking-[0.14em] text-text-secondary">{kind}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 border-t-2 border-ink pt-8"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold">{vi ? "Công cụ & cộng đồng" : "Tools & community"}</h3>
            <p className="mt-3 leading-[1.75] text-text-secondary">
              {t.skills.items.tools} — {vi ? "các kênh liên lạc và cộng tác hằng ngày." : "everyday communication and collaboration channels."}
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">{vi ? "Kênh nội dung" : "Content channels"}</h3>
            <p className="mt-3 leading-[1.75] text-text-secondary">
              {t.skills.items.media} — {vi ? "nơi tôi chia sẻ và học hỏi từ cộng đồng." : "where I share and learn from the community."}
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
