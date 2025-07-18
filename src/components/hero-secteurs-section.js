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
      <div className="absolute bottom-0 left-4 right-4 md:left-[124px] md:right-[124px] bg-[#042433] text-white h-auto md:h-[350px] flex items-center">
        <div className="max-w-[1000px] mx-auto w-full px-4 md:px-6 lg:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10 py-6 md:py-0">
          {/* Texte gauche */}
          <div className="w-full md:w-1/2 text-lg md:text-2xl lg:text-4xl font-bold leading-snug text-center md:text-left">
            De l'énergie pour vos
            <br /> projets, quel que soit leur ampleur !
          </div>

          {/* Texte droit + bouton */}
          <div className="w-full md:w-1/3 text-sm leading-relaxed text-center md:text-left">
            {/* Paragraphe visible sur mobile */}
            <p className="block md:hidden mb-6 text-white/90 text-sm leading-relaxed">
              pprime s'engage à fournir des solutions énergétiques adaptées aux besoins spécifiques de ses clients, avec
              une équipe d'experts dédiée pour vous accompagner et garantir ainsi une alimentation énergétique fiable et
              durable pour vos projets.
            </p>

            {/* Paragraphe complet sur desktop */}
            <p className="hidden md:block mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>

            
           <a
  href="https://www.linkedin.com/company/p-prime/posts/?feedView=all"
  target="_blank"
  rel="noopener noreferrer"
          className="bg-[#ffffff] text-[#002639] text-xs px-6 py-3 rounded-full inline-flex  items-center gap-1 font-bold transition-all group
                     hover:bg-[#3da5d9] hover:text-white"
        >
          Découvrez pprimer
          <div
            className="bg-[#002639] border border-white w-6 h-6 rounded-2xl ml-2  flex items-center justify-center transition-all
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
      </div>    </div>
  )
}
