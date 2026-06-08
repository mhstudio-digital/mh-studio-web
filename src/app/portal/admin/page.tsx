"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { collection, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

const STAGES = [
  "Solicitud recibida",
  "En diseño",
  "En desarrollo",
  "En revisión",
  "Entregado",
];

type ProyectoRow = {
  id: string;
  clienteUid: string;
  nombre: string;
  estado: string;
};

type ClienteInfo = { nombre: string; email: string };

export default function AdminPage() {
  const { user, profile, loading } = useAuth();
  const router = useRouter();

  const [proyectos, setProyectos] = useState<ProyectoRow[]>([]);
  const [clientes, setClientes] = useState<Record<string, ClienteInfo>>({});
  const [fetching, setFetching] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.replace("/portal/login");
    } else if (!profile?.isAdmin) {
      router.replace("/portal/dashboard");
    }
  }, [user, profile, loading, router]);

  useEffect(() => {
    if (!profile?.isAdmin) return;

    const fetchData = async () => {
      const [proyectosSnap, usersSnap] = await Promise.all([
        getDocs(query(collection(db, "proyectos"))),
        getDocs(query(collection(db, "users"))),
      ]);

      const clienteMap: Record<string, ClienteInfo> = {};
      usersSnap.docs.forEach((userDoc) => {
        const data = userDoc.data();
        clienteMap[userDoc.id] = {
          nombre: data.nombre ?? "",
          email: data.email ?? "",
        };
      });

      setClientes(clienteMap);
      setProyectos(
        proyectosSnap.docs.map(
          (proyectoDoc) =>
            ({ id: proyectoDoc.id, ...proyectoDoc.data() }) as ProyectoRow,
        ),
      );
      setFetching(false);
    };

    fetchData();
  }, [profile]);

  const handleEstadoChange = async (proyectoId: string, estado: string) => {
    setSavingId(proyectoId);
    try {
      await updateDoc(doc(db, "proyectos", proyectoId), { estado });
      setProyectos((prev) =>
        prev.map((proyecto) =>
          proyecto.id === proyectoId ? { ...proyecto, estado } : proyecto,
        ),
      );
    } finally {
      setSavingId(null);
    }
  };

  if (loading || !user || !profile?.isAdmin) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-mh-bg">
        <p className="text-sm text-mh-muted">Cargando…</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-mh-bg px-6 py-16">
      <div className="mx-auto max-w-4xl">
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
          Panel de administración
        </h1>
        <p className="mt-2 text-sm text-mh-muted">
          Gestiona el estado de los proyectos de tus clientes.
        </p>

        {fetching ? (
          <p className="mt-12 text-sm text-mh-muted">Cargando proyectos…</p>
        ) : proyectos.length === 0 ? (
          <p className="mt-12 text-sm text-mh-muted">
            Todavía no hay proyectos registrados.
          </p>
        ) : (
          <div className="mt-12 overflow-hidden rounded-2xl border border-mh-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-mh-border bg-mh-surface/40 text-xs uppercase tracking-wide text-mh-muted">
                  <th className="px-6 py-3 font-medium">Cliente</th>
                  <th className="px-6 py-3 font-medium">Proyecto</th>
                  <th className="px-6 py-3 font-medium">Estado</th>
                </tr>
              </thead>
              <tbody>
                {proyectos.map((proyecto) => (
                  <tr
                    key={proyecto.id}
                    className="border-b border-mh-border last:border-0"
                  >
                    <td className="px-6 py-4 text-white">
                      {clientes[proyecto.clienteUid]?.nombre ||
                        clientes[proyecto.clienteUid]?.email ||
                        proyecto.clienteUid}
                    </td>
                    <td className="px-6 py-4 text-mh-muted">
                      {proyecto.nombre}
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={proyecto.estado}
                        disabled={savingId === proyecto.id}
                        onChange={(event) =>
                          handleEstadoChange(proyecto.id, event.target.value)
                        }
                        className="rounded-lg border border-mh-border bg-mh-bg px-3 py-1.5 text-sm text-white outline-none transition-colors focus:border-white/40 disabled:opacity-50"
                      >
                        {STAGES.map((stage) => (
                          <option key={stage} value={stage} className="bg-mh-bg">
                            {stage}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
