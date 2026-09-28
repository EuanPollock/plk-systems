"use client";

import Image from "next/image";
import { motion } from "motion/react";

const reveal = {
  initial: {
    opacity: 0,
    y: 50,
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
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

export default function HorizonShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#050a13]">

      {/* ============================================================ */}
      {/* BACKGROUND                                                   */}
      {/* ============================================================ */}

      <div className="pointer-events-none absolute inset-0">
        <div className="plk-grid absolute inset-0 opacity-[0.035]" />

        <div className="absolute left-1/2 top-[10%] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/[0.04] blur-[220px]" />

        <div className="absolute right-[-15%] top-[48%] h-[700px] w-[700px] rounded-full bg-cyan-500/[0.025] blur-[220px]" />
      </div>

      {/* ============================================================ */}
      {/* INTRO                                                        */}
      {/* ============================================================ */}

<div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-28 pt-16 sm:px-10 sm:pt-20 lg:px-16 lg:pb-40 lg:pt-24">        <motion.div {...reveal}>

          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-500" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-blue-400">
              Selected Work / 01
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">

            <div>
              <h2 className="text-[4rem] font-semibold leading-[0.82] tracking-[-0.07em] text-white sm:text-[6rem] lg:text-[8rem] xl:text-[9rem]">
                HORIZON

                <span className="block text-slate-700">
                  OPERATIONS.
                </span>
              </h2>
            </div>

            <div className="max-w-md lg:pb-3">
              <p className="text-base leading-8 text-slate-400 sm:text-lg">
                One connected system built around the way the business
                actually operates.
              </p>

              <div className="mt-8 h-px bg-gradient-to-r from-blue-500/70 to-transparent" />

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                {[
                  "Jobs",
                  "Customers",
                  "Schedule",
                  "Quotes",
                  "Invoices",
                  "Reports",
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

          </div>

        </motion.div>

      </div>

      {/* ============================================================ */}
      {/* MAIN DASHBOARD                                               */}
      {/* ============================================================ */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-36 sm:px-10 lg:px-16 lg:pb-52">

        <motion.div {...reveal}>

          {/* heading */}
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                Command Centre
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                The whole operation at a glance.
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[7px] font-medium uppercase tracking-[0.18em] text-slate-600">
                System Live
              </span>
            </div>

          </div>

          {/* dashboard */}
          <div className="relative">

            <div className="absolute -inset-16 -z-10 rounded-[100px] bg-blue-500/[0.07] blur-[120px]" />

            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09111e] shadow-[0_60px_180px_rgba(0,0,0,0.8)]">
              <Image
                src="/horizon/horizon-dashboard.png"
                alt="Horizon Operations dashboard"
                width={1800}
                height={1100}
                priority
                className="h-auto w-full"
              />
            </div>

            {/* floating system label */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-4 rounded-full border border-white/[0.08] bg-[#09111e]/95 px-5 py-3 shadow-2xl backdrop-blur-xl md:flex"
            >
              {["Jobs", "Customers", "Finance", "Reporting"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <span className="text-[7px] uppercase tracking-[0.18em] text-slate-500">
                      {item}
                    </span>

                    {index < 3 && (
                      <span className="h-1 w-1 rounded-full bg-slate-700" />
                    )}
                  </div>
                )
              )}
            </motion.div>

          </div>

        </motion.div>

      </div>

      {/* ============================================================ */}
      {/* JOBS + CUSTOMERS                                             */}
      {/* ============================================================ */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-36 sm:px-10 lg:px-16 lg:pb-52">

        <motion.div {...reveal} className="mb-10 max-w-xl">
          <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-blue-400">
            Connected Data
          </p>

          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
            Customers and jobs.
            <span className="block text-slate-600">
              Always connected.
            </span>
          </h3>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* jobs */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                01 / Jobs
              </span>

              <span className="text-[7px] uppercase tracking-[0.18em] text-slate-700">
                Operations
              </span>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#09111e] shadow-[0_40px_100px_rgba(0,0,0,0.55)]">
              <Image
                src="/horizon/horizon-jobs.png"
                alt="Horizon jobs management"
                width={1600}
                height={1000}
                className="h-auto w-full"
              />
            </div>
          </motion.div>

          {/* customers */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:mt-24"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                02 / Customers
              </span>

              <span className="text-[7px] uppercase tracking-[0.18em] text-slate-700">
                CRM
              </span>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#09111e] shadow-[0_40px_100px_rgba(0,0,0,0.55)]">
              <Image
                src="/horizon/horizon-customers.png"
                alt="Horizon customer management"
                width={1600}
                height={1000}
                className="h-auto w-full"
              />
            </div>
          </motion.div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* SCHEDULE                                                     */}
      {/* ============================================================ */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-36 sm:px-10 lg:px-16 lg:pb-52">

        <motion.div {...reveal}>

          <div className="mb-8 grid gap-6 lg:grid-cols-2 lg:items-end">

            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                Scheduling
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                See what&apos;s happening.
                <span className="block text-slate-600">
                  Before it happens.
                </span>
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500 lg:justify-self-end">
              Jobs, teams and upcoming work brought together into one
              operational schedule.
            </p>

          </div>

          <div className="relative">

            <div className="absolute -inset-16 -z-10 bg-blue-500/[0.04] blur-[110px]" />

            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09111e] shadow-[0_50px_140px_rgba(0,0,0,0.65)]">
              <Image
                src="/horizon/horizon-schedule.png"
                alt="Horizon scheduling"
                width={1800}
                height={1100}
                className="h-auto w-full"
              />
            </div>

          </div>

        </motion.div>

      </div>

      {/* ============================================================ */}
      {/* QUOTE → INVOICE → REPORT                                    */}
      {/* ============================================================ */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-40 sm:px-10 lg:px-16 lg:pb-56">

        <motion.div {...reveal} className="mb-12">

          <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-blue-400">
            One Workflow
          </p>

          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
            Quote. Invoice. Report.
            <span className="block text-slate-600">
              Without breaking the flow.
            </span>
          </h3>

        </motion.div>

        <div className="grid gap-7 lg:grid-cols-3">

          {[
            {
              number: "03",
              label: "Quotes",
              src: "/horizon/horizon-quotes.png",
            },
            {
              number: "04",
              label: "Invoices",
              src: "/horizon/horizon-invoices.png",
            },
            {
              number: "05",
              label: "Reports",
              src: "/horizon/horizon-reports.png",
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.75,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={index === 1 ? "lg:mt-16" : ""}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[8px] font-semibold text-blue-400">
                  {item.number}
                </span>

                <span className="h-px w-5 bg-slate-700" />

                <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-slate-500">
                  {item.label}
                </span>
              </div>

              <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#09111e] shadow-[0_35px_90px_rgba(0,0,0,0.5)]">
                <Image
                  src={item.src}
                  alt={`Horizon ${item.label}`}
                  width={1500}
                  height={950}
                  className="h-auto w-full"
                />
              </div>
            </motion.div>
          ))}

        </div>

      </div>

      {/* ============================================================ */}
      {/* FINAL STATEMENT                                              */}
      {/* ============================================================ */}

      <div className="relative z-10 border-t border-white/[0.05]">

        <div className="mx-auto max-w-[1500px] px-6 py-32 sm:px-10 lg:px-16 lg:py-44">

          <motion.div {...reveal}>

            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                The Result
              </span>
            </div>

            <h3 className="max-w-6xl text-[3.5rem] font-semibold leading-[0.86] tracking-[-0.065em] text-white sm:text-[5rem] lg:text-[7rem]">
              FROM FIRST
              <span className="block">
                ENQUIRY
              </span>

              <span className="block text-slate-700">
                TO FINAL INVOICE.
              </span>
            </h3>

            {/* workflow */}
            <div className="mt-12 border-t border-white/[0.08] pt-8">

              <div className="flex flex-wrap items-center gap-x-5 gap-y-5">

                {[
                  "Customer",
                  "Job",
                  "Schedule",
                  "Quote",
                  "Invoice",
                  "Report",
                ].map((item, index, array) => (
                  <div
                    key={item}
                    className="flex items-center gap-5"
                  >
                    <div className="flex items-center gap-3">

                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/[0.05] text-[7px] font-semibold text-blue-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-slate-400">
                        {item}
                      </span>

                    </div>

                    {index < array.length - 1 && (
                      <span className="text-slate-700">
                        →
                      </span>
                    )}
                  </div>
                ))}

              </div>

              <div className="mt-10 flex max-w-2xl items-start gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />

                <p className="text-sm leading-7 text-slate-500 sm:text-base">
                  One custom platform replacing disconnected tools,
                  duplicated work and fragmented information.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}