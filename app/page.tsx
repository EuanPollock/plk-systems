import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050A13] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6">
        <header className="flex items-center justify-between py-6">
          <Image
  src="/plk-logo.png"
  alt="PLK Systems"
  width={180}
  height={75}
  priority
  className="h-14 w-auto object-contain"
/>

          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#work" className="hover:text-white">
              Our Work
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center py-24 text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            PLK Systems
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            Software built around
            <span className="block">your business.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            We design and build modern software that helps small businesses
            replace spreadsheets, paperwork and repetitive admin.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              Tell us your problem →
            </a>

            <a
              href="#services"
              className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-slate-500"
            >
              See what we build
            </a>
          </div>
        </section>
        <section
  id="problem"
  className="border-t border-white/10 py-24 sm:py-32"
>
  <div className="mx-auto max-w-6xl">
    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
      The problem
    </p>

    <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
      Your business shouldn&apos;t run on workarounds.
    </h2>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
      Spreadsheets, paperwork and disconnected tools can get a business
      started. They shouldn&apos;t hold it back.
    </p>

    <div className="mt-16 grid gap-5 md:grid-cols-3">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <span className="text-sm font-medium text-blue-500">01</span>

        <h3 className="mt-6 text-xl font-semibold">
          Repetitive admin
        </h3>

        <p className="mt-3 leading-7 text-slate-400">
          Hours spent copying information, calculating figures and completing
          the same tasks repeatedly.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <span className="text-sm font-medium text-blue-500">02</span>

        <h3 className="mt-6 text-xl font-semibold">
          Disconnected information
        </h3>

        <p className="mt-3 leading-7 text-slate-400">
          Important information spread between spreadsheets, inboxes,
          paperwork and different systems.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <span className="text-sm font-medium text-blue-500">03</span>

        <h3 className="mt-6 text-xl font-semibold">
          Processes that don&apos;t scale
        </h3>

        <p className="mt-3 leading-7 text-slate-400">
          What worked when the business was smaller becomes increasingly
          difficult as customers, staff and workload grow.
        </p>
      </div>
    </div>
  </div>
</section>
<section
  id="services"
  className="border-t border-white/10 py-24 sm:py-32"
>
  <div className="mx-auto max-w-6xl">
    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
      What we do
    </p>

    <h2 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
      We turn messy processes
      <span className="block">into simple software.</span>
    </h2>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
      We design systems around the way your business actually works — making
      everyday tasks simpler, faster and easier to manage.
    </p>

    <div className="mt-16 grid gap-5 md:grid-cols-2">
      
      <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-blue-500/40 hover:bg-white/[0.05]">
        <span className="text-sm font-medium text-blue-500">01</span>

        <h3 className="mt-8 text-2xl font-semibold">
          Business Systems
        </h3>

        <p className="mt-4 max-w-md leading-7 text-slate-400">
          Custom software designed around your existing processes, giving your
          team one simple place to manage the work that matters.
        </p>
      </div>

      <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-blue-500/40 hover:bg-white/[0.05]">
        <span className="text-sm font-medium text-blue-500">02</span>

        <h3 className="mt-8 text-2xl font-semibold">
          Workflow Automation
        </h3>

        <p className="mt-4 max-w-md leading-7 text-slate-400">
          Reduce repetitive administration, manual calculations and duplicate
          data entry by letting software handle the routine work.
        </p>
      </div>

      <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-blue-500/40 hover:bg-white/[0.05]">
        <span className="text-sm font-medium text-blue-500">03</span>

        <h3 className="mt-8 text-2xl font-semibold">
          Portals & Dashboards
        </h3>

        <p className="mt-4 max-w-md leading-7 text-slate-400">
          Bring important information together with secure dashboards and
          portals for your staff, customers or both.
        </p>
      </div>

      <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-blue-500/40 hover:bg-white/[0.05]">
        <span className="text-sm font-medium text-blue-500">04</span>

        <h3 className="mt-8 text-2xl font-semibold">
          Booking & Management
        </h3>

        <p className="mt-4 max-w-md leading-7 text-slate-400">
          Manage bookings, jobs, customers, memberships and everyday
          operations through one purpose-built system.
        </p>
      </div>

    </div>
  </div>
</section>
<section
  id="work"
  className="border-t border-white/10 py-24 sm:py-32"
>
  <div className="mx-auto max-w-6xl">
    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
      Built by PLK
    </p>

    <h2 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
      Software we&apos;ve built.
    </h2>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
      A look at some of the systems designed and developed by PLK Systems.
    </p>

    <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
      
      <div className="grid gap-12 p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
        
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
              Premier Picks
            </span>

            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              Live Project
            </span>
          </div>

          <h3 className="mt-6 text-3xl font-semibold tracking-tight">
            A complete football prediction platform.
          </h3>

          <p className="mt-5 leading-7 text-slate-400">
            A custom-built season-long prediction platform where players can
            create accounts, predict Premier League matches and compete on a
            live leaderboard.
          </p>

          <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-1">
            <p>✓ Secure user accounts</p>
            <p>✓ Match predictions</p>
            <p>✓ Automated scoring</p>
            <p>✓ Live leaderboard</p>
            <p>✓ Admin controls</p>
            <p>✓ Mobile-friendly design</p>
          </div>

          <div className="mt-10">
            <span className="inline-flex rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-300">
              PLK Systems Project
            </span>
          </div>
        </div>

        <div className="relative min-h-[380px] lg:min-h-[520px]">
          
          <div className="absolute left-0 top-0 w-[96%] ... overflow-hidden rounded-xl border border-white/10 bg-[#050A13] shadow-2xl">
            <Image
              src="/premier-picks-dashboard.png"
              alt="Premier Picks prediction dashboard"
              width={1600}
              height={900}
              className="h-auto w-full"
            />
          </div>

          <div className="absolute bottom-0 right-0 w-[54%] ... overflow-hidden rounded-xl border border-white/10 bg-[#050A13] shadow-2xl">
            <Image
              src="/premier-picks-login.png"
              alt="Premier Picks login screen"
              width={1600}
              height={900}
              className="h-auto w-full"
            />
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
<section
  id="process"
  className="border-t border-white/10 py-24 sm:py-32"
