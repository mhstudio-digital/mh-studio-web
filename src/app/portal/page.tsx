"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function PortalIndexPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    router.replace(user ? "/portal/dashboard" : "/portal/login");
  }, [user, loading, router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-mh-bg">
      <p className="text-sm text-mh-muted">Cargando…</p>
    </main>
  );
}
