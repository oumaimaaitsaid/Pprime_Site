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
       
      </div>
    </section>
  )
}
