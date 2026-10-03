"use client";

import Image from "next/image";
import { motion } from "motion/react";

const reveal = {
  initial: {
    opacity: 0,
    y: 45,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.15,
  },
  transition: {
    duration: 0.75,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

type PremierPicksShowcaseProps = {
  hideIntro?: boolean;
};

export default function PremierPicksShowcase({
  hideIntro = false,
}: PremierPicksShowcaseProps) {
  return (
    <section className="relative overflow-hidden bg-[#070b12]">

      {/* ============================================================ */}
      {/* BACKGROUND                                                   */}
      {/* ============================================================ */}

      <div className="pointer-events-none absolute inset-0">
        <div className="plk-grid absolute inset-0 opacity-[0.025]" />

        <div className="absolute left-[-15%] top-[15%] h-[700px] w-[700px] rounded-full bg-blue-600/[0.05] blur-[200px]" />

        <div className="absolute right-[-10%] top-[45%] h-[600px] w-[600px] rounded-full bg-cyan-500/[0.025] blur-[200px]" />
      </div>

      {!hideIntro && (
  <>

      {/* ============================================================ */}
      {/* TOP LABEL                                                    */}
      {/* ============================================================ */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 pt-28 sm:px-10 lg:px-16 lg:pt-40">

        <motion.div
          {...reveal}
          className="flex items-center justify-between border-t border-white/[0.06] pt-7"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-blue-500" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-blue-400">
              Selected Work / 02
            </span>
          </div>

          <span className="hidden text-[7px] uppercase tracking-[0.2em] text-slate-700 sm:block">
            Digital Product
          </span>
        </motion.div>

      </div>

      {/* ============================================================ */}
      {/* INTRO                                                        */}
      {/* ============================================================ */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-20 pt-20 sm:px-10 lg:px-16 lg:pb-28 lg:pt-28">

        <motion.div
          {...reveal}
          className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >

          {/* title */}
          <div>
            <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.26em] text-blue-400">
              Built for competition
            </p>

            <h2 className="text-[4rem] font-semibold leading-[0.8] tracking-[-0.07em] text-white sm:text-[6rem] lg:text-[8rem] xl:text-[9rem]">
              PREMIER

              <span className="block text-slate-700">
                PICKS.
              </span>
            </h2>
          </div>

          {/* copy */}
          <div className="max-w-md lg:pb-3">

            <p className="text-base leading-8 text-slate-400 sm:text-lg">
              A complete football prediction platform built around weekly
              competition, scoring and live league standings.
            </p>

            <div className="mt-8 h-px bg-gradient-to-r from-blue-500/70 to-transparent" />

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
              {[
                "Authentication",
                "Predictions",
                "Scoring",
                "Leaderboards",
                "Admin",
              ].map((item) => (
                <span
                  key={item}
                  className="text-[8px] font-medium uppercase tracking-[0.18em] text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

              </motion.div>

    </div>
  </>
)}

{/* ============================================================ */}
{/* PRODUCT STAGE                                                */}
      {/* ============================================================ */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-40 sm:px-10 lg:px-16 lg:pb-52">

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >

          {/* background glow */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-[150px]" />

          {/* ======================================================== */}
          {/* MAIN DASHBOARD                                          */}
          {/* ======================================================== */}

          <div className="relative mx-auto w-full max-w-[1200px]">

            <div className="overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0a101a] shadow-[0_60px_180px_rgba(0,0,0,0.8)]">

              {/* top bar */}
              <div className="flex h-11 items-center justify-between border-b border-white/[0.06] bg-[#0b121e] px-4">

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />

                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-[7px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Premier Picks
                  </span>
                </div>

                <span className="text-[7px] uppercase tracking-[0.2em] text-slate-700">
                  PLK
                </span>

              </div>

              <Image
                src="/premier-picks-dashboard.png"
                alt="Premier Picks dashboard"
                width={1800}
                height={1100}
                className="h-auto w-full"
              />

            </div>

            {/* ====================================================== */}
            {/* LIVE CARD                                             */}
            {/* ====================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
                delay: 0.35,
              }}
              className="absolute -left-4 top-[15%] hidden w-[190px] rounded-xl border border-white/[0.08] bg-[#0b121e]/95 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.65)] backdrop-blur-xl md:block lg:-left-12"
            >

              <div className="flex items-center justify-between">
                <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Gameweek
                </span>

                <span className="flex items-center gap-1.5 text-[7px] font-semibold uppercase tracking-[0.16em] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live
                </span>
              </div>

              <div className="mt-5 flex items-end justify-between">

                <div>
                  <p className="text-3xl font-semibold tracking-[-0.05em] text-white">
                    06
                  </p>

                  <p className="mt-1 text-[7px] uppercase tracking-[0.17em] text-slate-600">
                    Current week
                  </p>
                </div>

                <span className="rounded-full border border-blue-400/15 bg-blue-400/[0.06] px-2 py-1 text-[7px] font-semibold text-blue-400">
                  OPEN
                </span>

              </div>

            </motion.div>

            {/* ====================================================== */}
            {/* SCORE CARD                                            */}
            {/* ====================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
                delay: 0.5,
              }}
              className="absolute -right-4 bottom-[12%] hidden w-[205px] rounded-xl border border-white/[0.08] bg-[#0b121e]/95 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.65)] backdrop-blur-xl md:block lg:-right-12"
            >

              <p className="text-[7px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Points Awarded
              </p>

              <div className="mt-4 flex items-center justify-between">

                <div>
                  <p className="text-2xl font-semibold tracking-[-0.05em] text-white">
                    +5
                  </p>

                  <p className="mt-1 text-[7px] uppercase tracking-[0.16em] text-slate-600">
                    Exact score
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/15 bg-blue-400/[0.07]">
                  <span className="text-xs text-blue-400">
                    ✓
                  </span>
                </div>

              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>

      {/* ============================================================ */}
      {/* PREDICT / SCORE / COMPETE                                    */}
      {/* ============================================================ */}

      <div className="relative z-10 border-y border-white/[0.05]">

        <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-0">

            {[
              {
                number: "01",
                title: "PREDICT.",
                copy:
                  "Submit score predictions and first-goal times before each fixture locks.",
              },
              {
                number: "02",
                title: "SCORE.",
                copy:
                  "Automated scoring calculates results as fixtures are completed.",
              },
              {
                number: "03",
                title: "COMPETE.",
                copy:
                  "Live standings turn every gameweek into an ongoing competition.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative ${
                  index > 0
                    ? "lg:border-l lg:border-white/[0.06] lg:pl-12"
                    : ""
                } ${index < 2 ? "lg:pr-12" : ""}`}
              >

                <span className="text-[8px] font-semibold text-blue-400">
                  {item.number}
                </span>

                <h3 className="mt-6 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
                  {item.copy}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* LOGIN / PRODUCT DETAIL                                       */}
      {/* ============================================================ */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-32 sm:px-10 lg:px-16 lg:py-44">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* copy */}
          <motion.div {...reveal}>

            <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-blue-400">
              Complete Product
            </p>

            <h3 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl">
              MORE THAN
              <span className="block text-slate-600">
                A FRONT END.
              </span>
            </h3>

            <p className="mt-7 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              User authentication, prediction logic, scoring, league
              positions and administration all work together behind the
              interface.
            </p>

            {/* features */}
            <div className="mt-9 space-y-4">

              {[
                "Secure user authentication",
                "Automated fixture locking",
                "Prediction and scoring logic",
                "Live league positions",
                "Administrator controls",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                  <span className="text-sm text-slate-400">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </motion.div>

          {/* login screenshot */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >

            <div className="absolute -inset-16 -z-10 rounded-full bg-blue-500/[0.05] blur-[120px]" />

            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a101a] shadow-[0_50px_140px_rgba(0,0,0,0.65)]">
              <Image
                src="/premier-picks-login.png"
                alt="Premier Picks login"
                width={1600}
                height={1000}
                className="h-auto w-full"
              />
            </div>

          </motion.div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* END                                                         */}
      {/* ============================================================ */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-32 sm:px-10 lg:px-16 lg:pb-44">

        <motion.div
          {...reveal}
          className="flex flex-col gap-8 border-t border-white/[0.07] pt-10 sm:flex-row sm:items-end sm:justify-between"
        >

          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-blue-400">
              Premier Picks
            </p>

            <h3 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
              A digital product built from idea
              <span className="text-slate-600"> to working platform.</span>
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.7)]" />

            <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-slate-600">
              Built by PLK Systems
            </span>
          </div>

        </motion.div>

      </div>

    </section>
  );
}