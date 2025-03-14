import Image from "next/image"

const timelineItems = [
  {
    date: "Q4 2024",
    title: "CONCEPTUALIZATION & PRIVATE SALE",
    description:
      "Anita AI was born – merging AI, blockchain, and influencer culture. The $ANITA token concept took shape, setting the foundation for something groundbreaking.",
    image: "/images/evolution1.svg",
    alt: "Laptop with code",
  },
  {
    date: "Q1 2025",
    title: "IDO/IEO & TOKEN LAUNCH ON SOLANA",
    description:
      "$ANITA officially goes live! Public sale and token listing on Solana, bringing the community closer to the future of AI-driven influence.",
    image: "/images/evolution2.svg",
    alt: "Megaphone",
  },
  {
    date: "Q2 2025",
    title: "CEX PARTNERSHIPS & GOVERNANCE PROPOSALS",
    description:
      "Major exchange listings unlock new opportunities, and governance proposals give the community a say in Anita's evolution.",
    image: "/images/evolution3.svg",
    alt: "Social media interface",
  },
  {
    date: "Q3 2025",
    title: "ADVANCED DASHBOARD & COLLABORATIONS",
    description:
      "$ANITA expands beyond crypto talk – integrating analytics, dashboard utilities, and exclusive collabs with top blockchain projects.",
    image: "/images/evolution4.svg",
    alt: "Dashboard interface",
  },
  {
    date: "Q4 2025",
    title: "WATCH THIS SPACE",
    description:
      "What's next for Anita AI? Stay tuned as she continues pushing boundaries, reshaping AI influence, and making crypto mainstream.",
    image: "/images/evolution5.svg",
    alt: "AI pattern visualization",
  },
]

export function EvolutionSection() {
  return (
    <section className="relative bg-black px-4 sm:px-6 py-0 md:py-24 evolution">
      
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center animate-fadeIn">
          <h2 className="mb-4 text-4xl sm:text-5xl font-bold">
            <span className="text-white">EVOLUTION OF</span>
            <br />
            <span className="text-primary">ANITA AI</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-400">
            Witness the journey of Anita AI as we reshape the future of crypto and AI integration.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative px-2">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary " />

          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`relative mb-16 ${index % 2 === 0 ? "pr-1/2" : "pl-1/2"} animate-slideUp`}
            >
              <div className="flex flex-row items-start sm:items-center gap-4 ">
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8 order-last"}`}>
                  <div className="relative h-[200px] w-full">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.alt} className="drop-shadow-[0_0_30px_rgba(106,177,49,0.5)]"
                    />
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                <div className={`w-1/2  ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                  <h3 className="mb-2 text-xl font-bold text-primary">{item.date}</h3>
                  <h4 className="mb-2 text-lg sm:text-xl font-bold text-white break-words hyphens-auto">{item.title}</h4>
                  <p className="text-sm sm:text-base text-gray-400 break-words hyphens-auto">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

