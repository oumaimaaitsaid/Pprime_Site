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
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-3 bg-white text-[#042433] px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Découvrez pprime
              <div className="bg-[#042433] w-8 h-8 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
