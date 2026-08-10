import { useCallback, useEffect, useRef, useState } from 'react'
import { img } from '../data/media'
import { DUR, EASE, gsap, useDesktopPointer, useGsap, useReducedMotion } from '../lib/motion'

const AUTOPLAY_MS = 3200

/**
 * The three transitions the sequence cycles through. All are cuts or wipes —
 * no crossfade, no Ken Burns.
 */
const TRANSITIONS = [
  // Hard cut with a fractional settle.
  { from: { clipPath: 'inset(0% 0% 0% 0%)', scale: 1.035 }, to: { scale: 1, duration: 0.2 } },
  // Horizontal wipe in from the right.
  { from: { clipPath: 'inset(0% 0% 0% 100%)', scale: 1.05 }, to: { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 0.5 } },
  // Vertical crop shift up from the bottom.
  { from: { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.05 }, to: { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 0.46 } },
]

const SURFACES = {
  ivory: 'bg-ivory text-charcoal',
  ceramic: 'bg-ceramic text-ivory',
  charcoal: 'bg-charcoal text-ivory',
}

/**
 * A dish chapter opener.
 *
 * The frame starts small inside a lot of empty space, then snaps outward to
 * near-full-bleed when the section enters. The display type sits below the
 * frame and pushes out toward the viewport edges as the frame opens, so no
 * type is ever set over the dish itself.
 */
