import Image from "next/image"
import Link from "next/link"
import {  ArrowUpRight } from "lucide-react"

export default function HeroBanner() {
  return (
<div className="relative w-full h-[calc(130vh-100px)] bg-gray-50">      {/* Image de fond à 80% */}
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
      <div className="absolute bottom-0 left-4 right-4 pt-8 pb-8 pr-4 pl-4 md:left-[124px] md:right-[124px] max-w-[1220px] mx-auto bg-[#042433] text-white h-auto md:h-[350px] flex items-center">
        <div className="max-w-[1480px] mx-auto w-full px-4 md:px-6 lg:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10 py-8 md:py-12">
          {/* Texte gauche */}
          <div className="w-full md:w-1/2 text-xl text-center md:text-2xl lg:text-3xl font-bold leading-snug">
            Experts en installations électriques,
            
            nous proposons <br/> nos services dans une variété <br/>de domaines
          </div>

          {/* Texte droit + bouton */}
          <div className="w-full md:w-1/3 text-sm pt-5 leading-relaxed flex flex-col items-center md:items-start">
            <p className=" md:block mb-6 text-center md:text-start">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
        <Link
          href="/contact"
          className="bg-[#ffffff] text-[#002639] text-xs px-6 py-3 rounded-full flex items-center gap-1 font-bold transition-all group
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
        </Link>

          </div>
        </div>
      </div>
    </div>
  )
}
