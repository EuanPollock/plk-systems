import Link from "next/link";

// PLK Systems / Services — server-rendered, no animation package required.
// Replace app/services/page.tsx with this file.

const services = [
  {
    number: "01", slug: "websites", title: "Websites", kicker: "Make a stronger first impression.",
    description: "More than a good-looking website. We create considered digital experiences that help customers find you, understand your offer and take action.",
    features: ["Business websites", "Online bookings", "Customer portals", "Payments & enquiries", "Content management", "Integrations"],
    outcome: "A website that works as hard as you do.",
  },
  {
    number: "02", slug: "apps", title: "Mobile apps", kicker: "An experience worth coming back to.",
    description: "From a promising idea to a useful product, we design intuitive mobile experiences for customers, teams and communities.",
    features: ["Customer apps", "Internal team apps", "User accounts", "Notifications", "Subscriptions", "Progress tracking"],
    outcome: "Useful, intuitive products built for real people.",
  },
  {
    number: "03", slug: "software", title: "Custom software", kicker: "Your business, your way of working.",
    description: "When spreadsheets and disconnected tools stop being enough, we build software around your processes — not the other way round.",
    features: ["Operations systems", "Job management", "Customer management", "Dashboards", "Reporting", "Staff portals"],
    outcome: "Less friction. More visibility. Better control.",
  },
  {
    number: "04", slug: "automation", title: "Automation", kicker: "Make the repetitive work disappear.",
    description: "Connect the tools you already use, reduce unnecessary admin and keep information moving without constant manual intervention.",
    features: ["Workflow automation", "Automated emails", "System integrations", "Notifications", "Document generation", "Status updates"],
    outcome: "More time for work that actually matters.",
  },
] as const;