export function DishSlideshow({ chapter, tone = 'ivory', preload = false, lead = false }) {
  const { counter, title, line, slides } = chapter.slideshow
  const reduced = useReducedMotion()
  const desktop = useDesktopPointer()

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [opened, setOpened] = useState(false)

  const frameRef = useRef(null)
  const layersRef = useRef([])
  const barRef = useRef(null)
  const prevIndex = useRef(0)
  const transitionAt = useRef(0)

  // The opening chapter carries the page's only h1.
  const Heading = lead ? 'h1' : 'h2'

  const count = slides.length
  const go = useCallback(
    (next) => {
      setIndex((current) => {
        prevIndex.current = current
        return ((next % count) + count) % count
      })
    },
    [count],
  )

  /* ---- entry: the frame snaps outward, the type pushes out ------------ */
  const scope = useGsap(() => {
    const root = scope.current
    const frame = frameRef.current
    const titleEl = root.querySelector('[data-slide-title]')
    const asideEl = root.querySelector('[data-slide-aside]')
    const lineEls = root.querySelectorAll('[data-slide-line]')
    const chrome = root.querySelectorAll('[data-slide-chrome]')

    if (reduced) {
      setOpened(true)
      return
    }

    gsap.set(frame, { scale: 0.74, clipPath: 'inset(12% 16% 12% 16%)' })
    gsap.set(lineEls, { yPercent: 125, y: 0 })
    gsap.set([titleEl, asideEl], { x: 0 })
    gsap.set(chrome, { opacity: 0 })

    gsap
      .timeline({
        scrollTrigger: { trigger: root, start: 'top 60%', once: true },
        onStart: () => setOpened(true),
      })
      .to(frame, { scale: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: DUR.expand, ease: EASE.out })
      // Type travels outward toward the gutters as the frame opens.
      .to(titleEl, { x: -14, duration: DUR.expand, ease: EASE.out }, 0)
      .to(asideEl, { x: 14, duration: DUR.expand, ease: EASE.out }, 0)
      .to(lineEls, { yPercent: 0, duration: 0.74, stagger: 0.055, ease: 'power4.out' }, 0.2)
      .to(chrome, { opacity: 1, duration: 0.5 }, 0.55)
  }, [reduced])

  /* ---- slide changes -------------------------------------------------- */
  useEffect(() => {
    const layer = layersRef.current[index]
    if (!layer) return
    if (reduced) {
      gsap.set(layer, { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 })
      return
    }
    const t = TRANSITIONS[transitionAt.current % TRANSITIONS.length]
    transitionAt.current += 1
    gsap.fromTo(layer, t.from, {
      ...t.to,
      ease: EASE.cut,
      duration: t.to.duration,
      overwrite: 'auto',
    })
  }, [index, reduced])

  /* ---- autoplay ------------------------------------------------------- */
  useEffect(() => {
    if (reduced || !opened || paused) return undefined
    const bar = barRef.current
    let tween
    if (bar) {
      gsap.set(bar, { scaleX: 0 })
      tween = gsap.to(bar, { scaleX: 1, duration: AUTOPLAY_MS / 1000, ease: 'none' })
    }
    const id = window.setTimeout(() => go(index + 1), AUTOPLAY_MS)
    return () => {
      window.clearTimeout(id)
      tween?.kill()
    }
  }, [index, paused, opened, reduced, go])

  /* ---- pointer depth --------------------------------------------------- */
  useEffect(() => {
    const el = scope.current
    if (!desktop || reduced || !el) return undefined
    const stack = el.querySelector('[data-slide-stack]')
    const typeblock = el.querySelector('[data-slide-typeblock]')
    const stackX = gsap.quickTo(stack, 'x', { duration: 0.9, ease: 'power3.out' })
    const stackY = gsap.quickTo(stack, 'y', { duration: 0.9, ease: 'power3.out' })
    const typeX = gsap.quickTo(typeblock, 'x', { duration: 1.1, ease: 'power3.out' })

    const onMove = (event) => {
      const rect = el.getBoundingClientRect()
      const nx = (event.clientX - rect.left) / rect.width - 0.5
      const ny = (event.clientY - rect.top) / rect.height - 0.5
      stackX(nx * -14)
      stackY(ny * -10)
      typeX(nx * 5)
    }
    el.addEventListener('pointermove', onMove, { passive: true })
    return () => el.removeEventListener('pointermove', onMove)
  }, [desktop, reduced, scope])

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      go(index + 1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      go(index - 1)
    }
  }

  return (
    <section
      ref={scope}
      id={chapter.id}
      data-tone={tone === 'ivory' ? 'light' : 'dark'}
      aria-labelledby={`${chapter.id}-title`}
      className={`relative flex min-h-[100svh] flex-col justify-center gap-6 overflow-hidden py-[9svh] md:gap-8 ${SURFACES[tone]}`}
    >
      {/* Frame ------------------------------------------------------------ */}
      <div className="page-x relative">
        <div
          data-slide-stack
          ref={frameRef}
          className="relative mx-auto w-full origin-center overflow-hidden bg-charcoal"
          style={{ height: 'clamp(16rem, 46svh, 31rem)', maxWidth: '100rem' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onKeyDown={onKeyDown}
          role="group"
          aria-roledescription="carousel"
          aria-label={`${title.join(' ')} — image sequence`}
        >
          {slides.map((key, i) => {
            const asset = img(key)
            const isCurrent = i === index
            const isOutgoing = i === prevIndex.current && !isCurrent
            return (
              <div
                key={key}
                ref={(el) => {
                  layersRef.current[i] = el
                }}
                aria-hidden={!isCurrent}
                className="absolute inset-0"
                style={{ zIndex: isCurrent ? 3 : isOutgoing ? 2 : 1 }}
              >
                <img
                  src={asset.src}
                  alt={asset.alt}
                  width={1600}
                  height={Math.round(1600 / asset.ratio)}
                  loading={preload && i === 0 ? 'eager' : 'lazy'}
                  fetchPriority={preload && i === 0 ? 'high' : 'auto'}
                  decoding="async"
                  sizes="(max-width: 1600px) 100vw, 1600px"
                  className="h-full w-full object-cover"
                />
              </div>
            )
          })}

          {/* Scrim only along the bottom edge, under the controls. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 z-[4] h-32"
            style={{ background: 'linear-gradient(to top, rgba(20,22,20,0.62), rgba(20,22,20,0))' }}
          />

          <p
            data-slide-chrome
            className="meta absolute right-4 top-4 z-[5] tabular-nums text-ivory drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)] md:right-6 md:top-6"
          >
            {String(index + 1).padStart(2, '0')}
            <span className="opacity-55"> / {String(count).padStart(2, '0')}</span>
          </p>

          <div
            data-slide-chrome
            className="absolute inset-x-4 bottom-4 z-[5] flex items-center justify-between gap-5 text-ivory md:inset-x-6 md:bottom-6"
          >
            <div className="min-w-0 flex-1">
              <div className="relative h-px w-full max-w-[20rem] bg-ivory/30">
                <span
                  ref={barRef}
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 block w-full origin-left bg-ivory"
                  style={{ transform: 'scaleX(0)' }}
                />
              </div>
            </div>
            <p className="sr-only" aria-live="polite">
              Slide {index + 1} of {count}
            </p>
            <div className="flex shrink-0 items-center gap-4">
              <button
                type="button"
                data-cursor="prev"
                onClick={() => go(index - 1)}
                aria-label="Previous image"
                className="meta px-1 py-2 opacity-70 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100"
              >
                ← Prev
              </button>
              <button
                type="button"
                data-cursor="next"
                onClick={() => go(index + 1)}
                aria-label="Next image"
                className="meta px-1 py-2 opacity-70 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Type, entirely outside the frame ---------------------------------- */}
      <div
        data-slide-typeblock
        className="page-x relative mx-auto flex w-full max-w-[100rem] flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-16"
      >
        <Heading
          data-slide-title
          id={`${chapter.id}-title`}
          className="display text-[clamp(2.25rem,5.4vw,5rem)] leading-[0.9]"
        >
          {title.map((word) => (
            <span key={word} className="mask-line">
              <span data-slide-line>{word}</span>
            </span>
          ))}
        </Heading>

        <div data-slide-aside className="flex shrink-0 flex-col gap-3 pb-1 md:max-w-[26ch] md:items-end md:text-right">
          <span className="mask-line">
            <span data-slide-line className="meta opacity-60">
              {counter}
            </span>
          </span>
          <span className="mask-line">
            <span data-slide-line className="text-pretty text-[0.9375rem] leading-snug opacity-85">
              {line}
            </span>
          </span>
        </div>
      </div>
    </section>
  )
}
