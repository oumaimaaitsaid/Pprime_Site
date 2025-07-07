import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative w-full h-[calc(130vh-100px)] bg-white">
      {/* Image de fond */}
      <div className="relative w-full top-0 h-[100vh]">
        <Image
          src="/images/hero-eolienne.jpg"
          alt="Éoliennes dans un paysage vert"
          fill
          className="object-cover"
          priority
        />
      </div>

     

      {/* Bloc bleu en bas */}
<div className="absolute top-120 max-w-[1220px] left-4 right-4 md:left-[124px] md:right-[124px] bg-[#042433] text-white h-auto md:h-[350px] flex items-center">
  <div className="max-w-[1000px] mx-auto w-full px-4 md:px-6 lg:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10 py-6 md:py-0">
    {/* Texte gauche */}
    <div className="w-full md:w-1/2 text-xl md:text-2xl lg:text-4xl font-bold leading-snug">
      
      De l’énergie pour vos<br/> projets, quel que soit leur ampleur !
    </div>

    {/* Texte droit + bouton */}
    <div className="w-full md:w-1/3 text-sm leading-relaxed">
      {/* Paragraphe masqué sur mobile */}
      <p className="hidden md:block mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 bg-white text-[#042433] px-4 py-2 md:px-6 md:py-3 rounded-full font-medium hover:bg-opacity-90 transition text-sm md:text-base"
      >
        Découvrez pprime →
      </Link>
    </div>
  </div>
</div>
    </div>
  )
}
