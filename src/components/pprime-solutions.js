import Image from "next/image"
import Link from "next/link"

export default function PprimeSolutions() {
  const solutions = [
    {
      title: "P ENERGY",
      logo: "/images/logos/hero-about-bg.jpg",
      logoAlt: "Penergy by Pprime",
      description:
        "P Energy permet le monitorage en temps réel de la consommation énergétique et l'analyse des archives. Son intelligence artificielle prédit les coûts futurs et détecte les anomalies électriques, réduisant ainsi les gaspillages et optimisant l'infrastructure énergétique.",
      image: "/images/solutions/p-energy.jpg",
      link: "/solutions/p-energy",
    },
    {
      title: "P HEALTH",
      logo: "/images/logos/phealth-logo.png",
      logoAlt: "Phealth by Pprime",
      description:
        "Solution pour le monitoring des paramètres d'un bloc opératoire : écran tactile antimicrobien et contrôle climatique, éclairage et GTA automatisés, musique intégrée, horloge et chronomètres, alarmes pour l'état des équipements techniques.",
      image: "/images/solutions/p-health.jpg",
      link: "/solutions/p-health",
    },
    {
      title: "Smart Cities",
      logo: "/images/logos/psmart-logo.png",
      logoAlt: "Psmart by Pprime",
      description:
        "Monitoring des paramètres d'un bloc opératoire : réduisez la consommation énergétique grâce à des appareils connectés et optimisez l'irrigation et la qualité de l'air pour une gestion intelligente et efficace",
      image: "/images/solutions/smart-cities.jpg",
      link: "/solutions/smart-cities",
    },
    {
      title: "P I 4.0",
      logo: "/images/logos/pi40-logo.png",
      logoAlt: "I 4.0 by Pprime",
      description:
        "Les solutions de PPrime pour l'Industrie 4.0 permettent l'automatisation, la connectivité, la gestion des coûts, le monitoring en temps réel, la flexibilité et l'analyse des données pour le bloc opératoire.",
      image: "/images/solutions/p-i40.jpg",
      link: "/solutions/p-i40",
    },
    {
      title: "P Dever",
      logo: "/images/logos/pdever-logo.png",
      logoAlt: "P Dever by Pprime",
      description:
        "P Dever Solution offre un déverdissage d'agrumes par PPrime, assurant temps réel et fiabilité. Avec une application mobile, elle propose une solution cloud et locale.",
      image: "/images/solutions/p-dever.jpg",
      link: "/solutions/p-dever",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1220px] mx-auto px-6">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#042433] mb-3">Pprime Solutions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Nos services d'installation électrique couvrent une large gamme de secteurs d'activité
          </p>
        </div>

        {/* Grille des solutions - première rangée (3 colonnes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {solutions.slice(0, 3).map((solution, index) => (
            <Link key={index} href={solution.link} className="block">
              <div className="bg-[#D8E4E9] h-full">
                {/* Image avec logo */}
                <div className="relative h-32">
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                  {/* Logo en haut à gauche */}
                  <div className="absolute top-23 left-5 bg-[#042433] p-3">
                    <div className="relative h-10 w-32">
                      <Image
                        src={solution.logo || "/placeholder.svg"}
                        alt={solution.logoAlt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Contenu texte */}
                <div className="p-5 pt-10 bg-[#D8E4E9]">
                  <h3 className="text-xl font-bold text-[#042433] mb-2">{solution.title}</h3>
                  <p className="text-[#042433]  text-sm text-[12px] font-bold leading-relaxed">{solution.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Deuxième rangée (2 colonnes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {solutions.slice(3, 5).map((solution, index) => (
            <Link key={index} href={solution.link} className="block">
              <div className="bg-[#D8E4E9] h-full">
                {/* Image avec logo */}
                <div className="relative h-48">
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                  {/* Logo en haut à gauche */}
                  <div className="absolute top-40 left-5 bg-[#042433] p-3">
                    <div className="relative h-10 w-32">
                      <Image
                        src={solution.logo || "/placeholder.svg"}
                        alt={solution.logoAlt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Contenu texte */}
                <div className="p-5 pt-10 bg-[#D8E4E9]">
                  <h3 className="text-xl font-bold text-[#042433] mb-2">{solution.title}</h3>
                  <p className="text-[#042433]  text-sm text-[12px] font-bold leading-relaxed">{solution.description}</p>
                </div>
               
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
