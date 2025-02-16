import type React from "react"

interface SectionHeaderProps {
  children: React.ReactNode
}

export function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2 className="w-full md:h-[92px] flex justify-start items-center bg-primary/90 text-white px-4 py-2 rounded-md text-lg font-semibold uppercase tracking-wide">
      {children}
    </h2>
  )
}

