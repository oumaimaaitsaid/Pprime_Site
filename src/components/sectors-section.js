import Image from "next/image"
import Link from "next/link"

export default function SectorsSection() {
  const sectors = [
    {
      title: "Infrastructures & Industrie",
      description:
        "Services d'installation, de distribution, d'éclairage, d'automatisation, de sécurité électrique, de maintenance et d'efficacité énergétique pour soutenir le bon fonctionnement et la durabilité des Sites industriels et des infrastructures critiques.",
      image: "/images/sectors/infrastructures.jpg", // Chemin vers votre vraie image
      link: "/secteurs-activite/infrastructures",
    },
    {
      title: "Agriculture & Agroalimentaire",
      description:
        "Services d'installations, d'éclairage et d'automatisation adaptés aux besoins spécifiques de l'agriculture et de la sécurité électrique, fournissons des solutions d'alimentation pour les équipements agricoles et les systèmes renouvelables, contribuant ainsi à l'efficacité et à la durabilité des exploitations.",
      image: "/images/sectors/agriculature.jpg", // Chemin vers votre vraie image
      link: "/secteurs-activite/agriculture",
    },
    {
      title: "Green Tech",
      description:
        "Des services axés sur les énergies renouvelables, l'efficacité énergétique et les technologies intelligentes pour promouvoir la durabilité et la transition vers un avenir énergétique propre.",
      image: "/images/sectors/green-tech.jpg", // Chemin vers votre vraie image
      link: "/secteurs-activite/green-tech",
    },
    {
      title: "Tertiaire",
      description:
        "Des services spécialisés pour garantir la sécurité, la fiabilité, l'efficacité énergétique et le confort dans les bureaux, les établissements touristiques, les hôpitaux, les cliniques et autres installations de santé.",
      image: "/images/sectors/tertiaire.jpg", // Chemin vers votre vraie image
      link: "/secteurs-activite/tertiaire",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#042433] mb-4">Secteurs d'activité</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ensemble, pour un monde plus lumineux, vert et intelligent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {sectors.map((sector, index) => (
            <div key={index} className="flex gap-6 group">
              {/* Image à gauche */}
              <div className="flex-shrink-0">
                <div className="w-32 h-24 md:w-40 md:h-28 rounded-lg overflow-hidden bg-blue-100">
                  <Image
                    src={sector.image || "/placeholder.svg"}
                    alt={sector.title}
                    width={160}
                    height={112}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={index < 2} // Charge en priorité les 2 premières images
                  />
                </div>
              </div>

              {/* Contenu à droite */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#042433] mb-3 group-hover:text-[#3da5d9] transition-colors">
                  {sector.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{sector.description}</p>
                <Link
                  href={sector.link}
                  className="inline-flex items-center gap-2 text-[#3da5d9] font-semibold text-sm hover:gap-3 transition-all"
                >
                  En savoir plus
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
