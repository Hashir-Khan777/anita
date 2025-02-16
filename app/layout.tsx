import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import '../styles/globals.css';
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anita AI - The First AI Crypto Influencer",
  description: "Join the AI revolution in crypto with Anita AI, powering rewards, governance, and exclusive access.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  )
}

