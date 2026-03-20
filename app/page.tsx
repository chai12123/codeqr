import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="flex w-full max-w-[480px] flex-col items-center gap-8 text-center">
          <div className="space-y-1">
            <h1
              className="text-[28px] font-bold tracking-heading text-brand-black"
              lang="th"
            >
              โคตร QR
            </h1>
            <p className="text-sm font-medium text-brand-steel">Code QR</p>
          </div>
          <p className="max-w-sm text-base text-brand-black" lang="th">
            เมนูดิจิทัล สร้างง่าย สแกนเลย
          </p>
          <p className="-mt-4 text-sm text-brand-steel">
            Digital menu made easy. Scan &amp; go.
          </p>
          <div className="flex w-full max-w-[420px] flex-col gap-3">
            <Link
              href="/login"
              className="w-full rounded-xl bg-brand-coral px-6 py-3 text-center text-base font-semibold text-white shadow-card transition-all duration-200 ease-out hover:-translate-y-px hover:bg-brand-coral-dark hover:shadow-[0_4px_12px_rgba(244,123,91,0.3)]"
            >
              สร้างเมนูฟรี
            </Link>
            <a
              href="#learn-more"
              className="w-full rounded-xl border-2 border-brand-steel bg-transparent px-6 py-2.5 text-center text-base font-semibold text-brand-steel transition-colors duration-200 hover:bg-white/60"
            >
              เรียนรู้เพิ่มเติม
            </a>
          </div>
        </div>
      </main>

      <section
        id="learn-more"
        className="scroll-mt-6 border-t border-brand-sand bg-white px-6 py-16"
        aria-labelledby="learn-more-heading"
      >
        <div className="mx-auto max-w-[480px] text-center">
          <h2
            id="learn-more-heading"
            className="text-[22px] font-semibold tracking-heading text-brand-black"
            lang="th"
          >
            ทำไมต้อง โคตร QR?
          </h2>
          <p className="mt-4 text-base leading-[1.7] text-brand-black" lang="th">
            สร้างเมนูออนไลน์ให้ลูกค้าสแกนได้ทันที ไม่ต้องพิมพ์ ไม่ต้องโหลดแอป
            — เหมาะกับร้านอาหารและคาเฟ่ที่อยากให้ลูกค้าเลือกจานได้สะดวกบนมือถือ
          </p>
          <p className="mt-3 text-sm text-brand-steel">
            พร้อมเริ่มแล้ว? สมัครและเข้าสู่ระบบเพื่อจัดการเมนูของคุณ
          </p>
          <Link
            href="/login"
            className="mt-8 inline-flex rounded-xl bg-brand-steel px-6 py-3 text-base font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-px hover:opacity-95"
          >
            ไปที่หน้าเข้าสู่ระบบ
          </Link>
        </div>
      </section>
    </div>
  );
}
