import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { LoginPanel } from "./LoginPanel";

export const metadata: Metadata = {
  title: "เข้าสู่ระบบ",
};

function LoginLoading() {
  return (
    <div
      className="w-full max-w-md rounded-xl border border-brand-sand bg-white p-8 shadow-card"
      aria-busy="true"
      aria-label="กำลังโหลด"
    >
      <div className="mx-auto mb-6 h-10 w-40 animate-pulse rounded-lg bg-brand-bg" />
      <div className="mb-4 h-11 animate-pulse rounded-full bg-brand-bg" />
      <div className="space-y-4">
        <div className="h-12 animate-pulse rounded-lg bg-brand-bg" />
        <div className="h-12 animate-pulse rounded-lg bg-brand-bg" />
        <div className="h-12 animate-pulse rounded-xl bg-brand-bg" />
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-brand-bg">
      <div className="mb-8 text-center">
        <Link href="/" className="inline-block">
          <p className="text-[28px] font-bold text-brand-black tracking-heading" lang="th">
            โคตร QR
          </p>
          <p className="text-sm font-medium text-brand-steel">Code QR</p>
        </Link>
      </div>
      <Suspense fallback={<LoginLoading />}>
        <LoginPanel />
      </Suspense>
    </div>
  );
}
