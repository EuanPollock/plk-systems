import Link from "next/link";

const services = [
  { number: "01", title: "Websites", description: "Distinctive, responsive websites that make the right first impression and turn interest into enquiries.", tag: "DESIGN & DEVELOPMENT", glyph: "↗" },
  { number: "02", title: "Custom software", description: "Purpose-built platforms, dashboards and internal tools that fit how your business actually works.", tag: "SYSTEMS & PORTALS", glyph: "⌘" },
  { number: "03", title: "Applications", description: "Thoughtful digital products, from the first idea through to a polished, usable experience.", tag: "WEB & MOBILE", glyph: "◈" },
  { number: "04", title: "Automation", description: "Connect your tools, reduce repetitive admin and make more room for the work that matters.", tag: "SMARTER WORKFLOWS", glyph: "↝" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f4f0] text-[#151719] selection:bg-[#b9caff]">
      {/* NAVIGATION — intentionally server-rendered, with no client JS */}
      <header className="relative z-30 border-b border-[#151719]/10 bg-[#f5f4f0]">
        <div className="mx-auto flex h-[78px] max-w-[1520px] items-center justify-between px-6 sm:px-10 lg:px-16">
          <Link href="/" aria-label="PLK Systems home" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#151719] text-[14px] font-black tracking-[-0.11em] text-white transition-transform duration-300 group-hover:-rotate-6">PLK</span>
            <span className="text-[12px] font-bold uppercase tracking-[0.18em]">Systems<span className="text-[#315cff]">.</span></span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
            <Link className="nav-link" href="/services">Services</Link>
            <Link className="nav-link" href="/work">Work</Link>
            <Link className="nav-link" href="/about">About</Link>
            <Link className="nav-link" href="/lab">The Lab</Link>
          </nav>
          <Link href="/contact" className="hidden items-center gap-5 rounded-full bg-[#151719] px-5 py-3.5 text-[11px] font-semibold text-white transition-colors hover:bg-[#315cff] md:inline-flex">Start a project <span aria-hidden="true">↗</span></Link>
          <details className="mobile-menu relative md:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[#151719]/20 px-4 py-2.5 text-xs font-semibold [&::-webkit-details-marker]:hidden">Menu <span aria-hidden="true">☰</span></summary>
            <nav aria-label="Mobile navigation" className="absolute right-0 top-[calc(100%+12px)] flex w-56 flex-col gap-1 rounded-2xl border border-[#151719]/10 bg-white p-3 shadow-xl">
              {[["Services", "/services"], ["Work", "/work"], ["About", "/about"], ["The Lab", "/lab"], ["Contact", "/contact"]].map(([label, href]) => <Link key={href} href={href} className="rounded-lg px-4 py-3 text-sm font-medium hover:bg-[#f5f4f0]">{label}</Link>)}
            </nav>
          </details>
        </div>
      </header>

      {/* HERO — editorial typography + layered product composition */}
      <section className="relative isolate overflow-hidden bg-[#f5f4f0]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,#15171908_1px,transparent_1px)] [background-size:110px_110px]" />
        <div className="relative mx-auto max-w-[1520px] px-6 pb-12 pt-14 sm:px-10 sm:pt-20 lg:px-16 lg:pb-16 lg:pt-24">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#151719]/15 pt-5 text-[10px] font-bold uppercase tracking-[.19em] text-[#6d7479]">
            <span className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#315cff]" /> Independent digital studio / UK</span>
            <span className="hidden sm:block">Websites · Software · Digital products</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.03fr_.97fr] lg:gap-5">
            <div className="relative z-10">
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[.23em] text-[#315cff]">Ideas made real.</p>
              <h1 className="max-w-[900px] text-[clamp(4.1rem,8.2vw,9.3rem)] font-semibold leading-[.85] tracking-[-.09em]">
                DIGITAL,<br />
                <span className="text-[#315cff]">DONE</span><br />
                DIFFERENTLY<span className="text-[#315cff]">.</span>
              </h1>
              <div className="mt-9 max-w-[550px] border-l-2 border-[#315cff] pl-5 sm:mt-12 sm:pl-7">
                <p className="text-[16px] leading-[1.7] text-[#555d62] sm:text-[19px]">We create standout websites, clever software and digital products that help ambitious businesses move forward.</p>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <Link href="/contact" className="group inline-flex items-center gap-10 rounded-full bg-[#151719] px-7 py-4 text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#315cff]">Let's build something <span className="text-lg transition-transform group-hover:translate-x-1">↗</span></Link>
                <Link href="/work" className="group inline-flex items-center gap-3 border-b border-[#151719]/50 pb-2 text-[12px] font-semibold transition-colors hover:border-[#315cff] hover:text-[#315cff]">Explore our work <span className="transition-transform group-hover:translate-x-1">↗</span></Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[680px] pb-10 pt-7 lg:translate-x-5 lg:pb-14 lg:pt-12">
              <div aria-hidden="true" className="absolute inset-x-[4%] top-[8%] bottom-[6%] rounded-[32px] bg-[#e4e8e8]" />
              <div aria-hidden="true" className="absolute -right-[8%] top-[2%] hidden h-48 w-48 rounded-full border border-[#315cff]/25 lg:block" />
              <div aria-hidden="true" className="absolute -left-6 bottom-10 hidden h-32 w-32 rounded-full bg-[#315cff]/10 blur-2xl sm:block" />

              {/* Main product screen: CSS only, no external image request */}
              <div className="relative mx-2 overflow-hidden rounded-[18px] border border-white/10 bg-[#111923] p-4 shadow-[0_32px_80px_-24px_rgba(12,20,30,.38)] sm:mx-6 sm:rounded-[24px] sm:p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#ff6b6b]"/><span className="h-2 w-2 rounded-full bg-[#f3c765]"/><span className="h-2 w-2 rounded-full bg-[#6bcba0]"/></div>
                  <span className="text-[9px] font-bold uppercase tracking-[.19em] text-white/60">PLK / Workspace concept</span>
                  <span className="h-2 w-2 rounded-full bg-[#6bcba0] shadow-[0_0_12px_#6bcba0]"/>
                </div>
                <div className="grid grid-cols-[.25fr_1fr] gap-3 pt-5 sm:gap-5">
                  <div className="space-y-3 border-r border-white/10 pr-3 sm:pr-5">
                    <div className="mb-6 text-[9px] font-black tracking-[-.08em] text-white">PLK<span className="text-[#7190ff]">.</span></div>
                    {[0,1,2,3].map((i)=><div key={i} className={`h-2 rounded-full ${i===0?"w-full bg-[#5379ff]":"w-3/4 bg-white/15"}`}/>)}
                    <div className="mt-10 h-16 rounded-lg border border-white/10 bg-white/[.04]" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-end justify-between gap-2"><div><p className="text-[8px] uppercase tracking-[.18em] text-[#8c9bab]">Overview</p><h3 className="mt-1 text-[14px] font-semibold text-white sm:text-[20px]">Everything in sync.</h3></div><span className="text-[8px] text-[#85dfb6]">● SYSTEM ACTIVE</span></div>
                    <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                      <div className="rounded-lg border border-white/10 bg-white/[.05] p-2 sm:p-3"><span className="block text-[16px] font-bold text-white sm:text-[24px]">24.8k</span><span className="text-[8px] text-white/45">Activity</span></div>
                      <div className="rounded-lg border border-white/10 bg-white/[.05] p-2 sm:p-3"><span className="block text-[16px] font-bold text-white sm:text-[24px]">98%</span><span className="text-[8px] text-white/45">Efficiency</span></div>
                      <div className="rounded-lg border border-white/10 bg-white/[.05] p-2 sm:p-3"><span className="block text-[16px] font-bold text-white sm:text-[24px]">+42%</span><span className="text-[8px] text-white/45">Growth</span></div>
                    </div>
                    <div className="relative mt-3 h-28 overflow-hidden rounded-lg border border-white/10 bg-[#172332] p-3 sm:mt-4 sm:h-40 sm:p-4">
                      <div className="flex items-center justify-between"><span className="text-[9px] font-semibold text-white/75">Performance</span><span className="text-[8px] text-[#8caaff]">Last 12 months ↗</span></div>
                      <div className="absolute inset-x-3 bottom-3 top-10 flex items-end gap-[3%] sm:inset-x-4 sm:bottom-4">{[35,48,42,65,55,75,61,86,72,92,81,100].map((height,i)=><div key={i} className="flex-1 rounded-t-[3px] bg-gradient-to-t from-[#315cff] to-[#9bb4ff]" style={{height:`${height}%`}} />)}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating editorial labels */}
              <div className="absolute -bottom-1 left-0 max-w-[55%] rounded-xl border border-[#151719]/10 bg-white p-4 shadow-[0_14px_40px_rgba(0,0,0,.1)] sm:-left-2 sm:p-5">
                <div className="mb-2 flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#315cff]"/><span className="text-[9px] font-bold uppercase tracking-[.15em] text-[#697178]">The PLK approach</span></div>
                <p className="text-[13px] font-semibold leading-snug text-[#151719] sm:text-[17px]">Built around your business. Not the other way round.</p>
              </div>
              <div className="absolute -right-1 bottom-5 rounded-xl bg-[#315cff] px-4 py-3 text-white shadow-[0_14px_35px_rgba(49,92,255,.3)] sm:-right-3 sm:bottom-12 sm:px-5 sm:py-4">
                <span className="block text-[9px] font-bold uppercase tracking-[.2em] text-white/70">What we do</span>
                <span className="mt-1 block text-[12px] font-semibold sm:text-[15px]">Design. Build. Improve. ↗</span>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-[#151719]/15 pt-5 text-[10px] font-bold uppercase tracking-[.17em] text-[#71767a] lg:mt-20"><span>Independent thinking / Purposeful technology</span><span>Scroll to explore ↓</span><span className="hidden sm:inline">01 — 05</span></div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-24 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <SectionIntro number="01 / EXPERTISE" label="WHAT WE DO" />
          <div className="mt-8 grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-20"><h2 className="text-[clamp(3.4rem,6.5vw,7rem)] font-semibold leading-[.92] tracking-[-.075em]">GOOD IDEAS.<br /><span className="text-[#9fa4a7]">GREAT BUILDS.</span></h2><p className="max-w-md self-end text-[16px] leading-8 text-[#656a6e]">No unnecessary complexity. No one-size-fits-all solutions. Just thoughtful digital experiences built to solve real problems.</p></div>
          <div className="mt-16 grid border-t border-[#151719]/15 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">{services.map((service)=><Link href="/services" key={service.number} className="group flex min-h-[300px] flex-col border-b border-[#151719]/15 px-1 py-8 transition-colors hover:bg-[#f5f4f0] sm:px-6 lg:border-r lg:last:border-r-0"><div className="flex items-center justify-between"><span className="text-[11px] font-semibold text-[#7e8387]">{service.number}</span><span className="text-3xl text-[#315cff] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">{service.glyph}</span></div><h3 className="mt-12 text-[26px] font-semibold tracking-[-.05em]">{service.title}</h3><p className="mt-4 max-w-[280px] text-sm leading-7 text-[#6b7074]">{service.description}</p><span className="mt-auto pt-10 text-[9px] font-bold uppercase tracking-[.15em] text-[#315cff]">{service.tag}</span></Link>)}</div>
        </div>
      </section>

      {/* FEATURED WORK — one flagship + two supporting stories */}
      <section id="work" className="bg-[#10151b] py-20 text-white sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <SectionIntro number="02 / PORTFOLIO" label="SELECTED WORK" dark />
          <div className="mt-9 flex flex-wrap items-end justify-between gap-8">
            <div><p className="mb-5 text-xs font-semibold uppercase tracking-[.2em] text-[#94aaff]">Proof in the product.</p><h2 className="text-[clamp(3.5rem,7.4vw,8.5rem)] font-semibold leading-[.86] tracking-[-.078em]">THE WORK<br/><span className="text-[#727d88]">SPEAKS.</span></h2></div>
            <Link href="/work" className="group inline-flex items-center gap-5 border-b border-white/40 pb-3 text-sm font-semibold transition-colors hover:border-[#a9baff] hover:text-[#a9baff]">Explore all projects <span aria-hidden="true" className="text-xl transition-transform group-hover:translate-x-1">↗</span></Link>
          </div>
          <Link href="/work/horizon" className="group mt-14 block lg:mt-16">
            <div className="relative isolate grid min-h-[460px] overflow-hidden rounded-[24px] bg-[#dbe3e7] lg:min-h-[570px] lg:grid-cols-[.38fr_.62fr]">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(#8a9ba51b_1px,transparent_1px),linear-gradient(90deg,#8a9ba51b_1px,transparent_1px)] [background-size:42px_42px]"/>
              <div className="relative z-10 flex flex-col justify-between gap-16 p-7 text-[#18212a] sm:p-10 lg:p-14">
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em]"><span className="h-2 w-2 rounded-full bg-[#315cff]"/> Featured project / 01</div>
                <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#607080]">Business operations platform</p><h3 className="mt-3 text-[clamp(3.5rem,6vw,6.8rem)] font-semibold leading-none tracking-[-.08em]">Horizon<span className="text-[#315cff]">.</span></h3><p className="mt-5 max-w-[310px] text-base leading-7 text-[#5a6771]">A clearer way to manage complex operations, people and processes.</p><span className="mt-9 inline-flex items-center gap-4 border-b border-[#18212a]/40 pb-2 text-sm font-semibold">View case study <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span></span></div>
              </div>
              <div className="relative flex min-h-[310px] items-center justify-center px-5 pb-10 sm:px-10 lg:min-h-0 lg:pr-0">
                <div aria-hidden="true" className="absolute right-[-10%] top-[15%] h-80 w-80 rounded-full bg-[#8aa4ff]/30 blur-[80px]"/>
                <div className="relative w-full max-w-[760px] rotate-[-3deg] overflow-hidden rounded-xl border border-white/10 bg-[#131c26] shadow-[0_38px_90px_-25px_rgba(18,32,47,.55)] transition-transform duration-500 group-hover:rotate-0 lg:translate-x-[6%]">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><span className="text-xs font-black tracking-[.16em] text-white">HORIZON<span className="text-[#88a1ff]"> / OPS</span></span><span className="text-[10px] font-semibold text-emerald-300">● SYSTEM ONLINE</span></div>
                  <div className="grid grid-cols-[65px_1fr] sm:grid-cols-[110px_1fr]"><div className="space-y-4 border-r border-white/10 p-4">{[0,1,2,3,4].map(i=><div key={i} className={`h-2 rounded-full ${i===0?'bg-[#6484ff]':'bg-white/15'}`}/>)}</div><div className="p-4 sm:p-6"><p className="text-[10px] uppercase tracking-[.2em] text-[#91a0b1]">Operations overview</p><h4 className="mt-2 text-xl font-semibold text-white sm:text-3xl">Everything in view.</h4><div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4">{[['42','Active tasks'],['08','Workstreams'],['96%','On track']].map(([n,l])=><div key={l} className="rounded-lg border border-white/10 bg-white/[.05] p-3 sm:p-5"><p className="text-xl font-semibold text-white sm:text-3xl">{n}</p><p className="mt-2 text-[9px] text-white/50">{l}</p></div>)}</div><div className="mt-4 space-y-2">{[86,65,92,75].map((v,i)=><div key={i} className="flex items-center gap-4 rounded-md bg-white/[.04] p-3"><span className="h-2.5 w-2.5 rounded-full bg-[#7d9aff]"/><div className="h-2 flex-1 rounded-full bg-white/10"><div className="h-full rounded-full bg-[#6686ff]" style={{width:`${v}%`}}/></div><span className="text-[10px] text-white/55">{v}%</span></div>)}</div></div></div>
                </div>
              </div>
            </div>
          </Link>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Link href="/work/premier-picks" className="group block"><div className="relative flex aspect-[1.25] items-center justify-center overflow-hidden rounded-[24px] bg-[#c7d7ff] p-6 sm:p-12"><div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:radial-gradient(#315cff_1px,transparent_1px)] [background-size:24px_24px]"/><div className="relative w-full max-w-[470px] rotate-[3deg] rounded-2xl border border-white/10 bg-[#101c37] p-6 shadow-[0_28px_70px_-20px_rgba(14,30,78,.6)] transition-transform duration-500 group-hover:rotate-0 sm:p-8"><div className="flex items-center justify-between border-b border-white/15 pb-5 text-[10px] font-bold tracking-[.15em] text-white"><span>PREMIER PICKS</span><span className="text-[#8faaff]">GAMEWEEK 12</span></div><p className="mt-7 text-center text-[10px] font-bold uppercase tracking-[.2em] text-[#a0b3df]">Your match prediction</p><div className="mt-5 flex items-center justify-center gap-3 text-white sm:gap-6"><span className="text-xs font-bold sm:text-lg">HOME</span><span className="rounded-xl bg-[#315cff] px-4 py-3 text-2xl font-black sm:px-6 sm:text-4xl">2 : 1</span><span className="text-xs font-bold sm:text-lg">AWAY</span></div><div className="mt-7 flex justify-between border-t border-white/10 pt-4 text-[10px] text-[#b2c3e5]"><span>PREDICTION SAVED</span><span>+5 POINTS</span></div></div></div><ProjectCaption number="02" type="Football prediction platform" name="Premier Picks" description="Competition, community and every match in one place."/></Link>
            <Link href="/work/ascent" className="group block"><div className="relative flex aspect-[1.25] items-center justify-center overflow-hidden rounded-[24px] bg-[#dce1d9] p-6"><div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:linear-gradient(45deg,#7b8e7b16_25%,transparent_25%,transparent_75%,#7b8e7b16_75%)] [background-size:36px_36px]"/><div className="relative w-[205px] rotate-[-5deg] rounded-[35px] border-[7px] border-[#242b29] bg-[#151c19] px-5 pb-7 pt-5 shadow-[0_30px_70px_-20px_rgba(28,39,32,.6)] transition-transform duration-500 group-hover:rotate-0 sm:w-[245px]"><div className="mx-auto mb-8 h-1.5 w-14 rounded-full bg-white/20"/><p className="text-xs font-black tracking-[.23em] text-white">ASCENT</p><p className="mt-7 text-[10px] uppercase tracking-[.16em] text-[#b5c6b9]">Weekly consistency</p><p className="mt-2 text-5xl font-bold tracking-[-.08em] text-white">05<span className="text-xl text-[#a9c4ad]">/07</span></p><div className="mt-7 flex h-28 items-end gap-2">{[50,72,45,91,68,83,100].map((n,i)=><div key={i} className="flex-1 rounded-t bg-[#b8d8ac]" style={{height:`${n}%`}}/>)}</div><div className="mt-7 rounded-xl bg-white/10 p-4 text-[10px] text-white">NEXT SESSION <span className="float-right">↗</span></div></div></div><ProjectCaption number="03" type="Fitness application concept" name="Ascent" description="A considered experience built around progress."/></Link>
          </div>
        </div>
      </section>

      {/* APPROACH — compact, confident, purposeful */}
      <section className="bg-[#f5f4f0] py-20 sm:py-28 lg:py-32"><div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16"><SectionIntro number="03 / OUR APPROACH" label="HOW WE WORK"/><div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-24"><div><h2 className="text-[clamp(3.6rem,7vw,8rem)] font-semibold leading-[.88] tracking-[-.075em]">LESS NOISE.<br/><span className="text-[#315cff]">MORE IMPACT.</span></h2><p className="mt-9 max-w-[530px] text-[17px] leading-8 text-[#60666b]">We listen first, design with intent and build technology that works for the people using it. No unnecessary complexity. Just the right solution, built properly.</p><Link href="/about" className="mt-8 inline-flex items-center gap-5 border-b border-[#151719] pb-2 text-sm font-semibold transition-colors hover:border-[#315cff] hover:text-[#315cff]">Get to know PLK <span aria-hidden="true">↗</span></Link><div className="mt-14 flex items-center gap-4 border-t border-[#151719]/15 pt-6"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#151719] text-xs font-black text-white">PLK</span><p className="max-w-xs text-sm leading-6 text-[#666d71]">Independent thinking.<br/><span className="font-semibold text-[#151719]">Digital solutions built around you.</span></p></div></div><div className="self-center border-t border-[#151719]/20">{[['01','Discover','Understand the challenge.'],['02','Design','Make every detail count.'],['03','Build','Bring the solution to life.'],['04','Evolve','Keep improving as you grow.']].map(([n,title,desc])=><div key={n} className="grid grid-cols-[45px_1fr] items-baseline gap-3 border-b border-[#151719]/20 py-6 sm:grid-cols-[60px_1fr]"><span className="text-xs font-semibold text-[#315cff]">{n}</span><div className="flex flex-wrap items-baseline justify-between gap-3"><h3 className="text-2xl font-semibold tracking-[-.045em]">{title}</h3><p className="text-xs text-[#777d80]">{desc}</p></div></div>)}</div></div></div></section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#315cff] py-24 text-white sm:py-32 lg:py-40"><div className="pointer-events-none absolute -right-32 -top-48 h-[550px] w-[550px] rounded-full border border-white/20 sm:h-[800px] sm:w-[800px]"/><div className="pointer-events-none absolute -right-20 -top-24 h-[380px] w-[380px] rounded-full border border-white/20 sm:h-[600px] sm:w-[600px]"/><div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16"><SectionIntro number="04 / NEXT STEPS" label="YOUR MOVE" dark/><h2 className="mt-10 max-w-[1200px] text-[clamp(4.1rem,10vw,11rem)] font-semibold leading-[.83] tracking-[-.09em]">LET'S MAKE<br />SOMETHING<br />HAPPEN<span className="text-[#b6c7ff]">.</span></h2><div className="mt-14 flex flex-wrap items-end justify-between gap-10 border-t border-white/30 pt-8"><p className="max-w-md text-base leading-8 text-white/85">A new website. A smarter system. An ambitious idea. Whatever you're imagining, we'd love to hear about it.</p><Link href="/contact" className="group inline-flex min-w-[210px] items-center justify-between gap-12 rounded-full bg-white px-7 py-5 text-sm font-bold text-[#151719] transition-all hover:-translate-y-1 hover:bg-[#e7edff]">Start a project <span className="text-xl transition-transform group-hover:translate-x-1">↗</span></Link></div></div></section>

      {/* FOOTER */}
      <footer className="bg-[#10151b] text-white"><div className="mx-auto max-w-[1520px] px-6 pb-8 pt-16 sm:px-10 lg:px-16"><div className="flex flex-col justify-between gap-12 border-b border-white/15 pb-14 md:flex-row"><div><Link href="/" className="text-3xl font-black tracking-[-.08em]">PLK<span className="text-[#7994ff]">.</span></Link><p className="mt-5 max-w-xs text-sm leading-7 text-[#a1aab4]">Digital solutions built around your business.</p></div><div className="grid grid-cols-2 gap-x-14 gap-y-4 text-sm sm:gap-x-24"><Link className="footer-link" href="/services">Services</Link><Link className="footer-link" href="/work">Work</Link><Link className="footer-link" href="/about">About</Link><Link className="footer-link" href="/contact">Contact</Link><Link className="footer-link" href="/lab">The Lab</Link><Link className="footer-link" href="/privacy">Privacy</Link></div></div><div className="flex flex-wrap items-center justify-between gap-4 pt-7 text-[10px] text-[#8f9aa6]"><span>© {new Date().getFullYear()} PLK Systems. All rights reserved.</span><span>Made with purpose. Built to last.</span></div></div></footer>
    </main>
  );
}

function SectionIntro({number,label,dark=false}:{number:string;label:string;dark?:boolean}){return <div className={`flex items-center justify-between gap-4 border-t pt-5 text-[10px] font-bold uppercase tracking-[.2em] ${dark?"border-white/20 text-white/65":"border-[#151719]/15 text-[#72787c]"}`}><span>{number}</span><span>{label}</span></div>}
function ProjectCaption({number,type,name,description}:{number:string;type:string;name:string;description:string}){
  return <div className="flex items-start justify-between gap-5 px-1 pt-6"><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#a0aab7]">{number} / {type}</p><h3 className="mt-3 text-3xl font-semibold tracking-[-.055em] text-white sm:text-4xl">{name}</h3><p className="mt-2 text-sm leading-6 text-[#a4adb8]">{description}</p></div><span aria-hidden="true" className="text-2xl text-white transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span></div>
}
