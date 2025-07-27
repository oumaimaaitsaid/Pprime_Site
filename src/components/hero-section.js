
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
// Composant pour l'animation de comptage
function CountUpNumber({ end, duration, start }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, start])

  return <>{count}</>
}

// Composant pour la section des statistiques
function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const stats = [
    {
      number: "420",
      suffix: "+",
      label: "Villes du monde entier",
      borders: "border-b sm:border-r lg:border-b-0",
    },
    {
      number: "820",
      suffix: "",
      label: "Projet contracté",
      borders: "border-b sm:border-b-0 sm:border-r lg:border-r",
    },
    {
      number: "160",
      suffix: "+",
      label: "Projet terminé",
      borders: "border-b sm:border-b sm:border-r lg:border-b-0 lg:border-r",
    },
    {
      number: "16",
      suffix: "+",
      label: "Ingénieurs experts",
      borders: "",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
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
    <section
      id="stats-section" 
      className="bg-[#042433] text-gray-200 border-t border-[#0a3549] w-full"
    >
      <div className="mx-auto my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1200px] gap-0">
        {stats.map((stat, index) => (
          <div key={index} className={`py-8 text-center border-[#0a3549] ${stat.borders}`}>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-500 font-bold">{stat.label}</p>
            <p className="text-4xl sm:text-5xl font-bold mb-3">
              <span
                className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <CountUpNumber end={Number.parseInt(stat.number)} duration={2000} start={isVisible} />
              </span>
              <span className="text-[#3da5d9]">{stat.suffix}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

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
        className="absolute bottom-0 left-5 right-5 w-auto
                   sm:left-8 sm:right-8
                   md:left-12 md:right-12
                   lg:max-w-[1220px] lg:mx-auto lg:left-[100px] lg:right-[70px] lg:w-full"
      >
        <StatsSection /> 
      </div>
    </div>
  )
}
