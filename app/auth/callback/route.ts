import { safeAdminNextParam } from "@/lib/auth/redirect";
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const next =
    safeAdminNextParam(url.searchParams.get("next")) ?? "/admin/dashboard";

  if (code) {
    const supabase = createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      return NextResponse.redirect(`${url.origin}/login`);
    }
  }

  return NextResponse.redirect(`${url.origin}${next}`);
}
