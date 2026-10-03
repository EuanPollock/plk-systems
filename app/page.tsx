"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import SiteHeader from "@/components/site-header";
import Hero from "@/components/home/hero";
import ConnectedSystem from "@/components/home/connected-system";
import Capabilities from "@/components/home/capabilities";
import Statement from "@/components/home/statement";
import SelectedWork from "@/components/home/selected-work";
import SystemBuilder from "@/components/home/system-builder";
import Process from "@/components/home/process";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: {
    duration: 0.8,
    ease,
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050a13] text-white">
      <SiteHeader />

      {/* ====================================================== */}
      {/* HERO                                                   */}
      {/* ====================================================== */}

      <section className="relative">
        <Hero />

        {/* transition line */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 hidden h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-400/40 to-transparent lg:block" />
      </section>

      {/* ====================================================== */}
      {/* SIGNAL STRIP                                           */}
      {/* ====================================================== */}

      <section className="relative z-20 border-y border-white/[0.06] bg-[#050a13]">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            <Signal
              number="01"
              label="Websites"
              detail="Digital experiences"
            />

            <Signal
              number="02"
              label="Mobile Apps"
              detail="Products in your pocket"
            />

            <Signal
              number="03"
              label="Software"
              detail="Built around operations"
            />

            <Signal
              number="04"
              label="Automation"
              detail="Less manual work"
              last
            />
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CONNECTED SYSTEM                                       */}
      {/* ====================================================== */}

      <section className="relative">
        <SectionMarker
          number="01"
          label="One connected ecosystem"
        />

        <ConnectedSystem />
      </section>

      {/* ====================================================== */}
      {/* BRIDGE                                                 */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden bg-[#050a13]">
        <div className="pointer-events-none absolute inset-0">
          <div className="plk-grid absolute inset-0 opacity-[0.025]" />

          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.05] blur-[220px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
          <motion.div
            {...reveal}
            className="grid gap-12 border-y border-white/[0.07] py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:py-16"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                Different problems
              </span>
            </div>

            <p className="max-w-3xl text-3xl font-medium leading-[1.08] tracking-[-0.045em] text-slate-300 sm:text-4xl lg:text-5xl">
              Not every business needs the same thing.
              <span className="text-slate-700">
                {" "}
                That&apos;s exactly the point.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CAPABILITIES                                           */}
      {/* ====================================================== */}

      <section className="relative">
        <SectionMarker
          number="02"
          label="Capabilities"
        />

        <Capabilities />
      </section>

      {/* ====================================================== */}
      {/* STICKY STATEMENT                                       */}
      {/* ====================================================== */}

      <section className="relative">
        <Statement />
      </section>

      {/* ====================================================== */}
      {/* SELECTED WORK INTRO                                    */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden bg-[#050a13]">
        <div className="pointer-events-none absolute inset-0">
          <div className="plk-grid absolute inset-0 opacity-[0.02]" />

          <motion.div
            animate={{
              x: ["-8%", "8%", "-8%"],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[15%] top-1/2 h-[450px] w-[700px] -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[180px]"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-10 pt-24 sm:px-10 sm:pt-28 lg:px-16 lg:pt-36">
          <motion.div
            {...reveal}
            className="flex items-end justify-between border-t border-white/[0.07] pt-7"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                Things we&apos;ve built
              </span>
            </div>

            <span className="hidden font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700 sm:block">
              PLK / Selected work
            </span>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* SELECTED WORK                                          */}
      {/* ====================================================== */}

      <div id="work">
        <SelectedWork />
      </div>

      {/* ====================================================== */}
      {/* WORK EXIT                                              */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden bg-[#050a13]">
        <div className="mx-auto max-w-[1500px] px-6 pb-28 sm:px-10 sm:pb-32 lg:px-16 lg:pb-40">
          <motion.div
            {...reveal}
            className="grid gap-10 border-t border-white/[0.07] pt-10 lg:grid-cols-[1fr_auto] lg:items-center"
          >
            <p className="max-w-2xl text-xl leading-8 tracking-[-0.025em] text-slate-500 sm:text-2xl">
              Different products.
              <span className="text-white">
                {" "}
                Same approach — understand the problem and build
                around it.
              </span>
            </p>

            <Link
              href="/work"
              className="group inline-flex items-center gap-5 text-[8px] font-semibold uppercase tracking-[0.22em] text-blue-400"
            >
              Explore all work

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* SYSTEM BUILDER INTRO                                   */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden bg-[#050a13]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-15%] top-[-40%] h-[700px] w-[700px] rounded-full bg-cyan-400/[0.03] blur-[220px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-6 pt-10 sm:px-10 lg:px-16">
          <motion.div
            {...reveal}
            className="grid gap-10 border-t border-white/[0.07] pt-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
          >
            <div>
              <span className="font-mono text-[8px] text-blue-400">
                03
              </span>

              <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                Make it yours
              </p>
            </div>

            <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              DON&apos;T JUST READ
              <span className="block text-slate-700">
                ABOUT IT.
              </span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* SYSTEM BUILDER                                         */}
      {/* ====================================================== */}

      <SystemBuilder />

      {/* ====================================================== */}
      {/* PROCESS TRANSITION                                     */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden bg-[#050a13]">
        <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
          <motion.div
            {...reveal}
            className="relative overflow-hidden border border-white/[0.08] bg-[#080d15]"
          >
            <div className="plk-grid pointer-events-none absolute inset-0 opacity-[0.025]" />

            <div className="relative z-10 grid lg:grid-cols-[0.72fr_1.28fr]">
              <div className="border-b border-white/[0.07] p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <span className="font-mono text-[8px] text-blue-400">
                  04
                </span>

                <p className="mt-5 text-[8px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                  The process
                </p>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <p className="max-w-3xl text-3xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                  From the first conversation
                  <span className="text-slate-700">
                    {" "}
                    to something real.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* PROCESS                                                */}
      {/* ====================================================== */}

      <div id="process">
        <Process />
      </div>

      {/* ====================================================== */}
      {/* CINEMATIC FINAL CTA                                    */}
      {/* ====================================================== */}

      <section className="relative min-h-[92vh] overflow-hidden bg-[#050a13]">
        {/* atmosphere */}

        <div className="pointer-events-none absolute inset-0">
          <div className="plk-grid absolute inset-0 opacity-[0.03]" />

          <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.075] blur-[260px]" />

          <motion.div
            animate={{
              opacity: [0.2, 0.55, 0.2],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/[0.08]"
          />

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border-t border-white/[0.05]"
          />

          <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.025]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-[1500px] flex-col justify-between px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          {/* top */}

          <motion.div
            {...reveal}
            className="flex items-center justify-between border-t border-white/[0.08] pt-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.26em] text-blue-400">
                Your turn
              </span>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.4)]" />

              <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                Enquiries open
              </span>
            </div>
          </motion.div>

          {/* centre */}

          <div className="py-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mb-8 text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-600"
            >
              Have something in mind?
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1,
                ease,
              }}
              className="max-w-[1350px] text-[4.5rem] font-semibold leading-[0.78] tracking-[-0.075em] sm:text-[7rem] lg:text-[10rem] xl:text-[11.5rem]"
            >
              LET&apos;S BUILD
              <span className="block text-slate-700">
                WHAT&apos;S NEXT.
              </span>
            </motion.h2>
          </div>

          {/* bottom */}

          <motion.div
            {...reveal}
            className="grid gap-10 border-t border-white/[0.08] pt-9 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <div>
              <p className="max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                A website. An app. An internal system. An idea
                you&apos;re not quite sure how to build yet.
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">
                Start with the problem.
              </p>
            </div>

            <Link
              href="/contact"
              className="group relative inline-flex min-w-[250px] items-center justify-between overflow-hidden bg-white px-7 py-6 text-[#050a13]"
            >
              <span className="absolute inset-0 translate-y-full bg-blue-400 transition-transform duration-500 ease-out group-hover:translate-y-0" />

              <span className="relative z-10 text-[9px] font-semibold uppercase tracking-[0.2em]">
                Start a project
              </span>

              <span className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* FOOTER                                                 */}
      {/* ====================================================== */}

      <footer className="relative border-t border-white/[0.07] bg-[#050a13]">
        <div className="mx-auto max-w-[1500px] px-6 py-12 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">
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
              <FooterLink href="/services">
                Services
              </FooterLink>

              <FooterLink href="/work">
                Work
              </FooterLink>

              <FooterLink href="/about">
                About
              </FooterLink>

              <FooterLink href="/contact">
                Contact
              </FooterLink>

              <FooterLink href="/privacy">
                Privacy
              </FooterLink>
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

/* ============================================================ */
/* SIGNAL                                                       */
/* ============================================================ */

function Signal({
  number,
  label,
  detail,
  last = false,
}: {
  number: string;
  label: string;
  detail: string;
  last?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        ease,
      }}
      className={`group relative py-7 sm:px-7 lg:py-8 ${
        last ? "" : "lg:border-r lg:border-white/[0.06]"
      }`}
    >
      <div className="flex items-start gap-5">
        <span className="mt-1 font-mono text-[7px] text-blue-400">
          {number}
        </span>

        <div>
          <p className="text-xs font-medium text-slate-300 transition-colors group-hover:text-white">
            {label}
          </p>

          <p className="mt-1.5 text-[8px] uppercase tracking-[0.15em] text-slate-700">
            {detail}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================ */
/* SECTION MARKER                                               */
/* ============================================================ */

function SectionMarker({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="pointer-events-none absolute left-0 right-0 top-0 z-30">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between border-t border-white/[0.06] pt-5">
          <span className="font-mono text-[7px] text-blue-400/70">
            {number}
          </span>

          <span className="hidden text-[7px] font-semibold uppercase tracking-[0.2em] text-slate-800 sm:block">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================ */
/* FOOTER LINK                                                  */
/* ============================================================ */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:text-white"
    >
      {children}
    </Link>
  );
}