const problems = [
  { number: "01", title: "Too much manual admin", solution: "Automation", description: "Move information, trigger actions and keep systems updated without repeating the same tasks." },
  { number: "02", title: "Everything lives in spreadsheets", solution: "Custom software", description: "Bring jobs, customers, documents and reporting together in one place." },
  { number: "03", title: "Our website isn't doing enough", solution: "Websites & portals", description: "Add bookings, payments, enquiries, accounts or integrations to make your website more useful." },
  { number: "04", title: "I have an app or product idea", solution: "Digital products", description: "Take an idea from early planning through interface design and into a working application." },
  { number: "05", title: "Our systems don't talk to each other", solution: "Integration & automation", description: "Connect important tools so information moves between them without being entered twice." },
] as const;

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f4f0] text-[#151719] selection:bg-[#b9caff]">
      <Header />

      {/* INTRO */}
      <section className="relative isolate overflow-hidden border-b border-[#151719]/10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,#15171908_1px,transparent_1px)] [background-size:110px_110px]" />
        <div className="relative mx-auto max-w-[1520px] px-6 pb-20 pt-14 sm:px-10 sm:pb-24 sm:pt-20 lg:px-16 lg:pb-28 lg:pt-24">
          <Eyebrow left="01 / WHAT WE DO" right="PLK SYSTEMS / SERVICES" />
          <div className="mt-12 grid items-end gap-10 lg:mt-16 lg:grid-cols-[1.25fr_.75fr] lg:gap-16">
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[.22em] text-[#315cff]">Start with the problem. Not the technology.</p>
              <h1 className="text-[clamp(3.7rem,8.3vw,9.2rem)] font-semibold leading-[.86] tracking-[-.085em]">
                BUILT FOR<br /><span className="text-[#315cff]">WHAT&apos;S</span><br />NEXT<span className="text-[#315cff]">.</span>
              </h1>
            </div>
            <div className="max-w-[490px] lg:pb-3">
              <p className="border-l-2 border-[#315cff] pl-6 text-[17px] leading-[1.75] text-[#596167] sm:text-[20px]">
                Websites, mobile apps, custom software and automation — designed around the way your business actually works.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link href="/contact" className="group inline-flex items-center gap-8 rounded-full bg-[#151719] px-7 py-4 text-xs font-semibold text-white transition-colors hover:bg-[#315cff]">Discuss your project <span className="text-lg transition-transform group-hover:translate-x-1">↗</span></Link>
                <a href="#services" className="border-b border-[#151719]/40 pb-2 text-xs font-semibold transition-colors hover:border-[#315cff] hover:text-[#315cff]">Explore services ↓</a>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-[#151719]/15 pt-5 text-[10px] font-bold uppercase tracking-[.15em] text-[#72787c] lg:mt-20"><span>Independent digital studio / UK</span><span>Four disciplines. One joined-up approach.</span></div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-6 bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <Eyebrow left="02 / EXPERTISE" right="WHAT WE CAN BUILD" />
          <div className="mt-9 flex flex-wrap items-end justify-between gap-7">
            <h2 className="text-[clamp(3.2rem,6.3vw,7rem)] font-semibold leading-[.91] tracking-[-.075em]">ONE STUDIO.<br /><span className="text-[#9da3a7]">MORE POSSIBLE.</span></h2>
            <p className="max-w-[390px] text-[15px] leading-7 text-[#62696e]">Every business is different. The right solution might be one service — or several working together.</p>
          </div>
          <div className="mt-14 space-y-4 lg:mt-16">
            {services.map((service, index) => (
              <article key={service.number} id={service.slug} className="group scroll-mt-8 overflow-hidden rounded-[22px] border border-[#151719]/10 bg-[#f5f4f0] lg:rounded-[28px]">
                <div className="grid lg:grid-cols-[1fr_.9fr]">
                  <div className="flex flex-col p-7 sm:p-10 lg:p-12 xl:p-14">
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[.19em] text-[#737b80]"><span className="text-[#315cff]">{service.number}</span><span className="h-px w-8 bg-[#151719]/20"/><span>{service.kicker}</span></div>
                    <h3 className="mt-10 text-[clamp(2.8rem,5vw,5.7rem)] font-semibold leading-[.92] tracking-[-.07em]">{service.title}<span className="text-[#315cff]">.</span></h3>
                    <p className="mt-6 max-w-[550px] text-[15px] leading-8 text-[#61696e] sm:text-[17px]">{service.description}</p>
                    <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-[#151719]/15 pt-7 sm:gap-x-7">
                      {service.features.map((feature) => <div key={feature} className="flex items-start gap-2.5 text-[12px] leading-5 text-[#4d555a] sm:text-[13px]"><span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315cff]"/>{feature}</div>)}
                    </div>
                    <div className="mt-9 flex flex-wrap items-center justify-between gap-5 border-t border-[#151719]/15 pt-6">
                      <span className="max-w-[320px] text-[13px] font-semibold text-[#31383d]">{service.outcome}</span>
                      <Link href="/contact" className="inline-flex items-center gap-3 text-[12px] font-bold text-[#315cff] hover:underline">Talk about this service <span aria-hidden="true">↗</span></Link>
                    </div>
                  </div>
                  <div className={`relative flex min-h-[340px] items-center justify-center overflow-hidden p-7 sm:min-h-[440px] sm:p-12 lg:min-h-[530px] ${index === 0 ? "bg-[#e2e7e9]" : index === 1 ? "bg-[#dce3ff]" : index === 2 ? "bg-[#dce2df]" : "bg-[#dfe4f2]"}`}>
                    <ServiceArt type={service.slug} />
                    <span className="absolute bottom-5 right-6 text-[9px] font-bold uppercase tracking-[.17em] text-[#151719]/40">PLK / {service.number}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM FINDER — native disclosure, no JS required */}
      <section className="bg-[#10151b] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <Eyebrow left="03 / FIND YOUR STARTING POINT" right="YOU DON'T NEED A TECHNICAL BRIEF" dark />
          <div className="mt-9 grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <h2 className="text-[clamp(3.3rem,6.2vw,6.9rem)] font-semibold leading-[.9] tracking-[-.075em]">WHAT&apos;S<br /><span className="text-[#8fa5ff]">GETTING</span><br />IN THE WAY?</h2>
              <p className="mt-7 max-w-sm text-[15px] leading-8 text-[#a9b2be]">You don't have to know whether you need an app, a new website or custom software. Start with what's not working.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-3 border-b border-white/40 pb-2 text-sm font-semibold transition-colors hover:border-[#8fa5ff] hover:text-[#8fa5ff]">Tell us about your challenge ↗</Link>
            </div>
            <div className="divide-y divide-white/15 border-y border-white/15">
              {problems.map((problem, index) => (
                <details key={problem.number} open={index === 0} className="group py-1">
                  <summary className="flex cursor-pointer list-none items-center gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
                    <span className="w-8 shrink-0 text-[10px] font-bold text-[#8fa5ff]">{problem.number}</span>
                    <span className="flex-1 text-[16px] font-semibold tracking-[-.025em] sm:text-[20px]">{problem.title}</span>
                    <span aria-hidden="true" className="text-xl text-[#8fa5ff] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="pb-7 pl-12">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#8fa5ff]">Possible direction / {problem.solution}</p>
                    <p className="max-w-xl text-[14px] leading-7 text-[#a9b2be]">{problem.description}</p>
                    <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-[#8fa5ff]">Discuss this ↗</Link>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTED THINKING */}
      <section className="bg-[#f5f4f0] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <Eyebrow left="04 / THE BIGGER PICTURE" right="BETTER TOGETHER" />
          <div className="mt-9 grid items-end gap-9 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
            <h2 className="text-[clamp(3.4rem,6.8vw,7.5rem)] font-semibold leading-[.89] tracking-[-.075em]">IT DOESN&apos;T<br />HAVE TO BE<br /><span className="text-[#315cff]">JUST ONE.</span></h2>
            <div className="lg:pb-2"><p className="max-w-lg text-[16px] leading-8 text-[#61696e]">Your website can connect to your internal system. Your app can share the same data. Automation can keep everything moving. We think about how the pieces work together.</p><div className="mt-8 flex flex-wrap gap-2">{["Website", "App", "Software", "Automation"].map((item) => <span key={item} className="rounded-full border border-[#151719]/15 bg-white px-4 py-2.5 text-[11px] font-semibold">{item}</span>)}</div></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#315cff] py-20 text-white sm:py-28 lg:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-32 h-[550px] w-[550px] rounded-full border border-white/20 sm:h-[750px] sm:w-[750px]"/>
        <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <Eyebrow left="05 / NEXT STEPS" right="YOUR MOVE" dark />
          <h2 className="mt-10 text-[clamp(3.8rem,9vw,10rem)] font-semibold leading-[.84] tracking-[-.085em]">LET&apos;S BUILD<br />SOMETHING<br /><span className="text-[#bfd0ff]">BETTER.</span></h2>
          <div className="mt-12 flex flex-wrap items-end justify-between gap-8 border-t border-white/30 pt-8"><p className="max-w-md text-[16px] leading-8 text-white/85">Tell us what you want to improve, replace or create. We'll work out the right way to build it.</p><Link href="/contact" className="group inline-flex items-center justify-between gap-14 rounded-full bg-white px-7 py-5 text-sm font-bold text-[#151719] transition-colors hover:bg-[#e8edff]">Start a project <span className="text-xl transition-transform group-hover:translate-x-1">↗</span></Link></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Eyebrow({left,right,dark=false}:{left:string;right:string;dark?:boolean}) {
  return <div className={`flex flex-wrap items-center justify-between gap-3 border-t pt-5 text-[10px] font-bold uppercase tracking-[.18em] ${dark ? "border-white/25 text-white/70" : "border-[#151719]/15 text-[#747b80]"}`}><span>{left}</span><span>{right}</span></div>;
}

function Header() {
  return <header className="relative z-30 border-b border-[#151719]/10 bg-[#f5f4f0]"><div className="mx-auto flex h-[78px] max-w-[1520px] items-center justify-between px-6 sm:px-10 lg:px-16">
    <Link href="/" aria-label="PLK Systems home" className="group flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#151719] text-[14px] font-black tracking-[-.11em] text-white transition-transform duration-300 group-hover:-rotate-6">PLK</span><span className="text-[12px] font-bold uppercase tracking-[.18em]">Systems<span className="text-[#315cff]">.</span></span></Link>
    <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex"><Link className="nav-link" href="/services" aria-current="page">Services</Link><Link className="nav-link" href="/work">Work</Link><Link className="nav-link" href="/about">About</Link><Link className="nav-link" href="/lab">The Lab</Link></nav>
    <Link href="/contact" className="hidden items-center gap-5 rounded-full bg-[#151719] px-5 py-3.5 text-[11px] font-semibold text-white transition-colors hover:bg-[#315cff] md:inline-flex">Start a project <span aria-hidden="true">↗</span></Link>
    <details className="relative md:hidden"><summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[#151719]/20 px-4 py-2.5 text-xs font-semibold [&::-webkit-details-marker]:hidden">Menu <span aria-hidden="true">☰</span></summary><nav aria-label="Mobile navigation" className="absolute right-0 top-[calc(100%+12px)] flex w-56 flex-col gap-1 rounded-2xl border border-[#151719]/10 bg-white p-3 shadow-xl">{[["Services","/services"],["Work","/work"],["About","/about"],["The Lab","/lab"],["Contact","/contact"]].map(([label,href])=><Link key={href} href={href} className="rounded-lg px-4 py-3 text-sm font-medium hover:bg-[#f5f4f0]">{label}</Link>)}</nav></details>
  </div></header>;
}

function ServiceArt({type}:{type:"websites"|"apps"|"software"|"automation"}) {
  if(type==="websites") return <div className="relative w-full max-w-[530px] rotate-[-3deg] overflow-hidden rounded-2xl border border-white/50 bg-[#111923] shadow-[0_28px_65px_rgba(20,28,38,.28)] transition-transform duration-500 hover:rotate-0"><div className="flex h-10 items-center justify-between border-b border-white/10 px-4"><span className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-[#ff7777]"/><i className="h-2 w-2 rounded-full bg-[#ffce75]"/><i className="h-2 w-2 rounded-full bg-[#76d9b1]"/></span><span className="text-[9px] font-semibold text-white/50">yourbusiness.co.uk</span><span className="w-10"/></div><div className="p-7 sm:p-10"><div className="flex items-center justify-between text-white"><span className="text-[13px] font-black tracking-tight">YOUR BRAND<span className="text-[#8da6ff]">.</span></span><span className="text-[9px] text-white/50">Menu &nbsp; ☰</span></div><p className="mt-14 text-[9px] font-bold uppercase tracking-[.2em] text-[#9bb2ff]">A better digital experience</p><p className="mt-4 max-w-[340px] text-[clamp(1.8rem,3vw,3rem)] font-semibold leading-[1.05] tracking-[-.06em] text-white">Made to make an impression.</p><div className="mt-6 inline-block rounded-full bg-[#315cff] px-5 py-3 text-[10px] font-semibold text-white">Get started ↗</div><div className="mt-12 grid grid-cols-3 gap-2">{["Discover","Connect","Grow"].map(x=><div key={x} className="rounded-lg border border-white/10 bg-white/5 px-3 py-5 text-[9px] text-white/70">↗<br/><span className="mt-3 block">{x}</span></div>)}</div></div></div>;
  if(type==="apps") return <div className="relative flex w-full items-center justify-center"><div aria-hidden="true" className="absolute h-[330px] w-[330px] rounded-full border border-[#315cff]/20"/><div aria-hidden="true" className="absolute h-[420px] w-[420px] rounded-full border border-[#315cff]/10"/><div className="relative z-10 w-[225px] rotate-[-7deg] rounded-[35px] border-[7px] border-[#202525] bg-[#141c1a] px-5 pb-7 pt-4 shadow-[0_35px_65px_rgba(20,28,38,.32)] transition-transform duration-500 hover:rotate-0"><div className="mx-auto mb-7 h-1 w-14 rounded-full bg-white/25"/><p className="text-[12px] font-bold tracking-[.2em] text-white">ASCENT</p><p className="mt-10 text-[10px] text-white/50">Your progress this week</p><p className="mt-2 text-5xl font-semibold tracking-[-.06em] text-white">05<span className="text-xl text-[#b7d5ad]">/07</span></p><div className="mt-7 flex h-24 items-end gap-2">{[42,65,54,92,69,80,100].map((n,i)=><div key={i} className="flex-1 rounded-t bg-[#b5d8aa]" style={{height:`${n}%`}}/>)}</div><div className="mt-7 rounded-lg bg-white/10 px-3 py-4 text-[10px] text-white">Next session <span className="float-right">↗</span></div></div><div className="absolute right-[3%] top-[13%] hidden w-[150px] rotate-[10deg] rounded-[25px] border-[5px] border-[#202525] bg-[#19211f] p-4 opacity-45 shadow-xl sm:block"><div className="h-1 w-10 rounded-full bg-white/20"/><div className="mt-12 h-5 w-16 rounded bg-white/30"/><div className="mt-4 h-24 rounded-lg bg-[#b5d8aa]/20"/><div className="mt-5 h-7 rounded-lg bg-white/10"/></div></div>;
  if(type==="software") return <div className="w-full max-w-[550px] rotate-[2deg] overflow-hidden rounded-xl bg-[#121b25] shadow-[0_35px_70px_rgba(20,28,38,.28)] transition-transform duration-500 hover:rotate-0"><div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><span className="text-[12px] font-bold text-white">HORIZON <span className="text-[#8ba7ff]">/ OPS</span></span><span className="text-[9px] text-[#8ee1b2]">● ACTIVE</span></div><div className="grid grid-cols-[60px_1fr] sm:grid-cols-[95px_1fr]"><div className="space-y-5 border-r border-white/10 p-4">{[0,1,2,3,4].map(n=><div key={n} className={`h-2 rounded-full ${n===0?"w-full bg-[#6b8cff]":"w-3/4 bg-white/15"}`}/>)}</div><div className="min-w-0 p-5 sm:p-7"><p className="text-[9px] font-semibold uppercase tracking-[.15em] text-white/45">Operations overview</p><h4 className="mt-2 text-xl font-semibold text-white sm:text-2xl">Everything in one place.</h4><div className="mt-6 grid grid-cols-3 gap-2">{[["42","Active jobs"],["08","In review"],["96%","On track"]].map(([v,k])=><div key={k} className="rounded-lg border border-white/10 bg-white/5 p-3"><span className="block text-[clamp(12px,2vw,22px)] font-bold text-white">{v}</span><span className="text-[8px] text-white/45">{k}</span></div>)}</div><div className="mt-4 space-y-2">{["Customer onboarding","Scheduled delivery","Project review"].map((x,i)=><div key={x} className="flex items-center justify-between gap-2 rounded-md bg-white/5 px-3 py-3 text-[9px] text-white/70"><span className="truncate">{x}</span><span className={`rounded-full px-2 py-1 ${i===0?"bg-[#315cff]/30 text-[#aebeff]":"bg-white/10"}`}>{i===0?"In progress":"On track"}</span></div>)}</div></div></div></div>;
  return <div className="relative w-full max-w-[520px] rounded-2xl bg-[#121b25] p-7 shadow-[0_30px_70px_rgba(20,28,38,.26)] sm:p-10"><div className="flex items-center justify-between border-b border-white/10 pb-5"><span className="text-[12px] font-bold text-white">CONNECTED WORKFLOW</span><span className="text-[9px] text-[#91e4b9]">● READY</span></div><div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4"><div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center"><span className="text-[9px] font-semibold text-white/60">ENQUIRY</span><p className="mt-3 text-lg text-white">01</p></div><span className="text-xl text-[#8da7ff]">→</span><div className="rounded-lg border border-[#315cff]/50 bg-[#315cff]/20 p-4 text-center"><span className="text-[9px] font-semibold text-white/60">CUSTOMER</span><p className="mt-3 text-lg text-white">02</p></div></div><div className="mx-auto my-5 h-10 w-px bg-[#8da7ff]/60"/><div className="mx-auto w-fit rounded-xl border border-[#8da7ff]/50 bg-[#315cff] px-7 py-5 text-center"><p className="text-[10px] font-bold uppercase tracking-[.15em] text-white">Automation running</p><p className="mt-2 text-[9px] text-white/70">No manual hand-off needed</p></div><div className="mx-auto my-5 h-10 w-px bg-[#8da7ff]/60"/><div className="grid grid-cols-2 gap-3">{["INVOICE GENERATED","EMAIL SENT"].map(x=><div key={x} className="rounded-lg border border-white/10 bg-white/5 p-4 text-center text-[9px] font-semibold text-white/75">✓ &nbsp; {x}</div>)}</div></div>;
}

function Footer(){return <footer className="bg-[#10151b] text-white"><div className="mx-auto max-w-[1520px] px-6 pb-8 pt-16 sm:px-10 lg:px-16"><div className="flex flex-col justify-between gap-12 border-b border-white/15 pb-14 md:flex-row"><div><Link href="/" className="text-3xl font-black tracking-[-.08em]">PLK<span className="text-[#7994ff]">.</span></Link><p className="mt-5 max-w-xs text-sm leading-7 text-[#a1aab4]">Digital solutions built around your business.</p></div><div className="grid grid-cols-2 gap-x-14 gap-y-4 text-sm sm:gap-x-24">{[["Services","/services"],["Work","/work"],["About","/about"],["Contact","/contact"],["The Lab","/lab"],["Privacy","/privacy"]].map(([label,href])=><Link key={href} className="footer-link" href={href}>{label}</Link>)}</div></div><div className="flex flex-wrap items-center justify-between gap-4 pt-7 text-[10px] text-[#8f9aa6]"><span>© {new Date().getFullYear()} PLK Systems. All rights reserved.</span><span>Made with purpose. Built to last.</span></div></div></footer>}
