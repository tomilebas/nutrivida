import { motion } from 'framer-motion'
import { CONTACT } from '../lib/constants'
import { fadeInUp, staggerContainer } from '../lib/animations'

const TRANSFORMATIONS = [
  { time: '1 mes y 15 días', label: 'de tratamiento' },
  { time: '5 semanas',       label: 'de seguimiento' },
  { time: '3 meses',         label: 'de trabajo' },
]

export default function Results() {
  return (
    <section id="resultados" className="bg-carbon py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-12 lg:mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            <span className="text-xs font-medium text-cream/40 tracking-widest uppercase">Resultados reales</span>
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="font-display italic font-light text-cream leading-tight text-[clamp(2.2rem,4vw,3.8rem)]"
          >
            Cambios que se ven.<br />Hábitos que se quedan.
          </motion.h2>
        </motion.div>

        {/* Transformation cards — time as hero text */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-3 gap-px bg-cream/5 rounded-2xl overflow-hidden mb-8"
        >
          {TRANSFORMATIONS.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-carbon px-5 py-8 lg:px-8 lg:py-10 flex flex-col gap-2 group hover:bg-cream/5 transition-colors duration-300"
            >
              <span className="font-display italic text-terracotta leading-none font-light text-[clamp(1.4rem,2.8vw,2.8rem)]">
                {t.time}
              </span>
              <span className="text-cream/30 text-xs font-medium uppercase tracking-widest">
                {t.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Before/after grid — antes / después visual */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
        >
          {/* Placeholder cards until patient photos are collected */}
          {[
            { before: 'Semana 1', after: 'Semana 5', desc: 'Composición corporal' },
            { before: 'Inicio',   after: '1 mes 15d', desc: 'Cambio visible' },
            { before: 'Antes',    after: '3 meses', desc: 'Transformación sostenible' },
            { before: 'Inicio',   after: '4 meses', desc: 'Nutrición deportiva' },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-xl overflow-hidden aspect-[3/4] relative bg-cream/5 border border-cream/8 flex flex-col"
            >
              {/* Before half */}
              <div className="flex-1 flex items-center justify-center border-b border-cream/8 relative">
                <span className="text-cream/15 text-[10px] font-semibold uppercase tracking-widest">{card.before}</span>
                <span className="absolute top-2.5 left-3 text-[9px] text-cream/25 font-medium uppercase tracking-wider">Antes</span>
              </div>
              {/* After half */}
              <div className="flex-1 flex items-center justify-center bg-moss/20 relative">
                <span className="text-cream/20 text-[10px] font-semibold uppercase tracking-widest">{card.after}</span>
                <span className="absolute top-2.5 left-3 text-[9px] text-cream/30 font-medium uppercase tracking-wider">Después</span>
              </div>
              {/* Label */}
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <span className="text-cream/20 text-[9px] font-medium tracking-wide">{card.desc}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note + IG CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-cream/10 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="text-cream font-semibold text-base mb-1">
              Fotos de pacientes reales — próximamente
            </p>
            <p className="text-cream/40 text-sm leading-relaxed">
              Ver más transformaciones en Instagram.
            </p>
          </div>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2.5 bg-cream text-carbon px-6 py-3.5 rounded-full font-medium text-sm hover:bg-cream-dark active:scale-95 transition-all duration-200 min-h-[44px]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            @nutrivida.nc
          </a>
        </motion.div>
      </div>
    </section>
  )
}
