"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav() {
  const pathname = usePathname() || "/"

  const baseLinkClasses =
    "rounded-full px-4 py-2 text-sm font-semibold transition"

  const activeLinkClasses =
    "bg-slate-950/5 text-slate-950 hover:bg-slate-200"
  const inactiveLinkClasses =
    "bg-transparent text-slate-700 hover:bg-slate-200"

  return (
    <nav className="w-full">
      <div className="mx-auto flex w-full max-w-xl justify-center">
        <ul className="flex flex-wrap items-center justify-center gap-3 rounded-full bg-slate-100 px-4 py-3 shadow-lg ring-1 ring-slate-200">
          <li>
            <Link
              href="/"
              className={`${baseLinkClasses} ${
                pathname === "/" ? activeLinkClasses : inactiveLinkClasses
              }`}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="/cursos"
              className={`${baseLinkClasses} ${
                pathname.startsWith("/cursos")
                  ? activeLinkClasses
                  : inactiveLinkClasses
              }`}
            >
              Cursos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
