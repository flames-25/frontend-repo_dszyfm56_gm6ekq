export default function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-10">
          <div className="absolute right-0 top-0 -mr-12 -mt-12 h-40 w-40 rounded-full bg-gradient-to-tr from-blue-200 to-cyan-200 blur-2xl opacity-60 pointer-events-none" />
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Bring your idea to life</h3>
            <p className="mt-2 text-slate-600">Tell us about your vision. We’ll design, build, and launch it with precision.</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 grid gap-3 sm:grid-cols-3"
          >
            <input className="col-span-1 sm:col-span-1 rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" />
            <input type="email" className="col-span-1 sm:col-span-1 rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Work email" />
            <button className="col-span-1 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40">
              Request proposal
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
