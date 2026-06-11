import Footer from "../components/footer"
import Nav from "../components/nav"

type Course = {
  index: number
  title: string
  description: string
  url: string
}

function Course({ index, title, description, url }: Course) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="flex-1 border-t border-slate-200" />
        <span className="rounded-full bg-white px-4 py-1 text-sm md:text-lg font-semibold text-slate-950 shadow-sm">
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
    </div>
  )
}

export default function Courses() {
  return (
    <div className="min-h-screen bg-white text-slate-950 font-sans">
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 md:py-8">
        <Nav />

        <section className="mx-auto max-w-8xl mt-14 flex flex-col gap-8 md:px-10">
          <Course
            index={1}
            title="As Regras do Go"
            description="As regras. Descomplicadas."
            url="https://www.youtube.com/embed/MMR_3EZTTFw?list=PLMYMhzMuvitQAPXYv--bdqRJIJGwGMdMe"
          />
          <Course
            index={2}
            title="Curso de Go para Iniciantes"
            description="Um curso do zero que aborda as regras, fundamentos de abertura, táticas e a história do Go."
            url="https://www.youtube.com/embed/nIs6yKuL8ZE?list=PLMYMhzMuvitQAPXYv--bdqRJIJGwGMdMe"
          />
          <Course
            index={3}
            title="Abertura do Zero | Volume 1"
            description="Um curso do zero que aborda os princípios básicos da abertura do Go, além de movimentos de canto, josekis básicos e algumas das aberturas mais famosas."
            url="https://www.youtube.com/embed/7zpef07ei5U?list=PLLWr-AWriURE"
          />
          <div className="border-t border-slate-200 my-1" />
        </section>
      </main>

      <Footer />
    </div>
  )
}
