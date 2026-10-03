"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

type ModuleId =
  | "website"
  | "mobile"
  | "software"
  | "automation"
  | "data"
  | "api";

type CommandItem = {
  command: string;
  output: string;
};

const moduleNames: Record<ModuleId, string> = {
  website: "WEBSITE ENVIRONMENT",
  mobile: "MOBILE APPLICATION",
  software: "BUSINESS SOFTWARE",
  automation: "AUTOMATION ENGINE",
  data: "DATA INTELLIGENCE",
  api: "API NETWORK",
};

const bootMessages = [
  "INITIALISING CORE",
  "LOADING INTERFACE",
  "CONNECTING MODULES",
  "STARTING AUTOMATION ENGINE",
  "ESTABLISHING DATA LAYER",
  "VERIFYING PROJECT NETWORK",
];

const commandHelp = [
  "help",
  "open website",
  "open mobile",
  "open software",
  "open automation",
  "open data",
  "open api",
  "projects",
  "launch horizon",
  "launch premier",
  "launch ascent",
  "about plk",
  "capabilities",
  "build a system",
  "clear",
  "exit",
];

export default function LabInterface() {
  const [booting, setBooting] = useState(true);
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const seen = window.sessionStorage.getItem("plk-lab-booted");
    if (seen) {
      setProgress(100);
      setBooting(false);
      return;
    }

    const progressTimer = window.setInterval(() => {
      setProgress((current) => Math.min(current + 2, 100));
    }, 34);

    return () => window.clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    if (!booting) return;
    const timer = window.setInterval(() => {
      setMessageIndex((current) =>
        Math.min(current + 1, bootMessages.length - 1),
      );
    }, 300);
    return () => window.clearInterval(timer);
  }, [booting]);

  useEffect(() => {
    if (!booting || progress < 100) return;
    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem("plk-lab-booted", "1");
      setBooting(false);
    }, 650);
    return () => window.clearTimeout(timer);
  }, [booting, progress]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020509] text-white">
      <AnimatePresence mode="wait">
        {booting ? (
          <BootSequence
            key="boot"
            progress={progress}
            messageIndex={messageIndex}
          />
        ) : (
          <LabEnvironment key="lab" />
        )}
      </AnimatePresence>
    </main>
  );
}

