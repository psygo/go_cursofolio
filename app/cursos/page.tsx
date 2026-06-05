import Nav from "../components/nav"

export default function Courses() {
  return (
    <div className="min-h-screen bg-white text-slate-950 font-sans">
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-12">
        <Nav />

        <section className="mx-auto max-w-8xl mt-16 flex flex-col gap-8 lg:gap-40 xl:gap-48 md:flex-row md:items-center">
          <div className="flex flex-col gap-4">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                  Curso de Go para Iniciantes
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-slate-600">
                  Um curso do zero que aborda as regras, fundamentos de
                  abertura, táticas e a história do Go.
                </p>
              </div>
            </div>

            <div className="max-w-150 overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.15)]">
              <div className="aspect-video w-full overflow-hidden bg-black">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/nIs6yKuL8ZE?list=PLMYMhzMuvitQAPXYv--bdqRJIJGwGMdMe"
                  title="Curso de Go"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
