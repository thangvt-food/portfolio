"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { projects } from "@/lib/projects";
import AwingDetail from "@/components/projects/AwingDetail";
import AwingMobileDetail from "@/components/projects/AwingMobileDetail";

const getNestedValue = (obj: any, path: string) =>
  path.split(".").reduce((acc, part) => acc?.[part], obj);

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { t, lang } = useLang();
  const vi = lang === "vi";
  const [imgError, setImgError] = useState(false);

  if (slug === "awing") return <AwingDetail />;
  if (slug === "awing-mobile") return <AwingMobileDetail />;

  const idx = projects.findIndex((p) => p.id === slug);
  const project = projects[idx];

  if (!project) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-6xl items-center justify-center px-4 pt-16">
        <div className="text-center">
          <h1 className="font-display text-4xl font-semibold">{vi ? "Không tìm thấy dự án" : "Project not found"}</h1>
          <Link href="/projects" className="mt-4 inline-block font-semibold text-primary underline decoration-lotus decoration-2 underline-offset-8">
            &larr; {vi ? "Quay lại danh mục dự án" : "Back to the project index"}
          </Link>
        </div>
      </div>
    );
  }

  const title = getNestedValue(t, project.titleKey);
  const desc = getNestedValue(t, project.descKey);

  const specs: [string, string][] = [
    [vi ? "Công nghệ" : "Stack", project.tech.join(" · ")],
    [vi ? "Trạng thái" : "Status", project.inProgress ? t.projects.inProgress : vi ? "Đã hoàn thành" : "Completed"],
    [vi ? "Mã dự án" : "Reference", `PRJ — ${String(idx + 1).padStart(2, "0")}`],
  ];

  return (
    <div className="paper-grain mx-auto max-w-6xl px-4 pb-24 pt-32 sm:px-6">
      <Link href="/projects" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-secondary transition-colors hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> {t.nav.projects}
      </Link>

      <header className="mt-10 border-b-2 border-ink pb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-secondary">
          <span className="mr-2 text-lotus">{String(idx + 1).padStart(2, "0")}</span>
          {vi ? "Hồ sơ dự án" : "Project record"}
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl font-display text-xl italic leading-relaxed text-text-secondary">{desc}</p>
      </header>

      <div className="mt-12 grid items-start gap-12 lg:grid-cols-12">
        <figure className="lg:col-span-7">
          {project.image && !imgError ? (
            <img src={project.image} alt={title} onError={() => setImgError(true)} className="aspect-[16/10] w-full border border-border object-cover" />
          ) : (
            <div className="flex aspect-[16/10] w-full items-center justify-center border border-border bg-primary-soft px-8 text-center font-display text-2xl italic text-primary">
              {title}
            </div>
          )}
          <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">
            {title} — {project.tech[0]}
          </figcaption>
        </figure>

        <div className="lg:col-span-5">
          <dl className="border-t border-border">
            {specs.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[120px_1fr] gap-4 border-b border-border py-4">
                <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">{k}</dt>
                <dd className="text-[15px] font-medium leading-relaxed">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-white hover:bg-primary-dark">
                {t.projects.viewDemo} <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.sourceUrl && (
              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 text-sm font-semibold underline decoration-lotus decoration-2 underline-offset-8 hover:text-primary">
                {t.projects.viewSource} <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            <Link href="/contact" className="inline-flex w-fit items-center gap-2 text-sm font-semibold underline decoration-border decoration-2 underline-offset-8 hover:text-primary hover:decoration-lotus">
              {vi ? "Hỏi thêm về dự án này" : "Ask about this project"} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
