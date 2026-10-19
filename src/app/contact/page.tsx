"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import PageHeader from "@/components/PageHeader";

interface Social {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socials: Social[] = [
  {
    name: "Facebook",
    url: "https://web.facebook.com/pi.colo.125/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@codelor123",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@hot3g-310",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    url: "https://discord.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    url: "https://t.me/picolo125",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: "Zalo",
    url: "https://zalo.me/0339072926",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 14h-9a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const { t, lang } = useLang();
  const vi = lang === "vi";

  return (
    <div className="paper-grain mx-auto max-w-6xl px-4 pb-24 pt-32 sm:px-6">
      <PageHeader
        index="04"
        eyebrow={vi ? "Thư từ" : "Correspondence"}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-secondary">{t.contact.email}</p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=quocthangk23vt.food@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-3 inline-flex flex-wrap items-center gap-3 font-display text-4xl font-semibold tracking-tight underline decoration-border decoration-2 underline-offset-10 transition-colors hover:text-primary hover:decoration-lotus sm:text-6xl"
        >
          {vi ? "Gửi email cho tôi" : "Send me an email"}
          <ArrowUpRight className="h-9 w-9 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
        <p className="mt-5 font-mono text-sm tracking-[0.03em] text-text-secondary sm:text-[15px]">
          <span className="mr-3 text-[11px] uppercase tracking-[0.2em] text-text-secondary/70">Email</span>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=quocthangk23vt.food@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="break-all underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-lotus"
          >
            quocthangk23vt.food@gmail.com
          </a>
        </p>
        <p className="mt-6 max-w-xl leading-[1.75] text-text-secondary">
          {vi
            ? "Cách nhanh nhất để gặp tôi. Cứ viết thẳng vào việc — một ý tưởng, một lời mời cộng tác, hay chỉ một câu hỏi về ngành thực phẩm."
            : "The fastest way to reach me. Write directly — an idea, a collaboration invite, or just a question about food technology."}
        </p>
      </motion.div>

      <div className="mt-16 border-t border-border">
        {socials.map((social, i) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="group grid grid-cols-[40px_1fr_auto] items-center gap-4 border-b border-border py-5 transition-colors hover:bg-surface"
          >
            <span className="flex h-10 w-10 items-center justify-center border border-border bg-surface text-primary">
              {social.icon}
            </span>
            <span className="font-display text-xl font-semibold tracking-tight group-hover:text-primary">
              {social.name}
            </span>
            <span className="flex items-center gap-3 pr-1">
              <span className="hidden font-mono text-[10.5px] uppercase tracking-[0.14em] text-text-secondary sm:inline">
                {String(i + 1).padStart(2, "0")}
              </span>
              <ArrowUpRight className="h-5 w-5 text-text-secondary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
