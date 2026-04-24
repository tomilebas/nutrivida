import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
const BP = {
  f1Out:     [0,    0.12, 0.22],
  vIn:       [0.16, 0.24],
  vOut:      [0.76, 0.86],
  f2In:      [0.76, 0.87, 1],
  scrollHint:[0,    0.08],
}

export default function ScrollStory() {
  const spacerRef = useRef(null)
  const videoRef  = useRef(null)
  const [done, setDone] = useState(false)

  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    setDone(p >= 1)
  })

  // Video scrubbing
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.load()

    let rafId
    const update = () => {
      if (!video.duration) return
      const p     = scrollYProgress.get()
      const start = BP.vIn[0]
      const end   = BP.vOut[1]
      let t
      if      (p <= start) t = 0
      else if (p >= end)   t = video.duration
      else                 t = ((p - start) / (end - start)) * video.duration
      if (Math.abs(video.currentTime - t) > 0.033) video.currentTime = t
    }

    const unsub = scrollYProgress.on('change', () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    })
    return () => { unsub(); cancelAnimationFrame(rafId) }
  }, [scrollYProgress])

  const f1Opacity    = useTransform(scrollYProgress, BP.f1Out,                [1, 1, 0])
  const videoOpacity = useTransform(scrollYProgress, [...BP.vIn, ...BP.vOut], [0, 1, 1, 0])
  const f2Opacity    = useTransform(scrollYProgress, BP.f2In,                 [0, 1, 1])
  const hintOpacity  = useTransform(scrollYProgress, BP.scrollHint,           [1, 0])
  const t1Y          = useTransform(scrollYProgress, [0, 0.22],               [0, -24])
  const t2Opacity    = useTransform(scrollYProgress, [0.78, 0.94],            [0, 1])
  const t2Y          = useTransform(scrollYProgress, [0.78, 0.94],            [20, 0])

  return (
    <>
      {/* 280 vh spacer — drives scrollYProgress */}
      <div ref={spacerRef} style={{ height: '280vh' }} aria-hidden="true" />

      {/* Fixed cinematic panel — hidden once story is done */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 30,
          pointerEvents: done ? 'none' : 'auto',
          visibility: done ? 'hidden' : 'visible',
        }}
      >
        {/* Frame 1 — hamburguesa oscura */}
        <motion.div className="absolute inset-0 overflow-hidden" style={{ opacity: f1Opacity }}>
          <img
            src="/images/frame-inicial.jpeg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon/80 via-carbon/35 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-7 sm:px-12 xl:px-20">
            <motion.p
              style={{ y: t1Y }}
              className="font-display italic font-light text-cream tracking-tight leading-[1.04] text-[clamp(2.6rem,5.5vw,6rem)] max-w-md"
            >
              Comer sano...
            </motion.p>
          </div>
          <motion.div
            style={{ opacity: hintOpacity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          >
            <span className="text-cream/30 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
            <motion.div
              animate={{ scaleY: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-px h-8 bg-gradient-to-b from-cream/50 to-transparent origin-top"
            />
          </motion.div>
        </motion.div>

        {/* Video */}
        <motion.div className="absolute inset-0 overflow-hidden" style={{ opacity: videoOpacity }}>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/images/scroll-video.mp4"
            muted
            playsInline
            preload="auto"
          />
        </motion.div>

        {/* Frame 2 — sandwich verde */}
        <motion.div className="absolute inset-0 overflow-hidden" style={{ opacity: f2Opacity }}>
          <img
            src="/images/frame-final.jpeg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-moss/75 via-moss/25 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-7 sm:px-12 xl:px-20">
            <motion.p
              style={{ opacity: t2Opacity, y: t2Y }}
              className="font-display italic font-light text-cream tracking-tight leading-[1.04] text-[clamp(2.6rem,5.5vw,6rem)] max-w-xl"
            >
              ...no tiene por<br />que ser aburrida.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </>
  )
}
