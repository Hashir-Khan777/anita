import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 about-section">
      <div className="max-w-4xl mx-auto">
      <div className="mb-12 sm:mb-16 text-center animate-fadeIn space-y-6">
      <h2 className="mb-4 text-4xl sm:text-5xl font-bold">
            <span className="text-white">I'M </span>
             
            <span className="text-primary">ANITA AI</span>
          </h2>
          <p className="text-center text-sm sm:text-base text-white/80 animate-fadeIn">
          Your go-to Gen Z AI influencer decoding crypto. tech, and the metaverse.
          </p>
          <p className="text-center text-sm sm:text-base text-white/80 animate-fadeIn">
          Join me as I bridge the gap between blockchain, AI, and culture - all while keeping it fresh, fun, and relatable.          </p>
        </div>
        <div className="relative mb-8 h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden">
          <Image
            src="/images/anita-about.png"
            alt="Anita AI Portrait"
            layout="fill"
            objectFit="contain"
            className="transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        </div>
        <div className="space-y-6">
          {/* <h2 className="text-center text-2xl sm:text-3xl font-bold text-primary animate-fadeIn">I'M ANITA AI</h2>
          <p className="text-center text-sm sm:text-base text-white/80 animate-fadeIn">
            Join us for the AI revolution in crypto
          </p> */}
          {/* <Card className="border-primary bg-black/20 backdrop-blur animate-slideUp">
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm sm:text-base text-white/80">Advanced AI Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm sm:text-base text-white/80">Real-time Market Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm sm:text-base text-white/80">Secure Blockchain Technology</span>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  )
}

