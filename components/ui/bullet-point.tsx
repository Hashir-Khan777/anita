import type React from "react"

interface BulletPointProps {
  children: React.ReactNode
}

export function BulletPoint({ children }: BulletPointProps) {
  return (
    <div className="flex items-center gap-2 text-white/90">
      <div className="h-2 w-2 rounded-full bg-primary" />
      <span className="text-sm">{children}</span>
    </div>
  )
}

