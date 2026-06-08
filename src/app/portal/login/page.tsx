"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

export default function PortalLoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) router.replace("/portal/dashboard");
  }, [user, loading, router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/portal/dashboard");
    } catch {
      setError("Email o contraseña incorrectos.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-mh-bg px-6">
      <div className="w-full max-w-sm">
        <Link
          href="/"
          className="mb-10 flex items-baseline justify-center gap-1.5"
        >
          <span className="text-lg font-bold text-white">MH</span>
          <span className="text-lg font-light text-mh-muted">Studio</span>
        </Link>

        <div className="rounded-2xl border border-mh-border bg-mh-surface/40 p-8">
          <h1 className="text-xl font-semibold text-white">
            Portal de clientes
          </h1>
          <p className="mt-1 text-sm text-mh-muted">
            Inicia sesión para ver el estado de tu proyecto.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs uppercase tracking-wide text-mh-muted"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="rounded-lg border border-mh-border bg-mh-bg px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-white/40"
                placeholder="tu@email.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-xs uppercase tracking-wide text-mh-muted"
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="rounded-lg border border-mh-border bg-mh-bg px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-white/40"
                placeholder="••••••••"
              />
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-mh-bg transition-transform hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-50"
            >
              {submitting ? "Ingresando…" : "Iniciar sesión"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
