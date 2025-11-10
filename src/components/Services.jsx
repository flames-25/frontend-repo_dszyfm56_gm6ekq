import { Server, Shield, Cpu, Cloud } from 'lucide-react';

const services = [
  {
    icon: <Cloud className="h-6 w-6" />,
    title: 'Cloud Architecture',
    desc: 'Designing resilient, secure infrastructures on AWS, GCP, and Azure with scalability in mind.',
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'AI Engineering',
    desc: 'From data pipelines to model deployment, we build intelligent systems that deliver business value.',
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: 'Full‑Stack Platforms',
    desc: 'High‑performance web and mobile apps with modern UX and rock‑solid APIs.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Security & Compliance',
    desc: 'Hardening, audits, and best practices to keep your data safe and compliant.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20"> 
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Our Services</h2>
          <p className="mt-3 text-slate-600">Blue and white, minimal, and ruthlessly efficient. We build future‑proof systems.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white grid place-items-center shadow-lg shadow-blue-500/30">
                {s.icon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -z-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"/>
    </section>
  );
}
