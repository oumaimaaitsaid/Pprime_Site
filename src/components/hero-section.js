import Image from "next/image"

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

     

      {/* Bloc statistiques en bas */}
      <div className="max-w-[1300px]  left-[70px] right-[70px] absolute bottom-0 w-full bg-[#042433] text-gray-200 border-t border-[#0a3549]">
        <div className=" max-w-[1200px]  mx-auto my-6 grid grid-cols-4">
          {/* Villes du monde entier */}
          <div className="py-8 text-center border-r border-[#0a3549]">
            <p className="text-lg mb-6 text-gray-500 font-bold">Villes du monde entier</p>
            <p className="text-5xl font-bold">
              420<span className="text-[#ffffff]">+</span>
            </p>
          </div>

          {/* Projet contracté */}
          <div className="py-8 px-4 text-center border-r border-[#0a3549]">
            <p className="text-lg mb-6 text-gray-500 font-bold">Projet contracté</p>
            <p className="text-5xl font-bold">820</p>
          </div>

          {/* Projet terminé */}
          <div className="py-8 px-4 text-center border-r border-[#0a3549]">
            <p className="text-lg mb-6 text-gray-500 font-bold">Projet terminé</p>
            <p className="text-5xl font-bold">
              160<span className="text-[#ffffff]">+</span>
            </p>
          </div>

          {/* Ingénieurs experts */}
          <div className="py-8 px-4 text-center">
            <p className="text-lg mb-6 text-gray-500 font-bold">Ingénieurs experts</p>
            <p className="text-5xl font-bold">
              16<span className="text-[#ffffff]">+</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