function BootSequence({
  progress,
  messageIndex,
}: {
  progress: number;
  messageIndex: number;
}) {
  const complete = progress >= 100;

  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: "blur(12px)" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex min-h-[100dvh] items-center justify-center bg-[#020509]"
    >
      <LabBackground intense />
      <HudCorners />

      <div className="absolute left-7 right-7 top-7 flex items-center justify-between sm:left-11 sm:right-11 sm:top-10">
        <StatusDot label="PLK / CORE" />
        <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
          BOOT SEQUENCE
        </span>
      </div>

      <div className="relative z-10 w-full max-w-xl px-7">
        <div className="mb-7 flex items-center gap-3">
          <span className="h-px w-7 bg-cyan-400" />
          <span className="font-mono text-[7px] uppercase tracking-[0.3em] text-cyan-400">
            PLK SYSTEMS
          </span>
        </div>

        <motion.h1
          animate={complete ? { opacity: [1, 0.35, 1] } : {}}
          className="text-4xl font-semibold tracking-[-0.055em] sm:text-6xl"
        >
          {complete ? "SYSTEM ONLINE" : "INITIALISING"}
        </motion.h1>

        <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
          Interactive digital environment
        </p>

        <div className="mt-12">
          <div className="mb-3 flex items-center justify-between">
            <AnimatePresence mode="wait">
              <motion.span
                key={bootMessages[messageIndex]}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="font-mono text-[7px] uppercase tracking-[0.18em] text-cyan-400/60"
              >
                {complete
                  ? "ALL SYSTEMS OPERATIONAL"
                  : bootMessages[messageIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="font-mono text-[8px] text-white/40">
              {progress.toString().padStart(3, "0")}%
            </span>
          </div>

          <div className="relative h-px overflow-hidden bg-white/[0.08]">
            <motion.div
              animate={{ width: `${progress}%` }}
              className="absolute inset-y-0 left-0 bg-cyan-400"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
          <BootStatus label="Core" active={progress > 8} />
          <BootStatus label="Interface" active={progress > 25} />
          <BootStatus label="Network" active={progress > 42} />
          <BootStatus label="Automation" active={progress > 60} />
          <BootStatus label="Data" active={progress > 78} />
          <BootStatus label="Modules" active={progress > 92} />
        </div>
      </div>

      <div className="absolute bottom-8 left-8 font-mono text-[6px] uppercase leading-5 tracking-[0.16em] text-white/15">
        SYS.ID PLK-01<br />
        ENV DIGITAL<br />
        STATUS {complete ? "READY" : "BOOTING"}
      </div>
      <div className="absolute bottom-8 right-8 text-right font-mono text-[6px] uppercase leading-5 tracking-[0.16em] text-white/15">
        SECURE CONNECTION<br />
        ENCRYPTION ACTIVE<br />
        PLK SYSTEMS / UK
      </div>
    </motion.section>
  );
}

function BootStatus({ label, active }: { label: string; active: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.05] pb-2">
      <span className="font-mono text-[6px] uppercase tracking-[0.18em] text-white/20">
        {label}
      </span>
      <span
        className={`font-mono text-[6px] uppercase tracking-[0.14em] ${
          active ? "text-cyan-400/70" : "text-white/15"
        }`}
      >
        {active ? "● OK" : "○ --"}
      </span>
    </div>
  );
}

function LabEnvironment() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState("");
  const [activeModule, setActiveModule] = useState<ModuleId | null>(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [project, setProject] = useState<string | null>(null);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const update = () =>
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const keys = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProject(null);
        setActiveModule(null);
        setTerminalOpen(false);
      }
      if (event.key === "/" && !project && !activeModule) {
        event.preventDefault();
        setTerminalOpen(true);
      }
    };
    window.addEventListener("keydown", keys);
    return () => window.removeEventListener("keydown", keys);
  }, [project, activeModule]);

  const launchModule = (id: ModuleId) => {
    setProject(null);
    setTerminalOpen(false);
    setActiveModule(id);
  };

  const launchProject = (name: string) => {
    setActiveModule(null);
    setTerminalOpen(false);
    setProject(name);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-[100dvh] min-h-[700px] overflow-hidden bg-[#020509]"
    >
      <motion.div
        animate={{ x: mouse.x * -7, y: mouse.y * -7 }}
        transition={{ type: "spring", stiffness: 45, damping: 20 }}
        className="pointer-events-none absolute -inset-10"
      >
        <LabBackground />
      </motion.div>

      <HudCorners />

      <header className="absolute left-8 right-8 top-8 z-40 flex items-start justify-between sm:left-12 sm:right-12 sm:top-11">
        <div>
          <StatusDot label="PLK // LAB" />
          <p className="mt-2 font-mono text-[6px] uppercase tracking-[0.18em] text-white/20">
            Interactive systems environment
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[9px] tracking-[0.18em] text-white/45">
            {time || "00:00:00"}
          </p>
          <p className="mt-2 font-mono text-[6px] uppercase tracking-[0.16em] text-emerald-400/60">
            ● System operational
          </p>
        </div>
      </header>

      <motion.aside
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute left-12 top-1/2 z-30 hidden w-[240px] -translate-y-1/2 xl:block 2xl:left-16"
      >
        <HudTitle number="01">SYSTEM TELEMETRY</HudTitle>
        <div className="mt-6 space-y-5">
          <Telemetry label="Core load" value="24" suffix="%" width="24%" />
          <Telemetry label="Network" value="98" suffix="%" width="98%" />
          <Telemetry label="Automation" value="06" suffix="" width="68%" />
          <Telemetry label="Connections" value="12" suffix="" width="82%" />
        </div>
        <div className="mt-8 border-t border-white/[0.06] pt-5">
          <div className="flex justify-between font-mono text-[6px] uppercase tracking-[0.16em]">
            <span className="text-white/20">Environment</span>
            <span className="text-cyan-400/50">Live</span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-1">
            {Array.from({ length: 18 }).map((_, index) => (
              <motion.div
                key={index}
                animate={{ opacity: [0.1, index % 3 === 0 ? 0.8 : 0.35, 0.1] }}
                transition={{
                  duration: 1.5 + (index % 4) * 0.35,
                  repeat: Infinity,
                  delay: index * 0.06,
                }}
                className="h-[2px] bg-cyan-400"
              />
            ))}
          </div>
        </div>
      </motion.aside>

      <motion.aside
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute right-12 top-1/2 z-30 hidden w-[240px] -translate-y-1/2 xl:block 2xl:right-16"
      >
        <HudTitle number="02">SYSTEM ACTIVITY</HudTitle>
        <div className="mt-6 space-y-4">
          <Activity time="00:01" message="Core system initialised" />
          <Activity time="00:02" message="Modules connected" />
          <Activity time="00:03" message="Project network online" />
          <Activity
            time="LIVE"
            message={
              project
                ? `${project} loaded`
                : activeModule
                  ? `${moduleNames[activeModule]} active`
                  : terminalOpen
                    ? "Command interface active"
                    : "Awaiting user input"
            }
            active
          />
        </div>
        <Radar mouse={mouse} />
      </motion.aside>

      {/* spatial field */}
      <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
          style={{
            background:
              "repeating-radial-gradient(circle at center, rgba(34,211,238,0.055) 0 1px, transparent 1px 92px)",
          }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(34,211,238,0.08) 22deg, transparent 55deg)",
          }}
        />
        {Array.from({ length: 22 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-px bg-cyan-300/30"
            style={{
              left: `${8 + ((index * 17) % 84)}%`,
              top: `${10 + ((index * 29) % 78)}%`,
              width: `${8 + (index % 4) * 5}px`,
            }}
            animate={{
              opacity: [0.05, 0.5, 0.05],
              x: [0, 16 + (index % 5) * 6],
            }}
            transition={{
              duration: 3 + (index % 6) * 0.55,
              repeat: Infinity,
              delay: index * 0.12,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {!activeModule && !project && !terminalOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="pointer-events-none absolute left-1/2 top-[15%] z-30 -translate-x-1/2 text-center"
        >
          <p className="font-mono text-[7px] uppercase tracking-[0.32em] text-cyan-300/55">
            SELECT A SYSTEM
          </p>
          <motion.div
            animate={{ scaleX: [0.25, 1, 0.25], opacity: [0.15, 0.55, 0.15] }}
            transition={{ duration: 2.8, repeat: Infinity }}
            className="mx-auto mt-3 h-px w-20 bg-cyan-300"
          />
        </motion.div>
      )}

      <motion.div
        animate={{
          x: activeModule || project || terminalOpen ? 0 : mouse.x * 10,
          y: activeModule || project || terminalOpen ? 0 : mouse.y * 10,
          opacity: activeModule || project || terminalOpen ? 0.12 : 1,
          scale: activeModule || project || terminalOpen ? 0.88 : 1,
        }}
        transition={{ type: "spring", stiffness: 35, damping: 18 }}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <Core launchModule={launchModule} />
      </motion.div>

      <AnimatePresence>
        {activeModule && (
          <ModuleInterface
            module={activeModule}
            onClose={() => setActiveModule(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {project && (
          <ProjectOverlay project={project} onClose={() => setProject(null)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {terminalOpen && (
          <Terminal
            onClose={() => setTerminalOpen(false)}
            launchModule={launchModule}
            launchProject={launchProject}
          />
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setTerminalOpen(true)}
        className="absolute bottom-10 left-1/2 z-40 w-[calc(100%-5rem)] max-w-3xl -translate-x-1/2 border border-cyan-400/20 bg-[#03080d]/95 px-6 py-4 text-left shadow-[0_0_60px_rgba(34,211,238,0.04)] backdrop-blur-xl transition hover:border-cyan-400/45 hover:shadow-[0_0_70px_rgba(34,211,238,0.08)] sm:bottom-12"
      >
        <div className="flex items-center">
          <span className="mr-4 font-mono text-[8px] text-cyan-400">&gt;</span>
          <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/30">
            COMMAND INTERFACE
          </span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="ml-2 h-3 w-px bg-cyan-400"
          />
          <span className="ml-auto hidden font-mono text-[6px] uppercase tracking-[0.16em] text-white/15 sm:block">
            Click or press /
          </span>
        </div>
      </button>

      <div className="pointer-events-none absolute bottom-12 left-12 z-30 hidden font-mono text-[6px] uppercase leading-5 tracking-[0.14em] text-white/15 lg:block">
        X {Math.round(((mouse.x + 1) / 2) * 1000).toString().padStart(4, "0")}
        <br />
        Y {Math.round(((mouse.y + 1) / 2) * 1000).toString().padStart(4, "0")}
        <br />
        TRACKING ACTIVE
      </div>

      <Link
        href="/"
        className="absolute bottom-12 right-12 z-40 hidden items-center gap-3 font-mono text-[6px] uppercase tracking-[0.18em] text-white/20 transition hover:text-cyan-400 lg:flex"
      >
        EXIT LAB <span>↗</span>
      </Link>
    </motion.section>
  );
}

function LabBackground({ intense = false }: { intense?: boolean }) {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.13) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[220px] ${
          intense ? "h-[700px] w-[700px] opacity-[0.04]" : "h-[800px] w-[800px] opacity-[0.035]"
        }`}
      />
      <motion.div
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/[0.12] to-transparent"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#020509_95%)]" />
    </div>
  );
}

function HudCorners() {
  return (
    <div className="pointer-events-none absolute inset-5 z-20 border border-cyan-400/[0.07] sm:inset-7">
      <div className="absolute -left-px -top-px h-10 w-10 border-l border-t border-cyan-400/40" />
      <div className="absolute -right-px -top-px h-10 w-10 border-r border-t border-cyan-400/40" />
      <div className="absolute -bottom-px -left-px h-10 w-10 border-b border-l border-cyan-400/40" />
      <div className="absolute -bottom-px -right-px h-10 w-10 border-b border-r border-cyan-400/40" />
    </div>
  );
}

function StatusDot({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
      />
      <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-cyan-400">
        {label}
      </span>
    </div>
  );
}

function HudTitle({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between border-b border-cyan-400/[0.08] pb-3">
      <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/30">
        {children}
      </span>
      <span className="font-mono text-[6px] text-cyan-400/40">{number}</span>
    </div>
  );
}

function Telemetry({
  label,
  value,
  suffix,
  width,
}: {
  label: string;
  value: string;
  suffix: string;
  width: string;
}) {
  return (
    <div>
      <div className="flex items-end justify-between">
        <span className="font-mono text-[6px] uppercase tracking-[0.16em] text-white/20">
          {label}
        </span>
        <span className="font-mono text-[8px] text-white/45">
          {value}<span className="text-cyan-400/40">{suffix}</span>
        </span>
      </div>
      <div className="mt-2 h-px bg-white/[0.06]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="h-full bg-cyan-400/50"
        />
      </div>
    </div>
  );
}

function Activity({
  time,
  message,
  active = false,
}: {
  time: string;
  message: string;
  active?: boolean;
}) {
  return (
    <div className="grid grid-cols-[38px_1fr] gap-3">
      <span className={`font-mono text-[6px] ${active ? "text-cyan-400/70" : "text-white/15"}`}>
        {time}
      </span>
      <div className="flex items-start gap-2">
        <motion.span
          animate={active ? { opacity: [0.2, 1, 0.2] } : {}}
          transition={{ duration: 1.4, repeat: Infinity }}
          className={`mt-1 h-1 w-1 shrink-0 rounded-full ${active ? "bg-cyan-400" : "bg-white/15"}`}
        />
        <span className={`font-mono text-[6px] uppercase leading-4 tracking-[0.13em] ${active ? "text-cyan-400/50" : "text-white/20"}`}>
          {message}
        </span>
      </div>
    </div>
  );
}

function Radar({ mouse }: { mouse: { x: number; y: number } }) {
  return (
    <div className="mt-10">
      <p className="font-mono text-[6px] uppercase tracking-[0.18em] text-white/20">
        Interaction radar
      </p>
      <div className="relative mt-5 aspect-square w-[130px] overflow-hidden rounded-full border border-cyan-400/[0.12]">
        <div className="absolute left-1/2 top-0 h-full w-px bg-cyan-400/[0.08]" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-cyan-400/[0.08]" />
        <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/[0.07]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-1/2 w-1/2 origin-bottom-left bg-gradient-to-tr from-cyan-400/[0.12] to-transparent"
        />
        <motion.div
          animate={{ left: `${50 + mouse.x * 28}%`, top: `${50 + mouse.y * 28}%` }}
          className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
        />
      </div>
    </div>
  );
}

function Core({ launchModule }: { launchModule: (id: ModuleId) => void }) {
  return (
    <div className="relative h-[560px] w-[560px] scale-[0.64] sm:scale-[0.88] lg:scale-[1.12] 2xl:scale-[1.22]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-cyan-400/[0.07]"
      >
        <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-400/60 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[42px] rounded-full border border-dashed border-cyan-400/[0.1]"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[88px] rounded-full border border-cyan-400/[0.09]"
      />

      {Array.from({ length: 36 }).map((_, index) => (
        <div
          key={index}
          className="absolute left-1/2 top-1/2 h-[276px] w-px origin-top"
          style={{ transform: `rotate(${index * 10}deg)` }}
        >
          <div className={`h-2 w-px ${index % 3 === 0 ? "bg-cyan-400/30" : "bg-cyan-400/10"}`} />
        </div>
      ))}

      <svg viewBox="0 0 560 560" className="pointer-events-none absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="coreLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgb(34 211 238)" stopOpacity="0.08" />
            <stop offset="50%" stopColor="rgb(34 211 238)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="rgb(34 211 238)" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        {[
          [280, 280, 280, 55],
          [280, 280, 480, 165],
          [280, 280, 480, 395],
          [280, 280, 280, 505],
          [280, 280, 80, 395],
          [280, 280, 80, 165],
        ].map((line, index) => (
          <motion.line
            key={index}
            x1={line[0]}
            y1={line[1]}
            x2={line[2]}
            y2={line[3]}
            stroke="url(#coreLine)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: index * 0.15 }}
          />
        ))}
      </svg>

      <CoreNode label="WEBSITE" code="WEB" position="left-1/2 top-[20px] -translate-x-1/2" onClick={() => launchModule("website")} />
      <CoreNode label="MOBILE" code="APP" position="right-[10px] top-[130px]" onClick={() => launchModule("mobile")} />
      <CoreNode label="API" code="API" position="bottom-[120px] right-[5px]" onClick={() => launchModule("api")} />
      <CoreNode label="DATA" code="DAT" position="bottom-[15px] left-1/2 -translate-x-1/2" onClick={() => launchModule("data")} />
      <CoreNode label="AUTOMATION" code="AUT" position="bottom-[120px] left-[-20px]" onClick={() => launchModule("automation")} />
      <CoreNode label="SOFTWARE" code="SYS" position="left-[-10px] top-[130px]" onClick={() => launchModule("software")} />

      <div className="absolute left-1/2 top-1/2 flex h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/20 bg-[#03080d] shadow-[0_0_120px_rgba(34,211,238,0.16),inset_0_0_45px_rgba(34,211,238,0.035)]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute inset-3 rounded-full border-r border-t border-cyan-400/25"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          className="absolute inset-6 rounded-full border-b border-l border-cyan-400/20"
        />
        <div className="relative text-center">
          <motion.div
            animate={{ opacity: [0.45, 1, 0.45], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="mx-auto h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_42px_rgba(34,211,238,1)]"
          />
          <p className="mt-4 font-mono text-[9px] font-semibold uppercase tracking-[0.28em] text-white/80">PLK</p>
          <p className="mt-1 font-mono text-[6px] uppercase tracking-[0.18em] text-cyan-400/45">Core System</p>
        </div>
      </div>
    </div>
  );
}

function CoreNode({
  label,
  code,
  position,
  onClick,
}: {
  label: string;
  code: string;
  position: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.13 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`absolute z-20 cursor-pointer ${position}`}
    >
      <div className="group relative flex h-[70px] w-[70px] items-center justify-center rounded-full border border-cyan-400/[0.14] bg-[#03080d] transition duration-300 hover:border-cyan-300/50 hover:bg-cyan-400/[0.06] hover:shadow-[0_0_65px_rgba(34,211,238,0.22)]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[12px] rounded-full border-t border-cyan-300/20"
        />
        <span className="relative font-mono text-[7px] tracking-[0.15em] text-cyan-300/70">{code}</span>
      </div>
      <p className="absolute left-1/2 top-[78px] -translate-x-1/2 whitespace-nowrap font-mono text-[6px] uppercase tracking-[0.18em] text-white/25">
        {label}
      </p>
    </motion.button>
  );
}

function ModuleInterface({
  module,
  onClose,
}: {
  module: ModuleId;
  onClose: () => void;
}) {
  return (
    <OverlayShell title={moduleNames[module]} onClose={onClose}>
      {module === "website" && <WebsiteSimulation />}
      {module === "mobile" && <MobileSimulation />}
      {module === "software" && <SoftwareSimulation />}
      {module === "automation" && <AutomationSimulation />}
      {module === "data" && <DataSimulation />}
      {module === "api" && <ApiSimulation />}
    </OverlayShell>
  );
}

function OverlayShell({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[60] flex items-center justify-center bg-[#020509]/65 px-5 py-24 backdrop-blur-[5px] sm:px-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.86, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[min(650px,76vh)] w-full max-w-[980px] overflow-hidden border border-cyan-400/[0.15] bg-[#03080d]/95 shadow-[0_0_120px_rgba(34,211,238,0.08)]"
      >
        <div className="flex h-14 items-center justify-between border-b border-cyan-400/[0.08] px-5 sm:px-7">
          <StatusDot label={title} />
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-[6px] uppercase tracking-[0.18em] text-white/30 transition hover:text-cyan-400"
          >
            CLOSE ×
          </button>
        </div>
        <div className="h-[calc(100%-3.5rem)] overflow-y-auto lg:overflow-hidden">{children}</div>
      </motion.div>
    </motion.div>
  );
}

function ModuleLayout({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-full lg:grid-cols-[0.35fr_0.65fr]">
      <div className="flex flex-col justify-between p-7 sm:p-9">
        <div>
          <p className="font-mono text-[6px] uppercase tracking-[0.2em] text-cyan-400/50">{number}</p>
          <h3 className="mt-6 max-w-xs text-2xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-3xl">{title}</h3>
          <p className="mt-6 max-w-xs text-xs leading-6 text-white/30">{description}</p>
        </div>
        <p className="mt-8 border-t border-white/[0.06] pt-5 font-mono text-[6px] uppercase tracking-[0.16em] text-emerald-400/45">
          ● Module operational
        </p>
      </div>
      <div className="relative flex min-h-[470px] items-center justify-center overflow-hidden border-t border-white/[0.06] p-6 lg:border-l lg:border-t-0 lg:p-9">
        {children}
      </div>
    </div>
  );
}

function WebsiteSimulation() {
  return (
    <ModuleLayout
      number="WEB / 01"
      title="DIGITAL EXPERIENCES"
      description="Connected websites designed around customers, enquiries, conversion and the systems behind the business."
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-lg overflow-hidden border border-white/[0.1] bg-[#070d14] shadow-2xl"
      >
        <div className="flex h-9 items-center border-b border-white/[0.06] px-3">
          <div className="flex gap-1.5">
            {[1, 2, 3].map((x) => <span key={x} className="h-1.5 w-1.5 rounded-full bg-white/10" />)}
          </div>
          <div className="mx-auto h-4 w-[45%] rounded-sm bg-white/[0.035]" />
        </div>
        <div className="p-7">
          <p className="font-mono text-[5px] uppercase tracking-[0.2em] text-cyan-400/60">PLK DIGITAL EXPERIENCE</p>
          <div className="mt-7 h-7 w-[72%] bg-white/[0.12]" />
          <div className="mt-3 h-7 w-[48%] bg-white/[0.06]" />
          <div className="mt-7 h-2 w-[80%] bg-white/[0.04]" />
          <div className="mt-2 h-2 w-[65%] bg-white/[0.04]" />
          <div className="mt-8 flex gap-3">
            <div className="h-9 w-28 bg-cyan-400/70" />
            <div className="h-9 w-24 border border-white/[0.08]" />
          </div>
          <div className="mt-9 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + item * 0.1 }}
                className="h-24 border border-white/[0.06] bg-white/[0.015]"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </ModuleLayout>
  );
}

function MobileSimulation() {
  return (
    <ModuleLayout
      number="APP / 02"
      title="MOBILE PRODUCTS"
      description="Focused applications designed around useful repeat interactions, live data and a product experience people want to return to."
    >
      <motion.div
        initial={{ y: 70, rotateY: -12, opacity: 0 }}
        animate={{ y: 0, rotateY: 0, opacity: 1 }}
        className="relative h-[430px] w-[215px] rounded-[36px] border border-white/[0.15] bg-[#050a10] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
      >
        <div className="h-full overflow-hidden rounded-[29px] border border-white/[0.05] bg-[#090f16] p-5">
          <div className="mx-auto h-1 w-12 rounded-full bg-white/10" />
          <p className="mt-9 font-mono text-[6px] uppercase tracking-[0.2em] text-cyan-400">TODAY</p>
          <div className="mt-4 h-6 w-[75%] bg-white/[0.12]" />
          <div className="mt-2 h-6 w-[48%] bg-white/[0.06]" />
          <div className="mt-8 rounded-xl border border-white/[0.07] p-4">
            <div className="flex h-20 items-end gap-1">
              {[30, 48, 38, 70, 55, 82, 65].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.25 + i * 0.06 }}
                  className="flex-1 bg-cyan-400/25"
                />
              ))}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="h-20 rounded-xl border border-white/[0.06]" />
            <div className="h-20 rounded-xl border border-white/[0.06]" />
          </div>
        </div>
      </motion.div>
    </ModuleLayout>
  );
}

function SoftwareSimulation() {
  return (
    <ModuleLayout
      number="SYS / 03"
      title="BUSINESS SYSTEMS"
      description="Customers, jobs, scheduling, quotes, invoices, reporting and workflows brought into one connected operating environment."
    >
      <div className="w-full overflow-hidden border border-white/[0.09] bg-[#060b11]">
        <div className="flex h-10 items-center justify-between border-b border-white/[0.06] px-4">
          <span className="font-mono text-[6px] text-white/25">OPERATIONS / COMMAND</span>
          <span className="font-mono text-[5px] text-emerald-400/50">● LIVE</span>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-3 gap-3">
            {["248", "036", "£42K"].map((value, i) => (
              <div key={value} className="border border-white/[0.06] p-3">
                <p className="font-mono text-[5px] text-white/20">METRIC 0{i + 1}</p>
                <p className="mt-3 font-mono text-lg text-white/70">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex h-36 items-end gap-2 border border-white/[0.06] p-4">
            {[30, 55, 40, 75, 50, 90, 67, 82].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.06 }}
                className="flex-1 bg-cyan-400/20"
              />
            ))}
          </div>
          <div className="mt-4 space-y-2">
            {[1, 2, 3].map((x) => <div key={x} className="h-8 border border-white/[0.04]" />)}
          </div>
        </div>
      </div>
    </ModuleLayout>
  );
}

function AutomationSimulation() {
  const steps = ["NEW ENQUIRY", "CAPTURE DATA", "CREATE CUSTOMER", "SEND EMAIL", "NOTIFY TEAM"];
  return (
    <ModuleLayout
      number="AUT / 04"
      title="AUTOMATION ENGINE"
      description="A manual process transformed into a connected workflow that moves information and triggers actions automatically."
    >
      <div className="w-full max-w-sm">
        {steps.map((step, index) => (
          <div key={step}>
            <motion.div
              initial={{ opacity: 0.15, x: 20 }}
              animate={{ opacity: [0.2, 1, 0.55], x: 0 }}
              transition={{ delay: index * 0.45, duration: 0.7 }}
              className="flex items-center justify-between border border-cyan-400/[0.12] bg-cyan-400/[0.02] px-5 py-4"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[6px] text-cyan-400/40">0{index + 1}</span>
                <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/50">{step}</span>
              </div>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </motion.div>
            {index < steps.length - 1 && (
              <div className="relative mx-auto h-7 w-px bg-cyan-400/[0.12]">
                <motion.span
                  animate={{ y: [0, 26], opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: index * 0.2 }}
                  className="absolute h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </ModuleLayout>
  );
}

function DataSimulation() {
  const bars = [36, 54, 44, 70, 62, 84, 58, 92, 75, 88, 69, 96];
  return (
    <ModuleLayout
      number="DAT / 05"
      title="DATA INTELLIGENCE"
      description="Operational information turned into something visible, understandable and useful."
    >
      <div className="w-full">
        <div className="grid grid-cols-3 gap-3">
          {[
            ["RECORDS", "24,891"],
            ["ACTIVE", "1,204"],
            ["SYNC", "99.8%"],
          ].map(([label, value]) => (
            <div key={label} className="border border-white/[0.06] p-4">
              <p className="font-mono text-[5px] text-white/20">{label}</p>
              <p className="mt-3 font-mono text-lg text-cyan-300/70">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex h-56 items-end gap-2 border border-white/[0.06] p-5">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.04 }}
              className="flex-1 bg-gradient-to-t from-cyan-400/[0.08] to-cyan-400/40"
            />
          ))}
        </div>
      </div>
    </ModuleLayout>
  );
}

function ApiSimulation() {
  return (
    <ModuleLayout
      number="API / 06"
      title="CONNECTED SYSTEMS"
      description="Different platforms exchanging information without somebody manually copying it from one place to another."
    >
      <div className="relative h-[360px] w-[480px] scale-[0.65] sm:scale-[0.85] lg:scale-100">
        <ApiNode label="WEBSITE" position="left-0 top-1/2 -translate-y-1/2" />
        <ApiNode label="CRM" position="right-0 top-1/2 -translate-y-1/2" />
        <ApiNode label="PAYMENTS" position="left-1/2 top-0 -translate-x-1/2" />
        <ApiNode label="DATABASE" position="bottom-0 left-1/2 -translate-x-1/2" />
        <div className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/20 bg-[#040a10]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border-t border-cyan-400/30"
          />
          <span className="font-mono text-[7px] text-cyan-400">API</span>
        </div>
        <Connection className="left-[96px] right-[288px] top-1/2" />
        <Connection className="left-[288px] right-[96px] top-1/2" />
        <Connection vertical className="bottom-[225px] left-1/2 top-[64px]" />
        <Connection vertical className="bottom-[64px] left-1/2 top-[225px]" />
      </div>
    </ModuleLayout>
  );
}

function ApiNode({ label, position }: { label: string; position: string }) {
  return (
    <div className={`absolute z-10 flex h-16 w-24 items-center justify-center border border-cyan-400/[0.12] bg-[#040a10] ${position}`}>
      <span className="font-mono text-[6px] uppercase tracking-[0.16em] text-white/35">{label}</span>
    </div>
  );
}

function Connection({ className, vertical = false }: { className: string; vertical?: boolean }) {
  return (
    <div className={`absolute bg-cyan-400/[0.12] ${vertical ? "w-px" : "h-px"} ${className}`}>
      <motion.span
        animate={
          vertical
            ? { top: ["0%", "100%"], opacity: [0, 1, 0] }
            : { left: ["0%", "100%"], opacity: [0, 1, 0] }
        }
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className={`absolute h-1.5 w-1.5 rounded-full bg-cyan-300 ${vertical ? "left-1/2 -translate-x-1/2" : "top-1/2 -translate-y-1/2"}`}
      />
    </div>
  );
}

function Terminal({
  onClose,
  launchModule,
  launchProject,
}: {
  onClose: () => void;
  launchModule: (id: ModuleId) => void;
  launchProject: (name: string) => void;
}) {
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<CommandItem[]>([
    {
      command: "SYSTEM",
      output: 'Command interface online. Type "help" for available commands.',
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => inputRef.current?.focus(), 150);
    return () => window.clearTimeout(timer);
  }, []);

  const run = (event: FormEvent) => {
    event.preventDefault();
    const raw = value.trim();
    const command = raw.toLowerCase();
    if (!command) return;

    setValue("");

    if (command === "clear") {
      setHistory([]);
      return;
    }
    if (command === "exit") {
      onClose();
      return;
    }

    const moduleMap: Record<string, ModuleId> = {
      "open website": "website",
      website: "website",
      web: "website",
      "open mobile": "mobile",
      mobile: "mobile",
      app: "mobile",
      "open software": "software",
      software: "software",
      system: "software",
      "open automation": "automation",
      automation: "automation",
      "open data": "data",
      data: "data",
      "open api": "api",
      api: "api",
    };

    if (moduleMap[command]) {
      launchModule(moduleMap[command]);
      return;
    }

    if (command === "launch horizon" || command === "horizon") {
      launchProject("Horizon Operations");
      return;
    }
    if (command === "launch premier" || command === "premier picks" || command === "premier") {
      launchProject("Premier Picks");
      return;
    }
    if (command === "launch ascent" || command === "ascent") {
      launchProject("Ascent");
      return;
    }

    let output = "Command not recognised. Type help.";
    if (command === "help") output = commandHelp.join("  •  ");
    if (command === "projects") output = "HORIZON OPERATIONS  •  PREMIER PICKS  •  ASCENT";
    if (command === "about plk") output = "PLK Systems builds websites, mobile products, custom business software and automation around the way a business actually works.";
    if (command === "capabilities") output = "WEBSITES  •  MOBILE APPS  •  CUSTOM SOFTWARE  •  AUTOMATION  •  CONNECTED SYSTEMS";
    if (command === "build a system") {
      window.location.href = "/contact";
      return;
    }

    setHistory((items) => [...items, { command: raw, output }].slice(-7));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[70] flex items-end justify-center bg-[#020509]/60 px-5 pb-28 pt-20 backdrop-blur-[5px] sm:items-center sm:pb-20"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20 }}
        className="w-full max-w-3xl border border-cyan-400/[0.16] bg-[#02070b]/95 shadow-[0_0_100px_rgba(34,211,238,0.08)]"
      >
        <div className="flex h-12 items-center justify-between border-b border-cyan-400/[0.08] px-5">
          <StatusDot label="PLK / COMMAND" />
          <button onClick={onClose} className="font-mono text-[6px] text-white/30 hover:text-cyan-400">CLOSE ×</button>
        </div>
        <div className="h-[330px] overflow-y-auto p-5 font-mono text-[7px] uppercase leading-6 tracking-[0.12em] sm:p-7">
          {history.map((item, index) => (
            <div key={`${item.command}-${index}`} className="mb-5">
              <p className="text-cyan-400">&gt; {item.command}</p>
              <p className="mt-1 max-w-2xl text-white/35">{item.output}</p>
            </div>
          ))}
          <form onSubmit={run} className="mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-5">
            <span className="text-cyan-400">&gt;</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              autoComplete="off"
              spellCheck={false}
              placeholder="TYPE A COMMAND..."
              className="min-w-0 flex-1 bg-transparent text-[8px] uppercase tracking-[0.16em] text-white/70 outline-none placeholder:text-white/15"
            />
            <span className="hidden text-white/15 sm:block">ENTER ↵</span>
          </form>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-white/[0.05] px-5 py-3 font-mono text-[5px] uppercase tracking-[0.13em] text-white/15">
          <span>help</span><span>projects</span><span>open automation</span><span>launch horizon</span><span>build a system</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectOverlay({
  project,
  onClose,
}: {
  project: string;
  onClose: () => void;
}) {
  const info = useMemo(() => {
    if (project === "Horizon Operations") {
      return {
        code: "PROJECT / 01",
        type: "CUSTOM BUSINESS SOFTWARE",
        description: "A connected operations environment bringing customers, jobs, scheduling, quotes, invoices and reporting into one system.",
        metrics: [["MODULES", "06"], ["SYSTEM", "LIVE"], ["FOCUS", "OPS"]],
        href: "/work/horizon",
      };
    }
    if (project === "Premier Picks") {
      return {
        code: "PROJECT / 02",
        type: "DIGITAL PRODUCT",
        description: "A football prediction platform built around weekly competition, scoring, authentication and live league standings.",
        metrics: [["GAMEWEEKS", "38"], ["SYSTEM", "LIVE"], ["FOCUS", "PLAY"]],
        href: "/work/premier-picks",
      };
    }
    return {
      code: "PROJECT / 03",
      type: "MOBILE PRODUCT",
      description: "A focused fitness product designed around training, progress, consistency, exercises and coaching.",
      metrics: [["PRODUCT", "01"], ["SYSTEM", "LIVE"], ["FOCUS", "FIT"]],
      href: "/work/ascent",
    };
  }, [project]);

  return (
    <OverlayShell title="PROJECT NETWORK" onClose={onClose}>
      <div className="grid min-h-full lg:grid-cols-[0.55fr_0.45fr]">
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <p className="font-mono text-[6px] uppercase tracking-[0.22em] text-cyan-400/50">{info.code}</p>
          <p className="mt-6 font-mono text-[6px] uppercase tracking-[0.2em] text-white/20">{info.type}</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[0.9] tracking-[-0.055em] sm:text-6xl">{project.toUpperCase()}</h2>
          <p className="mt-7 max-w-lg text-sm leading-7 text-white/35">{info.description}</p>
          <Link
            href={info.href}
            className="mt-9 inline-flex w-fit items-center gap-4 border border-cyan-400/20 px-5 py-3 font-mono text-[6px] uppercase tracking-[0.18em] text-cyan-300 transition hover:bg-cyan-400/10"
          >
            OPEN CASE STUDY <span>↗</span>
          </Link>
        </div>
        <div className="relative flex items-center justify-center border-t border-white/[0.06] p-8 lg:border-l lg:border-t-0">
          <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full border border-cyan-400/[0.1]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-7 rounded-full border border-dashed border-cyan-400/[0.15]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-16 rounded-full border-r border-t border-cyan-400/25"
            />
            <div className="relative text-center">
              <span className="font-mono text-[7px] text-cyan-400">PLK PROJECT</span>
              <div className="mt-5 grid grid-cols-3 gap-5">
                {info.metrics.map(([label, value]) => (
                  <div key={label}>
                    <p className="font-mono text-lg text-white/70">{value}</p>
                    <p className="mt-1 font-mono text-[4px] text-white/20">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </OverlayShell>
  );
}
