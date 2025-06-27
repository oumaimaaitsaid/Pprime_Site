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

  const infinitePartners = [...partners, ...partners, ...partners,...partners]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1500px] mx-auto px-6">
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

        {/* Carrousel vraiment infini */}
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-12 animate-infinite-scroll">
            {infinitePartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-40"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 max-w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-infinite-scroll {
          animation: infiniteScroll 40s linear infinite;
          width: max-content;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
