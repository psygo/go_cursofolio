import Nav from "../components/nav"

function Course({
  index,
  title,
  description,
  url,
}: {
  index: number
  title: string
  description: string
  url: string
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="flex-1 border-t border-slate-200" />
        <span className="rounded-full bg-white px-4 py-1 text-sm font-semibold text-slate-950 shadow-sm">
          {index}
        </span>
        <div className="flex-1 border-t border-slate-200" />
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            {description}
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.15)]">
        <div className="aspect-video w-full overflow-hidden bg-black">
          <iframe
            className="h-full w-full"
            src={url}
            title="Curso de Go"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="border-t border-slate-200 my-2" />
    </div>
  )
}

export default function Courses() {
  return (
    <div className="min-h-screen bg-white text-slate-950 font-sans">
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 md:py-8">
        <Nav />

        <section className="mx-auto max-w-8xl mt-14 flex flex-col gap-8 lg:gap-40 xl:gap-48 md:flex-row md:items-center">
          <Course
            index={1}
            title="Curso de Go para Iniciantes"
            description="Um curso do zero que aborda as regras, fundamentos de abertura, táticas e a história do Go."
            url="https://www.youtube.com/embed/nIs6yKuL8ZE?list=PLMYMhzMuvitQAPXYv--bdqRJIJGwGMdMe"
          />
        </section>
      </main>
    </div>
  )
}
