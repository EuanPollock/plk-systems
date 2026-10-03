"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import SiteHeader from "@/components/site-header";
import PremierPicksShowcase from "@/components/home/premier-picks-showcase";

const reveal = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: {
    duration: 0.75,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

export default function PremierPicksPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050a13] text-white">
      <SiteHeader />

      {/* ====================================================== */}
      {/* CASE STUDY HERO                                        */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden pt-[76px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="plk-grid absolute inset-0 opacity-[0.035]" />

          <div className="absolute -left-[20%] top-[5%] h-[900px] w-[900px] rounded-full bg-blue-600/[0.055] blur-[220px]" />

          <div className="absolute right-[-20%] top-[25%] h-[750px] w-[750px] rounded-full bg-cyan-400/[0.025] blur-[220px]" />

          <div className="absolute bottom-0 left-1/2 top-0 w-px bg-white/[0.025]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-20 pt-16 sm:px-10 sm:pb-24 sm:pt-20 lg:px-16 lg:pb-28 lg:pt-24">
          {/* BACK */}

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/work"
              className="group inline-flex items-center gap-3"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>

              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-600 transition group-hover:text-white">
                All work
              </span>
            </Link>
          </motion.div>

          {/* TOP LINE */}

          <motion.div
            {...reveal}
            className="mt-12 flex items-center justify-between border-t border-white/[0.08] pt-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.26em] text-blue-400">
                Case Study / 02
              </span>
            </div>

            <span className="hidden text-[7px] uppercase tracking-[0.2em] text-slate-700 sm:block">
              Digital Product
            </span>
          </motion.div>

          {/* TITLE */}

          <div className="mt-16 grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-600">
                Football prediction platform
              </p>

              <h1 className="text-[4.5rem] font-semibold leading-[0.78] tracking-[-0.075em] text-white sm:text-[7rem] lg:text-[9rem] xl:text-[10.5rem]">
                PREMIER

                <span className="block text-slate-700">
                  PICKS.
                </span>
              </h1>
            </motion.div>

            {/* PROJECT INFO */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:pb-3"
            >
              <p className="max-w-lg text-base leading-8 text-slate-400">
                A complete football prediction experience
                designed around weekly competition, simple
                predictions, scoring and live league standings.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/[0.08] pt-7">
                <div>
                  <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                    Type
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    Digital Product
                  </p>
                </div>

                <div>
                  <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                    Project
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    Premier Picks
                  </p>
                </div>

                <div>
                  <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                    Focus
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    Competition
                  </p>
                </div>

                <div>
                  <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                    Built by
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    PLK Systems
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* PRODUCT VISUAL */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mt-20"
          >
            <div className="absolute -inset-20 bg-blue-500/[0.04] blur-[120px]" />

            <div className="relative overflow-hidden rounded-xl border border-white/[0.1] bg-[#080d16] shadow-[0_50px_140px_rgba(0,0,0,0.6)]">
              {/* BROWSER BAR */}

              <div className="flex h-11 items-center justify-between border-b border-white/[0.07] px-5">
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/[0.14]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/[0.09]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/[0.06]" />
                </div>

                <span className="text-[6px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                  Premier Picks / Dashboard
                </span>
              </div>

              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/premier-picks-dashboard.png"
                  alt="Premier Picks dashboard"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* FLOATING SEASON CARD */}

            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 right-6 hidden border border-white/[0.1] bg-[#080d16]/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block"
            >
              <p className="text-[6px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                Season format
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="font-mono text-xl font-medium text-white">
                  38
                </span>

                <span className="pb-0.5 text-[7px] uppercase tracking-[0.18em] text-blue-400">
                  Gameweeks
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* EXISTING PREMIER PICKS CASE STUDY                       */}
      {/* ====================================================== */}

      <PremierPicksShowcase hideIntro />

      {/* ====================================================== */}
      {/* NEXT PROJECT — ASCENT                                  */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#050a13]">
        <div className="pointer-events-none absolute inset-0">
          <div className="plk-grid absolute inset-0 opacity-[0.025]" />

          <div className="absolute right-[-20%] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-blue-600/[0.05] blur-[200px]" />
        </div>

        <motion.div
          {...reveal}
          className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40"
        >
          <div className="flex items-center justify-between border-t border-white/[0.08] pt-7">
            <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-slate-600">
              Next project
            </span>

            <span className="font-mono text-[8px] text-slate-700">
              03 / 03
            </span>
          </div>

          <Link
            href="/work/ascent"
            className="group mt-14 block"
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="mb-5 text-[8px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                  Mobile Product
                </p>

                <h2 className="text-[5rem] font-semibold leading-[0.8] tracking-[-0.07em] text-white sm:text-[7rem] lg:text-[9rem]">
                  ASCENT<span className="text-slate-700 transition-colors duration-500 group-hover:text-blue-400">.</span>
                </h2>
              </div>

              <div className="flex items-center gap-5 lg:pb-4">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
                  Next case study
                </span>

                <span className="text-2xl text-blue-400 transition-transform duration-300 group-hover:translate-x-3">
                  →
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* ====================================================== */}
      {/* FOOTER                                                 */}
      {/* ====================================================== */}

      <footer className="border-t border-white/[0.07] bg-[#050a13]">
        <div className="mx-auto max-w-[1500px] px-6 py-12 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Image
                src="/plk-logo.png"
                alt="PLK Systems"
                width={130}
                height={55}
                className="h-auto w-[105px]"
              />

              <p className="mt-5 max-w-sm text-xs leading-6 text-slate-600">
                Websites, applications and systems built
                around your business.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-7 gap-y-4">
              <Link
                href="/services"
                className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/work"
                className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white"
              >
                Work
              </Link>

              <Link
                href="/about"
                className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="/privacy"
                className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:text-white"
              >
                Privacy
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.06] pt-6 text-[8px] uppercase tracking-[0.16em] text-slate-700 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} PLK Systems
            </span>

            <span>
              Software built around your business.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}