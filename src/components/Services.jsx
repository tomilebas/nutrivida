import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SERVICES, CONTACT } from '../lib/constants'

const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`

export default function Services() {
  const [open, setOpen] = useState(null)

  return (
    <section id="servicios" className="bg-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="grid lg:grid-cols-[1fr_auto] lg:items-end gap-6 mb-14 lg:mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              <span className="text-xs font-medium text-carbon/40 tracking-widest uppercase">Servicios</span>
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="font-display italic font-light text-[clamp(2.2rem,4vw,3.8rem)] text-carbon leading-tight"
            >
              Todo lo que<br />podemos hacer juntos
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 border border-carbon/20 text-carbon px-6 py-3 rounded-full text-sm font-medium hover:bg-carbon hover:text-cream transition-all duration-300 min-h-[44px] whitespace-nowrap"
          >
            Consultá tu caso →
          </motion.a>
        </div>

        {/* Editorial list */}
        <div className="border-t border-carbon/10">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="border-b border-carbon/10"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 lg:py-6 text-left gap-6 group"
              >
                <div className="flex items-center gap-5 lg:gap-8 min-w-0">
                  <span className="text-carbon/25 text-xs font-medium w-5 flex-shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display italic font-light text-xl lg:text-3xl text-carbon group-hover:text-moss transition-colors duration-200 leading-tight">
                    {service.title}
                  </span>
                </div>
                <div className="flex items-center gap-3 lg:gap-5 flex-shrink-0">
                  <span className="hidden sm:block text-xl">{service.icon}</span>
                  <span
                    className={`w-7 h-7 rounded-full border border-carbon/20 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      open === i ? 'bg-moss border-moss rotate-45' : 'group-hover:border-carbon/40'
                    }`}
                  >
                    <svg
                      className={`w-3 h-3 transition-colors ${open === i ? 'text-cream' : 'text-carbon/40'}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-10 lg:pl-[4.5rem] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                      <p className="text-carbon/55 text-base leading-relaxed max-w-xl font-light">
                        {service.description}
                      </p>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 text-xs font-medium text-terracotta hover:text-terracotta-dark transition-colors underline underline-offset-4 min-h-[44px] flex items-center"
                      >
                        Consultar este servicio →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="lg:hidden mt-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-carbon/20 text-carbon px-6 py-4 rounded-full text-sm font-medium hover:bg-carbon hover:text-cream transition-all duration-200 min-h-[52px]"
          >
            Consultá tu caso →
          </a>
        </div>
      </div>
    </section>
  )
}
