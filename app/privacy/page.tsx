export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 lg:px-10">
        <a
          href="/"
          className="mb-12 inline-block text-sm font-medium text-sky-400 transition hover:text-sky-300"
        >
          ← Back to PLK Systems
        </a>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
          Privacy
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-5 text-slate-400">
          Last updated: 13 August 2026
        </p>

        <div className="mt-12 space-y-10 text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-white">
              Who we are
            </h2>
            <p className="mt-3 leading-7">
              PLK Systems provides software design, development and business
              process improvement services in the United Kingdom.
            </p>
            <p className="mt-3 leading-7">
              For privacy enquiries, contact us at{" "}
              <a
                href="mailto:contact@plksystems.co.uk"
                className="text-sky-400 hover:text-sky-300"
              >
                contact@plksystems.co.uk
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Information we collect
            </h2>
            <p className="mt-3 leading-7">
              When you contact PLK Systems through this website, we may collect
              your name, business name, email address, phone number and the
              information you provide about your business or enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              How we use your information
            </h2>
            <p className="mt-3 leading-7">
              We use the information you provide to respond to your enquiry,
              understand your requirements, discuss potential services and
              manage our communication with you.
            </p>
            <p className="mt-3 leading-7">
              We do not sell your personal information or use enquiry details
              for unrelated marketing without an appropriate lawful basis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Our lawful basis
            </h2>
            <p className="mt-3 leading-7">
              We normally process enquiry information because it is necessary
              to respond to your request and, where relevant, to take steps at
              your request before entering into a contract.
            </p>
            <p className="mt-3 leading-7">
              In some circumstances, we may also process information where we
              have a legitimate business interest in communicating with you,
              provided that interest does not override your rights and
              interests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              How your information is stored
            </h2>
            <p className="mt-3 leading-7">
              Website enquiries are stored using third-party technology
              providers that support the operation of the PLK Systems website
              and communication services. We take reasonable steps to keep
              personal information secure and restrict access to it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Who we share information with
            </h2>
            <p className="mt-3 leading-7">
              We may share personal information with trusted service providers
              where necessary to operate the website, store enquiries, send
              email notifications or provide our services.
            </p>
            <p className="mt-3 leading-7">
              These providers may include website hosting, database and email
              infrastructure providers. We do not sell your personal
              information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              How long we keep your information
            </h2>
            <p className="mt-3 leading-7">
              We keep enquiry information only for as long as reasonably
              necessary to deal with your enquiry, maintain appropriate
              business records and meet any legal or contractual obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Your data protection rights
            </h2>
            <p className="mt-3 leading-7">
              Depending on the circumstances, UK data protection law may give
              you rights over your personal information, including the right
              to request access, correction or deletion of your information,
              and the right to object to or restrict certain processing.
            </p>
            <p className="mt-3 leading-7">
              To exercise your rights, contact{" "}
              <a
                href="mailto:contact@plksystems.co.uk"
                className="text-sky-400 hover:text-sky-300"
              >
                contact@plksystems.co.uk
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Complaints
            </h2>
            <p className="mt-3 leading-7">
              If you have concerns about how we use your personal information,
              please contact us first so we can try to resolve the issue.
            </p>
            <p className="mt-3 leading-7">
              You also have the right to raise a concern with the UK
              Information Commissioner&apos;s Office.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Changes to this policy
            </h2>
            <p className="mt-3 leading-7">
              We may update this Privacy Policy from time to time as our
              services, website or legal obligations change. The latest version
              will always be published on this page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}