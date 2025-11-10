import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-28" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
            <div className="">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-blue-700">
                Futuristic IT services
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                hoximoxin — building the next era of digital experiences
              </h1>
              <p className="mt-4 text-slate-600 text-lg max-w-prose">
                We craft scalable cloud systems, AI-powered apps, and immersive interfaces. Minimal, fast, and future-ready.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex justify-center items-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 text-sm font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-shadow">
                  Start a project
                </a>
                <a href="#services" className="inline-flex justify-center items-center rounded-lg border border-slate-200 text-slate-700 px-6 py-3 text-sm font-medium hover:bg-white/60">
                  Explore services
                </a>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
    </section>
  );
}
