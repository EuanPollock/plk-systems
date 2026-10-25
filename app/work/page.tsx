import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    name: "Horizon",
    category: "CUSTOM BUSINESS SOFTWARE",
    heading: "A clearer way to run the day-to-day.",
    description: "A connected operations platform bringing customers, jobs, scheduling, quotes, invoices and reporting into one considered workspace.",
    href: "/work/horizon",
    features: ["Operations", "Scheduling", "Reporting"],
  },
  {
    number: "02",
    name: "Premier Picks",
    category: "INTERACTIVE WEB APPLICATION",
    heading: "Every match. More to play for.",
    description: "A football prediction experience that brings fixtures, score predictions, points and league standings together.",
    href: "/work/premier-picks",
    features: ["Predictions", "Live standings", "Gameweeks"],
  },
  {
    number: "03",
    name: "Ascent",
    category: "FITNESS APP CONCEPT",
    heading: "Progress with purpose.",
    description: "A mobile-first fitness experience exploring how training, consistency and personal progress can feel effortless to track.",
    href: "/work/ascent",
    features: ["Training", "Progress", "Mobile experience"],
  },
] as const;

export default function WorkPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f4f0] text-[#151719] selection:bg-[#b9caff]">
      <header className="relative z-30 border-b border-[#151719]/10 bg-[#f5f4f0]">
        <div className="mx-auto flex h-[78px] max-w-[1520px] items-center justify-between px-6 sm:px-10 lg:px-16">
          <Link href="/" aria-label="PLK Systems home" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#151719] text-[14px] font-black tracking-[-0.11em] text-white transition-transform duration-300 group-hover:-rotate-6">PLK</span>
            <span className="text-[12px] font-bold uppercase tracking-[0.18em]">Systems<span className="text-[#315cff]">.</span></span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
            <Link className="text-sm text-[#5d6468] transition-colors hover:text-[#315cff]" href="/services">Services</Link>
            <Link className="text-sm font-semibold text-[#151719]" aria-current="page" href="/work">Work</Link>
            <Link className="text-sm text-[#5d6468] transition-colors hover:text-[#315cff]" href="/about">About</Link>
            <Link className="text-sm text-[#5d6468] transition-colors hover:text-[#315cff]" href="/lab">The Lab</Link>
          </nav>
          <Link href="/contact" className="hidden items-center gap-5 rounded-full bg-[#151719] px-5 py-3.5 text-[11px] font-semibold text-white transition-colors hover:bg-[#315cff] md:inline-flex">Start a project <span aria-hidden="true">↗</span></Link>
          <details className="relative md:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[#151719]/20 px-4 py-2.5 text-xs font-semibold [&::-webkit-details-marker]:hidden">Menu <span aria-hidden="true">☰</span></summary>
            <nav aria-label="Mobile navigation" className="absolute right-0 top-[calc(100%+12px)] flex w-56 flex-col gap-1 rounded-2xl border border-[#151719]/10 bg-white p-3 shadow-xl">
              {[["Services", "/services"], ["Work", "/work"], ["About", "/about"], ["The Lab", "/lab"], ["Contact", "/contact"]].map(([label, href]) => <Link key={href} href={href} className="rounded-lg px-4 py-3 text-sm font-medium hover:bg-[#f5f4f0]">{label}</Link>)}
            </nav>
          </details>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#f5f4f0]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,#15171908_1px,transparent_1px)] [background-size:110px_110px]" />
        <div className="relative mx-auto max-w-[1520px] px-6 pb-20 pt-16 sm:px-10 sm:pb-24 sm:pt-24 lg:px-16 lg:pb-28 lg:pt-28">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#151719]/15 pt-5 text-[10px] font-bold uppercase tracking-[.19em] text-[#6d7479]"><span className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#315cff]" /> 02 / Selected work</span><span>Digital products / Thoughtfully built</span></div>
          <div className="mt-14 grid items-end gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
            <div><p className="mb-6 text-[11px] font-semibold uppercase tracking-[.23em] text-[#315cff]">Proof in the making.</p><h1 className="text-[clamp(5rem,13vw,13rem)] font-semibold leading-[.77] tracking-[-.09em]">THE<br /><span className="text-[#315cff]">WORK.</span></h1></div>
            <div className="max-w-lg lg:pb-2"><p className="border-l-2 border-[#315cff] pl-6 text-[17px] leading-[1.75] text-[#555d62] sm:text-[20px]">Different challenges. Different ideas. One approach: make the complex feel simple and build digital experiences people actually want to use.</p><div className="mt-10 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em] text-[#747b80]"><span className="h-px w-8 bg-[#315cff]" /> Explore three projects ↓</div></div>
          </div>
        </div>
      </section>

      <section className="bg-[#10151b] py-20 text-white sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <SectionIndex number="01 / FEATURED PROJECT" title="HORIZON" dark />
          <Link href={projects[0].href} className="group mt-10 block">
            <div className="relative isolate overflow-hidden rounded-[20px] bg-[#dbe4e8] px-5 pb-0 pt-10 sm:rounded-[28px] sm:px-12 sm:pt-14 lg:px-20 lg:pt-20">
              <div aria-hidden="true" className="absolute -right-20 -top-28 h-[380px] w-[380px] rounded-full border border-[#617b8b]/20 sm:h-[650px] sm:w-[650px]" />
              <div className="relative mb-10 flex flex-wrap items-end justify-between gap-4 text-[#1b2934]"><div><span className="text-[10px] font-bold uppercase tracking-[.19em] text-[#617381]">OPERATIONS / CONNECTED WORKSPACE</span><h2 className="mt-3 text-[clamp(3.7rem,9vw,9rem)] font-semibold leading-[.85] tracking-[-.085em]">HORIZON<span className="text-[#315cff]">.</span></h2></div><span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1b2934]/20 text-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#1b2934] group-hover:text-white">↗</span></div>
              <div className="relative mx-auto max-w-[1130px] translate-y-3 overflow-hidden rounded-t-[16px] border-[5px] border-b-0 border-[#18242f] bg-[#18242f] shadow-[0_25px_65px_rgba(24,36,47,.3)] transition-transform duration-500 group-hover:-translate-y-1 sm:rounded-t-[22px] sm:border-[9px] sm:border-b-0">
                <div className="flex h-8 items-center justify-between border-b border-white/10 px-4 sm:h-10"><div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-[#f08080]"/><span className="h-2 w-2 rounded-full bg-[#f0c777]"/><span className="h-2 w-2 rounded-full bg-[#74cba0]"/></div><span className="text-[9px] font-bold uppercase tracking-[.15em] text-white/60">Horizon / Dashboard</span><span className="w-8" /></div>
                <div className="relative aspect-[16/9] bg-[#263542]"><Image src="/horizon/horizon-dashboard.png" alt="Horizon operations dashboard" fill priority sizes="(max-width: 768px) 100vw, 1100px" className="object-cover object-top" /></div>
              </div>
            </div>
            <div className="mt-8 grid gap-7 border-b border-white/15 pb-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#8fa2b2]">{projects[0].category}</p><h3 className="mt-3 text-3xl font-semibold tracking-[-.055em] sm:text-4xl">{projects[0].heading}</h3></div><div className="lg:pt-2"><p className="max-w-xl text-[15px] leading-8 text-[#aab5c0]">{projects[0].description}</p><TagList tags={projects[0].features} dark /><span className="mt-7 inline-flex items-center gap-3 text-xs font-semibold text-white transition-colors group-hover:text-[#9cb2ff]">Explore the case study <span aria-hidden="true">↗</span></span></div></div>
          </Link>
        </div>
      </section>

      <section className="bg-[#10151b] pb-20 text-white sm:pb-28 lg:pb-32"><div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16"><SectionIndex number="02 / WEB APPLICATION" title="PREMIER PICKS" dark /><Link href={projects[1].href} className="group mt-10 block"><div className="relative isolate overflow-hidden rounded-[20px] bg-[#cad6fb] px-5 pb-0 pt-12 sm:rounded-[28px] sm:px-12 sm:pt-16 lg:px-16 lg:pt-20"><div aria-hidden="true" className="absolute -right-20 top-0 h-[440px] w-[440px] rounded-full bg-[#7d9eff]/35 blur-[100px]"/><div className="relative mb-10 flex flex-wrap items-end justify-between gap-4 text-[#16234c]"><div><span className="text-[10px] font-bold uppercase tracking-[.2em] text-[#465c9e]">THE BEAUTIFUL GAME / REIMAGINED</span><h2 className="mt-3 text-[clamp(3.2rem,8vw,8rem)] font-semibold leading-[.86] tracking-[-.08em]">PREMIER<br/>PICKS<span className="text-[#315cff]">.</span></h2></div><span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#16234c]/20 text-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#16234c] group-hover:text-white">↗</span></div><div className="relative mx-auto max-w-[1000px] translate-y-3 overflow-hidden rounded-t-[16px] border-[5px] border-b-0 border-[#142246] bg-[#142246] shadow-[0_25px_65px_rgba(15,31,80,.28)] transition-transform duration-500 group-hover:-translate-y-1 sm:rounded-t-[22px] sm:border-[9px] sm:border-b-0"><div className="flex h-8 items-center justify-between border-b border-white/10 px-4 sm:h-10"><div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-white/30"/><span className="h-2 w-2 rounded-full bg-white/20"/><span className="h-2 w-2 rounded-full bg-white/10"/></div><span className="text-[9px] font-bold uppercase tracking-[.15em] text-white/60">Premier Picks / Dashboard</span><span className="w-8" /></div><div className="relative aspect-[16/9] bg-[#142246]"><Image src="/premier-picks-dashboard.png" alt="Premier Picks football prediction dashboard" fill sizes="(max-width: 768px) 100vw, 1000px" className="object-cover object-top" /></div></div></div><div className="mt-8 grid gap-7 border-b border-white/15 pb-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#8fa2b2]">{projects[1].category}</p><h3 className="mt-3 text-3xl font-semibold tracking-[-.055em] sm:text-4xl">{projects[1].heading}</h3></div><div className="lg:pt-2"><p className="max-w-xl text-[15px] leading-8 text-[#aab5c0]">{projects[1].description}</p><TagList tags={projects[1].features} dark/><span className="mt-7 inline-flex items-center gap-3 text-xs font-semibold text-white transition-colors group-hover:text-[#9cb2ff]">Explore the case study <span aria-hidden="true">↗</span></span></div></div></Link></div></section>

      <section className="bg-[#f5f4f0] py-20 sm:py-28 lg:py-32"><div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16"><SectionIndex number="03 / MOBILE EXPERIENCE" title="ASCENT"/><Link href={projects[2].href} className="group mt-10 block"><div className="relative isolate overflow-hidden rounded-[20px] bg-[#dce0d8] px-5 pt-12 sm:rounded-[28px] sm:px-12 sm:pt-16 lg:px-16 lg:pt-20"><div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:radial-gradient(#55635a_1px,transparent_1px)] [background-size:22px_22px]"/><div className="relative flex flex-wrap items-end justify-between gap-4 text-[#1b2520]"><div><span className="text-[10px] font-bold uppercase tracking-[.2em] text-[#627268]">TRAINING / CONSISTENCY / PROGRESS</span><h2 className="mt-3 text-[clamp(4.2rem,10vw,10rem)] font-semibold leading-[.85] tracking-[-.085em]">ASCENT<span className="text-[#315cff]">.</span></h2></div><span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1b2520]/20 text-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#1b2520] group-hover:text-white">↗</span></div><div className="relative mx-auto mt-12 flex h-[350px] max-w-[900px] items-start justify-center sm:h-[490px] lg:h-[580px]"><Phone src="/ascent-progress.png" alt="Ascent progress screen" className="absolute left-[4%] top-[13%] w-[34%] max-w-[235px] -rotate-[10deg] sm:left-[12%]"/><Phone src="/ascent-workout.png" alt="Ascent workout screen" className="absolute right-[4%] top-[13%] w-[34%] max-w-[235px] rotate-[10deg] sm:right-[12%]"/><Phone src="/ascent-today.png" alt="Ascent today screen" className="absolute left-1/2 top-0 z-10 w-[39%] max-w-[275px] -translate-x-1/2"/></div></div><div className="mt-8 grid gap-7 border-b border-[#151719]/15 pb-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#687177]">{projects[2].category}</p><h3 className="mt-3 text-3xl font-semibold tracking-[-.055em] sm:text-4xl">{projects[2].heading}</h3></div><div className="lg:pt-2"><p className="max-w-xl text-[15px] leading-8 text-[#5d656a]">{projects[2].description}</p><TagList tags={projects[2].features}/><span className="mt-7 inline-flex items-center gap-3 text-xs font-semibold transition-colors group-hover:text-[#315cff]">Explore the case study <span aria-hidden="true">↗</span></span></div></div></Link></div></section>

      <section className="relative overflow-hidden bg-[#315cff] py-24 text-white sm:py-32 lg:py-36"><div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-48 h-[550px] w-[550px] rounded-full border border-white/20 sm:h-[800px] sm:w-[800px]"/><div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16"><SectionIndex number="04 / WHAT'S NEXT" title="YOUR PROJECT" dark/><h2 className="mt-12 max-w-[1200px] text-[clamp(4rem,10vw,10rem)] font-semibold leading-[.84] tracking-[-.085em]">YOUR IDEA.<br/>OUR NEXT<br/>CHALLENGE<span className="text-[#b6c7ff]">.</span></h2><div className="mt-14 flex flex-wrap items-end justify-between gap-10 border-t border-white/30 pt-8"><p className="max-w-md text-base leading-8 text-white/85">Have something you want to create, simplify or improve? Tell us what you're thinking. We'll work out the right way to build it.</p><Link href="/contact" className="group inline-flex min-w-[210px] items-center justify-between gap-12 rounded-full bg-white px-7 py-5 text-sm font-bold text-[#151719] transition-all hover:-translate-y-1 hover:bg-[#e7edff]">Start a project <span className="text-xl transition-transform group-hover:translate-x-1">↗</span></Link></div></div></section>

      <footer className="bg-[#10151b] text-white"><div className="mx-auto max-w-[1520px] px-6 pb-8 pt-16 sm:px-10 lg:px-16"><div className="flex flex-col justify-between gap-12 border-b border-white/15 pb-14 md:flex-row"><div><Link href="/" className="text-3xl font-black tracking-[-.08em]">PLK<span className="text-[#7994ff]">.</span></Link><p className="mt-5 max-w-xs text-sm leading-7 text-[#a1aab4]">Digital solutions built around your business.</p></div><div className="grid grid-cols-2 gap-x-14 gap-y-4 text-sm sm:gap-x-24">{[["Services","/services"],["Work","/work"],["About","/about"],["Contact","/contact"],["The Lab","/lab"],["Privacy","/privacy"]].map(([label,href])=><Link key={href} className="text-[#a1aab4] transition-colors hover:text-white" href={href}>{label}</Link>)}</div></div><div className="flex flex-wrap items-center justify-between gap-4 pt-7 text-[10px] text-[#8f9aa6]"><span>© {new Date().getFullYear()} PLK Systems. All rights reserved.</span><span>Made with purpose. Built to last.</span></div></div></footer>
    </main>
  );
}

function SectionIndex({number,title,dark=false}:{number:string;title:string;dark?:boolean}) {return <div className={`flex items-center justify-between gap-4 border-t pt-5 text-[10px] font-bold uppercase tracking-[.2em] ${dark?"border-white/20 text-white/65":"border-[#151719]/15 text-[#72787c]"}`}><span>{number}</span><span>{title}</span></div>}
function TagList({tags,dark=false}:{tags:readonly string[];dark?:boolean}) {return <div className="mt-6 flex flex-wrap gap-2">{tags.map(tag=><span key={tag} className={`rounded-full border px-3 py-1.5 text-[10px] font-medium ${dark?"border-white/20 text-[#b5bfcb]":"border-[#151719]/20 text-[#596166]"}`}>{tag}</span>)}</div>}
function Phone({src,alt,className}:{src:string;alt:string;className:string}) {return <div className={`${className} overflow-hidden rounded-[22px] border-[5px] border-[#1c2320] bg-[#1c2320] shadow-[0_30px_70px_rgba(15,25,20,.28)] transition-transform duration-500 group-hover:-translate-y-2 sm:rounded-[34px] sm:border-[7px]`}><Image src={src} alt={alt} width={450} height={900} sizes="(max-width: 640px) 40vw, 280px" className="h-auto w-full rounded-[17px] sm:rounded-[27px]" /></div>}
