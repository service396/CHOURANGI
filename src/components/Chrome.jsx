import { useEffect, useRef, useState } from 'react'
import { gsap, useDesktopPointer, useReducedMotion } from '../lib/motion'
import { CHAPTER_LIST, CHAPTERS, NAV } from '../data/content'
import { Logo } from './Logo'

/**
 * Which tone sits under the top edge of the viewport right now.
 * Sections declare `data-tone="dark"` when the chrome needs to invert.
 */
function useTopTone() {
  const [tone, setTone] = useState('light')
  useEffect(() => {
    const sections = [...document.querySelectorAll('[data-tone]')]
    if (!sections.length) return undefined
    // A zero-height band 56px down the viewport: whatever crosses it wins.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setTone(entry.target.dataset.tone)
        })
      },
      { rootMargin: '-56px 0px -100% 0px', threshold: 0 },
    )
    sections.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return tone
}

/* ------------------------------------------------------------------ grain */

/** Paper grain at 3%. Present, never legible as a texture. */
export function Grain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[70] opacity-[0.035] mix-blend-multiply"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23g)'/%3E%3C/svg%3E\")",
        backgroundSize: '220px 220px',
      }}
    />
  )
}

/* ----------------------------------------------------------------- cursor */

/** Small ring that grows and labels itself over interactive elements. */
export function Cursor() {
  const active = useDesktopPointer()
  const reduced = useReducedMotion()
  const dot = useRef(null)
  const [label, setLabel] = useState('')

  useEffect(() => {
    const on = active && !reduced
    document.body.dataset.cursor = on ? 'on' : 'off'
    if (!on) return undefined

    const el = dot.current
    gsap.set(el, { xPercent: -50, yPercent: -50 })
    const x = gsap.quickTo(el, 'x', { duration: 0.22, ease: 'power3.out' })
    const y = gsap.quickTo(el, 'y', { duration: 0.22, ease: 'power3.out' })

    const LABELS = { link: '', slide: 'View', next: 'Next', prev: 'Prev', story: 'Discover' }

    const onMove = (event) => {
      x(event.clientX)
      y(event.clientY)
      const hit = event.target.closest?.('[data-cursor]')
      const kind = hit?.dataset.cursor
      setLabel(kind ? (LABELS[kind] ?? '') : null)
      gsap.to(el, {
        scale: hit ? (LABELS[kind] ? 3.4 : 2.4) : 1,
        duration: 0.36,
        ease: 'power3.out',
      })
    }
    const onLeave = () => gsap.to(el, { opacity: 0, duration: 0.2 })
    const onEnter = () => gsap.to(el, { opacity: 1, duration: 0.2 })

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    document.addEventListener('pointerenter', onEnter)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('pointerenter', onEnter)
      document.body.dataset.cursor = 'off'
    }
  }, [active, reduced])

  if (!active || reduced) return null

  return (
    <div
      ref={dot}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] flex h-3 w-3 items-center justify-center rounded-full border border-current text-[var(--nav-ink)] mix-blend-difference"
      style={{ mixBlendMode: 'difference', borderColor: '#f3eee5', color: '#f3eee5' }}
    >
      {label ? (
        <span className="meta scale-[0.29] whitespace-nowrap !text-[0.62rem] !tracking-[0.18em]">{label}</span>
      ) : null}
    </div>
  )
}

/* -------------------------------------------------------------------- nav */

