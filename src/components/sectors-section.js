import Image from "next/image"
import Link from "next/link"

export default function SectorsSection() {
  const sectors = [
    {
      title: "Infrastructures & Industrie",
      description:
        "Services d'installation, de distribution, d'éclairage, d'automatisation, de sécurité électrique, de maintenance et d'efficacité énergétique pour soutenir le bon fonctionnement et la durabilité des sites industriels et des infrastructures critiques.",
      image: "/images/sectors/infrastructures.jpg",
      link: "/secteurs-activite/infrastructures",
    },
    {
      title: "Agriculture & Agroalimentaire",
      description:
        "Services d'installation, d'éclairage et d'automatisation adaptés aux besoins agricoles. Nous assurons également la sécurité électrique, fournissons des solutions d'alimentation pour les équipements et intégrons des énergies renouvelables, contribuant ainsi à l'efficacité et à la durabilité des exploitations.",
      image: "/images/sectors/agriculture.jpg",
      link: "/secteurs-activite/agriculture",
    },
    {
      title: "Green Tech",
      description:
        "Des services axés sur les énergies renouvelables, l'efficacité énergétique et les technologies intelligentes pour promouvoir la durabilité et la transition vers un avenir énergétique propre.",
      image: "/images/sectors/green-tech.jpg",
      link: "/secteurs-activite/green-tech",
    },
    {
      title: "Tertiaire",
      description:
        "Des services spécialisés pour garantir la sécurité, la fiabilité, l'efficacité énergétique et la continuité des opérations dans les établissements touristiques, les hôpitaux, les cliniques et autres installations de santé.",
      image: "/images/sectors/tertiaire.jpg",
      link: "/secteurs-activite/tertiaire",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#042433] mb-2">Secteurs d'activité</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Ensemble, pour un monde plus lumineux, vert et intelligent.</p>
        </div>

        {/* Grille responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sectors.map((sector, index) => (
            <Link
              key={index}
              href={sector.link}
              className="group block border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Layout mobile : vertical, desktop : horizontal */}
              <div className="flex flex-col md:flex-row h-auto md:h-[340px]">
                {/* Image */}
                <div className="w-full md:w-1/3 bg-[#e6f0f5] p-4 flex items-center justify-center min-h-[200px] md:min-h-0">
                  <div className="relative w-full h-full max-w-[200px] md:max-w-none">
                    <Image
                      src={sector.image || "/placeholder.svg?height=200&width=200"}
                      alt={sector.title}
                      fill
                      className="object-contain"
                      priority={index < 2}
                    />
                  </div>
                </div>

                {/* Contenu texte */}
                <div className="w-full md:w-2/3 bg-gray-50 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-[#042433] mb-4 group-hover:text-[#0a5a73] transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{sector.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
