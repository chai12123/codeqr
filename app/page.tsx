export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <main className="w-full max-w-[480px] flex flex-col items-center text-center gap-8">
        <div className="space-y-1">
          <h1
            className="text-[28px] font-bold text-brand-black tracking-heading"
            lang="th"
          >
            โคตร QR
          </h1>
          <p className="text-sm font-medium text-brand-steel">Code QR</p>
        </div>
        <p className="text-base text-brand-black max-w-sm" lang="th">
          เมนูดิจิทัล สร้างง่าย สแกนเลย
        </p>
        <p className="text-sm text-brand-steel -mt-4">
          Digital menu made easy. Scan &amp; go.
        </p>
        <div className="w-full max-w-[420px] flex flex-col gap-3">
          <button
            type="button"
            className="w-full rounded-xl bg-brand-coral px-6 py-3 text-base font-semibold text-white shadow-card transition-all duration-200 ease-out hover:bg-brand-coral-dark hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(244,123,91,0.3)]"
          >
            Get started
          </button>
          <button
            type="button"
            className="w-full rounded-xl border-2 border-brand-steel bg-transparent px-6 py-2.5 text-base font-semibold text-brand-steel transition-colors duration-200 hover:bg-white/60"
          >
            Learn more
          </button>
        </div>
      </main>
    </div>
  );
}
