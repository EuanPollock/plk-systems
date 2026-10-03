"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const projects = [
  {
    id: "horizon",
    number: "01",
    title: "HORIZON",
    secondLine: "OPERATIONS.",
    type: "Custom Business Software",
    description:
      "One connected system bringing customers, jobs, scheduling, quotes, invoices and reporting together.",
    image: "/horizon/horizon-dashboard.png",
    tags: [
      "Jobs",
      "Customers",
      "Scheduling",
      "Quotes",
      "Invoices",
    ],
    href: "/work/horizon",
    statLabel: "Connected modules",
    stat: "06",
  },
  {
    id: "premier-picks",
    number: "02",
    title: "PREMIER",
    secondLine: "PICKS.",
    type: "Digital Product",
    description:
      "A complete football prediction platform built around weekly competition, scoring and live league standings.",
    image: "/premier-picks-dashboard.png",
    tags: [
      "Predictions",
      "Scoring",
      "Leaderboards",
      "Authentication",
      "Admin",
    ],
    href: "/work/premier-picks",
    statLabel: "Gameweeks",
    stat: "38",
  },
  {
    id: "ascent",
    number: "03",
    title: "ASCENT.",
    secondLine: "",
    type: "Mobile Product",
    description:
      "A focused training experience designed around workouts, progress, consistency and coaching.",
    image: "/ascent-today.png",
    tags: [
      "Training",
      "Progress",
      "Exercises",
      "Coaching",
    ],
    href: "/work/ascent",
    statLabel: "Product focus",
    stat: "01",
  },
];

