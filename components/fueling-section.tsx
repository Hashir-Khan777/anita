import { Button } from "@/components/ui/button"
import Image from "next/image"

export function FuelingSection() {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 py-12 sm:py-16">
      <div className="relative z-10 container mx-auto flex flex-col items-center">
        {/* Mobile Frame Container */}
        <div className="relative w-full max-w-sm aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl animate-fadeIn">
          <Image
            src="/images/anita.svg"
            alt="Anita AI - Fueling the AI Revolution in Crypto"
            layout="fill"
            objectFit="cover"
            priority
          />

          {/* Text Overlay */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
            <h3 className="text-primary text-2xl font-bold mb-1">$ANITA</h3>
            <p className="text-white text-lg font-bold leading-tight mb-2 text-center">
              FUELING THE AI REVOLUTION IN CRYPTO
            </p>
            <p className="text-gray-300 text-xs text-center max-w-[250px]">
              The core of Anita AI—powering rewards, governance, and exclusive access.
            </p>
          </div>
        </div>

        {/* Chat Button */}
        <Button className="w-full max-w-md mx-auto mt-8 animate-slideUp">CHAT WITH ME</Button>
      </div>
    </section>
  )
}

