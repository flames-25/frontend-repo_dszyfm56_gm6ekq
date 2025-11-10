import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <section id="process" className="py-20 bg-gradient-to-b from-white to-blue-50/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How we build</h2>
              <p className="mt-3 text-slate-600">Lean, iterative, and transparent. From discovery to launch, we keep it minimal and effective.</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {["Discover","Design","Deploy"].map((step, i) => (
                <div key={step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-sm text-blue-600 font-semibold">0{i+1}</div>
                  <h3 className="mt-2 font-semibold">{step}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {step === 'Discover' && 'We align on outcomes and map your technical landscape.'}
                    {step === 'Design' && 'Architecture, UX, and delivery plan crafted to scale.'}
                    {step === 'Deploy' && 'Ship, monitor, and iterate with confidence and automation.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
