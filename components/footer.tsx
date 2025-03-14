import Link from "next/link"
import { Youtube, Instagram, Twitter, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-black py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-lg text-center space-y-12">
        {/* Social Links */}
        <div className="space-y-6">
          <h3 className="lg:text-[30px]/[80px] text-[16px]/[24px] sm:text-3xl font-bold text-white">FOLLOW MY JOURNEY</h3>
          <div className="flex flex-row justify-center items-center gap-6">
            {/* <Link href="https://youtube.com" target="_blank" className="transition-transform hover:scale-110">
              <Youtube className="w-8 h-8 text-white" />
            </Link> */}
            <Link href="https://www.instagram.com/itsanitaai/" target="_blank" className="transition-transform hover:scale-110">
              <img src="/images/insta.svg" alt="" />
            </Link>
            <Link href="https://x.com/itsanita_ai" target="_blank" className="w-[60px] transition-transform hover:scale-110">
            <img src="/images/twitter.png" alt="" className="w-full h-full" />
            </Link>
            <Link href="https://www.youtube.com/@itsAnitaAI" target="_blank" className="transition-transform hover:scale-110">
            <img src="/images/youtube.svg" alt="" />
            </Link>
          </div>
        </div>

        {/* Contact Email */}
        <div className="space-y-2">
          <p className="text-white text-lg font-fielder">CONTACT</p>
          <p className="text-primary text-lg sm:text-xl font-bold font-fielder">SUPPORT@ITSANITA.COM</p>
        </div>

        {/* Copyright */}
        <p className="text-white/60 text-sm">Copyrights 2025. Anita AI. All Rights Reserved</p>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  )
}

