"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function PodcastSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [progress] = useState(66.66)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative bg-black px-4 sm:px-6 py-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-3xl relative">
        {/* Podcast Platforms */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="inline-flex items-center justify-center gap-3 text-3xl sm:text-5xl font-bold mb-8">
            <span className="text-primary">50+</span>
            <span className="text-white">PODCASTS ON</span>
          </h2>
          <div className="flex items-center justify-center gap-8">
            <Link
              href="https://spotify.com"
              className="relative group transition-transform hover:scale-105 duration-300"
            >
              <div className="relative h-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spotify-logo-white-9qzPQPxhOBDEWxHqRxhkTM8YPLbxhx.png"
                  alt="Spotify"
                  width={140}
                  height={48}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <span className="text-white text-3xl font-bold">&</span>
            <Link
              href="https://youtube.com"
              className="relative group transition-transform hover:scale-105 duration-300"
            >
              <div className="relative h-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youtube-logo-white-K0VXf5YkPBfxhxq8ZPbxhUbYPLbxhx.png"
                  alt="YouTube"
                  width={140}
                  height={48}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>

        {/* Podcast Player */}
        <div
          className={cn(
            "relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 overflow-hidden transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0",
          )}
        >
          {/* Glass Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

          {/* Anita AI Logo */}
          <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-2 z-10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-xs">Ai</span>
              </div>
              <span className="text-white font-bold text-sm">Anita AI</span>
            </div>
          </div>

          {/* Podcast Content */}
          <div className="space-y-6 relative z-10">
            <div className="space-y-3">
              <div className="inline-block bg-white/10 backdrop-blur-md rounded-lg px-3 py-1.5">
                <span className="text-white text-sm font-bold tracking-wide">ARE YOU</span>
              </div>
              <h3 className="text-4xl sm:text-5xl font-bold text-white flex items-center gap-3 tracking-tight">
                CRYPT
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bitcoin-icon-KjzPQPxhOBDEWxHqRxhkTM8YPLbxhx.png"
                  alt="Bitcoin"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                CURIOUS?
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mic-icon-white-9qzPQPxhOBDEWxHqRxhkTM8YPLbxhx.png"
                    alt="Microphone"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </div>
                <span className="text-white/80 text-sm font-medium">WITH ANITA AI</span>
              </div>
            </div>

            {/* Podcast Image */}
            <div className="relative aspect-[16/9] group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dt6BLKPnMzIl0PkIj9HrExXNHJ0dNf.png"
                alt="Anita AI Podcast"
                fill
                className="object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
            </div>

            {/* Audio Controls */}
            <div className="space-y-4">
              {/* Progress Bar */}
              <div className="space-y-2">
                <Progress value={progress} className="h-1" />
                <div className="flex justify-between text-xs text-white/60 font-medium">
                  <span>1:28</span>
                  <span>5:12</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between px-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/60 hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Shuffle className="h-5 w-5" />
                </Button>
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/60 hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <SkipBack className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "h-12 w-16 rounded-xl transition-all duration-300",
                      isPlaying
                        ? "bg-white text-black hover:bg-white/90"
                        : "bg-primary text-white hover:bg-primary-hover",
                    )}
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/60 hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <SkipForward className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/60 hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Volume2 className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/60 hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Repeat className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 animate-fadeIn">
          <Button className="w-full text-lg font-bold h-14 rounded-xl px-6 py-4 bg-primary/10 border-2 border-primary text-primary hover:bg-primary/20">
            GO LISTEN
          </Button>
        </div>
      </div>
    </section>
  )
}

