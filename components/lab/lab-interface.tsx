"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";

type ModuleId = "website" | "mobile" | "software" | "automation" | "data" | "api";
type ProjectId = "horizon" | "premier" | "ascent";
type Selection = { kind: "module"; id: ModuleId } | { kind: "project"; id: ProjectId } | null;
type TerminalLine = { input: string; output: string };

const modules: { id: ModuleId; code: string; name: string; tagline: string; description: string; steps: string[] }[] = [
  { id: "website", code: "WEB", name: "Websites", tagline: "Digital experiences", description: "Websites that do more than look good. Connected enquiries, bookings, accounts and customer journeys.", steps: ["Visitor arrives", "Enquiry captured", "Customer record created", "Team notified"] },
  { id: "mobile", code: "APP", name: "Mobile apps", tagline: "Products in your pocket", description: "Focused mobile experiences built around useful repeat interactions, accounts and connected data.", steps: ["Account created", "Personalised home", "Progress recorded", "Insights delivered"] },
  { id: "software", code: "SYS", name: "Custom software", tagline: "Built around operations", description: "Purpose-built systems connecting jobs, customers, scheduling, documents and reporting.", steps: ["Customer management", "Job tracking", "Scheduling", "Reporting"] },
  { id: "automation", code: "AUT", name: "Automation", tagline: "Less repetitive work", description: "Connected workflows that transfer information, trigger actions and reduce manual administration.", steps: ["New enquiry", "Capture data", "Create customer", "Notify team"] },
  { id: "data", code: "DAT", name: "Data intelligence", tagline: "Clarity from information", description: "Make important business information understandable through dashboards, reports and useful insights.", steps: ["Collect", "Organise", "Visualise", "Act"] },
  { id: "api", code: "API", name: "Integrations", tagline: "Systems working together", description: "Connect websites, databases, payments and other tools without duplicating manual work.", steps: ["Website", "API layer", "Database", "Connected tools"] },
];

const projects: Record<ProjectId, { name: string; category: string; description: string; href: string }> = {
  horizon: { name: "Horizon Operations", category: "Business software", description: "An operations environment bringing customers, jobs, scheduling, quotes, invoices and reporting together.", href: "/work/horizon" },
  premier: { name: "Premier Picks", category: "Digital product", description: "A football prediction platform combining fixtures, weekly picks, scoring and league standings.", href: "/work/premier-picks" },
  ascent: { name: "Ascent", category: "Mobile product", description: "A fitness experience centred on workouts, progress, consistency and coaching.", href: "/work/ascent" },
};

const help = ["help", "modules", "projects", "open website", "open mobile", "open software", "open automation", "open data", "open api", "launch horizon", "launch premier", "launch ascent", "about plk", "capabilities", "build a system", "clear", "exit"];

