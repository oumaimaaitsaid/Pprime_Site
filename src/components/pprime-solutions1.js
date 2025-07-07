import { Zap, Settings, Wrench, Building, Lightbulb } from "lucide-react"

const solutions = [
  {
    icon: Zap,
    title: "Green Energy Solutions",
    description:
      "PPrime offre des solutions durables, facilitant la transition de ses clients vers les énergies renouvelables et leur permettant de tirer parti de leurs nombreux avantages.\nNos solutions permettent :\nLa réalisation d'économies significatives sur les coûts énergétiques à long terme.\nLa création d'un impact positif sur l'environnement.\nL'utilisation de technologies innovantes pour une efficacité accrue et une meilleure gestion des ressources.",
  },
  {
    icon: Settings,
    title: "Electrical Engineering",
    description:
      "PPrime conçoit et fabrique des tableaux électriques sur mesure en respectant les besoins spécifiques de ses clients, tout en respectant les normes réglementaires en vigueur telles que l'IEC 61439. Sous le label PANEL BUILDER BY EATON, nous offrons une gamme de produits testés, incluant la série Xenergy Main jusqu'à 4000A et la série Xenergy Light jusqu'à 1600A, ainsi qu'une variété de tableaux et coffrets d'automatisme. Chaque produit est conçu pour assurer des performances fiables et une sécurité optimale, adaptées à une variété d'applications industrielles et commerciales.",
  },
  {
    icon: Building,
    title: "Facility Services",
    description:
      "PPrime assure une maintenance complète avec des services variés et un service après-vente disponible 24h/24. Son engagement envers la qualité se traduit par des garanties solides et une approche proactive des réclamations. Parallèlement, notre équipe réalise des travaux neufs pour toute rénovation, extension ou modification d'installations.",
  },
  {
    icon: Wrench,
    title: "Panel Builder",
    description:
      "PPrime conçoit et fabrique des tableaux électriques sur mesure en respectant sur le marché spécialisé, tout en respectant les normes réglementaires en vigueur telles que l'IEC 61439. Sous le label PANEL BUILDER BY EATON, nous offrons une gamme de produits testés, incluant la série Xenergy Main jusqu'à 4000A et la série Xenergy Light jusqu'à 1600A, ainsi qu'une variété de tableaux et coffrets d'automatisme. Chaque produit est conçu pour assurer des performances fiables et une sécurité optimale, adaptées à une variété d'applications industrielles et commerciales.",
  },
  {
    icon: Lightbulb,
    title: "Smart Solutions",
    description:
      "Pprime offre une gamme complète de services comprenant l'automatisation 4.0, le monitoring industriel, la maintenance 4.0 et l'analyse de données pour optimiser votre performance industrielle.\nLa gestion de l'énergie et des fluides, l'éclairage intelligent, les espaces verts connectés, ainsi que la surveillance météorologique et environnementale pour une gestion urbaine plus intelligente et durable font tous partie des services offerts par Pprime.",
  },
]

export default function PprimeSolutions() {
  return (
    <section className="py-35 bg-white">
      <div className="max-w-[1220px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {solutions.slice(0, 3).map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="bg-white p-8 shadow-sm border-l-4 border-[#042433] hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#3da5d9]/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#010121]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#042433]">{solution.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm">{solution.description}</p>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {solutions.slice(3, 5).map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index + 3}
                className="bg-white p-8  shadow-sm border-l-4 border-[#042433] hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#3da5d9]/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#042433]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002639]">{solution.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm">{solution.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
