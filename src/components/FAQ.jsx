import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQS } from '../lib/constants'
import { fadeInUp, staggerContainer } from '../lib/animations'

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-cream-dark last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4 min-h-[44px] group"
      >
        <span className="font-semibold text-carbon group-hover:text-moss transition-colors duration-200 text-sm lg:text-base">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-carbon/20 flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-terracotta border-terracotta rotate-45' : 'group-hover:border-moss'
          }`}
        >
          <svg
            className={`w-3 h-3 transition-colors ${isOpen ? 'text-white' : 'text-carbon/50'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="text-carbon/60 text-sm leading-relaxed pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="bg-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-moss/10 text-moss px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              Preguntas frecuentes
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="font-display italic text-4xl lg:text-5xl text-carbon leading-tight mb-5"
            >
              Lo que más me preguntan
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-carbon/55 text-base leading-relaxed mb-8">
              Si tu pregunta no está acá, escribime directamente.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <a
                href={`https://wa.me/5493464446487?text=${encodeURIComponent('Hola Noelia, tengo una consulta')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-moss text-cream px-6 py-3.5 rounded-full text-sm font-medium hover:bg-moss-light transition-colors duration-200 min-h-[44px]"
              >
                Escribir por WhatsApp
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
