"use client"

import { useEffect, useState } from "react"

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    {
      number: "420",
      suffix: "+",
      label: "Villes du monde entier",
    },
    {
      number: "820",
      suffix: "",
      label: "Projet contracté",
    },
    {
      number: "160",
      suffix: "+",
      label: "Projet terminé",
    },
    {
      number: "16",
      suffix: "+",
      label: "Ingénieurs experts",
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
    <section id="stats-section" className="py-16 bg-gray-50">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2">
                <p className="text-sm text-gray-600 mb-3">{stat.label}</p>
                <span
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#042433] transition-all duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  <CountUpNumber end={Number.parseInt(stat.number)} duration={2000} start={isVisible} />
                  <span className="text-[#3da5d9]">{stat.suffix}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
