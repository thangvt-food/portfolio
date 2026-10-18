"use client";

import { useLang } from "@/contexts/LanguageContext";
import { projects } from "@/lib/projects";
import ProjectIndex from "@/components/ProjectIndex";
import PageHeader from "@/components/PageHeader";

const getNestedValue = (obj: any, path: string) =>
  path.split(".").reduce((acc, part) => acc?.[part], obj);

export default function Projects() {
  const { t, lang } = useLang();
  const vi = lang === "vi";

  const rows = projects.map((p) => ({
    id: p.id,
    title: getNestedValue(t, p.titleKey),
    desc: getNestedValue(t, p.descKey),
    tech: p.tech,
    image: p.image,
    inProgress: p.inProgress,
    inProgressLabel: t.projects.inProgress,
  }));

  return (
    <div className="paper-grain mx-auto max-w-6xl px-4 pb-24 pt-32 sm:px-6">
      <PageHeader
        index="03"
        eyebrow={vi ? "Danh mục" : "Index"}
        title={t.projects.title}
        subtitle={
          vi
            ? `${projects.length} dự án, xếp theo thứ tự tôi làm ra chúng trong đầu — mỗi dự án bắt đầu từ một vấn đề thật của lớp, của câu lạc bộ, hay của chính tôi.`
            : `${projects.length} projects — each began with a real problem from my class, my club, or myself.`
        }
      />
      <ProjectIndex items={rows} />
      <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">
        {vi ? "Bấm vào từng dự án để xem chi tiết" : "Select a project for details"}
      </p>
    </div>
  );
}