export default function LabPage() {
  const [selection, setSelection] = useState<Selection>(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([{ input: "system", output: 'Command interface ready. Type "help" to explore.' }]);
  const [showIntro, setShowIntro] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try { if (sessionStorage.getItem("plk-lab-v3-visited")) setShowIntro(false); } catch { /* storage may be unavailable */ }
  }, []);
  useEffect(() => {
    if (terminalOpen) inputRef.current?.focus();
  }, [terminalOpen]);
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") { setTerminalOpen(false); setSelection(null); setShowIntro(false); }
      const target = event.target as HTMLElement | null;
      const editing = target?.matches("input, textarea, [contenteditable='true']");
      if (event.key === "/" && !editing && !showIntro) { event.preventDefault(); setSelection(null); setTerminalOpen(true); }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showIntro]);

  function dismissIntro() {
    setShowIntro(false);
    try { sessionStorage.setItem("plk-lab-v3-visited", "1"); } catch { /* optional */ }
  }
  function openModule(id: ModuleId) { setTerminalOpen(false); setSelection({ kind: "module", id }); }
  function openProject(id: ProjectId) { setTerminalOpen(false); setSelection({ kind: "project", id }); }
  function runCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const raw = input.trim();
    const command = raw.toLowerCase();
    if (!command) return;
    setInput("");
    if (command === "clear") { setHistory([]); return; }
    if (command === "exit") { setTerminalOpen(false); return; }
    if (command === "build a system") { window.location.assign("/contact"); return; }
    const module = modules.find((item) => command === item.id || command === `open ${item.id}` || (item.id === "mobile" && ["app", "open app"].includes(command)) || (item.id === "website" && command === "web") || (item.id === "software" && command === "system"));
    if (module) { openModule(module.id); return; }
    const project = (Object.keys(projects) as ProjectId[]).find((id) => command === id || command === `launch ${id}` || (id === "premier" && ["premier picks", "launch premier picks"].includes(command)) || (id === "horizon" && command === "horizon operations"));
    if (project) { openProject(project); return; }
    const output: Record<string, string> = {
      help: help.join("  ·  "),
      modules: modules.map((item) => item.name).join("  ·  "),
      projects: Object.values(projects).map((item) => item.name).join("  ·  "),
      "about plk": "PLK Systems is an independent Scottish studio building websites, apps, custom business software and automation.",
      capabilities: "Websites · Mobile apps · Custom software · Automation · Data · Integrations",
    };
    setHistory((items) => [...items, { input: raw, output: output[command] || 'Unknown command. Type "help" to see available commands.' }].slice(-12));
  }

  const activeModule = selection?.kind === "module" ? modules.find((item) => item.id === selection.id) : undefined;
  const activeProject = selection?.kind === "project" ? projects[selection.id] : undefined;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050a12] text-white selection:bg-[#315cff] selection:text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(rgba(94,122,183,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(94,122,183,.06) 1px,transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at center,black 10%,transparent 80%)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[35%] h-[520px] w-[520px] max-w-full -translate-x-1/2 rounded-full bg-[#315cff]/[0.09] blur-[110px]" />

      <header className="relative z-10 mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 py-6 sm:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-3 text-sm font-black tracking-[-0.04em]" aria-label="PLK Systems home"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#315cff] text-sm">P.</span> PLK <span className="font-medium text-white/35">/ LAB</span></Link>
        <div className="flex items-center gap-5"><span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 sm:flex"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Interactive showcase</span><Link href="/" className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold transition hover:border-white/40 hover:bg-white/5">Exit Lab ↗</Link></div>
      </header>

      <section className="relative z-10 mx-auto max-w-[1500px] px-5 pb-16 pt-12 sm:px-10 lg:px-16 lg:pt-16">
        <div className="max-w-3xl"><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8ca4ff]">PLK Systems / Experimental space</p><h1 className="mt-5 text-[clamp(3.7rem,9vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.075em]">THE <span className="text-[#7391ff]">LAB.</span></h1><p className="mt-7 max-w-xl text-sm leading-7 text-white/50 sm:text-base">Explore the building blocks behind modern digital products. Choose a system, open a project, or use the command interface.</p></div>

        <div className="mt-12 grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px] xl:gap-8">
          <div className="relative min-w-0 overflow-hidden rounded-[26px] border border-white/10 bg-[#0a1221]/85 p-5 shadow-[0_40px_120px_rgba(0,0,0,.25)] sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8ca4ff]">System explorer</span><span className="font-mono text-[10px] text-white/30">06 / Modules</span></div>
            <div className="relative mx-auto my-10 flex max-w-[660px] items-center justify-center sm:my-14">
              <div aria-hidden="true" className="absolute aspect-square w-[min(90%,460px)] rounded-full border border-[#7794ff]/10" />
              <div aria-hidden="true" className="absolute aspect-square w-[min(65%,330px)] rounded-full border border-dashed border-[#7794ff]/15" />
              <div className="relative z-10 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {modules.map((item, index) => <button key={item.id} type="button" onClick={() => openModule(item.id)} className="group flex min-h-[132px] flex-col items-start justify-between rounded-2xl border border-white/10 bg-[#101b2d]/95 p-4 text-left shadow-xl transition duration-200 hover:-translate-y-1 hover:border-[#7794ff]/60 hover:bg-[#172849] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8ca4ff] sm:min-h-[160px] sm:p-5"><div className="flex w-full items-center justify-between"><span className="font-mono text-[10px] text-[#90a6ff]">{item.code} / 0{index + 1}</span><span className="text-white/35 transition group-hover:translate-x-1 group-hover:text-white">↗</span></div><div><span className="block text-base font-semibold tracking-[-0.035em] sm:text-lg">{item.name}</span><span className="mt-1 block text-[11px] leading-4 text-white/40">{item.tagline}</span></div></button>)}
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs text-white/40">Select any module to explore a concept simulation.</p><button type="button" onClick={() => { setSelection(null); setTerminalOpen(true); }} className="rounded-full bg-[#315cff] px-5 py-3 text-xs font-semibold transition hover:bg-[#4d72ff]">Open command interface <span aria-hidden="true">↗</span></button></div>
          </div>

          <aside className="flex flex-col gap-6"><div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-6"><div className="flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8ca4ff]">Project network</span><span className="font-mono text-[10px] text-white/30">03</span></div><div className="mt-6 divide-y divide-white/10">{(Object.keys(projects) as ProjectId[]).map((id, index) => <button key={id} type="button" onClick={() => openProject(id)} className="group flex w-full items-center justify-between gap-3 py-5 text-left"><div><span className="font-mono text-[10px] text-white/30">0{index + 1} / {projects[id].category}</span><p className="mt-2 text-base font-semibold tracking-tight transition group-hover:text-[#9bb0ff]">{projects[id].name}</p></div><span className="text-white/40 transition group-hover:translate-x-1 group-hover:text-white">↗</span></button>)}</div></div><div className="rounded-[24px] border border-[#315cff]/25 bg-[#315cff]/10 p-6"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9bb0ff]">Command shortcuts</p><p className="mt-4 text-sm leading-6 text-white/55">Press <kbd className="rounded border border-white/20 px-2 py-1 font-mono text-white">/</kbd> to open the terminal. Type <code className="text-[#9bb0ff]">help</code> for all commands.</p><button type="button" onClick={() => setTerminalOpen(true)} className="mt-5 text-xs font-semibold text-white underline decoration-[#7794ff] underline-offset-4">Launch terminal ↗</button></div></aside>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center"><p className="text-xs text-white/35">Concept simulations, not connected to live production systems.</p><Link href="/contact" className="text-xs font-semibold text-[#a7b8ff] hover:text-white">Have something you want built? Start a project ↗</Link></div>
      </section>

      {showIntro && <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#03070e]/95 px-5 backdrop-blur-xl"><div className="w-full max-w-xl rounded-[28px] border border-[#7994ff]/25 bg-[#0b1425] p-8 shadow-2xl sm:p-12"><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#9bb0ff]">PLK / Lab environment</p><h2 className="mt-7 text-5xl font-semibold tracking-[-0.07em] sm:text-6xl">WELCOME<br /><span className="text-[#7895ff]">TO THE LAB.</span></h2><p className="mt-6 max-w-md text-sm leading-7 text-white/50">An interactive look at the systems and products PLK builds. Explore six modules, browse project concepts and try the command terminal.</p><button type="button" onClick={dismissIntro} className="mt-9 w-full rounded-full bg-[#315cff] px-6 py-4 text-sm font-semibold transition hover:bg-[#4d72ff]">Enter the Lab ↗</button><p className="mt-5 text-center font-mono text-[10px] text-white/25">No artificial loading sequence. Ready when you are.</p></div></div>}

      {selection && <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#03070e]/85 px-4 py-6 backdrop-blur-md" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelection(null); }}><section role="dialog" aria-modal="true" aria-label={activeModule?.name || activeProject?.name || "Details"} className="flex max-h-[90dvh] w-full max-w-[900px] flex-col overflow-hidden rounded-[26px] border border-[#829bff]/25 bg-[#0b1425] shadow-[0_35px_130px_rgba(0,0,0,.7)]"><div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-6 py-5 sm:px-8"><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#9bb0ff]">{activeModule ? "Module / Simulation" : "Project / Overview"}</span><button type="button" onClick={() => setSelection(null)} className="rounded-full border border-white/15 px-4 py-2 text-xs hover:bg-white/10">Close ×</button></div><div className="grid min-h-0 overflow-y-auto lg:grid-cols-[0.9fr_1.1fr]"><div className="p-7 sm:p-10"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#91a8ff]">{activeModule?.tagline || activeProject?.category}</p><h2 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-5xl">{activeModule?.name || activeProject?.name}</h2><p className="mt-6 text-sm leading-7 text-white/50">{activeModule?.description || activeProject?.description}</p>{activeProject && <Link href={activeProject.href} className="mt-9 inline-flex rounded-full bg-[#315cff] px-5 py-3 text-xs font-semibold hover:bg-[#4d72ff]">View case study ↗</Link>}{activeModule && <Link href="/services" className="mt-9 inline-flex rounded-full border border-white/20 px-5 py-3 text-xs font-semibold hover:bg-white/10">Explore services ↗</Link>}</div><div className="border-t border-white/10 bg-[#101d32] p-7 sm:p-10 lg:border-l lg:border-t-0"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">{activeModule ? "Example workflow" : "Connected product"}</p>{activeModule ? <div className="mt-8 space-y-3">{activeModule.steps.map((step, index) => <div key={step} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.035] p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#315cff]/20 font-mono text-xs text-[#a7b8ff]">0{index + 1}</span><span className="text-sm font-medium">{step}</span><span className="ml-auto text-emerald-400">✓</span></div>)}</div> : <div className="mt-8 flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-[#7895ff]/15 bg-[#0a1424] p-6 text-center"><div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#7895ff]/30 bg-[#315cff]/10 text-3xl font-black tracking-[-0.08em] text-[#a7b8ff]">PLK</div><p className="mt-6 text-lg font-semibold">{activeProject?.name}</p><p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">Case study available</p></div>}<p className="mt-7 text-xs leading-6 text-white/30">{activeModule ? "Illustrative process. Actual implementations are tailored to each project." : "Explore the project case study for more detail."}</p></div></div></section></div>}

      {terminalOpen && <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#03070e]/85 px-4 py-6 backdrop-blur-md" onMouseDown={(event) => { if (event.target === event.currentTarget) setTerminalOpen(false); }}><section role="dialog" aria-modal="true" aria-label="PLK command interface" className="flex max-h-[90dvh] w-full max-w-[800px] flex-col overflow-hidden rounded-[24px] border border-[#829bff]/30 bg-[#07101d] shadow-[0_35px_130px_rgba(0,0,0,.7)]"><div className="flex items-center justify-between border-b border-white/10 px-6 py-5"><span className="font-mono text-xs font-semibold tracking-[0.15em] text-[#9bb0ff]">&gt; PLK / COMMAND</span><button type="button" onClick={() => setTerminalOpen(false)} className="rounded-full border border-white/15 px-4 py-2 text-xs hover:bg-white/10">Close ×</button></div><div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 font-mono text-xs leading-7 sm:px-8">{history.map((line, index) => <div key={`${index}-${line.input}`} className="mb-5"><p className="text-[#9bb0ff]">&gt; {line.input}</p><p className="mt-1 break-words text-white/50">{line.output}</p></div>)}<form onSubmit={runCommand} className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5"><span className="text-[#9bb0ff]">&gt;</span><input ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} autoComplete="off" spellCheck={false} aria-label="Enter a command" placeholder="Type a command..." className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-white/25" /><button type="submit" className="rounded-full bg-[#315cff] px-4 py-2 text-xs font-semibold hover:bg-[#4d72ff]">Run ↵</button></form></div><div className="border-t border-white/10 px-6 py-4 font-mono text-[10px] text-white/35 sm:px-8">Try: help · projects · open automation · launch horizon · build a system</div></section></div>}
    </main>
  );
}
