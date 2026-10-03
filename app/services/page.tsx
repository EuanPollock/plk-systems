"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import SiteHeader from "@/components/site-header";

const services = [
  {
    number: "01",
    title: "WEBSITES.",
    eyebrow: "More than something that looks good.",
    description:
      "Websites designed around what your business actually needs to achieve — from generating enquiries to taking bookings, payments and giving customers access to online services.",
    capabilities: [
      "Business websites",
      "Customer portals",
      "Online booking",
      "Payments",
      "Account areas",
      "Enquiry systems",
      "Third-party integrations",
      "Content management",
    ],
    outcome: "Turn your website into part of how your business operates.",
    visual: "website",
  },
  {
    number: "02",
    title: "MOBILE APPS.",
    eyebrow: "Your product. In their pocket.",
    description:
      "Mobile experiences for customers, teams and entirely new digital products — designed around frequent use, simple interactions and the features that matter.",
    capabilities: [
      "Customer apps",
      "Internal team apps",
      "Consumer products",
      "User accounts",
      "Notifications",
      "Subscriptions",
      "Progress tracking",
      "Connected data",
    ],
    outcome: "Create a product people have a reason to keep using.",
    visual: "mobile",
  },
  {
    number: "03",
    title: "CUSTOM SOFTWARE.",
    eyebrow: "Software shaped around your operation.",
    description:
      "Purpose-built systems for businesses that have outgrown spreadsheets, disconnected tools or software that forces their team to work the wrong way.",
    capabilities: [
      "Operations systems",
      "CRM-style platforms",
      "Job management",
      "Customer management",
      "Quotes & invoices",
      "Dashboards",
      "Reporting",
      "Staff portals",
    ],
    outcome: "Put the way your business actually works into one system.",
    visual: "software",
  },
  {
    number: "04",
    title: "AUTOMATION.",
    eyebrow: "Less repetitive work. More connected systems.",
    description:
      "Automations that move information, trigger actions and connect the tools your business already uses — reducing manual admin without adding more complexity.",
    capabilities: [
      "Workflow automation",
      "Automated emails",
      "Data movement",
      "Notifications",
      "Document generation",
      "System integrations",
      "Status updates",
      "Internal workflows",
    ],
    outcome: "Let the system handle the work that should not need a person.",
    visual: "automation",
  },
];

