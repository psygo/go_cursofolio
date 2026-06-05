import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-950 font-sans">
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 py-12">
        <nav className="w-full">
          <div className="mx-auto flex w-full max-w-xl justify-center">
            <ul className="flex flex-wrap items-center justify-center gap-3 rounded-full bg-slate-100 px-4 py-3 shadow-lg ring-1 ring-slate-200">
              <li>
                <Link
                  href="/"
                  className="rounded-full bg-slate-950/5 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/cursos"
                  className="rounded-full px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-200"
                >
                  Cursos
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="mt-20 w-full text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
            Top menu implemented
          </p>
        </div>
      </main>
    </div>
  )
}