>
  <div className="mx-auto max-w-6xl">
    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
      How it works
    </p>

    <h2 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
      From problem to working software.
    </h2>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
      You don&apos;t need to know what software you need. Show us what&apos;s
      slowing the business down and we&apos;ll work out a simpler way to do it.
    </p>

    <div className="mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
      <div className="relative">
        <div className="mb-6 flex items-center">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/10 text-sm font-semibold text-blue-400">
            01
          </span>

          <div className="ml-4 hidden h-px flex-1 bg-white/10 md:block" />
        </div>

        <h3 className="text-xl font-semibold">
          Tell us the problem
        </h3>

        <p className="mt-3 leading-7 text-slate-400">
          Show us the spreadsheets, paperwork, repetitive tasks or disconnected
          systems that are slowing your business down.
        </p>
      </div>

      <div className="relative">
        <div className="mb-6 flex items-center">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/10 text-sm font-semibold text-blue-400">
            02
          </span>

          <div className="ml-4 hidden h-px flex-1 bg-white/10 md:block" />
        </div>

        <h3 className="text-xl font-semibold">
          We design the solution
        </h3>

        <p className="mt-3 leading-7 text-slate-400">
          We map out a simpler way of working and design software around your
          actual process.
        </p>
      </div>

      <div className="relative">
        <div className="mb-6 flex items-center">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/10 text-sm font-semibold text-blue-400">
            03
          </span>

          <div className="ml-4 hidden h-px flex-1 bg-white/10 md:block" />
        </div>

        <h3 className="text-xl font-semibold">
          We build &amp; launch
        </h3>

        <p className="mt-3 leading-7 text-slate-400">
          Your system is built, tested and deployed ready for your team to start
          using.
        </p>
      </div>

      <div className="relative">
        <div className="mb-6 flex items-center">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/10 text-sm font-semibold text-blue-400">
            04
          </span>
        </div>

        <h3 className="text-xl font-semibold">
          We keep improving it
        </h3>

        <p className="mt-3 leading-7 text-slate-400">
          As your business changes, the software can evolve with it through
          support, updates and new features.
        </p>
      </div>
    </div>
  </div>
</section>
<section
  id="contact"
  className="border-t border-white/10 py-24 sm:py-32"
>
  <div className="mx-auto max-w-6xl">
    <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
      
      <div className="flex flex-col justify-center">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
          Start a conversation
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Got a process that could work better?
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
          Tell us what&apos;s taking too much time, creating unnecessary admin
          or simply not working the way it should. We&apos;ll help you work out
          whether software can make it simpler.
        </p>

        <p className="mt-8 text-sm leading-6 text-slate-500">
          No technical knowledge needed. Just tell us how your business
          currently works.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <form className="space-y-6">
          
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Your name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-[#08111f] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/70"
              />
            </div>

            <div>
              <label
                htmlFor="business"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Business name
              </label>

              <input
                id="business"
                name="business"
                type="text"
                placeholder="Business name"
                className="w-full rounded-xl border border-white/10 bg-[#08111f] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/70"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Email address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@business.co.uk"
              className="w-full rounded-xl border border-white/10 bg-[#08111f] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/70"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Phone number
              <span className="ml-2 text-slate-600">Optional</span>
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="07..."
              className="w-full rounded-xl border border-white/10 bg-[#08111f] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/70"
            />
          </div>

          <div>
            <label
              htmlFor="problem"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              What&apos;s the problem?
            </label>

            <textarea
              id="problem"
              name="problem"
              rows={6}
              placeholder="Tell us what you're currently doing, what's taking too much time, or what you'd like to improve..."
              className="w-full resize-none rounded-xl border border-white/10 bg-[#08111f] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/70"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-6 py-4 font-medium text-white transition hover:bg-blue-500"
          >
            Tell us your problem →
          </button>
        </form>
      </div>

    </div>
  </div>
</section>
<footer className="border-t border-white/10">
  <div className="mx-auto max-w-6xl px-6 py-10">
    <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
      
      <div className="flex items-center gap-4">
        <Image
          src="/plk-logo.png"
          alt="PLK Systems"
          width={110}
          height={45}
          className="h-auto w-[90px]"
        />

        <div className="h-8 w-px bg-white/10" />

        <p className="text-sm text-slate-500">
          Software built around your business.
        </p>
      </div>

      <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
        <a href="#services" className="transition hover:text-white">
          Services
        </a>

        <a href="#work" className="transition hover:text-white">
          Our Work
        </a>

        <a href="#process" className="transition hover:text-white">
          How It Works
        </a>

        <a href="#contact" className="transition hover:text-white">
          Contact
        </a>
      </div>
    </div>

    <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 PLK Systems. All rights reserved.</p>

      <p>
        Built by PLK Systems
      </p>
    </div>
  </div>
</footer>
      </div>
    </main>
  );
}
