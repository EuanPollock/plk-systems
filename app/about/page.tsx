"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import SiteHeader from "@/components/site-header";

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: {
    duration: 0.75,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

const principles = [
  {
    number: "01",
    title: "UNDERSTAND FIRST.",
    copy:
      "The starting point is not a list of features. It is understanding how the business works, where the friction is and what actually needs to change.",
  },
  {
    number: "02",
    title: "BUILD AROUND IT.",
    copy:
      "The system should adapt to the business — not force the business to adapt to somebody else's software.",
  },
  {
    number: "03",
    title: "KEEP IT USEFUL.",
    copy:
      "Good software should make something easier, faster or more effective. Features only belong if they contribute to that.",
  },
  {
    number: "04",
    title: "THINK BEYOND LAUNCH.",
    copy:
      "A digital product is rarely finished on launch day. It should be capable of evolving as the business, users and requirements change.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050a13] text-white">
      <SiteHeader />

      {/* ====================================================== */}
      {/* HERO                                                   */}
      {/* ====================================================== */}

      <section className="relative min-h-[94vh] overflow-hidden pt-[76px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="plk-grid absolute inset-0 opacity-[0.035]" />

          <div className="absolute left-[-15%] top-[5%] h-[800px] w-[800px] rounded-full bg-blue-600/[0.07] blur-[220px]" />

          <div className="absolute bottom-[-30%] right-[-10%] h-[700px] w-[700px] rounded-full bg-cyan-500/[0.035] blur-[220px]" />

          <div className="absolute bottom-0 left-[68%] top-0 w-px bg-white/[0.025]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(94vh-76px)] max-w-[1500px] flex-col justify-between px-6 pb-10 pt-16 sm:px-10 lg:px-16 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between border-t border-white/[0.07] pt-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.26em] text-blue-400">
                About PLK Systems
              </span>
            </div>

            <span className="hidden font-mono text-[8px] uppercase tracking-[0.16em] text-slate-700 sm:block">
              Independent software studio
            </span>
          </motion.div>

          <div className="py-16 lg:py-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-7 text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-600"
            >
              Built differently
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[4.6rem] font-semibold leading-[0.78] tracking-[-0.075em] sm:text-[7rem] lg:text-[9rem] xl:text-[10.5rem]"
            >
              SMALL
              <span className="block">STUDIO.</span>
              <span className="block text-slate-700">
                BIG SYSTEMS.
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid gap-8 border-t border-white/[0.07] pt-7 lg:grid-cols-[1fr_auto]"
          >
            <p className="max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              PLK Systems is an independent digital studio building websites,
              applications and custom software around the people and businesses
              that use them.
            </p>

            <span className="self-end text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-700">
              Scotland / UK
            </span>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* WHY PLK EXISTS                                         */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden border-t border-white/[0.06]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-15%] top-[5%] h-[700px] w-[700px] rounded-full bg-blue-500/[0.05] blur-[220px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
          <motion.div {...reveal}>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/30" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-slate-600">
                Why PLK Systems
              </span>
            </div>

            <div className="mt-16 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
              <div>
                <h2 className="text-[4rem] font-semibold leading-[0.84] tracking-[-0.07em] sm:text-[5.5rem] lg:text-[7rem]">
                  SOFTWARE
                  <span className="block">SHOULDN&apos;T</span>
                  <span className="block text-slate-700">
                    GET IN THE WAY.
                  </span>
                </h2>
              </div>

              <div className="max-w-lg lg:pt-3">
                <p className="text-lg leading-9 text-slate-300">
                  Businesses often end up working around their software.
                </p>

                <p className="mt-7 text-sm leading-8 text-slate-500 sm:text-base">
                  Information gets spread across spreadsheets. The same data is
                  entered more than once. Teams move between systems that
                  weren&apos;t designed to work together. Customers are pushed
                  through processes that don&apos;t quite fit.
                </p>

                <p className="mt-7 text-sm leading-8 text-slate-500 sm:text-base">
                  PLK Systems takes the opposite approach: understand the
                  problem first, then build the technology around it.
                </p>

                <div className="mt-10 border-l border-blue-400/40 pl-5">
                  <p className="text-sm leading-7 text-slate-300">
                    The goal isn&apos;t more software. It&apos;s better ways of
                    working.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* STATEMENT                                              */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden bg-[#eef0f2] text-[#0a0d12]">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          <div className="absolute left-[-20%] top-[-20%] h-[800px] w-[800px] rounded-full bg-blue-500/[0.08] blur-[220px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
          <motion.div {...reveal}>
            <p className="text-[8px] font-semibold uppercase tracking-[0.26em] text-black/35">
              The difference
            </p>

            <div className="mt-10 grid gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <h2 className="text-[4rem] font-semibold leading-[0.82] tracking-[-0.075em] sm:text-[6rem] lg:text-[8rem]">
                NOT OFF
                <span className="block">THE SHELF.</span>
                <span className="block text-black/20">
                  YOURS.
                </span>
              </h2>

              <div className="max-w-md lg:pb-3">
                <p className="text-base leading-8 text-black/55">
                  There are plenty of excellent off-the-shelf products. When
                  one already solves the problem properly, businesses should
                  use it.
                </p>

                <p className="mt-6 text-base leading-8 text-black/55">
                  PLK Systems is for the situations where the process, product
                  or idea needs something more specific.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* PRINCIPLES                                             */}
      {/* ====================================================== */}

      <section className="relative bg-[#050a13]">
        <div className="mx-auto max-w-[1500px] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
          <motion.div {...reveal}>
            <div className="flex items-center justify-between border-t border-white/[0.07] pt-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-blue-400" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                  How we think
                </span>
              </div>

              <span className="font-mono text-[8px] text-slate-700">
                01 — 04
              </span>
            </div>

            <div className="mt-16">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group grid gap-6 border-t border-white/[0.07] py-10 transition-colors duration-300 lg:grid-cols-[90px_0.9fr_1.1fr] lg:items-start lg:py-14"
                >
                  <span className="font-mono text-[8px] text-blue-400">
                    {principle.number}
                  </span>

                  <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
                    {principle.title}
                  </h3>

                  <p className="max-w-lg text-sm leading-7 text-slate-500 lg:justify-self-end">
                    {principle.copy}
                  </p>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* FOUNDER                                                */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden bg-[#0a0f18]">
        <div className="pointer-events-none absolute inset-0">
          <div className="plk-grid absolute inset-0 opacity-[0.025]" />

          <div className="absolute bottom-[-30%] left-[-10%] h-[700px] w-[700px] rounded-full bg-blue-600/[0.06] blur-[220px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
          <motion.div
            {...reveal}
            className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-28"
          >
            {/* abstract founder visual */}

            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="aspect-[4/5] overflow-hidden border border-white/[0.08] bg-[#070b11]">
                <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                      PLK / 001
                    </span>

                    <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.6)]" />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-white/[0.06] sm:h-64 sm:w-64">
                      <div className="absolute inset-6 rounded-full border border-white/[0.04]" />

                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 25,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full border-t border-blue-400/40"
                      />

                      <span className="text-[5rem] font-semibold tracking-[-0.08em] text-white sm:text-[6rem]">
                        EP
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 border-t border-white/[0.07] pt-5">
                    <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white">
                      Founder / Developer
                    </p>

                    <p className="mt-2 text-[8px] uppercase tracking-[0.18em] text-slate-600">
                      PLK Systems
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-5 border border-white/[0.08] bg-[#050a13] px-5 py-4 shadow-2xl">
                <p className="text-[7px] uppercase tracking-[0.2em] text-slate-600">
                  Based in
                </p>

                <p className="mt-2 text-xs font-medium text-white">
                  Scotland
                </p>
              </div>
            </div>

            {/* founder copy */}

            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.26em] text-blue-400">
                Founder-led
              </p>

              <h2 className="mt-7 text-[4rem] font-semibold leading-[0.83] tracking-[-0.07em] sm:text-[5rem] lg:text-[6.5rem]">
                DIRECT FROM
                <span className="block">IDEA TO</span>
                <span className="block text-slate-700">
                  BUILD.
                </span>
              </h2>

              <div className="mt-10 max-w-xl space-y-6 text-sm leading-8 text-slate-500 sm:text-base">
                <p>
                  PLK Systems is founded and run by Euan Pollock, with a focus
                  on designing and building digital products that solve real
                  operational problems.
                </p>

                <p>
                  Being founder-led keeps the process direct. The person
                  discussing the problem is closely involved in designing the
                  solution and building the product.
                </p>

                <p>
                  That means fewer layers between an idea and the finished
                  system — and a better understanding of why each part is being
                  built.
                </p>
              </div>

              <div className="mt-10 grid gap-6 border-t border-white/[0.08] pt-8 sm:grid-cols-2">
                <div>
                  <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                    Approach
                  </p>

                  <p className="mt-3 text-sm text-slate-300">
                    Direct & collaborative
                  </p>
                </div>

                <div>
                  <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                    Focus
                  </p>

                  <p className="mt-3 text-sm text-slate-300">
                    Useful digital products
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CAPABILITIES                                           */}
      {/* ====================================================== */}

      <section className="relative bg-[#eef0f2] text-[#0a0d12]">
        <div className="mx-auto max-w-[1500px] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
          <motion.div {...reveal}>
            <p className="text-[8px] font-semibold uppercase tracking-[0.26em] text-black/35">
              What that looks like
            </p>

            <div className="mt-8 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <h2 className="text-[4rem] font-semibold leading-[0.83] tracking-[-0.07em] sm:text-[5.5rem] lg:text-[7rem]">
                ONE STUDIO.
                <span className="block text-black/20">
                  MULTIPLE
                </span>
                <span className="block">
                  DISCIPLINES.
                </span>
              </h2>

              <p className="max-w-md text-base leading-8 text-black/50 lg:justify-self-end">
                Product thinking, interface design, application development,
                databases and automation can all be considered as parts of the
                same system rather than separate services.
              </p>
            </div>

            <div className="mt-16 grid border-y border-black/[0.1] sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Strategy"],
                ["02", "Design"],
                ["03", "Development"],
                ["04", "Integration"],
              ].map(([number, label], index) => (
                <div
                  key={label}
                  className={`py-8 sm:p-8 ${
                    index > 0
                      ? "sm:border-l sm:border-black/[0.1]"
                      : ""
                  }`}
                >
                  <span className="font-mono text-[8px] text-black/25">
                    {number}
                  </span>

                  <p className="mt-7 text-lg font-semibold tracking-[-0.03em]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CTA                                                    */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden bg-[#050a13]">
        <div className="pointer-events-none absolute inset-0">
          <div className="plk-grid absolute inset-0 opacity-[0.025]" />

          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-[220px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
          <motion.div
            {...reveal}
            className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
          >
            <div>
              <p className="mb-7 text-[8px] font-semibold uppercase tracking-[0.26em] text-blue-400">
                Work with PLK Systems
              </p>

              <h2 className="text-[4rem] font-semibold leading-[0.82] tracking-[-0.07em] sm:text-[6rem] lg:text-[8rem]">
                HAVE A
                <span className="block">PROBLEM WORTH</span>
                <span className="block text-slate-700">
                  SOLVING?
                </span>
              </h2>
            </div>

            <div className="max-w-md lg:pb-3">
              <p className="text-base leading-8 text-slate-400">
                Tell us what&apos;s slowing the business down, what you want to
                improve or what you&apos;re thinking about creating.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-5 bg-white px-6 py-4 text-[8px] font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-blue-400"
                >
                  Start a conversation

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center border border-white/[0.12] px-6 py-4 text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-400 transition hover:border-white/30 hover:text-white"
                >
                  View our work
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
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
                Websites, applications and systems built around your business.
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
                className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:text-white"
              >
                Work
              </Link>

              <Link
                href="/about"
                className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white"
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
            <span>© {new Date().getFullYear()} PLK Systems</span>

            <span>Software built around your business.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}