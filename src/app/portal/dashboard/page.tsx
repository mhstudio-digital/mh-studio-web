"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { collection, getDocs, query, where } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { Check } from "lucide-react";
import { auth, db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

const STAGES = [
  "Solicitud recibida",
  "En diseño",
  "En desarrollo",
  "En revisión",
  "Entregado",
];

type Proyecto = {
  id: string;
  nombre: string;
  estado: string;
  notas?: string[];
};

export default function DashboardPage() {
  const { user, profile, loading } = useAuth();
  const router = useRouter();

  const [proyecto, setProyecto] = useState<Proyecto | null>(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) router.replace("/portal/login");
  }, [user, loading, router]);

  useEffect(() => {
    if (!user) return;

    const fetchProyecto = async () => {
      const q = query(
        collection(db, "proyectos"),
        where("clienteUid", "==", user.uid),
      );
      const snapshot = await getDocs(q);
      const first = snapshot.docs[0];
      setProyecto(
        first ? ({ id: first.id, ...first.data() } as Proyecto) : null,
      );
      setFetching(false);
    };

    fetchProyecto();
  }, [user]);

  if (loading || !user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-mh-bg">
        <p className="text-sm text-mh-muted">Cargando…</p>
      </main>
    );
  }

  const currentIndex = proyecto ? STAGES.indexOf(proyecto.estado) : -1;

  return (
    <main className="min-h-screen bg-mh-bg px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-12 flex items-center justify-between">
          <Link href="/" className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-white">MH</span>
            <span className="text-lg font-light text-mh-muted">Studio</span>
          </Link>
          <button
            type="button"
            onClick={() => signOut(auth)}
            className="text-sm text-mh-muted transition-colors hover:text-white"
          >
            Cerrar sesión
          </button>
        </header>

        <h1 className="text-2xl font-semibold text-white sm:text-3xl">
          Hola, {profile?.nombre || user.email} 👋
        </h1>
        <p className="mt-2 text-sm text-mh-muted">
          Aquí puedes ver el estado de tu proyecto.
        </p>

        {fetching ? (
          <p className="mt-12 text-sm text-mh-muted">Cargando proyecto…</p>
        ) : proyecto ? (
          <div className="mt-12 flex flex-col gap-8">
            <section className="rounded-2xl border border-mh-border bg-mh-surface/40 p-8">
              <h2 className="text-lg font-semibold text-white">
                {proyecto.nombre}
              </h2>

              <ol className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-0">
                {STAGES.map((stage, index) => {
                  const isDone = index < currentIndex;
                  const isCurrent = index === currentIndex;

                  return (
                    <li
                      key={stage}
                      className="flex items-start gap-3 sm:flex-1 sm:flex-col sm:items-center sm:gap-2 sm:text-center"
                    >
                      <div className="flex items-center sm:w-full">
                        {index > 0 && (
                          <span
                            className={`hidden h-px flex-1 sm:block ${
                              isDone || isCurrent ? "bg-white/40" : "bg-mh-border"
                            }`}
                          />
                        )}
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs ${
                            isDone
                              ? "border-white bg-white text-mh-bg"
                              : isCurrent
                                ? "border-white text-white"
                                : "border-mh-border text-mh-muted"
                          }`}
                        >
                          {isDone ? <Check className="h-3.5 w-3.5" /> : index + 1}
                        </span>
                        {index < STAGES.length - 1 && (
                          <span
                            className={`hidden h-px flex-1 sm:block ${
                              isDone ? "bg-white/40" : "bg-mh-border"
                            }`}
                          />
                        )}
                      </div>
                      <span
                        className={`text-xs sm:mt-1 sm:text-sm ${
                          isCurrent
                            ? "font-medium text-white"
                            : isDone
                              ? "text-white/70"
                              : "text-mh-muted"
                        }`}
                      >
                        {stage}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </section>

            {proyecto.notas && proyecto.notas.length > 0 && (
              <section className="rounded-2xl border border-mh-border bg-mh-surface/40 p-8">
                <h2 className="text-lg font-semibold text-white">
                  Notas del proyecto
                </h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {proyecto.notas.map((nota, index) => (
                    <li
                      key={index}
                      className="rounded-lg border border-mh-border bg-mh-bg/60 px-4 py-3 text-sm text-mh-muted"
                    >
                      {nota}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        ) : (
          <p className="mt-12 text-sm text-mh-muted">
            Aún no tienes un proyecto activo. Contáctanos para iniciar uno.
          </p>
        )}
      </div>
    </main>
  );
}
