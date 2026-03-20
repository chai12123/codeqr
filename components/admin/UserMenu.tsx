"use client";

import { createClient } from "@/lib/supabase/client";
import { ChevronDown, Loader2, LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Props = {
  email: string;
};

export function UserMenu({ email }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(ev: MouseEvent) {
      if (!wrapRef.current?.contains(ev.target as Node)) setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  async function handleLogout() {
    setSigningOut(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  const display = email || "บัญชีผู้ใช้";

  return (
    <div className="relative" ref={wrapRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-2 rounded-lg border border-brand-sand bg-white px-3 py-2 text-sm font-medium text-brand-black shadow-card transition-shadow hover:shadow-card-hover"
      >
        <User className="h-4 w-4 shrink-0 text-brand-steel" aria-hidden />
        <span className="max-w-[180px] truncate">{display}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-brand-steel transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 min-w-[220px] rounded-xl border border-brand-sand bg-white py-1 shadow-card-hover"
        >
          <div className="border-b border-brand-sand/60 px-3 py-2">
            <p className="text-xs font-medium text-brand-steel">เข้าสู่ระบบเป็น</p>
            <p className="truncate text-sm text-brand-black">{display}</p>
          </div>
          <button
            type="button"
            role="menuitem"
            disabled={signingOut}
            onClick={() => {
              setOpen(false);
              void handleLogout();
            }}
            className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm font-medium text-brand-coral transition-colors hover:bg-brand-bg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {signingOut ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            ) : (
              <LogOut className="h-4 w-4" aria-hidden />
            )}
            {signingOut ? "กำลังออกจากระบบ…" : "ออกจากระบบ"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
