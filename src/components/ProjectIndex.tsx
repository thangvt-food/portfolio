"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export interface ProjectRowData {
  id: string;
  title: string;
  desc: string;
  tech: string[];
  image?: string;
  inProgress?: boolean;
  inProgressLabel?: string;
}

export default function ProjectIndex({
  items,
  startIndex = 0,
}: {
  items: ProjectRowData[];
  startIndex?: number;
}) {
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  return (
    <div className="border-t border-border">
      {items.map((p, i) => {
        const n = startIndex + i;
        const showImage = p.image && !errors[p.id];
        return (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
          >
            <Link
              href={`/projects/${p.id}`}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-border py-6 transition-colors hover:bg-surface sm:grid-cols-[56px_1fr_150px_32px] sm:gap-6 sm:py-7"
            >
              <span className="pl-1 font-mono text-sm text-lotus sm:pl-2">
                {String(n + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-display text-[22px] font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary sm:text-[26px]">
                    {p.title}
                  </span>
                  {p.inProgress && (
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-lotus">
                      ● {p.inProgressLabel ?? "WIP"}
                    </span>
                  )}
                </span>
                <span className="mt-1.5 block max-w-xl truncate text-[15px] text-text-secondary sm:whitespace-normal">
                  {p.desc}
                </span>
                <span className="mt-2.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-text-secondary/80">
                  {p.tech.join(" · ")}
                </span>
              </span>
              <span className="hidden h-[92px] w-[150px] overflow-hidden sm:block">
                {showImage ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    onError={() => setErrors((e) => ({ ...e, [p.id]: true }))}
                    className="h-full w-full object-cover grayscale-[35%] transition duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center bg-primary-soft px-3 text-center font-display text-sm italic text-primary">
                    {p.title}
                  </span>
                )}
              </span>
              <span className="pr-1 text-text-secondary transition-all group-hover:translate-x-1 group-hover:text-primary sm:pr-2">
                <ArrowRight className="hidden h-5 w-5 sm:block" />
                <ArrowUpRight className="h-5 w-5 sm:hidden" />
              </span>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
