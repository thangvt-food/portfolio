"use client";

import { motion } from "framer-motion";

export default function PageHeader({
  index,
  eyebrow,
  title,
  subtitle,
}: {
  index?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mb-14 border-b-2 border-ink pb-8"
    >
      {(index || eyebrow) && (
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-text-secondary">
          {index && <span className="mr-2 text-lotus">{index}</span>}
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl">{title}</h1>
      {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">{subtitle}</p>}
    </motion.div>
  );
}
