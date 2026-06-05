import Link from "next/link"

export default function Nav() {
  return (
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
  )
}
