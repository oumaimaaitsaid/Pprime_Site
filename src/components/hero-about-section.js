"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function HeroAboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      image: "/images/about/user.png",
      title: "Équipes Dédiées",
      description: "Engagés à aider nos clients à atteindre leurs objectifs, à personnaliser leurs expériences",
    },
    {
      image: "/images/about/handshake.png",
      title: "Vrais Partenaires",
      description:
        "Notre fort sentiment d'identification avec les projets des clients signifie que nous nous efforçons constamment",
    },
    {
      image: "/images/about/globe.png",
      title: "Savoir-faire Mondial",
      description:
        "Ils ne sont pas encore au courant. Nous adoptons une approche progressive de la technologie et des techniques du marketing",
    },
    {
      image: "/images/about/innovation.png",
      title: "Concentrez-vous sur l'innovation",
      description:
        "Ce sentiment d'identification signifie également que nous valorisons et promouvons une interaction fluide",
    },
  ]

  return (
    <div className="relative w-full bg-gray-50">
      {/* Image de fond */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src="/images/hero-about-bg.jpg"
          alt="Panneaux solaires et éoliennes"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Bloc bleu - responsive */}
      <div className="relative -mt-20 md:-mt-32 lg:-mt-40 mx-4 md:mx-8 lg:mx-[150px] bg-[#042433] text-white">
        <div className="px-6 py-8 md:px-10 md:py-12 lg:py-16">
          <div className="max-w-[1000px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-10">
              {/* Titre */}
              <div
                className={`w-full lg:w-1/2 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h1 className="text-4xl md:text-2xl lg:text-4xl font-bold text-white leading-tight mb-8 lg:mb-0 text-center lg:text-left">
                  Nous sommes
                  
                  étroitement
                  <br />
                  connectés à nos
                  <br />
                  communautés.
                </h1>
              </div>

              {/* Fonctionnalités - layout mobile centré, desktop en grille */}
              <div className="w-full lg:w-1/2">
                {/* Version mobile - colonne unique centrée */}
                <div className="lg:hidden space-y-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`text-white text-center transition-all duration-1000 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="mb-4 flex justify-center">
                        {feature.image && (
                          <Image
                            src={feature.image || "/placeholder.svg?height=48&width=48"}
                            alt={feature.title}
                            width={48}
                            height={48}
                            className="w-12 h-12 object-contain"
                          />
                        )}
                      </div>
                      <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                      <p className="text-sm text-[#CBCBCB] leading-relaxed max-w-xs mx-auto">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* Version desktop - grille 2x2 */}
                <div className="hidden lg:grid grid-cols-2 gap-14">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`text-white transition-all duration-1000 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="mb-4">
                        {feature.image && (
                          <Image
                            src={feature.image || "/placeholder.svg?height=48&width=48"}
                            alt={feature.title}
                            width={48}
                            height={48}
                            className="w-12 h-12 object-contain"
                          />
                        )}
                      </div>
                      <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                      <p className="text-xs text-[#CBCBCB] leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Espacement en bas */}
      <div className="h-16 md:h-24 lg:h-32"></div>
    </div>
  )
}
