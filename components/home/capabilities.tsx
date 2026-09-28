"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type CapabilityId = "websites" | "mobile" | "software" | "automation";

type Capability = {
  id: CapabilityId;
  number: string;
  title: string;
  short: string;
  description: string;
  tags: string[];
};

const capabilities: Capability[] = [
  {
    id: "websites",
    number: "01",
    title: "WEBSITES",
    short: "Web design & development",
    description:
      "High-performance websites designed around your brand, your customers and what you want your business to achieve.",
    tags: ["Business", "Ecommerce", "Portals", "Custom"],
  },
  {
    id: "mobile",
    number: "02",
    title: "MOBILE APPS",
    short: "iOS & Android",
    description:
      "Purpose-built mobile experiences for customers, teams and new product ideas — designed to feel at home in their pocket.",
    tags: ["iOS", "Android", "Accounts", "Payments"],
  },
  {
    id: "software",
    number: "03",
    title: "CUSTOM SOFTWARE",
    short: "Systems built around you",
    description:
      "Dashboards, management platforms, booking systems and operational software built around the way your business actually works.",
    tags: ["Dashboards", "CRM", "Bookings", "Operations"],
  },
  {
    id: "automation",
    number: "04",
    title: "AUTOMATION",
    short: "Less admin. Better flow.",
    description:
      "Connect your processes and remove repetitive work with intelligent workflows that keep your business moving.",
    tags: ["Workflows", "Integrations", "Notifications", "Data"],
  },
];

