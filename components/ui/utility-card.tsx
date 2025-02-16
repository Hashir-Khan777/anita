interface UtilityCardProps {
  title: string
  description: string
}

export function UtilityCard({ title, description }: UtilityCardProps) {
  return (
    <div className="relative group">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-primary opacity-0 group-hover:opacity-20 rounded-lg blur transition duration-500" />

      {/* Card Content */}
      <div className="relative p-4 bg-black/40 border border-primary/20 rounded-lg backdrop-blur-sm">
        <h3 className="text-white font-semibold mb-1 uppercase">{title}</h3>
        <p className="text-white/60 text-sm">{description}</p>
      </div>
    </div>
  )
}

