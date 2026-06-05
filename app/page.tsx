import Footer from "./components/footer"
import Nav from "./components/nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-950 font-sans">
      <main className="mx-auto items-center flex min-h-screen max-w-9xl flex-col px-6 py-6 md:py-8">
        <Nav />

        <section className="mx-auto max-w-8xl mt-14 flex flex-col gap-8 lg:gap-40 xl:gap-48 md:flex-row md:items-center">
          <div className="flex-1 min-w-0 space-y-8">
            <div className="space-y-6 max-w-xl">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
                Descomplicando o Go
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">
                Uma coletânea de cursos de Go para todos os níveis, por um
                jogador de nível <em>dan</em> com mais de 14 anos de experiência
                e mais de 6 anos ensinando Go. Se você quer aprender Go de forma
                rápida e eficiente, com o foco em técnicas e princípios, confira
                meus cursos e comece sua jornada hoje mesmo!
              </p>
            </div>
          </div>

          <div className="relative flex-1 min-w-0 overflow-hidden rounded-4xl">
            <div
              className="aspect-4/5 max-w-100 max-h-100 overflow-hidden rounded-[28px] bg-slate-200"
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

      <Footer />
    </div>
  )
}