export default function Capabilities() {
  const [active, setActive] = useState<CapabilityId>("websites");

  const activeCapability =
    capabilities.find((item) => item.id === active) ?? capabilities[0];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050a13] pb-28 pt-8 sm:pb-32 sm:pt-10 lg:pb-36 lg:pt-12"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="plk-grid absolute inset-0 opacity-[0.1]" />

        <div className="absolute right-[-20rem] top-[15%] h-[50rem] w-[50rem] rounded-full bg-blue-600/[0.06] blur-[180px]" />

        <div className="absolute bottom-[-25rem] left-[-15rem] h-[45rem] w-[45rem] rounded-full bg-cyan-400/[0.025] blur-[170px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* heading */}
        <div className="grid gap-10 border-b border-white/[0.07] pb-16 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-blue-400 sm:text-[10px]">
                PLK capabilities
              </p>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[3.6rem] font-semibold leading-[0.86] tracking-[-0.065em] text-white sm:text-[5.2rem] lg:text-[6.8rem]"
            >
              WHAT CAN
              <span className="block text-slate-500">WE BUILD?</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="max-w-md text-sm leading-7 text-slate-500 sm:text-base"
          >
            From a better website to an entirely new digital product, we
            design and build technology around the problem you&apos;re trying
            to solve.
          </motion.p>
        </div>

        {/* interactive experience */}
        <div className="grid min-h-[720px] lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT - CAPABILITIES */}
          <div className="relative z-20 border-white/[0.07] lg:border-r">
            {capabilities.map((capability) => {
              const isActive = active === capability.id;

              return (
                <button
                  key={capability.id}
                  type="button"
                  onMouseEnter={() => setActive(capability.id)}
                  onFocus={() => setActive(capability.id)}
                  onClick={() => setActive(capability.id)}
                  className="group relative block w-full border-b border-white/[0.07] py-7 text-left sm:py-9"
                >
                  {/* active background */}
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0,
                    }}
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/[0.07] to-transparent"
                  />

                  {/* active line */}
                  <motion.div
                    animate={{
                      scaleY: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="absolute bottom-0 left-0 top-0 w-px origin-center bg-blue-400"
                  />

                  <div className="relative grid grid-cols-[45px_1fr_auto] items-center gap-3 pr-4 sm:grid-cols-[60px_1fr_auto] sm:pr-8">
                    <span
                      className={`text-[9px] font-medium transition duration-300 ${
                        isActive ? "text-blue-400" : "text-slate-700"
                      }`}
                    >
                      {capability.number}
                    </span>

                    <div>
                      <h3
                        className={`text-2xl font-semibold tracking-[-0.035em] transition duration-300 sm:text-3xl lg:text-[2.7rem] ${
                          isActive
                            ? "translate-x-2 text-white"
                            : "text-slate-500 group-hover:text-slate-300"
                        }`}
                      >
                        {capability.title}
                      </h3>

                      <div
                        className={`grid transition-all duration-500 ${
                          isActive
                            ? "mt-3 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-sm pb-1 text-xs leading-5 text-slate-500">
                            {capability.short}
                          </p>
                        </div>
                      </div>
                    </div>

                    <span
                      className={`text-xl transition-all duration-300 ${
                        isActive
                          ? "rotate-45 text-blue-400"
                          : "text-slate-700 group-hover:text-slate-400"
                      }`}
                    >
                      ↗
                    </span>
                  </div>
                </button>
              );
            })}

            {/* active description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="py-8 pr-8"
              >
                <p className="max-w-md text-sm leading-7 text-slate-400">
                  {activeCapability.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {activeCapability.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[8px] uppercase tracking-[0.13em] text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT - LIVE PREVIEW */}
          <div className="relative min-h-[620px] overflow-hidden lg:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.025] via-transparent to-cyan-400/[0.02]" />

            <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />

            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/[0.045]" />

            <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.055] blur-[100px]" />

            <div className="absolute left-5 top-5 flex items-center gap-2 lg:left-10 lg:top-10">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              <p className="text-[7px] uppercase tracking-[0.2em] text-slate-600">
                Interactive preview
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  y: 25,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.97,
                  y: -15,
                  filter: "blur(5px)",
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 flex items-center justify-center p-8 sm:p-12"
              >
                {active === "websites" && <WebsitePreview />}
                {active === "mobile" && <MobilePreview />}
                {active === "software" && <SoftwarePreview />}
                {active === "automation" && <AutomationPreview />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* footer CTA */}
        <div className="grid gap-8 border-y border-white/[0.07] py-10 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-blue-400">
              Something different?
            </p>

            <p className="mt-3 text-xl font-medium tracking-tight text-white sm:text-2xl">
              If it can be built digitally, talk to us.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-5 rounded-full border border-white/[0.1] bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-white/20 hover:bg-white/[0.08]"
          >
            Start a project

            <span className="transition-transform duration-300 group-hover:rotate-45">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* WEBSITE                                                                    */
/* -------------------------------------------------------------------------- */

function WebsitePreview() {
  return (
    <div className="relative w-full max-w-[590px]">
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="overflow-hidden rounded-[20px] border border-white/[0.11] bg-[#09131f] shadow-[0_45px_100px_rgba(0,0,0,0.55)]"
      >
        <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
          </div>

          <div className="w-[45%] rounded-md border border-white/[0.05] bg-white/[0.025] px-3 py-1.5 text-center text-[6px] text-slate-600">
            yourbusiness.co.uk
          </div>

          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </div>

        <div className="border-b border-white/[0.05] px-6 py-4">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-bold text-white">
              NORTH / CO
            </p>

            <div className="flex gap-4 text-[6px] uppercase tracking-wider text-slate-600">
              <span>Work</span>
              <span>About</span>
              <span>Contact</span>
            </div>
          </div>
        </div>

        <div className="grid min-h-[320px] items-center p-7 sm:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-[7px] uppercase tracking-[0.2em] text-blue-400">
              Built differently
            </p>

            <p className="mt-4 max-w-[240px] text-3xl font-semibold leading-[0.95] tracking-[-0.05em] text-white">
              Make your first impression count.
            </p>

            <p className="mt-4 max-w-[210px] text-[8px] leading-4 text-slate-500">
              A digital experience designed to turn attention into action.
            </p>

            <div className="mt-5 inline-flex rounded-full bg-white px-3.5 py-2 text-[7px] font-semibold text-slate-900">
              Discover more ↗
            </div>
          </div>

          <div className="relative hidden h-[240px] sm:block">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-[#0d1928] to-cyan-400/[0.06]" />

            <div className="absolute left-5 right-5 top-5 rounded-xl border border-white/[0.08] bg-black/20 p-4">
              <div className="h-1.5 w-16 rounded-full bg-white/20" />
              <div className="mt-2 h-1.5 w-24 rounded-full bg-white/10" />
              <div className="mt-5 h-14 rounded-lg bg-blue-500/10" />
            </div>

            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-2">
              <div className="h-14 rounded-xl border border-white/[0.06] bg-white/[0.035]" />
              <div className="h-14 rounded-xl border border-white/[0.06] bg-white/[0.035]" />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute -bottom-4 -right-3 rounded-xl border border-white/[0.08] bg-[#0b1624]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
        <p className="text-[6px] uppercase tracking-[0.15em] text-slate-600">
          Performance
        </p>

        <p className="mt-1 text-[9px] font-medium text-emerald-400">
          Fast by design ✓
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* MOBILE                                                                     */
/* -------------------------------------------------------------------------- */

function MobilePreview() {
  return (
    <div className="relative flex w-full max-w-[570px] items-center justify-center">
      {/* rear phone */}
      <motion.div
        initial={{ rotate: -4, x: 30 }}
        animate={{
          rotate: -8,
          x: -70,
          y: [10, 0, 10],
        }}
        transition={{
          y: {
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute h-[390px] w-[190px] overflow-hidden rounded-[34px] border-[5px] border-[#1b2634] bg-[#09121e] opacity-45 shadow-2xl"
      >
        <div className="p-5 pt-10">
          <div className="h-2 w-16 rounded-full bg-white/10" />
          <div className="mt-6 h-32 rounded-2xl bg-blue-500/[0.07]" />
          <div className="mt-3 h-16 rounded-2xl bg-white/[0.03]" />
          <div className="mt-3 h-16 rounded-2xl bg-white/[0.03]" />
        </div>
      </motion.div>

      {/* main phone */}
      <motion.div
        animate={{
          y: [0, -9, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 h-[450px] w-[220px] overflow-hidden rounded-[38px] border-[6px] border-[#202c3b] bg-[#07101a] shadow-[0_45px_100px_rgba(0,0,0,0.7)]"
      >
        <div className="absolute left-1/2 top-2 h-5 w-[72px] -translate-x-1/2 rounded-full bg-black" />

        <div className="px-5 pt-11">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[7px] uppercase tracking-[0.18em] text-blue-400">
                Overview
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Good morning.
              </p>
            </div>

            <div className="h-8 w-8 rounded-full border border-white/[0.07] bg-blue-500/10" />
          </div>

          <div className="mt-6 rounded-[20px] border border-blue-500/15 bg-gradient-to-br from-blue-500/[0.16] to-cyan-400/[0.04] p-4">
            <div className="flex items-center justify-between">
              <p className="text-[7px] uppercase tracking-[0.16em] text-blue-300">
                Today
              </p>

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>

            <p className="mt-3 text-2xl font-semibold text-white">
              4 tasks
            </p>

            <p className="mt-1 text-[7px] text-slate-500">
              Everything is on track.
            </p>

            <div className="mt-4 h-1 rounded-full bg-white/[0.07]">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "74%" }}
                transition={{
                  duration: 1.3,
                  delay: 0.3,
                }}
                className="h-full rounded-full bg-blue-400"
              />
            </div>
          </div>

          <p className="mt-5 text-[8px] font-medium text-slate-400">
            Your activity
          </p>

          <div className="mt-2 space-y-2">
            {[
              ["Booking confirmed", "09:30"],
              ["Payment received", "11:45"],
              ["Project updated", "14:10"],
            ].map(([label, time], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.3 + index * 0.12,
                }}
                className="flex items-center gap-2 rounded-xl border border-white/[0.055] bg-white/[0.025] p-2.5"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.04]">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      index === 0 ? "bg-blue-400" : "bg-slate-600"
                    }`}
                  />
                </div>

                <div className="flex-1">
                  <p className="text-[7px] text-slate-300">
                    {label}
                  </p>

                  <p className="mt-1 text-[6px] text-slate-600">
                    {time}
                  </p>
                </div>

                <span className="text-[7px] text-slate-600">→</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-around border-t border-white/[0.05] bg-[#07101a]/95 px-5 py-3.5">
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

      {/* notification */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, 6, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.6 },
          x: { duration: 0.5, delay: 0.6 },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute right-[0%] top-[17%] z-20 hidden rounded-2xl border border-white/[0.09] bg-[#0b1624]/90 p-3.5 shadow-xl backdrop-blur-xl sm:block"
      >
        <p className="text-[6px] uppercase tracking-[0.15em] text-slate-600">
          Push notification
        </p>

        <p className="mt-1.5 text-[8px] font-medium text-white">
          Booking confirmed ✓
        </p>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SOFTWARE                                                                   */
/* -------------------------------------------------------------------------- */

function SoftwarePreview() {
  const bars = [44, 63, 54, 72, 68, 86, 75, 94];

  return (
    <motion.div
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-full max-w-[610px] overflow-hidden rounded-[22px] border border-white/[0.1] bg-[#09131f] shadow-[0_45px_100px_rgba(0,0,0,0.6)]"
    >
      <div className="grid min-h-[420px] grid-cols-[58px_1fr]">
        <div className="border-r border-white/[0.06] bg-black/10 p-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-[9px] font-bold text-white">
            P
          </div>

          <div className="mt-8 space-y-3">
            {[0, 1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className={`h-8 rounded-lg ${
                  item === 0
                    ? "bg-blue-500/15"
                    : "bg-white/[0.025]"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[7px] uppercase tracking-[0.18em] text-blue-400">
                Operations
              </p>

              <p className="mt-1 text-base font-semibold text-white">
                Business overview
              </p>
            </div>

            <div className="rounded-lg bg-blue-600 px-3 py-2 text-[7px] font-medium text-white">
              + New job
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">
            {[
              ["Active jobs", "24"],
              ["Revenue", "£48.2k"],
              ["Customers", "186"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3"
              >
                <p className="text-[6px] text-slate-600">
                  {label}
                </p>

                <p className="mt-2 text-base font-semibold text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
              <div className="flex items-center justify-between">
                <p className="text-[8px] font-medium text-white">
                  Performance
                </p>

                <p className="text-[6px] text-emerald-400">
                  +18.4%
                </p>
              </div>

              <div className="mt-6 flex h-24 items-end gap-2">
                {bars.map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.06,
                    }}
                    className={`flex-1 rounded-t ${
                      index === bars.length - 1
                        ? "bg-blue-400"
                        : "bg-blue-500/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
              <p className="text-[8px] font-medium text-white">
                Today
              </p>

              <div className="mt-4 space-y-2">
                {[1, 2, 3, 4].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg bg-black/10 p-2"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        index === 0
                          ? "bg-blue-400"
                          : "bg-slate-700"
                      }`}
                    />

                    <div className="h-1.5 flex-1 rounded-full bg-white/[0.08]" />

                    <div className="h-1.5 w-5 rounded-full bg-white/[0.04]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* AUTOMATION                                                                 */
/* -------------------------------------------------------------------------- */

function AutomationPreview() {
  const steps = [
    ["01", "New enquiry", "Website"],
    ["02", "Create customer", "CRM"],
    ["03", "Generate job", "Operations"],
    ["04", "Send notification", "Team"],
    ["05", "Update dashboard", "Reporting"],
  ];

  return (
    <div className="relative w-full max-w-[530px]">
      <div className="absolute bottom-8 left-[25px] top-8 w-px bg-white/[0.06]" />

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "calc(100% - 64px)" }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-[25px] top-8 w-px bg-gradient-to-b from-blue-400 via-cyan-400 to-emerald-400"
      />

      <div className="space-y-3">
        {steps.map(([number, title, meta], index) => (
          <motion.div
            key={number}
            initial={{
              opacity: 0,
              x: 25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.15 + index * 0.18,
              duration: 0.5,
            }}
            className="relative grid grid-cols-[50px_1fr_auto] items-center gap-3 rounded-2xl border border-white/[0.07] bg-[#09131f]/90 p-3.5 shadow-xl backdrop-blur-xl"
          >
            <div className="relative z-10 flex h-[38px] w-[38px] items-center justify-center rounded-full border border-blue-500/20 bg-[#0a1524]">
              <span className="text-[7px] font-semibold text-blue-400">
                {number}
              </span>
            </div>

            <div>
              <p className="text-[9px] font-medium text-white">
                {title}
              </p>

              <p className="mt-1 text-[7px] text-slate-600">
                {meta}
              </p>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.45 + index * 0.18,
                type: "spring",
              }}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-emerald-500/15 bg-emerald-500/[0.07]"
            >
              <span className="text-[9px] text-emerald-400">
                ✓
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.35,
          duration: 0.5,
        }}
        className="mt-4 flex items-center justify-between rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.045] px-5 py-4"
      >
        <div>
          <p className="text-[6px] uppercase tracking-[0.16em] text-slate-600">
            Workflow complete
          </p>

          <p className="mt-1 text-[9px] font-medium text-white">
            5 manual tasks removed
          </p>
        </div>

        <div className="text-right">
          <p className="text-xl font-semibold text-emerald-400">
            1.8s
          </p>

          <p className="text-[6px] text-slate-600">
            runtime
          </p>
        </div>
      </motion.div>
    </div>
  );
}