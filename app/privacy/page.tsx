import Link from "next/link";

const sections = [
  { title: "Who we are", paragraphs: ["PLK Systems provides software design, development and business process improvement services in the United Kingdom."] },
  { title: "Information we collect", paragraphs: ["When you contact PLK Systems through this website, we may collect your name, business name, email address, phone number and the information you provide about your business or enquiry."] },
  { title: "How we use your information", paragraphs: ["We use the information you provide to respond to your enquiry, understand your requirements, discuss potential services and manage our communication with you.", "We do not sell your personal information or use enquiry details for unrelated marketing without an appropriate lawful basis."] },
  { title: "Our lawful basis", paragraphs: ["We normally process enquiry information because it is necessary to respond to your request and, where relevant, to take steps at your request before entering into a contract.", "In some circumstances, we may also process information where we have a legitimate business interest in communicating with you, provided that interest does not override your rights and interests."] },
  { title: "How your information is stored", paragraphs: ["Website enquiries are stored using third-party technology providers that support the operation of the PLK Systems website and communication services. We take reasonable steps to keep personal information secure and restrict access to it."] },
  { title: "Who we share information with", paragraphs: ["We may share personal information with trusted service providers where necessary to operate the website, store enquiries, send email notifications or provide our services.", "These providers may include website hosting, database and email infrastructure providers. We do not sell your personal information to third parties."] },
  { title: "How long we keep your information", paragraphs: ["We keep enquiry information only for as long as reasonably necessary to deal with your enquiry, maintain appropriate business records and meet any legal or contractual obligations."] },
  { title: "Your data protection rights", paragraphs: ["Depending on the circumstances, UK data protection law may give you rights over your personal information, including the right to request access, correction or deletion of your information, and the right to object to or restrict certain processing."] },
  { title: "Complaints", paragraphs: ["If you have concerns about how we use your personal information, please contact us first so we can try to resolve the issue.", "You also have the right to raise a concern with the UK Information Commissioner’s Office."] },
  { title: "Changes to this policy", paragraphs: ["We may update this Privacy Policy from time to time as our services, website or legal obligations change. The latest version will always be published on this page."] },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f5f4f0] text-[#151719]">
      <header className="border-b border-black/10 bg-[#f5f4f0]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-6 sm:px-10 lg:px-16">
          <Link href="/" className="text-xl font-black tracking-[-0.08em]" aria-label="PLK Systems home">PLK<span className="text-[#315cff]">.</span> <span className="ml-1 text-[10px] font-semibold uppercase tracking-[0.2em]">Systems</span></Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.1em] md:flex">
            <Link href="/services" className="hover:text-[#315cff]">Services</Link><Link href="/work" className="hover:text-[#315cff]">Work</Link><Link href="/about" className="hover:text-[#315cff]">About</Link><Link href="/contact" className="hover:text-[#315cff]">Contact</Link>
          </nav>
          <Link href="/contact" className="border border-[#151719] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.12em] transition hover:bg-[#151719] hover:text-white">Start a project ↗</Link>
        </div>
      </header>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-14 sm:px-10 sm:pb-20 sm:pt-20 lg:px-16">
          <div className="flex items-center justify-between border-t border-black/15 pt-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#315cff]">PLK / Legal</p>
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-black/40">01 — Privacy</p>
          </div>
          <h1 className="mt-12 max-w-5xl text-[clamp(3.8rem,10vw,9.5rem)] font-semibold leading-[0.83] tracking-[-0.085em]">PRIVACY<span className="block text-[#315cff]">POLICY.</span></h1>
          <div className="mt-12 flex flex-col justify-between gap-5 border-t border-black/10 pt-6 sm:flex-row sm:items-end">
            <p className="max-w-xl text-base leading-7 text-black/60">How PLK Systems handles the information you share with us.</p>
            <p className="text-xs text-black/45">Last updated: 13 August 2026</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20 lg:px-16">
        <aside className="lg:sticky lg:top-10 lg:self-start">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#315cff]">Your information</p>
          <h2 className="mt-5 max-w-xs text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">CLEAR. SIMPLE. TRANSPARENT.</h2>
          <p className="mt-6 max-w-sm text-sm leading-7 text-black/55">Questions about how your information is used? Get in touch directly.</p>
          <a href="mailto:contact@plksystems.co.uk" className="mt-6 inline-block break-all border-b border-[#315cff] pb-1 text-sm font-semibold text-[#315cff]">contact@plksystems.co.uk ↗</a>
          <Link href="/" className="mt-10 block text-xs font-semibold uppercase tracking-[0.15em] hover:text-[#315cff]">← Back to home</Link>
        </aside>
        <div className="border-t border-black/15">
          {sections.map((section, index) => (
            <section key={section.title} className="grid gap-5 border-b border-black/10 py-9 sm:grid-cols-[46px_1fr] sm:gap-7 sm:py-11">
              <span className="pt-1 font-mono text-xs text-[#315cff]">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.035em] sm:text-2xl">{section.title}</h3>
                <div className="mt-4 space-y-4 text-sm leading-8 text-black/60 sm:text-base">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {(index === 0 || index === 7) && <p>For privacy enquiries, contact <a href="mailto:contact@plksystems.co.uk" className="font-medium text-[#315cff] underline underline-offset-4">contact@plksystems.co.uk</a>.</p>}
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-[#315cff] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-6 py-14 sm:px-10 lg:flex-row lg:items-end lg:px-16">
          <div><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">Questions?</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">LET’S TALK.</h2></div>
          <Link href="/contact" className="inline-flex w-fit items-center gap-8 bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#151719] transition hover:bg-[#e9ecff]">Contact PLK Systems <span aria-hidden>↗</span></Link>
        </div>
      </section>
      <footer className="bg-[#151719] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-6 py-10 sm:px-10 md:flex-row md:items-end lg:px-16">
          <div><Link href="/" className="text-2xl font-black tracking-[-0.08em]">PLK<span className="text-[#6f8bff]">.</span></Link><p className="mt-3 text-xs text-white/45">Software built around your business.</p></div>
          <div className="flex flex-wrap gap-5 text-xs text-white/60"><Link href="/services" className="hover:text-white">Services</Link><Link href="/work" className="hover:text-white">Work</Link><Link href="/about" className="hover:text-white">About</Link><Link href="/contact" className="hover:text-white">Contact</Link><Link href="/privacy" className="text-white">Privacy</Link></div>
        </div>
        <div className="mx-auto max-w-[1440px] border-t border-white/10 px-6 py-5 text-[10px] text-white/35 sm:px-10 lg:px-16">© {new Date().getFullYear()} PLK Systems. All rights reserved.</div>
      </footer>
    </main>
  );
}
