export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} hoximoxin. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#process" className="hover:text-slate-900">Process</a>
            <a href="#about" className="hover:text-slate-900">About</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
