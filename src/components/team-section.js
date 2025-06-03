import Image from "next/image"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Mohammed Elhabib Abaakil",
      role: "CEO",
      image: "/images/team/member-1.jpg", 
    },
    {
      name: "Mohammed Elhabib Abaakil",
      role: "CEO",
      image: "/images/team/member-2.jpg", 
    },
    {
      name: "Mohammed Elhabib Abaakil",
      role: "CEO",
      image: "/images/team/member-3.jpg", 
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#042433] mb-4">Our teams</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ensemble, pour un monde plus lumineux, vert et intelligent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={465}
                  className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay avec nom en bas */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
