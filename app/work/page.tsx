"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import SiteHeader from "@/components/site-header";

const reveal = {
  initial: { opacity: 0, y: 45 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

export default function WorkPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050a13] text-white">
      <SiteHeader />

      {/* ====================================================== */}
      {/* HERO                                                   */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden pt-[76px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="plk-grid absolute inset-0 opacity-[0.04]" />

          <div className="absolute -left-[20%] top-[5%] h-[900px] w-[900px] rounded-full bg-blue-600/[0.055] blur-[220px]" />

          <div className="absolute right-[-20%] top-[30%] h-[700px] w-[700px] rounded-full bg-cyan-400/[0.025] blur-[220px]" />

          <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.025]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-24 pt-24 sm:px-10 sm:pb-32 sm:pt-32 lg:px-16 lg:pb-40 lg:pt-40">
          <motion.div {...reveal}>
            <div className="flex items-center justify-between border-t border-white/[0.08] pt-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-blue-400" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.26em] text-blue-400">
                  Selected Work
                </span>
              </div>

              <span className="text-[7px] uppercase tracking-[0.2em] text-slate-700">
                PLK / Portfolio
              </span>
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-600">
                  Designed. Built. Connected.
                </p>

                <h1 className="text-[5.5rem] font-semibold leading-[0.75] tracking-[-0.08em] text-white sm:text-[8rem] lg:text-[11rem] xl:text-[13rem]">
                  WORK.
                </h1>
              </div>

              <div className="lg:pb-4">
                <p className="max-w-lg text-base leading-8 text-slate-400 sm:text-lg">
                  Digital products and systems designed around
                  real problems, real workflows and the people
                  who use them.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                    Explore projects
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* HORIZON                                                */}
      {/* ====================================================== */}

      <section className="relative border-t border-white/[0.07]">
        <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
          <motion.div {...reveal}>
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[9px] text-blue-400">
                  01
                </span>

                <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                  Custom Business Software
                </span>
              </div>

              <span className="hidden text-[7px] uppercase tracking-[0.2em] text-slate-700 sm:block">
                Horizon Operations
              </span>
            </div>

            <Link
              href="/work/horizon"
              className="group block"
            >
              <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:items-center lg:gap-16">
                {/* TEXT */}

                <div className="relative z-10">
                  <h2 className="text-[4rem] font-semibold leading-[0.8] tracking-[-0.07em] text-white sm:text-[5.5rem] lg:text-[6.5rem]">
                    HORIZON

                    <span className="block text-slate-700 transition-colors duration-500 group-hover:text-blue-400">
                      OPERATIONS.
                    </span>
                  </h2>

                  <p className="mt-8 max-w-md text-sm leading-7 text-slate-500">
                    One connected operational system bringing
                    customers, jobs, scheduling, quotes,
                    invoices and reporting together.
                  </p>

                  <div className="mt-10 inline-flex items-center gap-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
                      View case study
                    </span>

                    <span className="text-blue-400 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>
                </div>

                {/* VISUAL */}

                <div className="relative">
                  <div className="absolute -inset-16 bg-blue-500/[0.055] blur-[100px]" />

                  <motion.div
                    whileHover={{
                      y: -8,
                      rotateX: 1,
                      rotateY: -1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="relative overflow-hidden rounded-xl border border-white/[0.1] bg-[#0a101b] shadow-[0_50px_120px_rgba(0,0,0,0.55)]"
                  >
                    <div className="flex h-10 items-center justify-between border-b border-white/[0.07] px-4">
                      <div className="flex gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-300/60" />
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
                      </div>

                      <span className="text-[6px] uppercase tracking-[0.18em] text-slate-700">
                        Operations / Dashboard
                      </span>
                    </div>

                    <div className="relative aspect-[16/10]">
                      <Image
                        src="/horizon/horizon-dashboard.png"
                        alt="Horizon Operations dashboard"
                        fill
                        sizes="(max-width: 1024px) 100vw, 65vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
                      />
                    </div>
                  </motion.div>

                  <div className="absolute -bottom-5 -left-4 hidden border border-white/[0.1] bg-[#080d16]/95 px-5 py-4 backdrop-blur-xl sm:block">
                    <p className="text-[6px] uppercase tracking-[0.18em] text-slate-700">
                      System
                    </p>

                    <p className="mt-1 font-mono text-sm text-white">
                      06 Modules
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* PREMIER PICKS                                          */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#080d16]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-15%] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-blue-600/[0.05] blur-[200px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
          <motion.div {...reveal}>
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[9px] text-blue-400">
                  02
                </span>

                <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                  Digital Product
                </span>
              </div>

              <span className="hidden text-[7px] uppercase tracking-[0.2em] text-slate-700 sm:block">
                Premier Picks
              </span>
            </div>

            <Link
              href="/work/premier-picks"
              className="group block"
            >
              <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-center lg:gap-20">
                {/* VISUAL */}

                <div className="relative order-2 lg:order-1">
                  <div className="absolute -inset-16 bg-cyan-400/[0.035] blur-[110px]" />

                  <motion.div
                    whileHover={{
                      y: -8,
                      rotateX: 1,
                      rotateY: 1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="relative overflow-hidden rounded-xl border border-white/[0.1] bg-[#050a13] shadow-[0_50px_120px_rgba(0,0,0,0.6)]"
                  >
                    <div className="flex h-10 items-center justify-between border-b border-white/[0.07] px-4">
                      <div className="flex gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/[0.12]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/[0.08]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/[0.06]" />
                      </div>

                      <span className="text-[6px] uppercase tracking-[0.18em] text-slate-700">
                        Competition / Dashboard
                      </span>
                    </div>

                    <div className="relative aspect-[16/10]">
                      <Image
                        src="/premier-picks-dashboard.png"
                        alt="Premier Picks dashboard"
                        fill
                        sizes="(max-width: 1024px) 100vw, 65vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
                      />
                    </div>
                  </motion.div>

                  <div className="absolute -bottom-5 -right-4 hidden border border-white/[0.1] bg-[#050a13]/95 px-5 py-4 backdrop-blur-xl sm:block">
                    <p className="text-[6px] uppercase tracking-[0.18em] text-slate-700">
                      Season
                    </p>

                    <p className="mt-1 font-mono text-sm text-white">
                      38 Gameweeks
                    </p>
                  </div>
                </div>

                {/* TEXT */}

                <div className="relative z-10 order-1 lg:order-2">
                  <h2 className="text-[4rem] font-semibold leading-[0.8] tracking-[-0.07em] text-white sm:text-[5.5rem] lg:text-[6.5rem]">
                    PREMIER

                    <span className="block text-slate-700 transition-colors duration-500 group-hover:text-blue-400">
                      PICKS.
                    </span>
                  </h2>

                  <p className="mt-8 max-w-md text-sm leading-7 text-slate-500">
                    A football prediction platform combining
                    fixtures, predictions, scoring and live
                    league standings into one product.
                  </p>

                  <div className="mt-10 inline-flex items-center gap-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
                      View case study
                    </span>

                    <span className="text-blue-400 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* ASCENT                                                 */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden bg-[#efefec] text-[#111]">
        <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
          <motion.div {...reveal}>
            <div className="mb-12 flex items-center justify-between border-t border-black/[0.1] pt-6">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[9px] text-[#111]">
                  03
                </span>

                <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-black/40">
                  Mobile Product
                </span>
              </div>

              <span className="hidden text-[7px] uppercase tracking-[0.2em] text-black/30 sm:block">
                Ascent
              </span>
            </div>

            <Link
              href="/work/ascent"
              className="group block"
            >
              <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-24">
                {/* TEXT */}

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-black/35">
                    Built to perform
                  </p>

                  <h2 className="mt-5 text-[5rem] font-semibold leading-[0.78] tracking-[-0.075em] text-[#111] sm:text-[7rem] lg:text-[8rem]">
                    ASCENT.
                  </h2>

                  <p className="mt-8 max-w-md text-sm leading-7 text-black/50">
                    A training experience designed around
                    workouts, progress, consistency and
                    coaching.
                  </p>

                  <div className="mt-10 inline-flex items-center gap-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#111]">
                      View case study
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>
                </div>

                {/* PHONES */}

                <div className="relative min-h-[520px] sm:min-h-[620px]">
                  <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.035] blur-[80px]" />

                  {/* LEFT PHONE */}

                  <motion.div
                    whileHover={{
                      y: -10,
                      rotate: -4,
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-[2%] top-[20%] w-[31%] max-w-[230px] -rotate-[7deg] sm:left-[8%]"
                  >
                    <div className="overflow-hidden rounded-[2rem] border-[5px] border-[#171717] bg-[#171717] shadow-[0_35px_70px_rgba(0,0,0,0.2)]">
                      <Image
                        src="/ascent-progress.png"
                        alt="Ascent progress screen"
                        width={450}
                        height={900}
                        className="h-auto w-full rounded-[1.65rem]"
                      />
                    </div>
                  </motion.div>

                  {/* CENTRE PHONE */}

                  <motion.div
                    whileHover={{
                      y: -12,
                      scale: 1.02,
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-1/2 top-[3%] z-20 w-[38%] max-w-[280px] -translate-x-1/2"
                  >
                    <div className="overflow-hidden rounded-[2.2rem] border-[6px] border-[#111] bg-[#111] shadow-[0_45px_90px_rgba(0,0,0,0.28)]">
                      <Image
                        src="/ascent-today.png"
                        alt="Ascent today screen"
                        width={450}
                        height={900}
                        className="h-auto w-full rounded-[1.8rem]"
                      />
                    </div>
                  </motion.div>

                  {/* RIGHT PHONE */}

                  <motion.div
                    whileHover={{
                      y: -10,
                      rotate: 4,
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute right-[2%] top-[20%] w-[31%] max-w-[230px] rotate-[7deg] sm:right-[8%]"
                  >
                    <div className="overflow-hidden rounded-[2rem] border-[5px] border-[#171717] bg-[#171717] shadow-[0_35px_70px_rgba(0,0,0,0.2)]">
                      <Image
                        src="/ascent-workout.png"
                        alt="Ascent workout screen"
                        width={450}
                        height={900}
                        className="h-auto w-full rounded-[1.65rem]"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CTA                                                    */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden bg-[#050a13]">
        <div className="pointer-events-none absolute inset-0">
          <div className="plk-grid absolute inset-0 opacity-[0.035]" />

          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.05] blur-[180px]" />
        </div>

        <motion.div
          {...reveal}
          className="relative z-10 mx-auto max-w-[1500px] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44"
        >
          <div className="border-t border-white/[0.08] pt-8">
            <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-blue-400">
              Your project could be next
            </p>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <h2 className="max-w-5xl text-[4rem] font-semibold leading-[0.82] tracking-[-0.065em] text-white sm:text-[6rem] lg:text-[8rem]">
                HAVE AN IDEA?

                <span className="block text-slate-700">
                  LET&apos;S BUILD IT.
                </span>
              </h2>

              <Link
                href="/contact"
                className="group flex w-fit items-center gap-5 border border-white/[0.1] bg-white px-6 py-5 text-[#050a13] transition hover:bg-blue-50"
              >
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                  Start a project
                </span>

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </div>
          </div>
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