"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

const types = ["Website", "Mobile App", "Custom Software", "Automation", "Not sure yet"];
const steps = [
  ["01", "Tell us the idea", "A few details about what you want to build or improve."],
  ["02", "We review it", "We look at your goals and the best way to approach them."],
  ["03", "We talk next steps", "A direct conversation about what makes sense for your project."],
];

function Field({ name, label, type = "text", optional = false, placeholder }: { name: string; label: string; type?: string; optional?: boolean; placeholder: string }) {
  return <label className="block min-w-0">
    <span className="mb-3 flex items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#4f5360]">{label}{optional && <span className="font-normal text-[#92949b]">Optional</span>}</span>
    <input id={name} name={name} type={type} required={!optional} placeholder={placeholder} autoComplete={name === "name" ? "name" : name === "email" ? "email" : name === "phone" ? "tel" : "organization"} className="w-full rounded-none border-0 border-b border-[#cdd0d4] bg-transparent px-0 py-3 text-[15px] text-[#111319] outline-none transition placeholder:text-[#a1a4ab] focus:border-[#2458ff]" />
  </label>;
}

export default function ContactPage() {
  const [projectType, setProjectType] = useState("Not sure yet");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    const enquiry = {
      name: String(formData.get("name") || "").trim(),
      business_name: String(formData.get("business") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      problem: `Project type: ${projectType}\n\n${String(formData.get("problem") || "").trim()}`,
    };
    setSubmitting(true);
    setErrorMessage("");
    try {
      const { error } = await supabase.from("enquiries").insert({
        name: enquiry.name,
        business_name: enquiry.business_name || null,
        email: enquiry.email,
        phone: enquiry.phone || null,
        problem: enquiry.problem,
      });
      if (error) throw error;
      // Preserve the existing notification endpoint; a notification failure does not undo a saved enquiry.
      try {
        const response = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(enquiry) });
        if (!response.ok) console.error("Enquiry saved, but email notification failed.");
      } catch (notificationError) {
        console.error("Enquiry saved, but email notification failed:", notificationError);
      }
      form.reset();
      setProjectType("Not sure yet");
      setSuccess(true);
    } catch (error) {
      console.error("Enquiry submission failed:", error);
      setErrorMessage("We couldn't submit your enquiry. Please try again, or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return <main className="min-h-screen overflow-x-hidden bg-[#f7f7f4] text-[#111319]">
    <header className="border-b border-[#111319]/10">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-5 sm:px-10 lg:px-16">
        <Link href="/" className="text-xl font-black tracking-[-0.08em]">PLK<span className="text-[#2458ff]">.</span><span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.17em]">Systems</span></Link>
        <nav aria-label="Main navigation" className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.12em] sm:gap-x-8">
          <Link href="/services" className="hover:text-[#2458ff]">Services</Link><Link href="/work" className="hover:text-[#2458ff]">Work</Link><Link href="/about" className="hidden hover:text-[#2458ff] sm:inline">About</Link><Link href="/contact" aria-current="page" className="text-[#2458ff]">Contact</Link>
        </nav>
      </div>
    </header>

    <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-20 lg:px-16 lg:pt-24">
      <div className="flex items-center justify-between gap-3 border-t border-[#111319]/15 pt-5">
        <span className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.19em] text-[#2458ff]"><span className="h-px w-7 bg-[#2458ff]" />Start a project</span>
        <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.13em] text-[#6d737d]"><span className="h-2 w-2 rounded-full bg-[#24a779]" />Enquiries open</span>
      </div>
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <h1 className="max-w-[900px] text-[clamp(4rem,10.7vw,10.5rem)] font-black leading-[0.84] tracking-[-0.085em]">LET'S<br /><span className="text-[#2458ff]">BUILD IT.</span></h1>
        <div className="max-w-md lg:pb-2"><p className="text-xl font-semibold leading-snug tracking-[-0.035em] sm:text-2xl">Start with the problem. Not the technology.</p><p className="mt-5 text-[15px] leading-7 text-[#626773]">You don't need a technical brief. Tell us what you want to build, fix or make easier, and we'll work out the right approach together.</p></div>
      </div>
    </section>

    <section className="border-y border-[#111319]/10 bg-white" id="enquiry">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-16 lg:py-24">
        <aside>
          <p className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#2458ff]">How it works</p>
          <h2 className="mt-6 text-[clamp(2.5rem,4.5vw,4.5rem)] font-black leading-[0.92] tracking-[-0.07em]">SIMPLE<br />FROM THE<br /><span className="text-[#a2a5ac]">START.</span></h2>
          <div className="mt-10 border-t border-[#111319]/10">{steps.map(([number, title, description]) => <div key={number} className="grid grid-cols-[36px_1fr] gap-4 border-b border-[#111319]/10 py-5"><span className="font-mono text-xs text-[#2458ff]">{number}</span><div><p className="text-sm font-bold">{title}</p><p className="mt-2 max-w-sm text-sm leading-6 text-[#747984]">{description}</p></div></div>)}</div>
          <div className="mt-10"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#858a94]">Prefer to email?</p><a className="mt-3 inline-block break-all text-sm font-semibold underline decoration-[#2458ff]/50 underline-offset-4 hover:text-[#2458ff]" href="mailto:contact@plksystems.co.uk">contact@plksystems.co.uk ↗</a></div>
        </aside>

        <div className="border border-[#111319]/10 bg-[#f7f7f4] p-5 sm:p-9 lg:p-11">
          {success ? <div role="status" className="flex min-h-[510px] flex-col items-start justify-center"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e0f3ea] text-2xl text-[#16875c]">✓</span><p className="mt-9 text-[10px] font-bold uppercase tracking-[0.19em] text-[#16875c]">Enquiry received</p><h2 className="mt-5 text-[clamp(3rem,6vw,5.5rem)] font-black leading-[0.9] tracking-[-0.07em]">THANKS.<br /><span className="text-[#9a9ea7]">WE'VE GOT IT.</span></h2><p className="mt-7 max-w-md text-sm leading-7 text-[#626773]">Your enquiry has been saved. We'll review what you've shared and get back to you.</p><div className="mt-9 flex flex-wrap gap-3"><button type="button" onClick={() => setSuccess(false)} className="bg-[#111319] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white hover:bg-[#2458ff]">Send another enquiry ↗</button><Link href="/work" className="border border-[#111319]/20 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.14em] hover:border-[#2458ff]">Explore our work</Link></div></div> :
          <form onSubmit={handleSubmit}>
            <div className="flex items-start justify-between gap-4 border-b border-[#111319]/10 pb-7"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2458ff]">Your enquiry</p><h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">Tell us what you have in mind.</h2></div><span className="hidden font-mono text-[9px] text-[#a2a5ac] sm:inline">PLK / ENQ</span></div>
            <fieldset className="py-8"><legend className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4f5360]">What are you thinking about?</legend><div className="mt-5 flex flex-wrap gap-2">{types.map(type => <button key={type} type="button" aria-pressed={projectType === type} onClick={() => setProjectType(type)} className={`border px-4 py-3 text-[10px] font-bold transition ${projectType === type ? "border-[#2458ff] bg-[#2458ff] text-white" : "border-[#cdd0d4] text-[#5b616c] hover:border-[#2458ff] hover:text-[#2458ff]"}`}>{type}</button>)}</div></fieldset>
            <div className="grid gap-8 border-t border-[#111319]/10 py-8 sm:grid-cols-2"><Field name="name" label="Your name" placeholder="Your name" /><Field name="business" label="Business" placeholder="Business name" optional /></div>
            <div className="grid gap-8 border-t border-[#111319]/10 py-8 sm:grid-cols-2"><Field name="email" label="Email address" type="email" placeholder="you@business.co.uk" /><Field name="phone" label="Phone number" type="tel" placeholder="07..." optional /></div>
            <label className="block border-t border-[#111319]/10 py-8"><span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#4f5360]">Tell us about your project</span><textarea name="problem" id="problem" rows={5} required placeholder="What would you like to build, improve or make simpler?" className="w-full resize-y border-0 border-b border-[#cdd0d4] bg-transparent px-0 py-3 text-[15px] leading-7 text-[#111319] outline-none placeholder:text-[#a1a4ab] focus:border-[#2458ff]" /></label>
            {errorMessage && <p role="alert" className="mb-6 border-l-2 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-700">{errorMessage}</p>}
            <button type="submit" disabled={submitting} className="flex w-full items-center justify-between gap-4 bg-[#2458ff] px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#1746dd] disabled:cursor-wait disabled:opacity-60"><span>{submitting ? "Sending enquiry..." : "Send your enquiry"}</span><span className="text-xl" aria-hidden="true">↗</span></button>
            <p className="mt-5 text-xs leading-6 text-[#858a94]">We'll use your details only to respond to your enquiry. Read our <Link href="/privacy" className="underline underline-offset-2 hover:text-[#2458ff]">privacy policy</Link>.</p>
          </form>}
        </div>
      </div>
    </section>

    <section className="bg-[#2458ff] text-white"><div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-16"><h2 className="text-[clamp(2.8rem,6vw,6rem)] font-black leading-[0.9] tracking-[-0.07em]">NO TECHNICAL<br />JARGON REQUIRED.</h2><p className="max-w-md text-base leading-8 text-white/85 lg:justify-self-end">Explain it the way you'd explain it to someone in your business. Understanding the problem is our job.</p></div></section>
    <footer className="bg-[#111319] text-white"><div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-10 lg:px-16"><div className="flex flex-col justify-between gap-8 sm:flex-row"><div><Link href="/" className="text-2xl font-black tracking-[-0.07em]">PLK<span className="text-[#6182ff]">.</span></Link><p className="mt-3 max-w-xs text-xs leading-6 text-white/50">Digital solutions built around your business.</p></div><nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60"><Link href="/services" className="hover:text-white">Services</Link><Link href="/work" className="hover:text-white">Work</Link><Link href="/about" className="hover:text-white">About</Link><Link href="/contact" className="text-white">Contact</Link><Link href="/privacy" className="hover:text-white">Privacy</Link></nav></div><div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-[10px] text-white/40 sm:flex-row"><span>© {new Date().getFullYear()} PLK Systems</span><span>Software built around your business.</span></div></div></footer>
  </main>;
}
