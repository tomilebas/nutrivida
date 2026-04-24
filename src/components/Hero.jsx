import { motion } from 'framer-motion'
import { CONTACT } from '../lib/constants'

const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`

const WA_ICON = (
  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">

      {/* Photo — full bleed */}
      <div className="absolute inset-0">
        <img
          src="/images/noelia-hero.jpeg"
          alt="Lic. Noelia Cabello, Nutricionista"
          className="w-full h-full object-cover object-[center_62%] lg:object-[55%_62%]"
        />
      </div>

      {/* ── DESKTOP overlays ── */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-cream from-[35%] via-cream/85 via-[48%] to-transparent" />
      <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-[36%] bg-gradient-to-b from-cream/60 to-transparent" />

      {/* ── MOBILE overlays ── */}
      <div className="lg:hidden absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-b from-cream from-[40%] via-cream/80 to-transparent" />
      <div className="lg:hidden absolute bottom-0 left-0 right-0 h-[62%] bg-gradient-to-t from-carbon/95 via-carbon/75 to-transparent" />

      {/* ── DESKTOP content ── */}
      <div className="hidden lg:flex relative z-10 min-h-[100svh] flex-col justify-center px-12 xl:px-20 pt-20 max-w-[54%]">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
          <span className="text-[11px] font-medium text-carbon/40 tracking-[0.18em] uppercase">
            Rosario · Fisherton · Online
          </span>
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display italic font-light text-carbon leading-[1.04] tracking-tight mb-5 text-[clamp(2.6rem,4.8vw,5.2rem)]"
        >
          Tu cuerpo <span className="text-terracotta">cambia</span><br />cuando tu alimentación<br />tiene sentido.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="text-carbon/55 font-light leading-relaxed mb-10 max-w-sm text-[clamp(0.95rem,1.15vw,1.1rem)]"
        >
          <span className="font-medium text-carbon/80">Lic. Noelia Cabello</span> — Nutricionista clínica y deportiva. Hábitos reales que funcionan para tu vida, sin dietas extremas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-5"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-carbon text-cream px-7 py-4 rounded-full font-medium text-sm hover:bg-moss transition-colors duration-300 shadow-xl shadow-carbon/25"
          >
            {WA_ICON}
            Quiero mi consulta
          </a>
          <a
            href="#servicios"
            className="text-carbon/45 text-sm hover:text-carbon/80 transition-colors duration-200 underline underline-offset-4"
          >
            Ver servicios
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-auto pt-14 flex items-center divide-x divide-carbon/15"
        >
          {['Clínica', 'Deportiva', 'ISAK', 'Online'].map((tag) => (
            <span key={tag} className="text-[11px] text-carbon/35 font-medium tracking-wide px-5 first:pl-0">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── MOBILE content ── */}
      <div className="lg:hidden relative z-10 flex flex-col justify-between min-h-[100svh] px-5 pt-24 pb-8">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
          <span className="text-[10px] font-medium text-carbon/60 tracking-[0.18em] uppercase">
            Rosario · Online
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="font-display italic font-light text-cream leading-[1.06] tracking-tight text-[2.4rem]">
            Tu cuerpo <span className="text-terracotta">cambia</span> cuando tu alimentación tiene sentido.
          </h1>

          <p className="text-cream/55 font-light leading-relaxed text-[0.95rem]">
            <span className="font-medium text-cream/80">Lic. Noelia Cabello</span> — Nutricionista clínica y deportiva.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-cream text-carbon w-full px-6 py-4 rounded-full font-medium text-sm active:scale-95 transition-transform duration-150 min-h-[52px]"
          >
            {WA_ICON}
            Quiero mi consulta
          </a>

          <a href="#servicios" className="block text-center text-cream/35 text-xs underline underline-offset-4">
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  )
}
