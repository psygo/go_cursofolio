import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-950 font-sans">
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-12">
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

        <section className="mt-16 grid gap-8 md:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
                Descomplicando o Go.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                Uma coletânea de cursos de Go para todos os níveis, por um
                jogador de nível <em>dan</em> com mais de 14 anos de experiência
                e mais de 6 anos ensinando Go. Se você quer aprender Go de forma
                rápida e eficiente, com foco em práticas recomendadas e exemplos
                do mundo real, confira meus cursos e comece sua jornada hoje
                mesmo!
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-4xl">
            <div
              className="aspect-4/5 max-h-100 overflow-hidden rounded-[28px] bg-slate-200"
              style={{
                backgroundImage: "url(/philippe_playing_go_1.png)",
                backgroundSize: "cover",
                backgroundPosition: "top center",
              }}
              aria-hidden="true"
            />
          </div>
        </section>
      </main>
    </div>
  )
}