const problems = [
  {
    id: "admin",
    label: "Too much manual admin",
    result: "Automation",
    copy:
      "We can identify repetitive processes and build workflows that move information, trigger actions and keep systems updated automatically.",
  },
  {
    id: "spreadsheets",
    label: "We're running everything from spreadsheets",
    result: "Custom Software",
    copy:
      "A purpose-built business system can bring customers, jobs, documents, reporting and day-to-day operations into one connected place.",
  },
  {
    id: "website",
    label: "Our website isn't doing enough",
    result: "Website",
    copy:
      "We can turn it into a working part of the business with enquiries, bookings, accounts, payments, integrations or whatever your customers actually need.",
  },
  {
    id: "idea",
    label: "I have an app or product idea",
    result: "Digital Product",
    copy:
      "We can take the idea from early product thinking through interface design and into a working web or mobile application.",
  },
  {
    id: "systems",
    label: "Our systems don't talk to each other",
    result: "Integration + Automation",
    copy:
      "We can connect the important parts of your workflow so information moves between systems instead of being repeatedly entered by your team.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: {
    duration: 0.75,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

export default function ServicesPage() {
  const [selectedProblem, setSelectedProblem] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050a13] text-white">
      <SiteHeader />

      {/* ====================================================== */}
      {/* HERO                                                   */}
      {/* ====================================================== */}

      <section className="relative min-h-[92vh] overflow-hidden pt-[76px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="plk-grid absolute inset-0 opacity-[0.035]" />

          <div className="absolute left-[15%] top-[15%] h-[700px] w-[700px] rounded-full bg-blue-600/[0.07] blur-[220px]" />

          <div className="absolute bottom-[-30%] right-[-10%] h-[700px] w-[700px] rounded-full bg-cyan-400/[0.035] blur-[220px]" />

          <div className="absolute bottom-0 left-1/2 top-0 w-px bg-white/[0.025]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(92vh-76px)] max-w-[1500px] flex-col justify-between px-6 pb-10 pt-16 sm:px-10 lg:px-16 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between border-t border-white/[0.07] pt-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.26em] text-blue-400">
                Services
              </span>
            </div>

            <span className="hidden font-mono text-[8px] uppercase tracking-[0.16em] text-slate-700 sm:block">
              Digital systems / built around you
            </span>
          </motion.div>

          <div className="py-20 lg:py-24">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-7 text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-600"
            >
              Start with the problem. Not the technology.
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
              WHAT DO
              <span className="block">YOU NEED</span>
              <span className="block text-slate-700">BUILT?</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid gap-8 border-t border-white/[0.07] pt-7 lg:grid-cols-[1fr_auto]"
          >
            <p className="max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Websites, mobile apps, internal systems and automation —
              designed around the problem you&apos;re trying to solve rather
              than forcing your business into an off-the-shelf product.
            </p>

            <div className="flex items-end">
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                Scroll to explore ↓
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* SERVICES                                               */}
      {/* ====================================================== */}

      <section className="relative border-t border-white/[0.05]">
        {services.map((service, index) => (
          <ServiceSection
            key={service.number}
            service={service}
            index={index}
          />
        ))}
      </section>

      {/* ====================================================== */}
      {/* PROBLEM FINDER                                         */}
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

          <div className="absolute right-[-15%] top-[-20%] h-[700px] w-[700px] rounded-full bg-blue-500/[0.08] blur-[200px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
          <motion.div {...reveal}>
            <div className="flex items-center justify-between border-t border-black/[0.1] pt-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/50">
                  Not sure what you need?
                </span>
              </div>

              <span className="hidden font-mono text-[8px] text-black/25 sm:block">
                PLK / FINDER
              </span>
            </div>

            <div className="mt-16 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-black/35">
                  Start here
                </p>

                <h2 className="mt-5 text-[4rem] font-semibold leading-[0.82] tracking-[-0.07em] sm:text-[5rem] lg:text-[6.5rem]">
                  WHAT&apos;S
                  <span className="block text-black/25">
                    THE PROBLEM?
                  </span>
                </h2>

                <p className="mt-8 max-w-md text-sm leading-7 text-black/50 sm:text-base">
                  You don&apos;t need to know whether you need an app,
                  automation or custom system. Tell us what isn&apos;t
                  working first.
                </p>
              </div>

              <div className="grid gap-4">
                {problems.map((problem, index) => {
                  const active = selectedProblem === index;

                  return (
                    <button
                      key={problem.id}
                      type="button"
                      onClick={() => setSelectedProblem(index)}
                      className={`group flex w-full items-center justify-between border px-5 py-5 text-left transition-all duration-300 sm:px-6 ${
                        active
                          ? "border-black bg-black text-white"
                          : "border-black/[0.12] bg-white/30 text-black hover:border-black/30 hover:bg-white/60"
                      }`}
                    >
                      <span className="flex items-center gap-4">
                        <span
                          className={`font-mono text-[8px] ${
                            active ? "text-blue-400" : "text-black/25"
                          }`}
                        >
                          0{index + 1}
                        </span>

                        <span className="text-sm font-medium sm:text-base">
                          {problem.label}
                        </span>
                      </span>

                      <span
                        className={`text-sm transition-transform duration-300 ${
                          active
                            ? "translate-x-0"
                            : "-translate-x-1 opacity-30 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* result */}

            <div className="mt-12 lg:ml-[calc(40%+3rem)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={problems[selectedProblem].id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-black/[0.12] pt-8"
                >
                  <div className="grid gap-7 sm:grid-cols-[170px_1fr]">
                    <div>
                      <p className="text-[7px] font-semibold uppercase tracking-[0.22em] text-black/30">
                        Possible direction
                      </p>

                      <p className="mt-3 text-sm font-semibold">
                        {problems[selectedProblem].result}
                      </p>
                    </div>

                    <div>
                      <p className="max-w-xl text-sm leading-7 text-black/55">
                        {problems[selectedProblem].copy}
                      </p>

                      <Link
                        href="/contact"
                        className="group mt-7 inline-flex items-center gap-4 text-[8px] font-semibold uppercase tracking-[0.2em] text-black"
                      >
                        Discuss this with us

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CONNECTED THINKING                                     */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden bg-[#050a13]">
        <div className="pointer-events-none absolute inset-0">
          <div className="plk-grid absolute inset-0 opacity-[0.025]" />

          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-[220px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
          <motion.div {...reveal}>
            <p className="text-[8px] font-semibold uppercase tracking-[0.26em] text-blue-400">
              One connected approach
            </p>

            <div className="mt-7 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <h2 className="text-[4rem] font-semibold leading-[0.82] tracking-[-0.07em] sm:text-[5.5rem] lg:text-[7rem]">
                IT DOESN&apos;T
                <span className="block">HAVE TO BE</span>
                <span className="block text-slate-700">
                  JUST ONE.
                </span>
              </h2>

              <div className="max-w-md lg:pb-2">
                <p className="text-base leading-8 text-slate-400">
                  A website can connect to your internal system. Your app can
                  share the same customer data. Automation can sit between
                  them. We can build the pieces as one connected digital
                  ecosystem.
                </p>

                <div className="mt-9 flex flex-wrap gap-2">
                  {[
                    "Website",
                    "App",
                    "Software",
                    "Automation",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <span className="border border-white/[0.09] bg-white/[0.025] px-3 py-2 text-[7px] font-semibold uppercase tracking-[0.17em] text-slate-500">
                        {item}
                      </span>

                      {index < 3 && (
                        <span className="text-[8px] text-blue-400/50">
                          +
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CTA                                                    */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#050a13]">
        <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
          <motion.div
            {...reveal}
            className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
          >
            <div>
              <p className="mb-7 text-[8px] font-semibold uppercase tracking-[0.26em] text-blue-400">
                Have something in mind?
              </p>

              <h2 className="text-[4rem] font-semibold leading-[0.82] tracking-[-0.07em] sm:text-[6rem] lg:text-[8rem]">
                LET&apos;S BUILD
                <span className="block text-slate-700">
                  WHAT&apos;S NEXT.
                </span>
              </h2>
            </div>

            <div className="max-w-md lg:pb-3">
              <p className="text-base leading-8 text-slate-400">
                Tell us what you&apos;re trying to improve, replace or create.
                We&apos;ll start with the problem and work out what should be
                built around it.
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
                  See our work
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
                className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white"
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
            <span>© {new Date().getFullYear()} PLK Systems</span>

            <span>Software built around your business.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ServiceSection({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const alternate = index % 2 === 1;

  return (
    <div className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-600/[0.045] blur-[200px] ${
            alternate ? "left-[-15%]" : "right-[-15%]"
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
        <motion.div
          {...reveal}
          className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24"
        >
          <div className={alternate ? "lg:order-2" : ""}>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[8px] text-blue-400">
                {service.number}
              </span>

              <span className="h-px w-10 bg-white/[0.1]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                {service.eyebrow}
              </span>
            </div>

            <h2 className="mt-8 text-[3.8rem] font-semibold leading-[0.82] tracking-[-0.07em] sm:text-[5rem] lg:text-[6rem]">
              {service.title}
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              {service.description}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/[0.08] pt-8">
              {service.capabilities.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span className="h-1 w-1 rounded-full bg-blue-400" />

                  <span className="text-xs text-slate-500">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 border-l border-blue-400/40 pl-5">
              <p className="max-w-md text-sm leading-7 text-slate-300">
                {service.outcome}
              </p>
            </div>
          </div>

          <div className={alternate ? "lg:order-1" : ""}>
            <ServiceVisual type={service.visual} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ServiceVisual({ type }: { type: string }) {
  if (type === "website") {
    return (
      <div className="relative mx-auto max-w-[620px]">
        <div className="absolute -inset-16 -z-10 rounded-full bg-blue-500/[0.07] blur-[120px]" />

        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden rounded-xl border border-white/[0.09] bg-[#0a101a] shadow-[0_50px_130px_rgba(0,0,0,0.55)]"
        >
          <div className="flex h-10 items-center justify-between border-b border-white/[0.06] px-4">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="h-2 w-2 rounded-full bg-white/10" />
              <span className="h-2 w-2 rounded-full bg-white/10" />
            </div>

            <div className="h-1.5 w-28 rounded-full bg-white/[0.07]" />

            <span className="text-[6px] uppercase tracking-[0.18em] text-slate-700">
              WEB
            </span>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div className="h-3 w-20 rounded-full bg-white/70" />

              <div className="flex gap-4">
                <div className="h-1.5 w-10 rounded-full bg-white/10" />
                <div className="h-1.5 w-10 rounded-full bg-white/10" />
                <div className="h-1.5 w-10 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="py-14 sm:py-20">
              <div className="h-2 w-20 rounded-full bg-blue-400/50" />

              <div className="mt-5 h-7 w-[80%] rounded bg-white/80 sm:h-9" />

              <div className="mt-3 h-7 w-[55%] rounded bg-white/15 sm:h-9" />

              <div className="mt-6 h-2 w-[65%] rounded-full bg-white/10" />

              <div className="mt-2 h-2 w-[50%] rounded-full bg-white/[0.06]" />

              <div className="mt-8 h-9 w-28 bg-blue-500/80" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-24 border border-white/[0.06] bg-white/[0.02]"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (type === "mobile") {
    return (
      <div className="relative mx-auto flex min-h-[570px] max-w-[620px] items-center justify-center">
        <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-500/[0.06] blur-[130px]" />

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-20 w-[210px] sm:w-[235px]"
        >
          <MockPhone />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 0.45, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute right-[4%] top-[18%] hidden w-[175px] rotate-6 sm:block"
        >
          <MockPhone />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 0.35, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-[8%] left-[5%] hidden w-[165px] -rotate-6 md:block"
        >
          <MockPhone />
        </motion.div>
      </div>
    );
  }

  if (type === "software") {
    return (
      <div className="relative mx-auto max-w-[620px]">
        <div className="absolute -inset-16 -z-10 rounded-full bg-blue-500/[0.07] blur-[120px]" />

        <div className="overflow-hidden rounded-xl border border-white/[0.09] bg-[#0a101a] shadow-[0_50px_130px_rgba(0,0,0,0.6)]">
          <div className="flex h-11 items-center justify-between border-b border-white/[0.06] px-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />

              <span className="text-[7px] font-semibold uppercase tracking-[0.17em] text-slate-500">
                Operations
              </span>
            </div>

            <span className="font-mono text-[7px] text-slate-700">
              LIVE
            </span>
          </div>

          <div className="grid grid-cols-[70px_1fr] sm:grid-cols-[110px_1fr]">
            <div className="border-r border-white/[0.06] p-3 sm:p-4">
              <div className="mb-8 h-3 w-8 rounded-full bg-white/30" />

              <div className="space-y-5">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className={`h-1.5 rounded-full ${
                      item === 1
                        ? "w-10 bg-blue-400/60"
                        : "w-8 bg-white/[0.07]"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <div className="flex items-end justify-between">
                <div>
                  <div className="h-2 w-14 rounded-full bg-white/15" />

                  <div className="mt-3 h-5 w-32 rounded bg-white/60" />
                </div>

                <div className="h-8 w-20 rounded bg-blue-500/70" />
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3">
                {[72, 24, 18].map((number) => (
                  <div
                    key={number}
                    className="border border-white/[0.06] bg-white/[0.02] p-3"
                  >
                    <p className="font-mono text-lg text-white">
                      {number}
                    </p>

                    <div className="mt-2 h-1 w-10 rounded-full bg-white/10" />
                  </div>
                ))}
              </div>

              <div className="mt-5 border border-white/[0.06]">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="grid grid-cols-[1fr_70px_50px] items-center gap-3 border-b border-white/[0.05] px-3 py-3 last:border-b-0"
                  >
                    <div className="h-1.5 w-20 rounded-full bg-white/10" />
                    <div className="h-1.5 w-10 rounded-full bg-white/[0.06]" />
                    <div className="h-4 rounded-full bg-blue-400/[0.08]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto flex min-h-[520px] max-w-[620px] items-center justify-center">
      <div className="absolute h-[480px] w-[480px] rounded-full bg-blue-500/[0.06] blur-[140px]" />

      <div className="relative h-[420px] w-full">
        <div className="absolute left-1/2 top-1/2 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

        <div className="absolute bottom-[20%] left-1/2 top-[20%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent" />

        {[
          {
            label: "Enquiry",
            position: "left-[3%] top-[12%]",
          },
          {
            label: "Customer",
            position: "right-[3%] top-[12%]",
          },
          {
            label: "Invoice",
            position: "bottom-[10%] left-[3%]",
          },
          {
            label: "Email",
            position: "bottom-[10%] right-[3%]",
          },
        ].map((node, index) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className={`absolute ${node.position} flex h-20 w-28 items-center justify-center border border-white/[0.08] bg-[#0a101a]/90 backdrop-blur`}
          >
            <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {node.label}
            </span>
          </motion.div>
        ))}

        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 rgba(96,165,250,0)",
              "0 0 45px rgba(96,165,250,0.12)",
              "0 0 0 rgba(96,165,250,0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400/25 bg-[#0a101a]"
        >
          <div className="text-center">
            <span className="mx-auto block h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.8)]" />

            <p className="mt-4 text-[8px] font-semibold uppercase tracking-[0.2em] text-white">
              Automation
            </p>

            <p className="mt-1 text-[6px] uppercase tracking-[0.16em] text-slate-600">
              Running
            </p>
          </div>
        </motion.div>

        <motion.span
          animate={{
            left: ["20%", "80%", "20%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]"
        />
      </div>
    </div>
  );
}

function MockPhone() {
  return (
    <div className="overflow-hidden rounded-[2rem] border-[6px] border-[#181d25] bg-[#0b1018] shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
      <div className="relative min-h-[430px] overflow-hidden rounded-[1.55rem] bg-[#080d14] p-5">
        <div className="absolute left-1/2 top-2 h-4 w-14 -translate-x-1/2 rounded-full bg-black" />

        <div className="pt-9">
          <div className="flex items-center justify-between">
            <div className="h-2 w-14 rounded-full bg-white/30" />

            <div className="h-5 w-5 rounded-full border border-white/10" />
          </div>

          <div className="mt-10">
            <div className="h-1.5 w-16 rounded-full bg-blue-400/60" />

            <div className="mt-4 h-6 w-[85%] rounded bg-white/70" />

            <div className="mt-2 h-6 w-[55%] rounded bg-white/15" />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2">
            <div className="h-20 rounded-xl border border-white/[0.06] bg-white/[0.025]" />
            <div className="h-20 rounded-xl border border-white/[0.06] bg-white/[0.025]" />
          </div>

          <div className="mt-3 h-28 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
            <div className="h-1.5 w-16 rounded-full bg-white/10" />

            <div className="mt-5 flex h-14 items-end gap-1">
              {[25, 45, 35, 65, 50, 80, 58, 90].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-sm bg-blue-400/30"
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>
          </div>

          <div className="mt-4 h-10 rounded-lg bg-blue-500/70" />
        </div>
      </div>
    </div>
  );
}