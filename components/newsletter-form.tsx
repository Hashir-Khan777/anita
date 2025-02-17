"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Send, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Subscribed:", email)
    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <section className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h2 className="text-4xl sm:text-6xl font-bold text-white text-center mb-12 tracking-tight">NEVER MISS A BEAT</h2>
      <form onSubmit={handleSubmit} className="relative">

        <div className="relative">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            required
            className={cn(
              "text-[28px]/[38px] w-full bg-transparent border-b-2 border-primary rounded-lg px-4 pr-12 h-14",
              "text-white text-xl placeholder:text-white/60",
              "focus-visible:ring-0 focus-visible:border-primary",
            )}
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-primary"
            disabled={isSubmitting}
          >
            {/* {isSubmitting ? <Loader2 className="h-6 w-6 animate-spin" /> : <Send className="h-6 w-6" />} */}
            <img src="./images/send.svg" alt="" />
          </button>
        </div>
      </form>
    </section>
  )
}

