

"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const sectors = [
  {
    title: "Infrastructures & Industrie",
    description:
      "Services d'installation, de distribution, d'éclairage, d'automatisation, de sécurité électrique, de maintenance et d'efficacité énergétique pour soutenir le bon fonctionnement et la durabilité des sites industriels et des infrastructures critiques.",
    image: "/images/sectors/infrastructures.jpg",
    imageBg: "/images/sectors/about-background.jpg",
  },
  {
    title: "Agriculture & Agroalimentaire",
    description:
      "Services d'installation, d'éclairage et d'automatisation adaptés aux besoins agricoles. Nous assurons également la sécurité électrique, fournissons des solutions d'alimentation pour les équipements et intégrons des énergies renouvelables, contribuant ainsi à l'efficacité et à la durabilité des exploitations.",
         image: "/images/sectors/agriculture.jpg",
        imageBg: "/images/sectors/hero-eolienne.jpg",
  },
  {
    title: "Green Tech",
    description:
      "Des services axés sur les énergies renouvelables, l'efficacité énergétique et les technologies intelligentes pour promouvoir la durabilité et la transition vers un avenir énergétique propre.",

        image: "/images/sectors/green-tech.jpg",
        imageBg: "/images/sectors/p-dever.jpg",
  },
  {
    title: "Tertiaire",
    description:
      "Des services spécialisés pour garantir la sécurité, la fiabilité, l'efficacité énergétique et la continuité des opérations dans les établissements touristiques, les hôpitaux, les cliniques et autres installations de santé.",
     image: "/images/sectors/tertiaire.jpg",
        imageBg: "/images/sectors/p-health.jpg",
  },
]



export default function SectorsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number.parseInt(entry.target.getAttribute("data-index") || "0", 10)
          if (entry.isIntersecting) {
            setActiveIndex(idx)
          }
        })
      },
      { threshold: 0.5}, 
    )

    document.querySelectorAll(".scroll-section").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative w-full">
      {/* Dynamic Background Image */}
      <div className="fixed inset-0 -z-10 transition-opacity duration-700">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent" />
        {sectors.map((sector, idx) => (
          <Image
            key={idx}
            src={sector.imageBg || "/placeholder.svg"}
            alt=""
            fill
            className={`object-cover transition-opacity duration-700 ${
              activeIndex === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Scrollable Foreground Content */}
      <div className="relative z-10">
        {sectors.map((sector, index) => (
          <section
            key={index}
            data-index={index}
            className="scroll-section min-h-[120vh] flex items-center justify-center px-6 py-1"
          >
            <div className="max-w-6xl mx-auto px-6 py-20">
              <div
                className={`bg-[#EBF2F7] shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-4 p-8 rounded-lg
                  transition-all duration-700 ease-out
                  ${activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                  max-w-4xl w-full h-[auto] md:h-[400px] md:w-[800px]`}
              >
                {/* Image */}
                <div className="flex justify-center items-center p-4">
                  <Image
                    src={sector.image || "/placeholder.svg"}
                    alt={sector.title}
                    width={800}
                    height={800}
                    className="object-contain"
                  />
                </div>
                {/* Text */}
                <div className="flex flex-col justify-center col-span-2 space-y-30">
                  <h2 className="text-3xl font-bold  text-center text-[#042433]">{sector.title}</h2>
                  <p className="text-[#787F82] text-lg text-center leading-relaxed">{sector.description}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