export function Nav() {
  const tone = useTopTone()
  const [condensed, setCondensed] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const triggerRef = useRef(null)

  const [hidden, setHidden] = useState(false)

  // The bar retracts while reading downward and returns on any upward scroll.
  // A permanently fixed bar sits on top of whichever section header happens to
  // be passing under it, which on a page of oversized display type reads as a
  // collision rather than as chrome.
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setCondensed(y > 80)
      if (Math.abs(y - last) > 6) {
        setHidden(y > 220 && y > last && !menuOpen)
        last = y
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  // Dismiss on outside pointer, on Escape, and once a dish has been chosen.
  useEffect(() => {
    if (!menuOpen) return undefined
    const onDown = (event) => {
      if (menuRef.current?.contains(event.target) || triggerRef.current?.contains(event.target)) return
      setMenuOpen(false)
    }
    const onKey = (event) => {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      triggerRef.current?.focus()
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const dark = tone === 'dark'

  return (
    <header
      className={`page-x fixed inset-x-0 top-0 z-[80] isolate flex items-center justify-between transition-[height,transform,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        condensed ? 'h-[60px] md:h-[68px]' : 'h-[76px] md:h-[92px]'
      } ${hidden ? '-translate-y-full' : 'translate-y-0'} ${dark ? 'text-ivory' : 'text-charcoal'}`}
    >
      {/* A soft scrim rather than a solid bar: the page runs through ivory,
          parchment, ceramic blue, green and timber, and a hard-edged block of
          any one of those reads as a seam across the others. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 transition-opacity duration-500"
        style={{
          height: '175%',
          opacity: condensed ? 1 : 0,
          background: dark
            ? 'linear-gradient(to bottom, rgba(18,20,18,0.82) 0%, rgba(18,20,18,0.62) 46%, rgba(18,20,18,0) 100%)'
            : 'linear-gradient(to bottom, rgba(243,238,229,0.96) 0%, rgba(243,238,229,0.86) 46%, rgba(243,238,229,0) 100%)',
        }}
      />
      <a href="#top" data-cursor="link" aria-label="Chourangi — back to top" className="shrink-0">
        <Logo />
      </a>

      <nav aria-label="Primary">
        <ul className="flex items-center gap-4 sm:gap-6 md:gap-10">
          {/* Stories opens the three dishes rather than jumping to one of them. */}
          <li>
            <button
              ref={triggerRef}
              type="button"
              data-cursor="link"
              aria-expanded={menuOpen}
              aria-controls="stories-menu"
              aria-haspopup="true"
              onClick={() => setMenuOpen((open) => !open)}
              className="meta group relative inline-flex items-center gap-1.5 whitespace-nowrap py-2"
            >
              Stories
              <span
                aria-hidden="true"
                className={`inline-block text-[0.7em] transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  menuOpen ? 'rotate-180' : ''
                }`}
              >
                ▾
              </span>
              <span
                aria-hidden="true"
                className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  menuOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100'
                }`}
              />
            </button>
          </li>

          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                data-cursor="link"
                className="meta group relative inline-block whitespace-nowrap py-2"
              >
                <span className="md:hidden">{item.short}</span>
                <span className="hidden md:inline">{item.label}</span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Anchored to the header rather than the trigger, so it stays inside the
          page gutters at every width instead of running off a narrow screen. */}
      <div
        id="stories-menu"
        ref={menuRef}
        hidden={!menuOpen}
        className={`absolute right-[var(--gutter-right)] top-full w-[min(23rem,calc(100vw-var(--gutter)-var(--gutter-right)))] origin-top-right transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        } ${dark ? 'bg-charcoal text-ivory' : 'bg-ivory text-charcoal'}`}
        style={{ boxShadow: dark ? '0 18px 50px rgba(0,0,0,0.45)' : '0 18px 50px rgba(35,35,33,0.14)' }}
      >
        <ul className="list-none p-2">
          {CHAPTER_LIST.map((chapter) => (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                data-cursor="story"
                onClick={() => setMenuOpen(false)}
                className="group flex items-baseline gap-4 px-4 py-4 transition-colors duration-300 hover:bg-current/5 focus-visible:bg-current/5"
              >
                <span className="meta shrink-0 text-rattan tabular-nums">{chapter.number}</span>
                <span className="min-w-0">
                  <span className="display block text-[1.0625rem] leading-tight">
                    {chapter.card.title}
                  </span>
                  <span className="mt-1 block text-[0.75rem] leading-snug opacity-55">
                    {chapter.card.line}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="ml-auto shrink-0 self-center opacity-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:opacity-60 group-focus-visible:opacity-60"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

/* ----------------------------------------------------------- chapter rail */

export function ChapterRail() {
  const tone = useTopTone()
  const [active, setActive] = useState(null)

  useEffect(() => {
    const targets = CHAPTERS.map((c) => document.getElementById(c.id)).filter(Boolean)
    if (!targets.length) return undefined
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <nav
      aria-label="Chapters"
      className={`fixed right-[max(0.75rem,calc(var(--gutter)-2rem))] top-1/2 z-[75] hidden -translate-y-1/2 transition-colors duration-500 lg:block ${
        tone === 'dark' ? 'text-ivory' : 'text-charcoal'
      }`}
    >
      {/* Numbers only at rest, so the rail lives inside the page gutter and
          never crosses the text column. The label expands on hover or focus. */}
      <ol className="flex flex-col items-end gap-5">
        {CHAPTERS.map((chapter) => {
          const on = active === chapter.id
          return (
            <li key={chapter.id} className="flex justify-end">
              <a
                href={`#${chapter.id}`}
                data-cursor="link"
                aria-current={on ? 'true' : undefined}
                className="group flex items-center justify-end gap-2.5 py-1 transition-opacity duration-500"
                style={{ opacity: on ? 1 : 0.36 }}
              >
                <span className="meta max-w-0 overflow-hidden whitespace-nowrap !text-[0.5625rem] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-w-[7rem] group-hover:opacity-100 group-focus-visible:max-w-[7rem] group-focus-visible:opacity-100">
                  {chapter.label}
                </span>
                <span
                  aria-hidden="true"
                  className="block h-px shrink-0 bg-current transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ width: on ? 20 : 7 }}
                />
                <span className="meta !text-[0.625rem] tabular-nums">{chapter.number}</span>
                <span className="sr-only">{chapter.label}</span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
