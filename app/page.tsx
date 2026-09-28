"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { supabase } from "@/lib/supabase";

import Hero from "@/components/home/hero";
import ConnectedSystem from "@/components/home/connected-system";
import Capabilities from "@/components/home/capabilities";
import Statement from "@/components/home/statement";
import HorizonShowcase from "@/components/home/horizon-showcase";
import PremierPicksShowcase from "@/components/home/premier-picks-showcase";
import AscentShowcase from "@/components/home/ascent-showcase";
import SystemBuilder from "@/components/home/system-builder";
import Process from "@/components/home/process";

export default function Home() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [projectMessage, setProjectMessage] = useState("");

  // ================================================================
  // RECEIVE SYSTEM BUILDER SELECTIONS
  // ================================================================

  useEffect(() => {
    const handleSystemBuilder = (event: Event) => {
      const customEvent = event as CustomEvent<{
        message?: string;
        buildType?: string;
        features?: string[];
        audience?: string;
      }>;

      const detail = customEvent.detail;

      if (!detail) return;

      const lines = [
        detail.buildType
          ? `Project type: ${detail.buildType}`
          : "",
        detail.features?.length
          ? `Features: ${detail.features.join(", ")}`
          : "",
        detail.audience
          ? `Users: ${detail.audience}`
          : "",
      ].filter(Boolean);

      setProjectMessage(
        `${lines.join("\n")}\n\nTell us anything else about the project...`
      );

      setSuccess(false);
      setErrorMessage("");
    };

    window.addEventListener(
      "plk-system-builder",
      handleSystemBuilder as EventListener
    );

    return () => {
      window.removeEventListener(
        "plk-system-builder",
        handleSystemBuilder as EventListener
      );
    };
  }, []);

  // ================================================================
  // ENQUIRY SUBMISSION
  // ================================================================

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSubmitting(true);
    setSuccess(false);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const enquiry = {
      name: String(formData.get("name") || ""),
      business_name: String(
        formData.get("business") || ""
      ),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      problem: String(formData.get("problem") || ""),
    };

    // Save to Supabase
    const { error } = await supabase
      .from("enquiries")
      .insert({
        name: enquiry.name,
        business_name:
          enquiry.business_name || null,
        email: enquiry.email,
        phone: enquiry.phone || null,
        problem: enquiry.problem,
      });

    if (error) {
      console.error("Supabase error:", error);

      setErrorMessage(
        "Something went wrong. Please try again."
      );

      setSubmitting(false);

      return;
    }

    // Send email notification
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(enquiry),
      });

      if (!response.ok) {
        console.error(
          "Email notification failed"
        );
      }
    } catch (emailError) {
      console.error(
        "Email notification error:",
        emailError
      );
    }

    form.reset();

    setProjectMessage("");
    setSuccess(true);
    setSubmitting(false);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050a13] text-white">

      {/* ========================================================== */}
      {/* HEADER                                                     */}
      {/* ========================================================== */}

      <header className="relative z-50 border-b border-white/[0.06] bg-[#050a13]/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4 sm:px-10 lg:px-16">

          {/* LOGO */}

          <a
            href="#"
            aria-label="PLK Systems home"
            className="relative z-10"
          >
            <Image
              src="/plk-logo.png"
              alt="PLK Systems"
              width={180}
              height={75}
              priority
              className="h-14 w-auto object-contain sm:h-16"
            />
          </a>

          {/* NAVIGATION */}

          <nav className="hidden items-center gap-8 md:flex">

            <a
              href="#services"
              className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500 transition hover:text-white"
            >
              Services
            </a>

            <a
              href="#work"
              className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500 transition hover:text-white"
            >
              Work
            </a>

            <a
              href="#process"
              className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500 transition hover:text-white"
            >
              Process
            </a>

            <a
              href="#contact"
              className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500 transition hover:text-white"
            >
              Contact
            </a>

          </nav>

          {/* HEADER CTA */}

          <a
            href="#contact"
            className="group hidden items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.04] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white/20 hover:bg-white/[0.07] sm:flex"
          >
            Start a project

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </header>

      {/* ========================================================== */}
      {/* NEW HOMEPAGE                                               */}
      {/* ========================================================== */}

      <div id="services">
        <Hero />
      </div>

      <ConnectedSystem />

      <Capabilities />

      <Statement />

      <div id="work">
        <HorizonShowcase />
      </div>

      <PremierPicksShowcase />

      <AscentShowcase />

      <SystemBuilder />

      <div id="process">
        <Process />
      </div>

      {/* ========================================================== */}
      {/* FINAL CONTACT EXPERIENCE                                   */}
      {/* ========================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden bg-[#050a13]"
      >

        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0">

          <div className="plk-grid absolute inset-0 opacity-[0.035]" />

          <div className="absolute left-[-20%] top-[10%] h-[900px] w-[900px] rounded-full bg-blue-600/[0.05] blur-[220px]" />

          <div className="absolute bottom-[-20%] right-[-15%] h-[800px] w-[800px] rounded-full bg-cyan-400/[0.025] blur-[220px]" />

        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-32 pt-32 sm:px-10 lg:px-16 lg:pb-44 lg:pt-44">

          {/* TOP LABEL */}

          <div className="flex items-center justify-between border-t border-white/[0.08] pt-7">

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-blue-400" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.26em] text-blue-400">
                Start a project
              </span>

            </div>

            <span className="hidden text-[7px] font-medium uppercase tracking-[0.2em] text-slate-700 sm:block">
              PLK Systems
            </span>

          </div>

          {/* ====================================================== */}
          {/* GIANT CTA                                              */}
          {/* ====================================================== */}

          <div className="mt-20">

            <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-600">
              Have an idea?
            </p>

            <h2 className="max-w-[1300px] text-[4.7rem] font-semibold leading-[0.78] tracking-[-0.075em] text-white sm:text-[7rem] lg:text-[10rem] xl:text-[12rem]">

              LET&apos;S

              <span className="block text-slate-700">
                BUILD IT.
              </span>

            </h2>

          </div>

          {/* ====================================================== */}
          {/* CONTACT GRID                                           */}
          {/* ====================================================== */}

          <div className="mt-24 grid gap-16 border-t border-white/[0.08] pt-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

            {/* LEFT */}

            <div>

              <h3 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-4xl">
                Start with the
                <span className="block text-slate-600">
                  problem.
                </span>
              </h3>

              <p className="mt-7 max-w-md text-sm leading-7 text-slate-400">
                You don&apos;t need a technical specification.
                Tell us what you&apos;re trying to build,
                improve or make simpler.
              </p>

              {/* NOT SURE */}

              <div className="mt-12 border-t border-white/[0.07] pt-8">

                <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                  Not sure what you need?
                </p>

                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
                  That&apos;s fine. Explain what isn&apos;t
                  working and we&apos;ll help work out the
                  right solution.
                </p>

              </div>

              {/* EMAIL */}

              <div className="mt-10 border-t border-white/[0.07] pt-8">

                <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                  Prefer email?
                </p>

                <a
                  href="mailto:contact@plksystems.co.uk"
                  className="group mt-4 inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-white"
                >
                  contact@plksystems.co.uk

                  <span className="text-blue-400 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

              </div>

            </div>

            {/* ==================================================== */}
            {/* FORM                                                  */}
            {/* ==================================================== */}

            <div>

              <div className="mb-8 flex items-center justify-between">

                <div>

                  <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-blue-400">
                    Project enquiry
                  </p>

                  <p className="mt-2 text-sm text-slate-600">
                    Tell us a little about what you&apos;re
                    looking to do.
                  </p>

                </div>

                <div className="hidden items-center gap-2 sm:flex">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Enquiries open
                  </span>

                </div>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-8"
              >

                {/* NAME + BUSINESS */}

                <div className="grid gap-8 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-3 block text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-600"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full border-0 border-b border-white/[0.12] bg-transparent px-0 py-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-blue-400"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="business"
                      className="mb-3 block text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-600"
                    >
                      Business
                    </label>

                    <input
                      id="business"
                      name="business"
                      type="text"
                      placeholder="Business name"
                      className="w-full border-0 border-b border-white/[0.12] bg-transparent px-0 py-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-blue-400"
                    />

                  </div>

                </div>

                {/* EMAIL + PHONE */}

                <div className="grid gap-8 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-3 block text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-600"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@business.co.uk"
                      className="w-full border-0 border-b border-white/[0.12] bg-transparent px-0 py-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-blue-400"
                    />

                  </div>

                  <div>

                    <div className="mb-3 flex items-center justify-between">

                      <label
                        htmlFor="phone"
                        className="text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-600"
                      >
                        Phone
                      </label>

                      <span className="text-[7px] uppercase tracking-[0.16em] text-slate-800">
                        Optional
                      </span>

                    </div>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="07..."
                      className="w-full border-0 border-b border-white/[0.12] bg-transparent px-0 py-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-blue-400"
                    />

                  </div>

                </div>

                {/* PROJECT */}

                <div>

                  <label
                    htmlFor="problem"
                    className="mb-3 block text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-600"
                  >
                    Tell us about your project
                  </label>

                  <textarea
                    id="problem"
                    name="problem"
                    rows={7}
                    required
                    value={projectMessage}
                    onChange={(event) =>
                      setProjectMessage(
                        event.target.value
                      )
                    }
                    placeholder="What would you like to build, improve or make simpler?"
                    className="w-full resize-none border-0 border-b border-white/[0.12] bg-transparent px-0 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-slate-700 focus:border-blue-400"
                  />

                </div>

                {/* SYSTEM BUILDER NOTICE */}

                {projectMessage.startsWith(
                  "Project type:"
                ) && (
                  <div className="flex items-start gap-3 rounded-xl border border-blue-400/[0.12] bg-blue-400/[0.035] px-4 py-4">

                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                    <div>

                      <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-blue-400">
                        System configuration added
                      </p>

                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        Your selections from Build Your
                        System have been added to the
                        enquiry.
                      </p>

                    </div>

                  </div>
                )}

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex w-full items-center justify-between bg-white px-6 py-5 text-left transition duration-300 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-60 sm:px-7"
                >

                  <div>

                    <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#050a13]">
                      {submitting
                        ? "Sending enquiry..."
                        : "Send enquiry"}
                    </span>

                    {!submitting && (
                      <span className="mt-1 block text-[8px] text-slate-500">
                        Let&apos;s talk about your project
                      </span>
                    )}

                  </div>

                  {!submitting && (
                    <span className="text-xl text-[#050a13] transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  )}

                  {submitting && (
                    <span className="h-4 w-4 animate-spin rounded-full border border-[#050a13]/20 border-t-[#050a13]" />
                  )}

                </button>

                {/* SUCCESS */}

                {success && (
                  <div className="flex items-start gap-3 border-t border-emerald-400/20 pt-5">

                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />

                    <div>

                      <p className="text-sm font-medium text-emerald-400">
                        Enquiry sent.
                      </p>

                      <p className="mt-1 text-xs text-slate-600">
                        Thanks — we&apos;ll be in touch.
                      </p>

                    </div>

                  </div>
                )}

                {/* ERROR */}

                {errorMessage && (
                  <div className="flex items-start gap-3 border-t border-red-400/20 pt-5">

                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />

                    <p className="text-sm text-red-400">
                      {errorMessage}
                    </p>

                  </div>
                )}

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================== */}
      {/* FOOTER                                                     */}
      {/* ========================================================== */}

      <footer className="border-t border-white/[0.07] bg-[#050a13]">

        <div className="mx-auto max-w-[1500px] px-6 py-12 sm:px-10 lg:px-16">

          <div className="flex flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">

            {/* BRAND */}

            <div>

              <Image
                src="/plk-logo.png"
                alt="PLK Systems"
                width={130}
                height={55}
                className="h-auto w-[105px]"
              />

              <p className="mt-5 max-w-sm text-xs leading-6 text-slate-600">
                Websites, applications and systems built
                around your business.
              </p>

            </div>

            {/* LINKS */}

            <div className="flex flex-wrap gap-x-7 gap-y-4">

              <a
                href="#services"
                className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:text-white"
              >
                Services
              </a>

              <a
                href="#work"
                className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:text-white"
              >
                Work
              </a>

              <a
                href="#process"
                className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:text-white"
              >
                Process
              </a>

              <a
                href="#contact"
                className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:text-white"
              >
                Contact
              </a>

              <a
                href="/privacy"
                className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:text-white"
              >
                Privacy
              </a>

            </div>

          </div>

          {/* BOTTOM */}

          <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.06] pt-6 text-[8px] uppercase tracking-[0.16em] text-slate-700 sm:flex-row sm:items-center sm:justify-between">

            <span>
              © {new Date().getFullYear()} PLK Systems
            </span>

            <span>
              Software built around your business.
            </span>

          </div>

        </div>

      </footer>

    </main>
  );
}