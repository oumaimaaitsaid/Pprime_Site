"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function LeadershipSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("leadership-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section id="leadership-section" className="flex min-h-[500px] lg:min-h-[800px]">
      {/* Photo à gauche - 50% */}
      <div className="w-1/2 relative">
        <Image src="/images/leadership/ceo-photo.jpg" alt="Dirigeant Pprime" fill className="object-cover" priority />
      </div>

      {/* Contenu à droite - 50% */}
      <div className="w-1/2 bg-[#042433] text-white px-8 py-12 lg:px-16 lg:py-16 flex flex-col justify-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-8 leading-tight">
            Nous avons un impact positif
            <br />à travers le Maroc et au-delà.
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-base lg:text-lg font-bold mb-3 text-white">Stratégie et gouvernance</h3>
              <p className="text-sm lg:text-base text-white/90 leading-relaxed">
                Depuis plus de 20 ans, PPrime s'est imposée comme un acteur clé dans le domaine des installations
                électriques et des technologies vertes. Notre stratégie repose sur l'innovation, la qualité de service
                et l'accompagnement durable de nos clients. Elle soutient les projets les plus exigeants, valorise
                l'efficacité énergétique et favorise des solutions durables.
              </p>
            </div>

            <div>
              <h3 className="text-base lg:text-lg font-bold text-white">Leadership</h3>
            </div>

            <div>
              <h3 className="text-base lg:text-lg font-bold text-white">Priorités et partenariats</h3>
            </div>

            <div>
              <h3 className="text-base lg:text-lg font-bold text-white">Priorités et partenariats</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
