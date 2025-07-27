"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Jane Cooper",
      role: "Homeowner",
      image: "/images/testimonials/jane-cooper.jpg",
      content:
        "Avoir de l'énergie solaire nous a rendus plus autonomes. Avec le système de batterie, nous ne nous inquiétons jamais des coupures de courant, et nos factures d'énergie n'ont jamais été aussi basses. C'est un énorme soulagement, surtout pendant la saison des tempêtes.",
    },
    {
      name: "Jack Cooper",
      role: "Directeur Général, AgriTech Solutions",
      image: "/images/testimonials/jack-cooper.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Omar Tazi",
      role: "Directeur d'Usine, IndustriePro",
      image: "/images/testimonials/omar-tazi.jpg",
      content:
        "Grâce à Pprime, nous avons pu moderniser nos installations tout en optimisant notre consommation énergétique. Un investissement rentable et durable.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-20">
          {/* Contenu texte à gauche - sur mobile devient le contenu principal */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#042433] mb-6">
              Que Disent Nos
              <br />
              Clients Précieux
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            {/* Navigation desktop uniquement */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full border border-gray-300 hover:bg-[#042433] hover:text-white transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-[#042433] text-white hover:bg-opacity-90 transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Photo et témoignage à droite */}
           <div className="w-full lg:w-1/1 relative ">
            {/* Wrapper pour la transition */}
            <div
              key={currentTestimonial} 
              className="transition-opacity duration-2000 ease-in-out opacity-100 overflow-hidden items-stretch animate-slide-in-from-right-custom "
            >
              {/* Version desktop avec image */}
              <div className="hidden lg:flex bg-white max-h-[300px] max-w-[800px]  shadow-lg overflow-hidden items-stretch">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonials[currentTestimonial].image || "/placeholder.svg?height=300&width=200"}
                    alt={testimonials[currentTestimonial].name}
                    width={200}
                    height={300}
                    className="object-cover w-full h-[400px]"
                  />
                </div>
                <div className="bg-[#B0C6CE] p-6 flex-1 flex flex-col justify-center min-h-[250px]">
                  <p className="text-white leading-relaxed mb-4 text-sm">
                    {testimonials[currentTestimonial].content}
                  </p>
                  <div>
                    <h4 className="font-bold text-white text-base">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-white text-xs">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>

              {/* Version mobile sans image */}
              <div className="lg:hidden bg-[#B0C6CE] p-6 rounded-lg min-h-[250px]">
                <p className="text-[#042433] leading-relaxed mb-4 text-sm">
                  {testimonials[currentTestimonial].content}
                </p>
                <div>
                  <h4 className="font-bold text-[#042433] text-base">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-[#042433]/70 text-xs">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation mobile en bas */}
            <div className="lg:hidden mt-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full border border-gray-300 hover:bg-[#042433] hover:text-white transition-colors"
                  aria-label="Témoignage précédent"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-[#042433] text-white hover:bg-opacity-90 transition-colors"
                  aria-label="Témoignage suivant"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Indicateurs de pagination */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-[#042433]" : "bg-gray-300"
                  }`}
                  aria-label={`Témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
