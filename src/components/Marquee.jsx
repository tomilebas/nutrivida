const ITEMS = [
  'Nutrición Clínica',
  'Nutrición Deportiva',
  'Bioimpedancia',
  'Antropometría ISAK',
  'Consulta Online',
  'Cambios Sostenibles',
]

const repeated = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS]

export default function Marquee() {
  return (
    <div className="bg-moss overflow-hidden py-4 border-y border-moss-light">
      <div className="flex marquee-track whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-8">
            <span className="text-cream/70 text-sm font-medium tracking-wide">{item}</span>
            <span className="w-1 h-1 rounded-full bg-terracotta flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
