import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "แดชบอร์ด",
};

export default function AdminDashboardPage() {
  return (
    <div className="rounded-xl border border-brand-sand bg-white p-6 shadow-card">
      <h1 className="text-[22px] font-semibold text-brand-black tracking-heading">
        แดชบอร์ด
      </h1>
      <p className="mt-2 text-sm text-brand-steel">
        ยินดีต้อนรับ — เริ่มจัดการเมนูดิจิทัลของคุณได้จากที่นี่
      </p>
    </div>
  );
}
