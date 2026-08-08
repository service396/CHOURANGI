import { useEffect, useRef } from 'react'
import { img } from '../data/media'
import { HERO } from '../data/content'
import { EASE, gsap, useDesktopPointer, useGsap, useReducedMotion } from '../lib/motion'

/**
 * Full-viewport opening. The photograph is weighted right, so the headline
 * sits in the quiet left third with a soft ivory wash behind it rather than
 * over the food.
 */
export function Hero() {
  const reduced = useReducedMotion()
  const desktop = useDesktopPointer()
  const imageRef = useRef(null)

  const scope = useGsap(() => {
    const root = scope.current
    const lines = root.querySelectorAll('[data-hero-line]')
    const staged = root.querySelectorAll('[data-hero-stage]')

    if (reduced) return

    gsap.set(imageRef.current, { clipPath: 'inset(0% 0% 100% 0%)', scale: 1.12 })
    gsap.set(lines, { yPercent: 118, y: 0 })
    gsap.set(staged, { opacity: 0, y: 18 })

    const tl = gsap.timeline({ delay: 0.12, defaults: { ease: 'power4.out' } })
    tl.to(imageRef.current, {
      clipPath: 'inset(0% 0% 0% 0%)',
      scale: 1,
      duration: 1.25,
      ease: EASE.out,
    })
      .to(staged[0], { opacity: 1, y: 0, duration: 0.6 }, 0.34)
      .to(lines, { yPercent: 0, duration: 0.92, stagger: 0.085 }, 0.44)
      .to([staged[1], staged[2]], { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, 0.95)

    // Parallax: the photograph lags the type on the way out.
    gsap.to(imageRef.current, {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
    })
    gsap.to(root.querySelector('[data-hero-copy]'), {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
    })
  }, [reduced])

  // Restrained pointer response on the photograph only.
  useEffect(() => {
    const root = scope.current
    if (!desktop || reduced || !root) return undefined
    const x = gsap.quickTo(imageRef.current, 'x', { duration: 1.2, ease: 'power3.out' })
    const y = gsap.quickTo(imageRef.current, 'y', { duration: 1.2, ease: 'power3.out' })
    const onMove = (event) => {
      const nx = event.clientX / window.innerWidth - 0.5
      const ny = event.clientY / window.innerHeight - 0.5
      x(nx * -18)
      y(ny * -12)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [desktop, reduced, scope])

  const asset = img('heroTable')

  return (
    <section
      ref={scope}
      id="top"
      data-tone="dark"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal"
    >
      <div ref={imageRef} className="absolute inset-0 -z-10 will-change-transform">
        <img
          src={asset.src}
          alt={asset.alt}
          width={2048}
          height={1152}
          sizes="100vw"
          fetchPriority="high"
          decoding="sync"
          className="h-[104%] w-[104%] -translate-x-[2%] -translate-y-[2%] object-cover"
        />
        {/* Legibility wash: heavy at the lower left, clear across the food. */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(20,22,20,0.78) 0%, rgba(20,22,20,0.55) 28%, rgba(20,22,20,0.12) 58%, rgba(20,22,20,0) 78%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{ background: 'linear-gradient(to top, rgba(20,22,20,0.6), rgba(20,22,20,0))' }}
        />
      </div>

      <div data-hero-copy className="page-x relative w-full pb-[9svh] pt-[22svh] text-ivory">
        <p data-hero-stage className="meta mb-6 opacity-80 md:mb-8">
          {HERO.meta}
        </p>

        <h1
          id="hero-title"
          className="display max-w-[16ch] text-[clamp(2.9rem,8.6vw,9.375rem)] leading-[0.9]"
        >
          {HERO.headline.map((line) => (
            <span key={line} className="mask-line">
              <span data-hero-line>{line}</span>
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between md:gap-16">
          <p data-hero-stage className="body-copy max-w-[46ch] opacity-85">
            {HERO.support}
          </p>

          <a
            data-hero-stage
            href="#stories"
            data-cursor="story"
            className="group inline-flex shrink-0 items-center gap-3 self-start md:self-end"
          >
            <span className="relative">
              <span className="meta">{HERO.cta}</span>
              <span
                aria-hidden="true"
                className="absolute -bottom-1.5 left-0 h-px w-full origin-left bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-0"
              />
            </span>
            <span
              aria-hidden="true"
              className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-1"
            >
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