export default function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = projects[activeIndex];

  function previousProject() {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  }

  function nextProject() {
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#050a13]">
      {/* ====================================================== */}
      {/* BACKGROUND                                             */}
      {/* ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="plk-grid absolute inset-0 opacity-[0.035]" />

        <div className="absolute -left-[25%] top-[15%] h-[900px] w-[900px] rounded-full bg-blue-600/[0.045] blur-[220px]" />

        <div className="absolute -right-[20%] bottom-[5%] h-[750px] w-[750px] rounded-full bg-cyan-400/[0.025] blur-[220px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        {/* ====================================================== */}
        {/* SECTION HEADER                                        */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-end justify-between border-t border-white/[0.08] pt-6"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-blue-400" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.26em] text-blue-400">
              Selected Work
            </span>
          </div>

          <div className="flex items-baseline gap-1 font-mono">
            <span className="text-sm text-white">
              {active.number}
            </span>

            <span className="text-[8px] text-slate-700">
              / 03
            </span>
          </div>
        </motion.div>

        {/* ====================================================== */}
        {/* INTRO                                                  */}
        {/* ====================================================== */}

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-slate-600">
              Things we&apos;ve designed &amp; built
            </p>

            <h2 className="mt-5 max-w-xl text-[3.8rem] font-semibold leading-[0.84] tracking-[-0.065em] text-white sm:text-[5.5rem] lg:text-[6.5rem]">
              SELECTED
              <span className="block text-slate-700">
                WORK.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-500 lg:ml-auto lg:text-base lg:leading-8">
            From internal business systems to consumer
            products, we design and build technology around
            the people who actually use it.
          </p>
        </div>

        {/* ====================================================== */}
        {/* PROJECT STAGE                                         */}
        {/* ====================================================== */}

        <div className="mt-20 overflow-hidden border border-white/[0.08] bg-white/[0.015]">
          {/* TOP BAR */}

          <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-7">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
            </div>

            <div className="flex items-center gap-2">
              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-1.5 w-1.5 rounded-full bg-blue-400"
              />

              <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                PLK / Selected Work
              </span>
            </div>
          </div>

          {/* PROJECT */}

          <div className="grid lg:min-h-[620px] lg:grid-cols-[0.72fr_1.28fr]">
            {/* LEFT INFORMATION */}

            <div className="relative flex flex-col border-b border-white/[0.07] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{
                    opacity: 0,
                    y: 24,
                    filter: "blur(5px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    filter: "blur(5px)",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-blue-400">
                      {active.type}
                    </span>

                    <span className="h-px w-6 bg-white/[0.1]" />

                    <span className="font-mono text-[8px] text-slate-700">
                      {active.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-[3.3rem] font-semibold leading-[0.82] tracking-[-0.065em] text-white sm:text-[4.5rem] lg:text-[5rem]">
                    {active.title}

                    {active.secondLine && (
                      <span className="block text-slate-600">
                        {active.secondLine}
                      </span>
                    )}
                  </h3>

                  <p className="mt-8 max-w-md text-sm leading-7 text-slate-500">
                    {active.description}
                  </p>

                  {/* TAGS */}

                  <div className="mt-8 flex flex-wrap gap-2">
                    {active.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[7px] font-semibold uppercase tracking-[0.15em] text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* LINK */}

                  <Link
                    href={active.href}
                    className="group mt-10 inline-flex items-center gap-4"
                  >
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
                      View case study
                    </span>

                    <span className="text-blue-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* BOTTOM STAT */}

              <div className="mt-14 border-t border-white/[0.07] pt-6 lg:mt-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${active.id}-stat`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-end justify-between"
                  >
                    <div>
                      <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                        {active.statLabel}
                      </p>

                      <p className="mt-2 font-mono text-2xl text-slate-400">
                        {active.stat}
                      </p>
                    </div>

                    <span className="text-[7px] uppercase tracking-[0.18em] text-slate-800">
                      Built by PLK
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* ================================================== */}
            {/* PRODUCT VISUAL                                     */}
            {/* ================================================== */}

            <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden p-6 sm:min-h-[520px] sm:p-10 lg:min-h-[620px] lg:p-14">
              {/* BACKGROUND */}

              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.025] via-transparent to-cyan-400/[0.02]" />

                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]" />

                <div className="absolute inset-x-0 top-1/2 h-px bg-white/[0.025]" />
                <div className="absolute bottom-0 left-1/2 top-0 w-px bg-white/[0.025]" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                    y: 25,
                    rotateX: 4,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotateX: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.97,
                    y: -15,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative z-10 w-full"
                >
                  {/* PRODUCT FRAME */}

                  <div className="relative mx-auto max-w-[900px]">
                    <div className="absolute -inset-8 bg-blue-500/[0.05] blur-[60px]" />

                    <div className="relative overflow-hidden rounded-xl border border-white/[0.1] bg-[#0a101b] shadow-[0_40px_100px_rgba(0,0,0,0.55)]">
                      {/* WINDOW BAR */}

                      <div className="flex h-9 items-center justify-between border-b border-white/[0.07] bg-white/[0.025] px-4">
                        <div className="flex gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-white/[0.12]" />
                          <span className="h-1.5 w-1.5 rounded-full bg-white/[0.08]" />
                          <span className="h-1.5 w-1.5 rounded-full bg-white/[0.06]" />
                        </div>

                        <span className="text-[6px] uppercase tracking-[0.16em] text-slate-700">
                          {active.id}
                        </span>
                      </div>

                      {/* SCREENSHOT */}

                      <div className="relative aspect-[16/10] overflow-hidden bg-[#080d15]">
                        <Image
                          src={active.image}
                          alt={`${active.title} ${active.secondLine}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className={`${
                            active.id === "ascent"
                              ? "object-contain p-5 sm:p-8"
                              : "object-cover object-top"
                          }`}
                        />
                      </div>
                    </div>

                    {/* FLOATING PROJECT NUMBER */}

                    <motion.div
                      animate={{
                        y: [0, -7, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -bottom-5 -right-3 hidden border border-white/[0.1] bg-[#0a101b]/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block"
                    >
                      <p className="text-[6px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                        Project
                      </p>

                      <p className="mt-1 font-mono text-lg text-white">
                        {active.number}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* PROJECT SELECTOR                                       */}
        {/* ====================================================== */}

        <div className="mt-6 grid gap-px overflow-hidden border border-white/[0.07] bg-white/[0.07] md:grid-cols-3">
          {projects.map((project, index) => {
            const selected = index === activeIndex;

            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative flex items-center justify-between bg-[#050a13] px-5 py-5 text-left transition-colors duration-300 sm:px-6 ${
                  selected
                    ? "bg-white/[0.045]"
                    : "hover:bg-white/[0.025]"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="selected-project"
                    className="absolute inset-x-0 top-0 h-px bg-blue-400"
                  />
                )}

                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono text-[8px] transition-colors ${
                      selected
                        ? "text-blue-400"
                        : "text-slate-800"
                    }`}
                  >
                    {project.number}
                  </span>

                  <span
                    className={`text-[8px] font-semibold uppercase tracking-[0.17em] transition-colors ${
                      selected
                        ? "text-white"
                        : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  >
                    {project.title.replace(".", "")}
                  </span>
                </div>

                <span
                  className={`text-xs transition-all ${
                    selected
                      ? "translate-x-0 text-blue-400"
                      : "-translate-x-1 text-slate-800 group-hover:translate-x-0"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>

        {/* ====================================================== */}
        {/* MOBILE / MANUAL CONTROLS                               */}
        {/* ====================================================== */}

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={previousProject}
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center border border-white/[0.08] text-slate-500 transition hover:border-white/[0.16] hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextProject}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center border border-white/[0.08] text-slate-500 transition hover:border-white/[0.16] hover:text-white"
            >
              →
            </button>
          </div>

          <Link
            href="/work"
            className="group flex items-center gap-3"
          >
            <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-500 transition group-hover:text-white">
              View all work
            </span>

            <span className="text-blue-400 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}