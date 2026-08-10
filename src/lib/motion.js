import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** Editorial easings. Decisive on the way in, no float. */
export const EASE = {
  /** Snap outward. Used for slideshow expansion and image masks. */
  out: 'expo.out',
  /** Type rising into place. */
  type: 'cubic-bezier(0.16, 1, 0.3, 1)',
  typeGsap: 'power4.out',
  /** Hard editorial cut between slides. */
  cut: 'power3.inOut',
}

export const DUR = {
  mask: 0.9,
  line: 0.78,
  fade: 0.7,
  slide: 0.46,
  expand: 0.82,
}

/** SSR-safe layout effect. */
export const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

/** True when the visitor has asked for reduced motion. Updates live. */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

/** True on pointer-precise, non-touch devices wide enough for desktop behaviour. */
export function useDesktopPointer() {
  const [ok, setOk] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1024px)')
    const onChange = () => setOk(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return ok
}

/**
 * Runs a GSAP setup function inside a scoped context and cleans it up.
 * `deps` behaves like useEffect deps.
 */
export function useGsap(setup, deps = []) {
  const scope = useRef(null)
  useIsoLayoutEffect(() => {
    if (!scope.current) return undefined
    const ctx = gsap.context(setup, scope)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return scope
}

/**
 * The house reveal. Finds `.reveal-line`, `.reveal-fade` and `.reveal-mask`
 * inside the scope and brings them in on enter, in document order.
 */
export function revealIn(scope, { start = 'top 78%', stagger = 0.075 } = {}) {
  const targets = scope.querySelectorAll('.reveal-line, .reveal-fade, .reveal-mask')
  if (!targets.length) return
  const tl = gsap.timeline({
    scrollTrigger: { trigger: scope, start, once: true },
    defaults: { ease: EASE.typeGsap },
  })
  targets.forEach((el, i) => {
    const at = i * stagger
    if (el.classList.contains('reveal-line')) {
      const spans = el.querySelectorAll('span')
      // The offset comes from CSS as a matrix, which GSAP reads as yPercent 0.
      // Restating it here is what makes the tween back to 0 actually move.
      gsap.set(spans, { yPercent: 125, y: 0 })
      tl.to(spans, { yPercent: 0, duration: DUR.line, stagger: 0.06 }, at)
    } else if (el.classList.contains('reveal-mask')) {
      tl.to(el, { clipPath: 'inset(0 0 0% 0)', duration: DUR.mask, ease: EASE.out }, at)
    } else {
      tl.to(el, { opacity: 1, y: 0, duration: DUR.fade }, at)
    }
  })
}

export { gsap, ScrollTrigger }
