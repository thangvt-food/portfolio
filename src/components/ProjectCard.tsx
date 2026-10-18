"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderKanban } from "lucide-react";
import { gradientFor, pastelFor } from "@/lib/gradients";

interface ProjectCardProps {
  id: string;
  title: string;
  desc: string;
  tech: string[];
  image?: string;
  demoUrl?: string;
  sourceUrl?: string;
  inProgress?: boolean;
  inProgressLabel?: string;
  index: number;
  dark?: boolean;
}

export default function ProjectCard({
  id,
  title,
  desc,
  tech,
  image,
  inProgress,
  inProgressLabel,
  index,
  dark = false,
}: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = image && !imgError;
  const gradient = gradientFor(index);

  return (
    <Link href={`/projects/${id}`} className="block h-full">
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
        className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] border-2 transition-all duration-300 hover:-translate-y-1.5 hover:rotate-[-0.5deg] ${
          dark
            ? "border-white/10 bg-white/[0.06] text-white shadow-none hover:border-fuchsia-400/50 hover:shadow-[0_24px_48px_-20px_rgba(217,70,239,0.45)]"
            : "border-violet-100 bg-white shadow-[0_4px_20px_rgba(27,16,53,0.05)] hover:border-fuchsia-200 hover:shadow-[0_24px_48px_-20px_rgba(217,70,239,0.4)]"
        }`}
      >
        <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${gradient}`}>
          {showImage ? (
            <>
              <img
                src={image}
                alt={title}
                onError={() => setImgError(true)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-25`} />
            </>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-white">
              <FolderKanban className="h-11 w-11 drop-shadow" />
              <span className="max-w-[85%] text-center text-sm font-black drop-shadow">{title}</span>
            </div>
          )}
          {inProgress && (
            <span className="absolute left-3 top-3 rotate-[-2deg] rounded-full bg-amber-400 px-3 py-1 text-[11px] font-black text-amber-950 shadow-lg">
              ● {inProgressLabel ?? "WIP"}
            </span>
          )}
          <span className="absolute right-3 top-3 flex h-9 w-9 rotate-45 items-center justify-center rounded-full bg-white text-ink opacity-0 shadow-lg transition-all duration-300 group-hover:rotate-0 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className={`mb-1.5 text-base font-extrabold leading-snug ${dark ? "text-white" : ""}`}>{title}</h3>
          <p className={`mb-4 line-clamp-2 text-sm leading-relaxed ${dark ? "text-white/65" : "text-text-secondary"}`}>{desc}</p>
          <div className="mt-auto flex flex-wrap gap-1.5">
            {tech.map((item, ti) => (
              <span key={item} className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${dark ? "bg-white/10 text-white/80" : pastelFor(ti + index)}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
