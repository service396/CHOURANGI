import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './motion'

/**
 * Lenis, tied into the GSAP ticker so ScrollTrigger and the scroll position
 * never disagree by a frame.
 *
 * The tuning matters: lerp 0.11 with a 1.05 wheel multiplier keeps the page
 * weighted without the underwater lag that a lower lerp produces.
 */
export function useSmoothScroll(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined

    const lenis = new Lenis({
      lerp: 0.11,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.6,
      smoothWheel: true,
      // Native momentum on touch feels better than a JS approximation.
      syncTouch: false,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    // In-page anchors go through Lenis so they land smoothly.
    const onClick = (event) => {
      const link = event.target.closest?.('a[href^="#"]')
      if (!link) return
      const id = link.getAttribute('href')
      if (!id || id === '#') return
      const target = document.querySelector(id)
      if (!target) return
      event.preventDefault()
      lenis.scrollTo(target, { offset: 0, duration: 1.25 })
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      gsap.ticker.remove(tick)
      gsap.ticker.lagSmoothing(500, 33)
      lenis.destroy()
    }
  }, [enabled])
}
