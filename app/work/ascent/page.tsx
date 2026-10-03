"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import SiteHeader from "@/components/site-header";
import AscentShowcase from "@/components/home/ascent-showcase";

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

export default function AscentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f1f0ec] text-[#111111]">
      <SiteHeader />

      {/* ====================================================== */}
      {/* CASE STUDY HERO                                        */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden pt-[76px]">
        {/* background */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.12) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          <div className="absolute left-1/2 top-0 h-full w-px bg-black/[0.045]" />

          <div className="absolute -right-[20%] top-[10%] h-[800px] w-[800px] rounded-full bg-black/[0.025] blur-[180px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-24 pt-16 sm:px-10 sm:pt-20 lg:px-16 lg:pb-32 lg:pt-24">
          {/* back */}

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

              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/40 transition group-hover:text-black">
                All work
              </span>
            </Link>
          </motion.div>

          {/* label */}

          <motion.div
            {...reveal}
            className="mt-12 flex items-center justify-between border-t border-black/[0.1] pt-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-black" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.26em] text-black">
                Case Study / 03
              </span>
            </div>

            <span className="hidden text-[7px] uppercase tracking-[0.2em] text-black/35 sm:block">
              Mobile Product
            </span>
          </motion.div>

          {/* title */}

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
              <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.28em] text-black/40">
                Training / Progress / Consistency
              </p>

              <h1 className="text-[5rem] font-semibold leading-[0.78] tracking-[-0.075em] text-black sm:text-[8rem] lg:text-[10rem] xl:text-[12rem]">
                ASCENT<span className="text-black/20">.</span>
              </h1>
            </motion.div>

            {/* project info */}

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
              <p className="max-w-lg text-base leading-8 text-black/55">
                A focused fitness product built around training,
                progress and consistency — giving users a clear
                place to plan, perform and track their workouts.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-black/[0.1] pt-7">
                <div>
                  <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-black/30">
                    Type
                  </p>

                  <p className="mt-2 text-xs text-black/65">
                    Mobile Product
                  </p>
                </div>

                <div>
                  <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-black/30">
                    Project
                  </p>

                  <p className="mt-2 text-xs text-black/65">
                    Ascent
                  </p>
                </div>

                <div>
                  <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-black/30">
                    Focus
                  </p>

                  <p className="mt-2 text-xs text-black/65">
                    Fitness
                  </p>
                </div>

                <div>
                  <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-black/30">
                    Built by
                  </p>

                  <p className="mt-2 text-xs text-black/65">
                    PLK Systems
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================================================== */}
          {/* PHONE PRODUCT STAGE                                */}
          {/* ================================================== */}

          <div className="relative mt-20 min-h-[720px] sm:min-h-[820px] lg:mt-24 lg:min-h-[880px]">
            {/* giant background typography */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[17vw] font-semibold leading-none tracking-[-0.08em] text-black/[0.025] lg:block">
              ASCENT
            </div>

            {/* left text */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-0 top-[22%] z-20 hidden max-w-[220px] lg:block"
            >
              <span className="block h-px w-12 bg-black/30" />

              <p className="mt-5 text-[8px] font-semibold uppercase tracking-[0.22em] text-black/40">
                Built for focus
              </p>

              <p className="mt-4 text-sm leading-7 text-black/50">
                Everything needed for the workout. Nothing that
                gets in the way.
              </p>
            </motion.div>

            {/* right stat */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute right-0 top-[30%] z-20 hidden text-right lg:block"
            >
              <p className="font-mono text-5xl font-medium tracking-[-0.06em] text-black">
                01
              </p>

              <p className="mt-2 text-[7px] font-semibold uppercase tracking-[0.2em] text-black/35">
                Training ecosystem
              </p>
            </motion.div>

            {/* left phone */}

            <motion.div
              initial={{
                opacity: 0,
                x: -70,
                y: 80,
                rotate: -8,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                rotate: -5,
              }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-[2%] top-[150px] z-10 w-[42%] max-w-[290px] sm:left-[12%] sm:w-[32%] lg:left-[25%] lg:top-[120px] lg:w-[270px]"
            >
              <PhoneFrame>
                <Image
                  src="/ascent-progress.png"
                  alt="Ascent progress screen"
                  width={700}
                  height={1400}
                  className="h-auto w-full"
                />
              </PhoneFrame>
            </motion.div>

            {/* main phone */}

            <motion.div
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-1/2 top-[70px] z-30 w-[48%] max-w-[330px] -translate-x-1/2 sm:w-[36%] lg:top-[45px] lg:w-[310px]"
            >
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <PhoneFrame featured>
                  <Image
                    src="/ascent-today.png"
                    alt="Ascent today screen"
                    width={700}
                    height={1400}
                    priority
                    className="h-auto w-full"
                  />
                </PhoneFrame>
              </motion.div>
            </motion.div>

            {/* right phone */}

            <motion.div
              initial={{
                opacity: 0,
                x: 70,
                y: 80,
                rotate: 8,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 5,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute right-[2%] top-[150px] z-10 w-[42%] max-w-[290px] sm:right-[12%] sm:w-[32%] lg:right-[25%] lg:top-[120px] lg:w-[270px]"
            >
              <PhoneFrame>
                <Image
                  src="/ascent-workout.png"
                  alt="Ascent workout screen"
                  width={700}
                  height={1400}
                  className="h-auto w-full"
                />
              </PhoneFrame>
            </motion.div>

            {/* bottom descriptor */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.9,
              }}
              className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-4 whitespace-nowrap sm:bottom-8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-black" />

              <span className="text-[7px] font-semibold uppercase tracking-[0.24em] text-black/40">
                Train / Track / Progress
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* EXISTING ASCENT CASE STUDY                              */}
      {/* ====================================================== */}

      <AscentShowcase hideIntro />

      {/* ====================================================== */}
      {/* END OF WORK                                            */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden bg-[#050a13] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="plk-grid absolute inset-0 opacity-[0.03]" />

          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.055] blur-[220px]" />
        </div>

        <motion.div
          {...reveal}
          className="relative z-10 mx-auto max-w-[1500px] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44"
        >
          <div className="flex items-center justify-between border-t border-white/[0.08] pt-7">
            <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-blue-400">
              End of selected work
            </span>

            <span className="font-mono text-[8px] text-slate-700">
              03 / 03
            </span>
          </div>

          <div className="mt-16 grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-7 text-[9px] font-semibold uppercase tracking-[0.26em] text-slate-600">
                Have something different in mind?
              </p>

              <h2 className="text-[4rem] font-semibold leading-[0.82] tracking-[-0.07em] text-white sm:text-[6rem] lg:text-[8rem]">
                LET&apos;S BUILD

                <span className="block text-slate-700">
                  YOURS.
                </span>
              </h2>
            </div>

            <div className="max-w-md lg:pb-3">
              <p className="text-base leading-8 text-slate-400">
                From an early idea to a complete digital product,
                PLK Systems can design and build around what your
                business actually needs.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-5 bg-white px-6 py-4 text-[8px] font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-blue-400"
                >
                  Start a project

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center border border-white/[0.12] px-6 py-4 text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-400 transition hover:border-white/30 hover:text-white"
                >
                  All work
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ====================================================== */}
      {/* FOOTER                                                 */}
      {/* ====================================================== */}

      <footer className="border-t border-white/[0.07] bg-[#050a13] text-white">
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
                Websites, applications and systems built around
                your business.
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

function PhoneFrame({
  children,
  featured = false,
}: {
  children: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[2.4rem] border-[7px] border-[#161616] bg-[#161616] ${
        featured
          ? "shadow-[0_50px_120px_rgba(0,0,0,0.28)]"
          : "shadow-[0_35px_80px_rgba(0,0,0,0.18)]"
      }`}
    >
      <div className="relative overflow-hidden rounded-[1.9rem] bg-black">
        {/* phone speaker / island */}
        <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-[18px] w-[64px] -translate-x-1/2 rounded-full bg-black" />

        {children}
      </div>
    </div>
  );
}