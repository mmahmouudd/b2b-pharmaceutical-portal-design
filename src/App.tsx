export default function App() {
  const certifications = [
    {
      title: 'GDP Compliant',
      description:
        'Distribution workflows aligned with Good Distribution Practice for traceability, storage integrity, and delivery assurance.',
    },
    {
      title: 'DSCSA Ready',
      description:
        'Mock serialization and verification checkpoints designed to support secure pharmaceutical supply chain operations.',
    },
    {
      title: 'ISO 27001 Controls',
      description:
        'Security-minded portal patterns for access governance, audit visibility, and responsible data handling.',
    },
  ];

  const metrics = [
    { value: '99.98%', label: 'Order accuracy' },
    { value: '< 2 hrs', label: 'Supplier response SLA' },
    { value: '24/7', label: 'Audit trail visibility' },
  ];

  const integrations = [
    'HL7 / FHIR-ready data exchange mockup',
    'Role-based clinical procurement workflows',
    'Inventory sync across warehouses and care sites',
    'Automated recall and lot tracking alerts',
  ];

  const contacts = [
    'Dedicated pharmaceutical account specialists',
    'Secure onboarding for hospitals, clinics, and distributors',
    'Priority support for cold-chain and controlled substances',
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(13,148,136,0.16),_transparent_28%),linear-gradient(180deg,_#f5fbfb_0%,_#eef8fb_42%,_#f8fbfd_100%)] text-slate-800">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-teal-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 border-b border-white/60 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-700 to-teal-600 text-white shadow-lg shadow-cyan-900/10">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M12 3v18" strokeLinecap="round" />
                <path d="M3 12h18" strokeLinecap="round" />
                <rect x="5" y="5" width="14" height="14" rx="3" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">PharmaFlow Secure</p>
              <p className="text-sm text-slate-500">B2B pharmaceutical distribution portal</p>
            </div>
          </div>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            <a href="#compliance" className="text-sm font-medium text-slate-600 transition hover:text-teal-700">
              Compliance
            </a>
            <a href="#integration" className="text-sm font-medium text-slate-600 transition hover:text-teal-700">
              Integration
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-600 transition hover:text-teal-700">
              Supplier contact
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-medium text-teal-800 shadow-sm shadow-teal-900/5">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
              Secure procurement for providers, distributors, and suppliers
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Calm, compliant infrastructure for modern pharmaceutical distribution.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                A secure healthcare portal experience designed to simplify regulated ordering, support medical-record integration,
                and connect care organizations directly with trusted pharmaceutical suppliers.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-teal-700 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-900/15 transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-200"
              >
                Contact a supplier
              </a>
              <a
                href="#integration"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-800 focus:outline-none focus:ring-4 focus:ring-cyan-100"
              >
                View EMR integration mockup
              </a>
            </div>

            <dl className="grid gap-4 sm:grid-cols-3">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-lg shadow-slate-900/5 backdrop-blur">
                  <dt className="text-sm font-medium text-slate-500">{item.label}</dt>
                  <dd className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside
            aria-label="Portal overview"
            className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-2xl shadow-cyan-950/10 backdrop-blur xl:p-7"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">Operations snapshot</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">Secure order routing</h2>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">Protected</span>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Account</p>
                    <p className="text-base font-semibold text-slate-900">Northshore Medical Group</p>
                  </div>
                  <div className="rounded-2xl bg-cyan-950 px-3 py-2 text-right text-white">
                    <p className="text-xs uppercase tracking-[0.16em] text-cyan-100">Authorized role</p>
                    <p className="text-sm font-semibold">Clinical Procurement</p>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    ['Temperature-sensitive vaccines', 'Validated cold-chain lane'],
                    ['Specialty oncology therapies', 'Lot traceability enabled'],
                    ['Controlled inventory replenishment', 'Dual approval workflow'],
                  ].map(([title, status]) => (
                    <div key={title} className="flex items-start justify-between gap-3 rounded-2xl bg-white p-4 shadow-sm">
                      <div>
                        <p className="font-semibold text-slate-800">{title}</p>
                        <p className="mt-1 text-sm text-slate-500">{status}</p>
                      </div>
                      <span className="mt-1 h-3 w-3 rounded-full bg-emerald-500" aria-hidden="true" />
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm leading-6 text-slate-500">
                Designed for accessibility and confidence, with strong visual hierarchy, readable contrast, and streamlined action paths.
              </p>
            </div>
          </aside>
        </section>

        <section aria-label="Trust indicators" className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
          <div className="grid gap-4 rounded-[2rem] border border-teal-100 bg-white/80 p-6 shadow-lg shadow-slate-900/5 md:grid-cols-3">
            {contacts.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700" aria-hidden="true">
                  ✓
                </span>
                <p className="text-sm leading-6 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="compliance" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">Compliance certifications</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Built to communicate trust in regulated healthcare environments.
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              Present key certifications and quality commitments clearly so provider organizations can review operational readiness at a glance.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {certifications.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-white bg-white p-6 shadow-xl shadow-slate-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-emerald-100 text-cyan-800">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" />
                    <path d="m9.5 12 1.8 1.8 3.7-4.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="integration" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">Medical records integration</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Seamless EMR connectivity with procurement visibility.
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                This mockup demonstrates how ordering status, lot data, and documentation could align with hospital or clinic systems without overwhelming users.
              </p>
              <ul className="space-y-3" aria-label="Integration capabilities">
                {integrations.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm shadow-slate-900/5">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-600" aria-hidden="true" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-cyan-100 bg-white p-5 shadow-2xl shadow-cyan-950/10 sm:p-6">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 sm:p-5">
                <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">EMR integration mockup</p>
                    <h3 className="text-xl font-semibold text-slate-900">Patient-safe fulfillment context</h3>
                  </div>
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-800">FHIR-linked</span>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.92fr]">
                  <div className="space-y-4 rounded-3xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-500">Medication request</p>
                        <p className="font-semibold text-slate-900">Therapeutic restock order</p>
                      </div>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                        Matched
                      </span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        ['Facility', 'St. Helena Care Network'],
                        ['Department', 'Infusion services'],
                        ['Prescriber group', 'Verified'],
                        ['Recall alerts', 'Active monitoring'],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
                          <p className="mt-1 text-sm font-medium text-slate-800">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl bg-cyan-950 p-4 text-white shadow-lg">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-100">Live sync stream</p>
                    <div className="mt-4 space-y-3">
                      {[
                        'Order approved by pharmacy operations',
                        'Batch documentation attached to chart',
                        'Shipment ETA shared with receiving dock',
                        'Audit event recorded for chain-of-custody',
                      ].map((item, index) => (
                        <div key={item} className="flex gap-3 rounded-2xl bg-white/8 p-3">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/12 text-sm font-semibold text-cyan-50">
                            {index + 1}
                          </span>
                          <p className="text-sm leading-6 text-cyan-50">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">Direct supplier contact</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Reach a pharmaceutical distribution specialist quickly.
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                Use the form to request pricing, onboarding support, product availability, or compliance documentation. The layout is optimized for keyboard access and readability.
              </p>
              <div className="rounded-[1.75rem] border border-teal-100 bg-white/85 p-5 shadow-lg shadow-slate-900/5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Preferred support channels</p>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li>• Supplier relations for formulary and sourcing inquiries</li>
                  <li>• Implementation guidance for health system integration teams</li>
                  <li>• Regulatory support for audits and credential review</li>
                </ul>
              </div>
            </div>

            <form className="rounded-[2rem] border border-white bg-white p-6 shadow-2xl shadow-slate-900/5 sm:p-8" aria-label="Supplier contact form">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="organization" className="mb-2 block text-sm font-semibold text-slate-700">
                    Organization name
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                    placeholder="Hospital, clinic, or distributor"
                  />
                </div>
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-slate-700">
                    Contact name
                  </label>
                  <input
                    id="contact-name"
                    name="contactName"
                    type="text"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                    placeholder="name@organization.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    placeholder="(555) 010-2400"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="interest" className="mb-2 block text-sm font-semibold text-slate-700">
                    Request type
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a request type
                    </option>
                    <option>New supplier onboarding</option>
                    <option>Contract pricing inquiry</option>
                    <option>Cold-chain distribution support</option>
                    <option>Compliance documentation request</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    placeholder="Tell us about product categories, compliance requirements, integration needs, or expected timelines."
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-sm leading-6 text-slate-500">
                  By submitting, your team can request a follow-up from a dedicated supplier specialist. This is a static form mockup for interface review.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-800 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan-950/15 transition hover:bg-cyan-900 focus:outline-none focus:ring-4 focus:ring-cyan-200"
                >
                  Send request
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
