import { motion } from 'framer-motion'
import { STEPS } from '../lib/constants'

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-moss grain py-20 lg:py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left — heading + photo */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              <span className="text-xs font-medium text-cream/40 tracking-widest uppercase">El proceso</span>
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="font-display italic font-light text-[clamp(2.4rem,4vw,4rem)] text-cream leading-tight mb-10"
            >
              Así trabajamos<br />juntos
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img
                src="/images/noelia-hero.jpeg"
                alt="Noelia Cabello en su consultorio"
                className="w-full h-full object-cover object-[center_62%]"
              />
              <div className="absolute inset-0 bg-carbon/55" />
              <div className="absolute bottom-5 left-5 right-5">
                <blockquote className="font-display italic text-white text-xl lg:text-2xl leading-snug drop-shadow-lg">
                  "Cambios sostenibles<br />que duran de verdad."
                </blockquote>
                <p className="text-white/70 text-xs mt-2 font-medium">— Lic. Noelia Cabello</p>
              </div>
            </motion.div>
          </div>

          {/* Right — steps */}
          <div className="space-y-0">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="border-b border-cream/10 py-7 last:border-0 flex gap-6"
              >
                <span className="font-display italic text-[3.5rem] lg:text-[4.5rem] leading-none text-cream/10 font-light flex-shrink-0 w-16 lg:w-20 pt-1">
                  {step.number}
                </span>
                <div className="pt-2">
                  <h3 className="text-cream font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-cream/50 text-sm leading-relaxed font-light">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
