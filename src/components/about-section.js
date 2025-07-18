import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section
      className="relative py-20 min-h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/about-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay léger pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Contenu centré */}
      <div className="relative z-10 max-w-[1220px] mx-auto px-6">
        <div className="flex justify-center">
          <div className="bg-[#042433] text-white p-12 md:p-16 rounded-lg max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">À PROPOS DE NOUS</h2>
            <p className="text-lg mb-8 leading-relaxed opacity-90">
              Pprime œuvre dans le domaine des installations électriques destinées aux secteurs agricole,
              agroalimentaire, tertiaire et industriel.
            </p>


              <a
  href="https://www.linkedin.com/company/p-prime/posts/?feedView=all"
  target="_blank"
  rel="noopener noreferrer"
          className="bg-[#ffffff] text-[#002639]  px-8 py-4 rounded-full inline-flex items-center gap-3 font-semibold transition-all group
                     hover:bg-[#3da5d9] hover:text-white"
        >
          Découvrez pprimer
          <div
            className="bg-[#002639] border border-white w-8 h-8 rounded-full flex items-center justify-center transition-all
                       group-hover:bg-[#3da5d9] group-hover:border-white"
          >
            <ArrowUpRight
              className="w-4 h-4 text-white transition-transform duration-300 rotate-45
                         group-hover:rotate-0 group-hover:text-[#ffffff]"
            />
          </div>
        </a>

          </div>
        </div>
      </div>
    </section>
  )
}
