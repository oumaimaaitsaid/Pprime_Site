import Image from "next/image"
import Link from "next/link"

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
      <div className="absolute top-120 max-w-[1220px] left-[124px] right-[124px] bg-[#042433] text-white h-[350px] flex items-center">
        <div className="max-w-[1480px] mx-auto w-full px-6 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Texte gauche */}
          <div className="w-full md:w-1/2 text-2xl md:text-3xl font-bold leading-snug">
            Experts en installations électriques,<br />
            nous proposons nos services dans une variété de domaines
          </div>

          {/* Texte droit + bouton */}
          <div className="w-full md:w-1/3 text-sm leading-relaxed">
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#042433] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition"
            >
              Découvrez pprime →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
