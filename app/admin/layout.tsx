import { UserMenu } from "@/components/admin/UserMenu";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-brand-bg">
      <header className="sticky top-0 z-40 border-b border-brand-sand bg-white">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
          <Link href="/admin/dashboard" className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-brand-black tracking-heading" lang="th">
              โคตร QR
            </span>
            <span className="text-xs font-medium text-brand-steel">Code QR</span>
          </Link>
          <UserMenu email={user.email ?? ""} />
        </div>
      </header>
      <div className="mx-auto max-w-[1200px] px-6 py-6">{children}</div>
    </div>
  );
}
