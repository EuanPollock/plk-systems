
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
export default function Home() {
  const [submitting, setSubmitting] = useState(false);
const [success, setSuccess] = useState(false);
const [errorMessage, setErrorMessage] = useState("");
async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  setSubmitting(true);
  setSuccess(false);
  setErrorMessage("");

  const form = event.currentTarget;
  const formData = new FormData(form);

  const enquiry = {
    name: String(formData.get("name") || ""),
    business_name: String(formData.get("business") || ""),
    email: String(formData.get("email") || ""),
    phone: String(formData.get("phone") || ""),
    problem: String(formData.get("problem") || ""),
  };

  // Save the enquiry to Supabase
  const { error } = await supabase.from("enquiries").insert({
    name: enquiry.name,
    business_name: enquiry.business_name || null,
    email: enquiry.email,
    phone: enquiry.phone || null,
    problem: enquiry.problem,
  });

  if (error) {
    console.error("Supabase error:", error);
    setErrorMessage("Something went wrong. Please try again.");
    setSubmitting(false);
    return;
  }

  // Send the email notification
  try {
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enquiry),
    });

    if (!response.ok) {
      console.error("Email notification failed");
    }
  } catch (emailError) {
    console.error("Email notification error:", emailError);
  }

  form.reset();
  setSuccess(true);
  setSubmitting(false);
}
  return (
  <main className="min-h-screen bg-[#050A13] text-white">
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6">

      {/* HEADER */}
      <header className="flex items-center justify-between py-4 sm:py-6">
        <Image
          src="/plk-logo.png"
          alt="PLK Systems"
          width={180}
          height={75}
          priority
          className="h-16 w-auto object-contain sm:h-20"
        />

        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
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
        </nav>
      </header>

      {/* HERO */}
      <section className="flex flex-1 flex-col items-center justify-start pb-12 pt-20 text-center sm:justify-center sm:py-20 md:py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500 sm:mb-5">
          PLK Systems
        </p>

        <h1 className="max-w-5xl text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          Digital solutions built around
          <span className="block">your business.</span>
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:mt-8 sm:text-lg sm:leading-8">
          We design modern websites, build custom business systems and automate
          repetitive processes — helping businesses work smarter and present
          themselves better online.
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col gap-4 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row">
          <a
            href="#contact"
            className="rounded-xl bg-blue-600 px-6 py-4 font-medium text-white transition hover:bg-blue-500 sm:py-3"
          >
            Discuss your project →
          </a>

          <a
            href="#services"
            className="rounded-xl border border-slate-700 px-6 py-4 font-medium text-slate-200 transition hover:border-slate-500 sm:py-3"
          >
            Explore our services
          </a>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section
        id="services"
        className="border-t border-white/10 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            What we do
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Websites. Systems.
            <span className="block">Automation.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            From a professional online presence to software that runs your
            day-to-day operations, we build practical digital solutions around
            what your business actually needs.
          </p>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">

            {/* WEBSITE */}
            <div className="group rounded-3xl border border-blue-500/30 bg-blue-500/[0.05] p-7 transition duration-300 hover:border-blue-500/60 sm:p-8">
              <span className="text-sm font-medium text-blue-500">
                01
              </span>

              <h3 className="mt-6 text-2xl font-semibold sm:mt-8">
                Website Design & Development
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Modern, fast and responsive websites designed to represent your
                business professionally and turn visitors into enquiries.
              </p>

              <div className="mt-7 space-y-3 text-sm text-slate-300">
                <p>✓ Business websites</p>
                <p>✓ Website redesigns</p>
                <p>✓ Mobile-first development</p>
                <p>✓ Enquiry & contact forms</p>
                <p>✓ Hosting & deployment</p>
              </div>
            </div>

            {/* SYSTEMS */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-blue-500/40 hover:bg-white/[0.05] sm:p-8">
              <span className="text-sm font-medium text-blue-500">
                02
              </span>

              <h3 className="mt-6 text-2xl font-semibold sm:mt-8">
                Custom Business Systems
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Purpose-built software that replaces spreadsheets, paperwork
                and disconnected tools with one simpler way of working.
              </p>

              <div className="mt-7 space-y-3 text-sm text-slate-300">
                <p>✓ Management systems</p>
                <p>✓ Dashboards & portals</p>
                <p>✓ Booking systems</p>
                <p>✓ Customer & staff tools</p>
                <p>✓ Secure user accounts</p>
              </div>
            </div>

            {/* AUTOMATION */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-blue-500/40 hover:bg-white/[0.05] sm:p-8">
              <span className="text-sm font-medium text-blue-500">
                03
              </span>

              <h3 className="mt-6 text-2xl font-semibold sm:mt-8">
                Workflow Automation
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Reduce repetitive administration, manual calculations and
                duplicate data entry by letting software handle routine work.
              </p>

              <div className="mt-7 space-y-3 text-sm text-slate-300">
                <p>✓ Automated emails</p>
                <p>✓ Data processing</p>
                <p>✓ Repetitive admin</p>
                <p>✓ Calculations & reporting</p>
                <p>✓ Connected workflows</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section
        id="problem"
        className="border-t border-white/10 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Why PLK Systems
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Your digital setup should
            <span className="block">help your business move forward.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Whether your website no longer represents the business or your
            internal processes are becoming difficult to manage, we help turn
            the problem into something simpler.
          </p>

          <div className="mt-16 grid gap-4 sm:gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <span className="text-sm font-medium text-blue-500">
                01
              </span>

              <h3 className="mt-6 text-xl font-semibold">
                Outdated online presence
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                A slow, dated or difficult-to-use website can undermine an
                otherwise professional business.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <span className="text-sm font-medium text-blue-500">
                02
              </span>

              <h3 className="mt-6 text-xl font-semibold">
                Repetitive admin
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Hours spent copying information, calculating figures, sending
                updates and completing the same tasks repeatedly.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <span className="text-sm font-medium text-blue-500">
                03
              </span>

              <h3 className="mt-6 text-xl font-semibold">
                Disconnected processes
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Important information spread between spreadsheets, inboxes,
                paperwork and systems that no longer scale.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WEBSITE FEATURE */}
      <section className="border-t border-white/10 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                Website design & development
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Your website should work as hard as your business does.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                We build clean, professional websites that look great on every
                device, communicate what you do clearly and make it easy for
                potential customers to take the next step.
              </p>

              <div className="mt-8 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                <p>✓ Responsive design</p>
                <p>✓ Fast performance</p>
                <p>✓ Clear customer journeys</p>
                <p>✓ Contact & enquiry systems</p>
                <p>✓ Custom development</p>
                <p>✓ Launch & ongoing support</p>
              </div>

              <a
                href="#contact"
                className="mt-10 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
              >
                Discuss your website →
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
              <div className="rounded-2xl border border-white/10 bg-[#08111f] p-6 sm:p-8">
                <p className="text-sm font-medium text-blue-400">
                  Built for your business
                </p>

                <h3 className="mt-5 text-3xl font-semibold tracking-tight">
                  Not another generic template.
                </h3>

                <p className="mt-5 leading-7 text-slate-400">
                  Your website is designed around your business, customers and
                  goals — with the flexibility to add booking, customer portals,
                  automation or other functionality as you grow.
                </p>

                <div className="mt-8 border-t border-white/10 pt-8">
                  <p className="text-sm text-slate-500">
                    Website today.
                  </p>

                  <p className="mt-2 text-xl font-semibold">
                    A complete digital system tomorrow.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        className="border-t border-white/10 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Built by PLK
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Work we&apos;ve built.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Real digital products, designed, developed and deployed by PLK
            Systems.
          </p>

          <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <div className="grid gap-12 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">

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
                  A custom-built web platform with secure user accounts,
                  automated scoring, live league standings and full
                  administration controls.
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
                    Built by PLK Systems
                  </span>
                </div>
              </div>

              <div className="relative min-h-[250px] sm:min-h-[320px] lg:min-h-[520px]">
                <div className="absolute left-0 top-0 w-[96%] overflow-hidden rounded-xl border border-white/10 bg-[#050A13] shadow-2xl">
                  <Image
                    src="/premier-picks-dashboard.png"
                    alt="Premier Picks prediction dashboard"
                    width={1600}
                    height={900}
                    className="h-auto w-full"
                  />
                </div>

                <div className="absolute bottom-4 right-0 w-[54%] overflow-hidden rounded-xl border border-white/10 bg-[#050A13] shadow-2xl">
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

      {/* PROCESS */}
      <section
        id="process"
        className="border-t border-white/10 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            How it works
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            From idea to launch.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            You don&apos;t need to know what technology you need. Tell us what
            you want to improve, build or achieve and we&apos;ll work out the
            right solution.
          </p>

          <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-4 md:gap-6">

            <div className="relative">
              <div className="mb-4 flex items-center md:mb-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/10 text-sm font-semibold text-blue-400">
                  01
                </span>

                <div className="ml-4 hidden h-px flex-1 bg-white/10 md:block" />
              </div>

              <h3 className="text-xl font-semibold">
                Tell us what you need
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                A new website, a business problem, an inefficient process or
                simply an idea you want to explore.
              </p>
            </div>

            <div className="relative">
              <div className="mb-4 flex items-center md:mb-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/10 text-sm font-semibold text-blue-400">
                  02
                </span>

                <div className="ml-4 hidden h-px flex-1 bg-white/10 md:block" />
              </div>

              <h3 className="text-xl font-semibold">
                We design the solution
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                We work out the best approach and define exactly what needs to
                be designed and built.
              </p>
            </div>

            <div className="relative">
              <div className="mb-4 flex items-center md:mb-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/10 text-sm font-semibold text-blue-400">
                  03
                </span>

                <div className="ml-4 hidden h-px flex-1 bg-white/10 md:block" />
              </div>

              <h3 className="text-xl font-semibold">
                We build & launch
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Your website or system is developed, tested and deployed ready
                for real-world use.
              </p>
            </div>

            <div className="relative">
              <div className="mb-4 flex items-center md:mb-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/10 text-sm font-semibold text-blue-400">
                  04
                </span>
              </div>

              <h3 className="text-xl font-semibold">
                We keep supporting it
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                As your business changes, we can continue with hosting,
                support, updates and new functionality.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/10 py-20 sm:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

            <div className="flex flex-col justify-center">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                Start a conversation
              </p>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                Got something you&apos;d like to improve?
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                Whether you need a new website, custom software or simply have
                a process that could work better, tell us about it and
                we&apos;ll work out the next step.
              </p>

              <p className="mt-6 text-sm leading-6 text-slate-500 sm:mt-8">
                No technical knowledge needed. Just tell us what you&apos;re
                trying to achieve.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">

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
                      required
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
                    required
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
                    <span className="ml-2 text-slate-600">
                      Optional
                    </span>
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
                    Tell us about your project
                  </label>

                  <textarea
                    id="problem"
                    name="problem"
                    rows={6}
                    required
                    placeholder="Tell us what you'd like to build, improve or make simpler..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#08111f] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/70"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-blue-600 px-6 py-4 font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting
                    ? "Sending..."
                    : "Discuss your project →"}
                </button>

                {success && (
                  <p className="text-sm text-emerald-400">
                    Thanks — your enquiry has been sent successfully.
                  </p>
                )}

                {errorMessage && (
                  <p className="text-sm text-red-400">
                    {errorMessage}
                  </p>
                )}

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl py-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">

            <div>
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
                  Digital solutions built around your business.
                </p>
              </div>

              <a
                href="mailto:contact@plksystems.co.uk"
                className="mt-5 inline-block text-sm text-slate-400 transition hover:text-white"
              >
                contact@plksystems.co.uk
              </a>
            </div>

            <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
              <a
                href="#services"
                className="transition hover:text-white"
              >
                Services
              </a>

              <a
                href="#work"
                className="transition hover:text-white"
              >
                Our Work
              </a>

              <a
                href="#process"
                className="transition hover:text-white"
              >
                How It Works
              </a>

              <a
                href="#contact"
                className="transition hover:text-white"
              >
                Contact
              </a>

              <a
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-3 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © 2026 PLK Systems. All rights reserved.
              </p>

              <p>
                Built by PLK Systems
              </p>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-700">
              PLK Systems is a trading name operated in the United Kingdom.
            </p>
          </div>
        </div>
            </footer>

    </div>
  </main>
);
}