"use client";

import { useEffect, useState } from "react";

type DemoMode =
  | "website"
  | "mobile"
  | "system"
  | "dashboard"
  | "automation";

const modes: { id: DemoMode; label: string }[] = [
  { id: "website", label: "Website" },
  { id: "mobile", label: "Mobile App" },
  { id: "system", label: "System" },
  { id: "dashboard", label: "Dashboard" },
  { id: "automation", label: "Automation" },
];

export default function PLKHero() {
  const [activeMode, setActiveMode] = useState<DemoMode>("mobile");
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = window.setInterval(() => {
      setActiveMode((current) => {
        const index = modes.findIndex((mode) => mode.id === current);
        return modes[(index + 1) % modes.length].id;
      });
    }, 4500);

    return () => window.clearInterval(interval);
  }, [autoPlay]);

  function selectMode(mode: DemoMode) {
    setActiveMode(mode);
    setAutoPlay(false);
  }

  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20 lg:min-h-[860px] lg:pb-28 lg:pt-24">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="plk-grid absolute inset-0 opacity-30" />

        <div className="absolute left-[-12%] top-[5%] h-[520px] w-[520px] rounded-full bg-blue-600/[0.08] blur-[150px]" />

        <div className="absolute right-[-10%] top-[4%] h-[650px] w-[650px] rounded-full bg-cyan-400/[0.055] blur-[170px]" />

        <div className="absolute bottom-[-25%] left-[35%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.04] blur-[160px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        {/* LEFT */}
        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-500" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-400 sm:text-xs">
              PLK Systems · Digital Product Studio
            </p>
          </div>

          <h1 className="max-w-3xl text-[3.2rem] font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.55rem]">
            We build digital
            <span className="block">products that move</span>
            <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              businesses forward.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Websites, mobile apps, custom software and automation — designed
            around your business and built to solve real problems.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#050A13] transition duration-300 hover:bg-blue-50"
            >
              Start a project

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-slate-300 transition duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              Explore our work
            </a>
          </div>

          {/* QUICK CAPABILITIES */}
          <div className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-5 border-t border-white/[0.08] pt-7 sm:grid-cols-4">
            {[
              ["01", "Web"],
              ["02", "Mobile"],
              ["03", "Systems"],
              ["04", "Automation"],
            ].map(([number, label]) => (
              <div key={label}>
                <p className="text-[9px] font-medium text-blue-500">
                  {number}
                </p>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* INTERACTIVE PRODUCT WINDOW */}
        <div className="relative lg:translate-x-6">
          <div className="absolute -inset-10 rounded-[50px] bg-blue-500/[0.06] blur-[70px]" />

          <div className="absolute -right-10 top-16 h-40 w-40 rounded-full bg-cyan-400/[0.08] blur-[70px]" />

          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.13] bg-[#07101d]/95 shadow-[0_50px_140px_rgba(0,0,0,0.65)] backdrop-blur-xl">
            {/* WINDOW HEADER */}
            <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3.5 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
              </div>

              <div className="rounded-md border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-[10px] tracking-wide text-slate-500">
                plk.systems / capabilities
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden text-[8px] uppercase tracking-[0.16em] text-slate-600 sm:block">
                  Live
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              </div>
            </div>

            {/* MODE NAVIGATION */}
            <div className="border-b border-white/[0.08] px-2 py-3 sm:px-4">
              <div className="grid grid-cols-5 gap-1 rounded-xl bg-black/20 p-1">
                {modes.map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => selectMode(mode.id)}
                    className={`relative rounded-lg px-1 py-2.5 text-[8px] font-medium transition-all duration-300 sm:px-2 sm:text-[10px] ${
                      activeMode === mode.id
                        ? "bg-white/[0.09] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-300"
                    }`}
                  >
                    {mode.label}

                    {activeMode === mode.id && (
                      <span className="absolute bottom-0 left-1/2 h-px w-5 -translate-x-1/2 bg-blue-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* SCREEN */}
            <div className="relative min-h-[450px] p-4 sm:min-h-[510px] sm:p-6">
              <div
                key={activeMode}
                className="plk-screen-enter h-full"
              >
                {activeMode === "website" && <WebsiteDemo />}
                {activeMode === "mobile" && <MobileDemo />}
                {activeMode === "system" && <SystemDemo />}
                {activeMode === "dashboard" && <DashboardDemo />}
                {activeMode === "automation" && <AutomationDemo />}
              </div>
            </div>

            {/* STATUS */}
            <div className="flex items-center justify-between border-t border-white/[0.08] px-5 py-3 text-[9px] uppercase tracking-[0.18em] text-slate-600">
              <span>Built by PLK</span>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Interactive preview
              </div>
            </div>
          </div>

          {/* FLOATING CARD */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-[#0a1422]/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
                <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.18em] text-slate-600">
                  PLK approach
                </p>

                <p className="mt-1 text-xs font-medium text-white">
                  One partner. Every screen.
                </p>
              </div>
            </div>
          </div>

          {/* SECOND FLOATING CARD */}
          <div className="absolute -right-5 top-24 hidden rounded-xl border border-white/[0.08] bg-[#09131f]/90 px-4 py-3 shadow-2xl backdrop-blur-xl xl:block">
            <p className="text-[8px] uppercase tracking-[0.16em] text-slate-600">
              System
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              <span className="text-[10px] font-medium text-slate-300">
                Online
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CAPABILITY RAIL */}
      <div className="relative mx-auto mt-20 max-w-6xl overflow-hidden border-y border-white/[0.06] py-4 lg:mt-24">
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[9px] font-medium uppercase tracking-[0.2em] text-slate-600 sm:justify-between sm:text-[10px]">
          <span>Websites</span>
          <span className="hidden text-blue-500/40 sm:inline">◆</span>

          <span>Mobile Apps</span>
          <span className="hidden text-blue-500/40 sm:inline">◆</span>

          <span>Custom Software</span>
          <span className="hidden text-blue-500/40 sm:inline">◆</span>

          <span>Automation</span>
          <span className="hidden text-blue-500/40 sm:inline">◆</span>

          <span>UX / UI</span>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* WEBSITE                                                                    */
/* -------------------------------------------------------------------------- */

function WebsiteDemo() {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1421]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
        <div className="text-sm font-semibold tracking-tight text-white">
          NORTH & CO.
        </div>

        <div className="flex gap-4 text-[8px] uppercase tracking-wider text-slate-600">
          <span>Services</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>

      <div className="grid min-h-[390px] items-center gap-6 p-6 sm:grid-cols-[1.05fr_0.95fr] sm:p-7">
        <div>
          <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-blue-400">
            Digital experience
          </p>

          <h3 className="mt-4 max-w-[280px] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white">
            A better first impression.
          </h3>

          <p className="mt-4 max-w-xs text-[11px] leading-5 text-slate-500">
            Fast, focused websites designed around your business and the
            customers you want to reach.
          </p>

          <div className="mt-6 flex gap-2">
            <div className="rounded-lg bg-white px-4 py-2.5 text-[9px] font-semibold text-slate-900">
              Start a project →
            </div>

            <div className="rounded-lg border border-white/[0.08] px-4 py-2.5 text-[9px] text-slate-500">
              Our work
            </div>
          </div>
        </div>

        <div className="relative hidden h-[290px] overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-blue-500/[0.13] via-slate-900 to-cyan-400/[0.05] sm:block">
          <div className="absolute left-5 right-5 top-5 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0b1523]/90">
            <div className="border-b border-white/[0.06] p-3">
              <div className="h-1.5 w-14 rounded-full bg-white/20" />
            </div>

            <div className="p-4">
              <div className="h-2 w-[75%] rounded-full bg-white/20" />
              <div className="mt-2 h-2 w-[55%] rounded-full bg-white/10" />

              <div className="mt-5 h-16 rounded-lg bg-blue-500/[0.09]" />
            </div>
          </div>

          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-16 rounded-xl border border-white/[0.07] bg-white/[0.035]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* MOBILE APP                                                                 */
/* -------------------------------------------------------------------------- */

function MobileDemo() {
  return (
    <div className="relative flex min-h-[410px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0b1524] via-[#08111e] to-[#070d16] p-4">
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[90px]" />

      {/* BACK PHONE */}
      <div className="absolute left-[16%] top-[15%] hidden h-[310px] w-[150px] -rotate-6 overflow-hidden rounded-[28px] border-[4px] border-slate-800 bg-[#080f19] opacity-40 shadow-2xl sm:block">
        <div className="p-4 pt-8">
          <div className="h-2 w-16 rounded-full bg-white/10" />
          <div className="mt-4 h-24 rounded-xl bg-white/[0.035]" />
          <div className="mt-3 h-14 rounded-xl bg-white/[0.025]" />
        </div>
      </div>

      {/* MAIN PHONE */}
      <div className="relative z-10 h-[390px] w-[190px] overflow-hidden rounded-[34px] border-[5px] border-[#1c2735] bg-[#080f19] shadow-[0_35px_80px_rgba(0,0,0,0.7)]">
        <div className="absolute left-1/2 top-2 z-20 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />

        <div className="px-4 pb-4 pt-9">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[7px] uppercase tracking-[0.18em] text-blue-400">
                My workspace
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Good morning.
              </p>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.04]">
              <div className="h-3 w-3 rounded-full bg-blue-400/60" />
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-blue-500/15 bg-gradient-to-br from-blue-500/[0.14] to-cyan-400/[0.04] p-4">
            <div className="flex items-center justify-between">
              <p className="text-[7px] uppercase tracking-[0.15em] text-blue-300">
                Today
              </p>

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>

            <p className="mt-3 text-2xl font-semibold tracking-tight text-white">
              4 tasks
            </p>

            <p className="mt-1 text-[7px] text-slate-500">
              Everything is on track.
            </p>

            <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/[0.07]">
              <div className="h-full w-[72%] rounded-full bg-blue-400" />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <p className="text-[8px] font-medium text-slate-300">
              Activity
            </p>

            <p className="text-[7px] text-blue-400">
              View all
            </p>
          </div>

          <div className="mt-2 space-y-2">
            {[
              ["09:30", "Client meeting"],
              ["11:00", "Project review"],
              ["14:30", "New booking"],
            ].map(([time, title], index) => (
              <div
                key={title}
                className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.025] p-2.5"
              >
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                    index === 0
                      ? "bg-blue-500/10"
                      : "bg-white/[0.04]"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      index === 0 ? "bg-blue-400" : "bg-slate-600"
                    }`}
                  />
                </div>

                <div className="flex-1">
                  <p className="text-[7px] text-slate-300">{title}</p>
                  <p className="mt-1 text-[6px] text-slate-600">{time}</p>
                </div>

                <span className="text-[8px] text-slate-600">→</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-around border-t border-white/[0.06] bg-[#080f19]/95 px-4 py-3 backdrop-blur">
          {["●", "◆", "■", "●"].map((item, index) => (
            <span
              key={index}
              className={`text-[7px] ${
                index === 0 ? "text-blue-400" : "text-slate-700"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* MOBILE COPY */}
      <div className="relative z-10 ml-7 hidden max-w-[155px] sm:block">
        <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-blue-400">
          iOS · Android
        </p>

        <p className="mt-3 text-xl font-semibold leading-tight tracking-tight text-white">
          Your product.
          <span className="block text-slate-500">In their pocket.</span>
        </p>

        <p className="mt-4 text-[10px] leading-5 text-slate-500">
          Mobile apps for customers, teams and new digital products — connected
          to the systems behind your business.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {["Accounts", "Push", "Payments"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/[0.07] px-2 py-1 text-[7px] text-slate-600"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SYSTEM                                                                     */
/* -------------------------------------------------------------------------- */

function SystemDemo() {
  return (
    <div className="grid min-h-[410px] grid-cols-[58px_1fr] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09121f]">
      <aside className="border-r border-white/[0.07] bg-black/10 p-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-[10px] font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.25)]">
          P
        </div>

        <div className="mt-8 space-y-3">
          {[0, 1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className={`h-8 rounded-lg ${
                item === 0
                  ? "border border-blue-500/10 bg-blue-500/15"
                  : "bg-white/[0.025]"
              }`}
            />
          ))}
        </div>
      </aside>

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[8px] uppercase tracking-[0.2em] text-blue-400">
              Operations
            </p>

            <h3 className="mt-1 text-lg font-semibold text-white">
              Business control centre
            </h3>
          </div>

          <div className="rounded-lg bg-blue-600 px-3 py-2 text-[8px] font-medium text-white">
            + New job
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            ["Active jobs", "24", "+4"],
            ["Due today", "08", "Today"],
            ["Customers", "186", "+12"],
          ].map(([label, value, meta]) => (
            <div
              key={label}
              className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
            >
              <div className="flex items-center justify-between">
                <p className="text-[7px] text-slate-600">{label}</p>

                <span className="text-[6px] text-blue-400">{meta}</span>
              </div>

              <p className="mt-2 text-xl font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-medium text-white">
              Today&apos;s workflow
            </p>

            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <p className="text-[7px] text-slate-600">LIVE</p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {[
              ["08:30", "Site visit", "Confirmed"],
              ["10:15", "Installation", "In progress"],
              ["13:00", "Customer meeting", "Scheduled"],
              ["15:30", "Quote review", "Scheduled"],
            ].map(([time, task, status], index) => (
              <div
                key={task}
                className="grid grid-cols-[45px_1fr_auto] items-center gap-2 rounded-lg border border-white/[0.05] bg-black/10 px-3 py-2.5"
              >
                <span className="text-[8px] text-slate-600">{time}</span>

                <span className="text-[9px] text-slate-300">{task}</span>

                <span
                  className={`rounded-full px-2 py-1 text-[6px] ${
                    index === 1
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-white/[0.04] text-slate-600"
                  }`}
                >
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DASHBOARD                                                                  */
/* -------------------------------------------------------------------------- */

function DashboardDemo() {
  const bars = [42, 58, 48, 72, 64, 84, 76, 92, 78, 96, 88, 100];

  return (
    <div className="min-h-[410px] rounded-2xl border border-white/[0.08] bg-[#09121f] p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[8px] uppercase tracking-[0.2em] text-blue-400">
            Live performance
          </p>

          <h3 className="mt-1 text-xl font-semibold tracking-tight text-white">
            Business overview
          </h3>
        </div>

        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/[0.07] px-3 py-1 text-[7px] text-emerald-400">
          ↑ 18.4%
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {[
          ["Revenue", "£48.2k", "+12.4%"],
          ["Jobs", "148", "+8"],
          ["Conversion", "38%", "+4.2%"],
        ].map(([label, value, change]) => (
          <div
            key={label}
            className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
          >
            <p className="text-[7px] text-slate-600">{label}</p>

            <div className="mt-2 flex items-end justify-between gap-1">
              <p className="text-lg font-semibold text-white">{value}</p>

              <span className="text-[6px] text-emerald-400">{change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-medium text-white">
              Revenue growth
            </p>

            <p className="mt-1 text-[7px] text-slate-600">
              Performance over time
            </p>
          </div>

          <p className="text-[7px] text-slate-600">
            12 MONTHS
          </p>
        </div>

        <div className="mt-7 flex h-36 items-end gap-2">
          {bars.map((height, index) => (
            <div
              key={index}
              className="group flex h-full flex-1 items-end"
            >
              <div
                className={`w-full rounded-t transition duration-500 ${
                  index === bars.length - 1
                    ? "bg-blue-400"
                    : "bg-blue-500/25 group-hover:bg-blue-400/50"
                }`}
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>

        <div className="mt-3 flex justify-between text-[6px] text-slate-700">
          <span>JAN</span>
          <span>MAR</span>
          <span>MAY</span>
          <span>JUL</span>
          <span>SEP</span>
          <span>NOV</span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* AUTOMATION                                                                 */
/* -------------------------------------------------------------------------- */

function AutomationDemo() {
  const workflow = [
    {
      number: "01",
      title: "New enquiry received",
      meta: "Website",
    },
    {
      number: "02",
      title: "Customer created",
      meta: "CRM",
    },
    {
      number: "03",
      title: "Job generated",
      meta: "Operations",
    },
    {
      number: "04",
      title: "Team notified",
      meta: "Notification",
    },
    {
      number: "05",
      title: "Dashboard updated",
      meta: "Reporting",
    },
  ];

  return (
    <div className="relative min-h-[410px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09121f] p-5 sm:p-6">
      <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-blue-500/[0.08] blur-[80px]" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-[8px] uppercase tracking-[0.2em] text-blue-400">
            Workflow automation
          </p>

          <h3 className="mt-1 text-xl font-semibold tracking-tight text-white">
            Work happens automatically.
          </h3>
        </div>

        <div className="rounded-full border border-emerald-500/20 bg-emerald-500/[0.07] px-3 py-1.5">
          <div className="flex items-center gap-2">
            <span className="plk-pulse h-1.5 w-1.5 rounded-full bg-emerald-400" />

            <span className="text-[7px] font-medium uppercase tracking-wider text-emerald-400">
              Running
            </span>
          </div>
        </div>
      </div>

      <div className="relative mt-7">
        <div className="absolute bottom-5 left-[17px] top-5 w-px bg-white/[0.06]" />

        <div className="plk-automation-line absolute left-[17px] top-5 w-px bg-gradient-to-b from-blue-400 via-cyan-400 to-emerald-400" />

        <div className="space-y-2">
          {workflow.map((item, index) => (
            <div
              key={item.number}
              className="plk-workflow-step relative grid grid-cols-[36px_1fr_auto] items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-3"
              style={{
                animationDelay: `${index * 0.35}s`,
              }}
            >
              <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-blue-500/20 bg-[#0a1524]">
                <span className="text-[7px] font-semibold text-blue-400">
                  {item.number}
                </span>
              </div>

              <div>
                <p className="text-[9px] font-medium text-slate-300">
                  {item.title}
                </p>

                <p className="mt-1 text-[7px] text-slate-600">
                  {item.meta}
                </p>
              </div>

              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-emerald-500/15 bg-emerald-500/[0.07]">
                <span className="text-[9px] text-emerald-400">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-4 flex items-center justify-between rounded-xl border border-emerald-500/10 bg-emerald-500/[0.04] px-4 py-3">
        <div>
          <p className="text-[7px] uppercase tracking-[0.15em] text-slate-600">
            Workflow complete
          </p>

          <p className="mt-1 text-[9px] font-medium text-white">
            5 manual tasks removed
          </p>
        </div>

        <div className="text-right">
          <p className="text-lg font-semibold text-emerald-400">
            1.8s
          </p>

          <p className="text-[6px] text-slate-600">
            total runtime
          </p>
        </div>
      </div>
    </div>
  );
}