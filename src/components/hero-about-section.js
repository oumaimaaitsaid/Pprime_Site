"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function HeroAboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  

  return (
    <div className="relative w-full h-[calc(130vh-100px)] mb-60 bg-gray-50">
     

      {/* Bloc bleu en bas */}
      <div className="absolute top-120 max-w-[1220px] left-[150px] right-[150px] bg-[#042433] text-white h-[600px] flex items-center">
        <div className="max-w-[1000px] mx-auto w-full px-6 md:px-10 flex flex-col lg:flex-row justify-between items-start gap-10">
         

          {/* Grille de fonctionnalités à droite */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-14">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="mb-4">
                  {/* Utilisation d'images PNG */}
                  {feature.image && (
                    <Image
                      src={feature.image || "/placeholder.svg"}
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
  )
}
