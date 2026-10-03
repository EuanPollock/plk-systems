"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

import SiteHeader from "@/components/site-header";
import { supabase } from "@/lib/supabase";

const projectTypes = [
  "Website",
  "Mobile App",
  "Custom Software",
  "Automation",
  "Not sure yet",
];

const reveal = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

export default function ContactPage() {
  const [projectType, setProjectType] = useState("Not sure yet");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setSubmitting(true);
    setSuccess(false);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const projectDetails = String(
      formData.get("problem") || "",
    );

    const enquiry = {
      name: String(formData.get("name") || ""),
      business_name: String(
        formData.get("business") || "",
      ),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      problem: `Project type: ${projectType}\n\n${projectDetails}`,
    };

    // Save to Supabase
    const { error } = await supabase
      .from("enquiries")
      .insert({
        name: enquiry.name,
        business_name: enquiry.business_name || null,
        email: enquiry.email,
        phone: enquiry.phone || null,
        problem: enquiry.problem,
      });

    if (error) {
      console.error("Supabase error:", error);

      setErrorMessage(
        "Something went wrong. Please try again.",
      );

      setSubmitting(false);
      return;
    }

    // Send existing email notification
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
      console.error(
        "Email notification error:",
        emailError,
      );
    }

    form.reset();
    setProjectType("Not sure yet");
    setSuccess(true);
    setSubmitting(false);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050a13] text-white">
      <SiteHeader />

      {/* ====================================================== */}
      {/* HERO                                                   */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden pt-[76px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="plk-grid absolute inset-0 opacity-[0.035]" />

          <div className="absolute left-[-20%] top-[5%] h-[900px] w-[900px] rounded-full bg-blue-600/[0.06] blur-[230px]" />

          <div className="absolute right-[-20%] top-[25%] h-[700px] w-[700px] rounded-full bg-cyan-500/[0.035] blur-[220px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-24 pt-16 sm:px-10 sm:pb-32 lg:px-16 lg:pb-40 lg:pt-20">
          {/* top */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between border-t border-white/[0.07] pt-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.26em] text-blue-400">
                Start a project
              </span>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                Enquiries open
              </span>
            </div>
          </motion.div>

          {/* title */}

          <div className="pb-20 pt-20 lg:pb-28 lg:pt-24">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-7 text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-600"
            >
              Have something in mind?
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 55 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[4.7rem] font-semibold leading-[0.78] tracking-[-0.075em] sm:text-[7rem] lg:text-[10rem] xl:text-[11.5rem]"
            >
              LET&apos;S
              <span className="block text-slate-700">
                BUILD IT.
              </span>
            </motion.h1>
          </div>

          {/* intro */}

          <motion.div
            {...reveal}
            className="grid gap-12 border-t border-white/[0.07] pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"
          >
            <div>
              <p className="max-w-md text-xl font-medium leading-8 tracking-[-0.025em] text-white sm:text-2xl sm:leading-9">
                Start with what you&apos;re trying to solve.
              </p>
            </div>

            <div className="max-w-xl">
              <p className="text-sm leading-8 text-slate-500 sm:text-base">
                You don&apos;t need a technical specification,
                wireframes or even to know exactly what needs
                building. Tell us about the idea, the problem or
                the process you want to improve.
              </p>

              <p className="mt-5 text-sm leading-8 text-slate-500 sm:text-base">
                We&apos;ll work out the technology from there.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* ENQUIRY                                                */}
      {/* ====================================================== */}

      <section className="relative border-t border-white/[0.06] bg-[#080d15]">
        <div className="pointer-events-none absolute inset-0">
          <div className="plk-grid absolute inset-0 opacity-[0.02]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
          <div className="grid gap-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-28">
            {/* ================================================ */}
            {/* LEFT                                             */}
            {/* ================================================ */}

            <motion.aside {...reveal}>
              <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                Project enquiry
              </p>

              <h2 className="mt-7 text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-5xl">
                TELL US
                <span className="block text-slate-700">
                  WHAT&apos;S GOING ON.
                </span>
              </h2>

              <p className="mt-8 max-w-md text-sm leading-7 text-slate-500">
                The more context you can give us, the easier it is
                to understand where PLK Systems might be able to
                help.
              </p>

              {/* process */}

              <div className="mt-12 border-t border-white/[0.07]">
                {[
                  [
                    "01",
                    "Tell us about it",
                    "Give us the problem, idea or opportunity.",
                  ],
                  [
                    "02",
                    "We review it",
                    "We'll look at what you're trying to achieve.",
                  ],
                  [
                    "03",
                    "We talk",
                    "If it looks like a fit, we'll discuss the next steps.",
                  ],
                ].map(([number, title, copy]) => (
                  <div
                    key={number}
                    className="grid grid-cols-[38px_1fr] gap-4 border-b border-white/[0.07] py-6"
                  >
                    <span className="font-mono text-[8px] text-blue-400">
                      {number}
                    </span>

                    <div>
                      <p className="text-xs font-medium text-slate-300">
                        {title}
                      </p>

                      <p className="mt-2 text-xs leading-5 text-slate-600">
                        {copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* email */}

              <div className="mt-12">
                <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-slate-700">
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
            </motion.aside>

            {/* ================================================ */}
            {/* FORM                                             */}
            {/* ================================================ */}

            <motion.div {...reveal}>
              {success ? (
                /* ============================================ */
                /* SUCCESS                                      */
                /* ============================================ */

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[650px] flex-col justify-center border border-white/[0.08] bg-[#050a13] p-8 sm:p-12 lg:p-16"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.05]">
                    <span className="text-xl text-emerald-400">
                      ✓
                    </span>
                  </div>

                  <p className="mt-10 text-[8px] font-semibold uppercase tracking-[0.24em] text-emerald-400">
                    Enquiry received
                  </p>

                  <h2 className="mt-6 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-6xl">
                    THANKS.
                    <span className="block text-slate-700">
                      WE&apos;VE GOT IT.
                    </span>
                  </h2>

                  <p className="mt-8 max-w-md text-sm leading-7 text-slate-500">
                    Your enquiry has been sent to PLK Systems.
                    We&apos;ll review what you&apos;ve shared and
                    get back to you.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setSuccess(false)}
                      className="border border-white/[0.12] px-5 py-4 text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-400 transition hover:border-white/30 hover:text-white"
                    >
                      Send another enquiry
                    </button>

                    <Link
                      href="/work"
                      className="px-5 py-4 text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:text-white"
                    >
                      View our work →
                    </Link>
                  </div>
                </motion.div>
              ) : (
                /* ============================================ */
                /* FORM                                         */
                /* ============================================ */

                <form
                  onSubmit={handleSubmit}
                  className="border border-white/[0.08] bg-[#050a13] p-6 sm:p-10 lg:p-12"
                >
                  <div className="flex items-start justify-between border-b border-white/[0.07] pb-8">
                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-blue-400">
                        Project details
                      </p>

                      <p className="mt-2 text-xs text-slate-600">
                        A few details to get things started.
                      </p>
                    </div>

                    <span className="font-mono text-[7px] text-slate-800">
                      PLK / ENQ
                    </span>
                  </div>

                  {/* PROJECT TYPE */}

                  <div className="py-10">
                    <label className="text-[8px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                      What are you thinking about?
                    </label>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {projectTypes.map((type) => {
                        const selected =
                          projectType === type;

                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() =>
                              setProjectType(type)
                            }
                            className={`border px-4 py-3 text-[8px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                              selected
                                ? "border-blue-400/40 bg-blue-400/[0.08] text-blue-300"
                                : "border-white/[0.08] text-slate-600 hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* NAME / BUSINESS */}

                  <div className="grid gap-8 border-t border-white/[0.07] py-9 sm:grid-cols-2">
                    <Field
                      id="name"
                      label="Your name"
                      placeholder="Your name"
                      required
                    />

                    <Field
                      id="business"
                      label="Business"
                      placeholder="Business name"
                      optional
                    />
                  </div>

                  {/* EMAIL / PHONE */}

                  <div className="grid gap-8 border-t border-white/[0.07] py-9 sm:grid-cols-2">
                    <Field
                      id="email"
                      label="Email"
                      type="email"
                      placeholder="you@business.co.uk"
                      required
                    />

                    <Field
                      id="phone"
                      label="Phone"
                      type="tel"
                      placeholder="07..."
                      optional
                    />
                  </div>

                  {/* MESSAGE */}

                  <div className="border-t border-white/[0.07] py-9">
                    <div className="mb-3 flex items-center justify-between">
                      <label
                        htmlFor="problem"
                        className="text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-600"
                      >
                        Tell us about your project
                      </label>

                      <span className="text-[7px] uppercase tracking-[0.16em] text-slate-800">
                        Required
                      </span>
                    </div>

                    <textarea
                      id="problem"
                      name="problem"
                      rows={7}
                      required
                      placeholder="What would you like to build, improve or make simpler?"
                      className="w-full resize-none border-0 border-b border-white/[0.12] bg-transparent px-0 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-slate-700 focus:border-blue-400"
                    />
                  </div>

                  {/* ERROR */}

                  {errorMessage && (
                    <div className="mb-6 flex items-start gap-3 border border-red-400/15 bg-red-400/[0.025] p-4">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />

                      <p className="text-xs leading-5 text-red-400">
                        {errorMessage}
                      </p>
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

                    {!submitting ? (
                      <span className="text-xl text-[#050a13] transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    ) : (
                      <span className="h-4 w-4 animate-spin rounded-full border border-[#050a13]/20 border-t-[#050a13]" />
                    )}
                  </button>

                  <p className="mt-5 text-[7px] leading-5 text-slate-700">
                    By sending this enquiry you&apos;re providing
                    the information above so PLK Systems can
                    respond to your request.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CLOSING                                                */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden bg-[#eef0f2] text-[#0a0d12]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
          >
            <h2 className="text-[4rem] font-semibold leading-[0.83] tracking-[-0.07em] sm:text-[5.5rem] lg:text-[7rem]">
              NO TECHNICAL
              <span className="block text-black/20">
                LANGUAGE
              </span>
              <span className="block">REQUIRED.</span>
            </h2>

            <p className="max-w-md text-base leading-8 text-black/50 lg:justify-self-end">
              Explain it the way you&apos;d explain it to
              somebody in the business. Understanding the problem
              is our job.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* FOOTER                                                 */}
      {/* ====================================================== */}

      <footer className="border-t border-white/[0.07] bg-[#050a13]">
        <div className="mx-auto max-w-[1500px] px-6 py-12 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Image
                src="/plk-logo.png"
                alt="PLK Systems"
                width={130}
                height={55}
                className="h-auto w-[105px]"
              />

              <p className="mt-5 max-w-sm text-xs leading-6 text-slate-600">
                Websites, applications and systems built around
                your business.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-7 gap-y-4">
              <Link
                href="/services"
                className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/work"
                className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:text-white"
              >
                Work
              </Link>

              <Link
                href="/about"
                className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white"
              >
                Contact
              </Link>

              <Link
                href="/privacy"
                className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:text-white"
              >
                Privacy
              </Link>
            </div>
          </div>

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

function Field({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
  optional = false,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-600"
        >
          {label}
        </label>

        {optional && (
          <span className="text-[7px] uppercase tracking-[0.16em] text-slate-800">
            Optional
          </span>
        )}
      </div>

      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border-0 border-b border-white/[0.12] bg-transparent px-0 py-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-blue-400"
      />
    </div>
  );
}