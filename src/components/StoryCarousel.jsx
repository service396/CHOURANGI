import { useCallback, useEffect, useRef, useState } from 'react'
import { CHAPTER_LIST, PREMISE } from '../data/content'
import { Figure, Meta } from '../components/primitives'
import { gsap, useReducedMotion } from '../lib/motion'

const AUTOPLAY_MS = 5200
const DRAG_THRESHOLD = 48

/**
 * The three dishes, as one horizontal track.
 *
 * Deliberately a different mechanic from the chapter openers: those cut and
 * wipe between stacked frames, this one slides sideways with the next slide
 * peeking in, so the two never read as the same component twice.
 */
export function StoryCarousel() {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const drag = useRef({ active: false, startX: 0, dx: 0, base: 0 })

  const count = CHAPTER_LIST.length
  const go = useCallback((next) => setIndex(Math.max(0, Math.min(count - 1, next))), [count])

  /** Slide pitch in px: one slide plus the gap between slides. */
  const pitch = useCallback(() => {
    const track = trackRef.current
    if (!track || track.children.length < 1) return 0
    const first = track.children[0].getBoundingClientRect()
    const second = track.children[1]?.getBoundingClientRect()
    return second ? second.left - first.left : first.width
  }, [])

  const settle = useCallback(
    (to, animate = true) => {
      const track = trackRef.current
      if (!track) return
      const x = -to * pitch()
      if (reduced || !animate) gsap.set(track, { x })
      else gsap.to(track, { x, duration: 0.72, ease: 'expo.out', overwrite: true })
    },
    [pitch, reduced],
  )

  useEffect(() => {
    settle(index)
  }, [index, settle])

  // Slide width is fluid, so the offset has to be recomputed on resize.
  useEffect(() => {
    const onResize = () => settle(index, false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [index, settle])

  useEffect(() => {
    if (reduced || paused) return undefined
    const id = window.setTimeout(() => go(index === count - 1 ? 0 : index + 1), AUTOPLAY_MS)
    return () => window.clearTimeout(id)
  }, [index, paused, reduced, go, count])

  /* ---- drag / swipe ---------------------------------------------------- */
  const onPointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    drag.current = { active: true, startX: event.clientX, dx: 0, base: -index * pitch() }
    setPaused(true)
    viewportRef.current?.setPointerCapture?.(event.pointerId)
  }

  const onPointerMove = (event) => {
    if (!drag.current.active) return
    drag.current.dx = event.clientX - drag.current.startX
    // Resist past the ends rather than allowing the track to run off.
    const atEdge = (index === 0 && drag.current.dx > 0) || (index === count - 1 && drag.current.dx < 0)
    const dx = atEdge ? drag.current.dx * 0.32 : drag.current.dx
    gsap.set(trackRef.current, { x: drag.current.base + dx })
  }

  const onPointerUp = (event) => {
    if (!drag.current.active) return
    const { dx } = drag.current
    drag.current.active = false
    viewportRef.current?.releasePointerCapture?.(event.pointerId)
    setPaused(false)
    if (dx <= -DRAG_THRESHOLD) go(index + 1)
    else if (dx >= DRAG_THRESHOLD) go(index - 1)
    else settle(index)
  }

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
    <div
      className="mt-14 md:mt-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Header row: label left, controls right. */}
      <div className="page-x mx-auto flex w-full max-w-[100rem] items-end justify-between gap-6">
        <Meta className="text-ceramic">{PREMISE.carouselMeta}</Meta>

        <div className="flex items-center gap-5">
          <p className="meta tabular-nums opacity-55" aria-live="polite">
            {String(index + 1).padStart(2, '0')}
            <span className="opacity-60"> / {String(count).padStart(2, '0')}</span>
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              data-cursor="prev"
              onClick={() => go(index - 1)}
              disabled={index === 0}
              aria-label="Previous dish"
              className="meta px-1 py-2 transition-opacity duration-300 disabled:opacity-25 enabled:hover:opacity-60"
            >
              ←
            </button>
            <button
              type="button"
              data-cursor="next"
              onClick={() => go(index + 1)}
              disabled={index === count - 1}
              aria-label="Next dish"
              className="meta px-1 py-2 transition-opacity duration-300 disabled:opacity-25 enabled:hover:opacity-60"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Track. Padded to the page gutter so slide one lines up with the type
          above it, while the next slide is allowed to bleed off the edge. */}
      <div
        ref={viewportRef}
        role="group"
        aria-roledescription="carousel"
        aria-label="The three dishes"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="mt-6 cursor-grab overflow-hidden active:cursor-grabbing md:mt-8"
        style={{ touchAction: 'pan-y' }}
      >
        <ul
          ref={trackRef}
          className="mx-auto flex w-full max-w-[100rem] list-none gap-5 pl-[var(--gutter)] pr-[var(--gutter-right)] md:gap-8"
        >
          {CHAPTER_LIST.map((chapter, i) => (
            <li
              key={chapter.id}
              className="w-[80%] shrink-0 sm:w-[64%] lg:w-[46%]"
              aria-current={i === index ? 'true' : undefined}
            >
              <a
                href={`#${chapter.id}`}
                data-cursor="story"
                className="group block"
                // A drag that ends on a card should not also follow its link.
                onClick={(event) => {
                  if (Math.abs(drag.current.dx) > 8) event.preventDefault()
                }}
              >
                <Figure
                  name={chapter.card.image}
                  ratio={3 / 2}
                  mask={false}
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 64vw, 46vw"
                  imgClassName="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                  className="w-full"
                />
                <div className="mt-5 flex items-baseline gap-4">
                  <span className="meta shrink-0 text-rattan tabular-nums">{chapter.number}</span>
                  <span className="display text-[clamp(1.25rem,2.1vw,1.85rem)] leading-tight">
                    {chapter.card.title}
                  </span>
                </div>
                <p className="mt-2 pl-[2.4rem] text-[0.875rem] leading-snug opacity-65">
                  {chapter.card.line}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 pl-[2.4rem]">
                  <span className="meta relative">
                    {PREMISE.carouselCta}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
