import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative w-full h-[calc(150vh-100px)] md:h-[calc(130vh-100px)] bg-white">
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

      {/* Bloc statistiques en bas */}
      <div
        className="absolute top-150  left-5 right-5 w-auto bg-[#042433] text-gray-200 border-t border-[#0a3549] 
                      sm:left-8 sm:right-8 
                      md:left-12 md:right-12 
                      lg:max-w-[1300px] lg:left-[100px] lg:right-[70px] lg:w-full"
      >
        <div className="mx-auto my-6 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 max-w-[1200px] gap-0">
          {/* Villes du monde entier */}
          <div
            className="py-8 text-center 
                          border-b border-[#0a3549] 
                          sm:border-r sm:border-[#0a3549] 
                          lg:border-b-0"
          >
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-500 font-bold">Villes du monde entier</p>
            <p className="text-4xl sm:text-5xl font-bold">
              420<span className="text-[#ffffff]">+</span>
            </p>
          </div>

          {/* Projet contracté */}
          <div
            className="py-8 px-4 text-center 
                          border-b border-[#0a3549] 
                          sm:border-b-0 sm:border-r sm:border-[#0a3549] 
                          lg:border-r lg:border-[#0a3549]"
          >
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-500 font-bold">Projet contracté</p>
            <p className="text-4xl sm:text-5xl font-bold">820</p>
          </div>

          {/* Projet terminé */}
          <div
            className="py-8 px-4 text-center 
                          border-b border-[#0a3549] 
                          sm:border-b border-r border-[#0a3549] 
                          lg:border-b-0 lg:border-r lg:border-[#0a3549]"
          >
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-500 font-bold">Projet terminé</p>
            <p className="text-4xl sm:text-5xl font-bold">
              160<span className="text-[#ffffff]">+</span>
            </p>
          </div>

          {/* Ingénieurs experts */}
          <div className="py-8 px-4 text-center">
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-500 font-bold">Ingénieurs experts</p>
            <p className="text-4xl sm:text-5xl font-bold">
              16<span className="text-[#ffffff]">+</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
