"use client"
import Image from "next/image"

export default function PartnersSection() {
  const partners = [
    { name: "OCP", logo: "/images/partners/ocp.png" },
    { name: "delassus", logo: "/images/partners/delassus.png" },
    { name: "comaprim", logo: "/images/partners/comaprim.png" },
    { name: "soremed", logo: "/images/partners/soremed.png" },
    { name: "Azura", logo: "/images/partners/azura.png" },
    { name: "Copag", logo: "/images/partners/Copag.png" },
    { name: "GPC", logo: "/images/partners/gpc.png" },
    { name: "Domaine", logo: "/images/partners/Domaine.png" },
    { name: "Doha", logo: "/images/partners/doha.png" },
    { name: "Partner 10", logo: "/images/partners/partner-10.png" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#042433] mb-4">
            Nous travaillons également
            <br />
            avec nos meilleurs partenaires
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            De nombreuses marques mondiales des plus connues pour
            <br />
            notre vaste expérience des lieux
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 max-w-full h-auto"
                onError={(e) => {
                  e.target.src = "/placeholder.svg?height=60&width=120"
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
