"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useState } from "react";

const rotatingWords = [
  "WEBSITES.",
  "MOBILE APPS.",
  "SOFTWARE.",
  "AUTOMATION.",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 45,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 45,
    damping: 20,
  });

  const dashboardX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const dashboardY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  const phoneX = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const phoneY = useTransform(smoothY, [-0.5, 0.5], [14, -14]);

  const cardX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const cardY = useTransform(smoothY, [-0.5, 0.5], [18, -18]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-[#050a13]"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="plk-grid absolute inset-0 opacity-[0.32]" />

        <div className="absolute left-[-18rem] top-[10%] h-[42rem] w-[42rem] rounded-full bg-blue-600/[0.09] blur-[150px]" />

        <div className="absolute right-[-18rem] top-[-10rem] h-[46rem] w-[46rem] rounded-full bg-cyan-400/[0.055] blur-[170px]" />

        <div className="absolute bottom-[-22rem] left-[35%] h-[40rem] w-[40rem] rounded-full bg-blue-500/[0.045] blur-[180px]" />
      </div>

      {/* top status */}
      <div className="relative z-20 mx-auto flex max-w-[1440px] items-center justify-between px-6 pt-8 sm:px-10 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-blue-500" />

          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-blue-400 sm:text-[10px]">
            Digital product studio
          </p>
        </div>

        <div className="hidden items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-slate-600 sm:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-20" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>

          Available for new projects
        </div>
      </div>

      {/* main hero */}
      <div className="relative z-10 mx-auto grid min-h-[760px] max-w-[1440px] items-center px-6 pb-24 pt-12 sm:px-10 lg:grid-cols-[0.94fr_1.06fr] lg:px-12 lg:pb-28 lg:pt-4">
        {/* copy */}
        <div className="relative z-20 max-w-[760px]">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500"
          >
            PLK Systems / Web · Mobile · Software
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[3.6rem] font-semibold leading-[0.87] tracking-[-0.07em] text-white sm:text-[5.3rem] lg:text-[6.4rem] xl:text-[7rem]"
          >
            WE BUILD
            <span className="block text-slate-500">WHAT YOUR</span>
            <span className="block">BUSINESS</span>
            <span className="block">NEEDS.</span>
          </motion.h1>

          {/* rotating capability */}
          <div className="mt-8 flex min-h-[34px] items-center gap-4">
            <span className="h-px w-10 bg-blue-500/60" />

            <div className="relative h-6 overflow-hidden">
              <motion.p
                key={rotatingWords[wordIndex]}
                initial={{ y: 22, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -22, opacity: 0 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-xs font-semibold tracking-[0.18em] text-blue-400 sm:text-sm"
              >
                {rotatingWords[wordIndex]}
              </motion.p>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 max-w-lg text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
          >
            From first idea to finished product. We design and build websites,
            mobile apps, custom software and automation around the way your
            business actually works.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#050a13] transition duration-300 hover:scale-[1.02] hover:bg-blue-50"
            >
              Start a project

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#050a13] text-xs text-white transition-transform duration-300 group-hover:rotate-45">
                ↗
              </span>
            </a>

            <a
              href="#work"
              className="group inline-flex items-center gap-3 px-3 py-3 text-sm font-medium text-slate-400 transition hover:text-white"
            >
              Explore our work
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>

        {/* floating digital ecosystem */}
        <div className="relative mt-20 min-h-[590px] lg:mt-0">
          {/* orbital lines */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[510px] w-[510px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/[0.06]" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

          {/* glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.07] blur-[90px]" />

          {/* dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              x: dashboardX,
              y: dashboardY,
            }}
            className="absolute left-[2%] top-[15%] w-[78%] overflow-hidden rounded-[22px] border border-white/[0.11] bg-[#09131f]/95 shadow-[0_40px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:left-[4%] sm:w-[72%]"
          >
            <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
              </div>

              <p className="text-[7px] uppercase tracking-[0.2em] text-slate-600">
                Operations
              </p>

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </div>

            <div className="grid grid-cols-[52px_1fr]">
              <div className="border-r border-white/[0.06] p-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-[8px] font-bold text-white">
                  P
                </div>

                <div className="mt-6 space-y-3">
                  {[0, 1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className={`h-7 rounded-md ${
                        item === 0
                          ? "bg-blue-500/15"
                          : "bg-white/[0.025]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[7px] uppercase tracking-[0.16em] text-blue-400">
                      Dashboard
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Good morning.
                    </p>
                  </div>

                  <div className="rounded-md bg-blue-600 px-2.5 py-1.5 text-[7px] font-medium text-white">
                    + New job
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    ["Active", "24"],
                    ["Today", "08"],
                    ["Clients", "186"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-2.5"
                    >
                      <p className="text-[6px] text-slate-600">{label}</p>

                      <p className="mt-1.5 text-base font-semibold text-white">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[8px] text-slate-300">
                      Today&apos;s workflow
                    </p>

                    <p className="text-[6px] text-emerald-400">LIVE</p>
                  </div>

                  <div className="mt-3 space-y-2">
                    {[68, 82, 55].map((width, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 rounded-md bg-black/10 p-2"
                      >
                        <div className="h-1.5 w-7 rounded-full bg-white/[0.07]" />

                        <div
                          className="h-1.5 rounded-full bg-white/[0.12]"
                          style={{ width: `${width}%` }}
                        />

                        <div className="ml-auto h-1.5 w-5 rounded-full bg-blue-500/20" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* mobile phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              x: phoneX,
              y: phoneY,
            }}
            className="absolute bottom-[4%] right-[4%] z-20 h-[350px] w-[172px] overflow-hidden rounded-[32px] border-[5px] border-[#1d2836] bg-[#07101a] shadow-[0_35px_80px_rgba(0,0,0,0.65)] sm:right-[8%]"
          >
            <div className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />

            <div className="px-4 pt-9">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[6px] uppercase tracking-[0.18em] text-blue-400">
                    Mobile
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white">
                    Welcome back
                  </p>
                </div>

                <div className="h-7 w-7 rounded-full border border-white/[0.07] bg-blue-500/10" />
              </div>

              <div className="mt-5 rounded-2xl border border-blue-500/15 bg-gradient-to-br from-blue-500/[0.15] to-cyan-400/[0.04] p-3.5">
                <div className="flex items-center justify-between">
                  <p className="text-[6px] uppercase tracking-wider text-blue-300">
                    Today
                  </p>

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>

                <p className="mt-2 text-xl font-semibold text-white">
                  4 tasks
                </p>

                <div className="mt-3 h-1 rounded-full bg-white/[0.07]">
                  <div className="h-full w-[72%] rounded-full bg-blue-400" />
                </div>
              </div>

              <p className="mt-5 text-[7px] font-medium text-slate-400">
                Activity
              </p>

              <div className="mt-2 space-y-2">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-white/[0.05] bg-white/[0.025] p-2"
                  >
                    <div className="h-7 w-7 rounded-lg bg-white/[0.04]" />

                    <div className="flex-1">
                      <div className="h-1.5 w-12 rounded-full bg-white/15" />
                      <div className="mt-1.5 h-1 w-8 rounded-full bg-white/[0.06]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-around border-t border-white/[0.05] bg-[#07101a] px-4 py-3">
              {[0, 1, 2, 3].map((item) => (
                <span
                  key={item}
                  className={`h-1.5 w-1.5 rounded-full ${
                    item === 0 ? "bg-blue-400" : "bg-slate-700"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* automation notification */}
          <motion.div
            initial={{ opacity: 0, x: 25, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.9,
            }}
            style={{
              x: cardX,
              y: cardY,
            }}
            className="absolute right-[2%] top-[10%] z-30 hidden w-[190px] rounded-2xl border border-white/[0.1] bg-[#0a1421]/90 p-4 shadow-2xl backdrop-blur-xl sm:block"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-500/15 bg-emerald-500/[0.08]">
                <span className="text-[10px] text-emerald-400">✓</span>
              </div>

              <div>
                <p className="text-[7px] uppercase tracking-[0.16em] text-slate-600">
                  Automation
                </p>

                <p className="mt-1 text-[9px] font-medium text-white">
                  New customer created
                </p>

                <p className="mt-1 text-[7px] text-slate-600">
                  Workflow completed · 1.8s
                </p>
              </div>
            </div>
          </motion.div>

          {/* revenue card */}
          <motion.div
            initial={{ opacity: 0, x: -25, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.05,
            }}
            style={{
              x: cardX,
            }}
            className="absolute bottom-[9%] left-[0%] z-30 hidden w-[170px] rounded-2xl border border-white/[0.09] bg-[#0a1421]/90 p-4 shadow-2xl backdrop-blur-xl sm:block"
          >
            <p className="text-[7px] uppercase tracking-[0.16em] text-slate-600">
              Performance
            </p>

            <div className="mt-2 flex items-end justify-between">
              <p className="text-xl font-semibold text-white">£48.2k</p>

              <span className="text-[8px] text-emerald-400">↑ 18.4%</span>
            </div>

            <div className="mt-4 flex h-8 items-end gap-1">
              {[30, 42, 35, 55, 48, 70, 62, 82, 72, 95].map(
                (height, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-t ${
                      index === 9 ? "bg-blue-400" : "bg-blue-500/20"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                )
              )}
            </div>
          </motion.div>

          {/* connection dots */}
          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.35, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
            }}
            className="absolute left-[45%] top-[7%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]"
          />

          <motion.div
            animate={{
              opacity: [1, 0.3, 1],
              scale: [1.3, 1, 1.3],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
            }}
            className="absolute bottom-[5%] left-[46%] h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
          />
        </div>
      </div>

      {/* bottom capability rail */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/[0.06] bg-[#050a13]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 overflow-hidden px-6 py-4 sm:px-10 lg:px-12">
          <div className="hidden items-center gap-3 text-[8px] uppercase tracking-[0.2em] text-slate-700 md:flex">
            <span>Scroll</span>
            <span>↓</span>
          </div>

          <div className="flex flex-1 items-center justify-center gap-5 text-[8px] font-medium uppercase tracking-[0.18em] text-slate-600 sm:gap-8 sm:text-[9px] md:justify-end">
            <span>Websites</span>
            <span className="text-blue-500/30">◆</span>
            <span>Mobile Apps</span>
            <span className="hidden text-blue-500/30 sm:inline">◆</span>
            <span className="hidden sm:inline">Custom Software</span>
            <span className="hidden text-blue-500/30 md:inline">◆</span>
            <span className="hidden md:inline">Automation</span>
          </div>
        </div>
      </div>
    </section>
  );
}