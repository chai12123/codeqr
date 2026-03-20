"use client";

import { authErrorToThai } from "@/lib/auth/thai-errors";
import { safeAdminNextParam } from "@/lib/auth/redirect";
import { createClient } from "@/lib/supabase/client";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

type Tab = "login" | "register";

export function LoginPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = useMemo(() => createClient(), []);

  const [tab, setTab] = useState<Tab>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const redirectAfterAuth = useCallback(() => {
    const next = safeAdminNextParam(searchParams.get("next"));
    router.push(next ?? "/admin/dashboard");
    router.refresh();
  }, [router, searchParams]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);
    if (!email.trim()) {
      setError("กรุณากรอกอีเมล");
      return;
    }
    if (!password) {
      setError("กรุณากรอกรหัสผ่าน");
      return;
    }
    setLoading(true);
    const { error: err } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    setLoading(false);
    if (err) {
      setError(authErrorToThai(err));
      return;
    }
    redirectAfterAuth();
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);
    if (!email.trim()) {
      setError("กรุณากรอกอีเมล");
      return;
    }
    if (password.length < 6) {
      setError("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
      return;
    }
    if (password !== confirm) {
      setError("รหัสผ่านไม่ตรงกัน");
      return;
    }
    setLoading(true);
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin;
    const callback = new URL("/auth/callback", siteUrl);
    callback.searchParams.set("next", "/admin/dashboard");
    const { data, error: err } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: { emailRedirectTo: callback.toString() },
    });
    setLoading(false);
    if (err) {
      setError(authErrorToThai(err));
      return;
    }
    if (data.session) {
      redirectAfterAuth();
      return;
    }
    setInfo(
      "ส่งลิงก์ยืนยันไปที่อีเมลของคุณแล้ว กรุณายืนยันก่อนเข้าสู่ระบบ",
    );
  }

  return (
    <div className="w-full max-w-md rounded-xl border border-brand-sand bg-white p-6 shadow-card sm:p-8">
      <h1 className="mb-6 text-center text-[22px] font-semibold text-brand-black tracking-heading">
        {tab === "login" ? "เข้าสู่ระบบ" : "สมัครสมาชิก"}
      </h1>

      <div
        className="mb-8 flex gap-2 rounded-full bg-brand-bg p-1"
        role="tablist"
        aria-label="เลือกเข้าสู่ระบบหรือสมัครสมาชิก"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === "login"}
          className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
            tab === "login"
              ? "bg-brand-coral text-white"
              : "text-brand-steel hover:bg-white/60"
          }`}
          onClick={() => {
            setTab("login");
            setError(null);
            setInfo(null);
          }}
        >
          เข้าสู่ระบบ
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "register"}
          className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
            tab === "register"
              ? "bg-brand-coral text-white"
              : "text-brand-steel hover:bg-white/60"
          }`}
          onClick={() => {
            setTab("register");
            setError(null);
            setInfo(null);
          }}
        >
          สมัครสมาชิก
        </button>
      </div>

      {error ? (
        <p
          className="mb-4 rounded-lg border border-brand-coral/40 bg-white px-3 py-2 text-sm text-brand-coral"
          role="alert"
        >
          {error}
        </p>
      ) : null}
      {info ? (
        <p
          className="mb-4 rounded-lg border border-brand-steel/30 bg-brand-bg px-3 py-2 text-sm text-brand-steel"
          role="status"
        >
          {info}
        </p>
      ) : null}

      {tab === "login" ? (
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="login-email"
              className="mb-1.5 block text-sm font-medium text-brand-black"
            >
              อีเมล
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-brand-sand bg-white px-4 py-3 text-base text-brand-black outline-none transition-shadow focus:border-brand-steel focus:shadow-[0_0_0_3px_rgba(107,137,181,0.15)]"
            />
          </div>
          <div>
            <label
              htmlFor="login-password"
              className="mb-1.5 block text-sm font-medium text-brand-black"
            >
              รหัสผ่าน
            </label>
            <input
              id="login-password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-brand-sand bg-white px-4 py-3 text-base text-brand-black outline-none transition-shadow focus:border-brand-steel focus:shadow-[0_0_0_3px_rgba(107,137,181,0.15)]"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-coral px-6 py-3 text-base font-semibold text-white shadow-card transition-all duration-200 ease-out hover:bg-brand-coral-dark hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(244,123,91,0.3)] disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                <span>กำลังเข้าสู่ระบบ…</span>
              </>
            ) : (
              "เข้าสู่ระบบ"
            )}
          </button>
        </form>
      ) : (
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label
              htmlFor="reg-email"
              className="mb-1.5 block text-sm font-medium text-brand-black"
            >
              อีเมล
            </label>
            <input
              id="reg-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-brand-sand bg-white px-4 py-3 text-base text-brand-black outline-none transition-shadow focus:border-brand-steel focus:shadow-[0_0_0_3px_rgba(107,137,181,0.15)]"
            />
          </div>
          <div>
            <label
              htmlFor="reg-password"
              className="mb-1.5 block text-sm font-medium text-brand-black"
            >
              รหัสผ่าน
            </label>
            <input
              id="reg-password"
              name="password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-brand-sand bg-white px-4 py-3 text-base text-brand-black outline-none transition-shadow focus:border-brand-steel focus:shadow-[0_0_0_3px_rgba(107,137,181,0.15)]"
            />
          </div>
          <div>
            <label
              htmlFor="reg-confirm"
              className="mb-1.5 block text-sm font-medium text-brand-black"
            >
              ยืนยันรหัสผ่าน
            </label>
            <input
              id="reg-confirm"
              name="confirm"
              type="password"
              autoComplete="new-password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full rounded-lg border border-brand-sand bg-white px-4 py-3 text-base text-brand-black outline-none transition-shadow focus:border-brand-steel focus:shadow-[0_0_0_3px_rgba(107,137,181,0.15)]"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-coral px-6 py-3 text-base font-semibold text-white shadow-card transition-all duration-200 ease-out hover:bg-brand-coral-dark hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(244,123,91,0.3)] disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                <span>กำลังสมัครสมาชิก…</span>
              </>
            ) : (
              "สมัครสมาชิก"
            )}
          </button>
        </form>
      )}

      <p className="mt-8 text-center text-sm text-brand-steel">
        <Link href="/" className="font-medium underline-offset-2 hover:underline">
          กลับหน้าแรก
        </Link>
      </p>
    </div>
  );
}
