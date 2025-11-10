import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center text-white shadow-lg shadow-blue-500/30">
              <Rocket size={18} />
            </div>
            <span className="text-lg tracking-tight">hoximoxin</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-shadow">
              Get a quote
            </a>
          </nav>

          <button
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-slate-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex justify-center items-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-blue-500/30"
              onClick={() => setOpen(false)}
            >
              Get a quote
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
