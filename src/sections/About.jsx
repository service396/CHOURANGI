import { useRef } from 'react'
import { ABOUT } from '../data/content'
import { img } from '../data/media'
import { Body, Lines, Meta } from '../components/primitives'
import { gsap, revealIn, useGsap, useReducedMotion } from '../lib/motion'

/**
 * 04 — Chourangi.
 *
 * The resolution of the page. One pinned image column runs Calcutta →
 * interpretation → London while the argument scrolls beside it. The archival
 * frame stays monochrome; it is a reconstruction, and it is labelled as one.
 */
export function About() {
  const reduced = useReducedMotion()
  const pinRef = useRef(null)
  const framesRef = useRef([])

  const scope = useGsap(() => {
    const root = scope.current
    revealIn(root, { start: 'top 78%' })
    if (reduced) return

    const frames = framesRef.current.filter(Boolean)
    // Later frames start clipped and cut in as the column advances.
    gsap.set(frames.slice(1), { clipPath: 'inset(100% 0% 0% 0%)' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinRef.current,
        start: 'top top+=12%',
        end: '+=180%',
        pin: pinRef.current.querySelector('[data-pin-target]'),
        pinSpacing: true,
        scrub: 0.4,
        anticipatePin: 1,
      },
    })

    frames.slice(1).forEach((frame, i) => {
      tl.to(frame, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'expo.inOut' }, i * 1.15 + 0.55)
    })
  }, [reduced])

  return (
    <section ref={scope} id="about" data-tone="light" aria-labelledby="about-title" className="bg-ivory">
      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6 pb-[10svh] pt-[18svh]">
        <div className="col-span-12 lg:col-span-9">
          <Meta className="reveal-fade mb-10 text-ceramic">{ABOUT.meta}</Meta>
          <Lines
            as="h2"
            id="about-title"
            lines={ABOUT.headline}
            className="text-[clamp(2.75rem,7.2vw,6.5rem)] leading-[0.9]"
          />
        </div>
      </div>

      {/* Pinned image column beside the scrolling argument. */}
      <div ref={pinRef} className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-6">
          <div data-pin-target className="lg:flex lg:h-[100svh] lg:items-center">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: 3 / 2 }}>
              {ABOUT.frames.map((frame, i) => {
                const asset = img(frame.key)
                return (
                  <div
                    key={frame.key}
                    ref={(el) => {
                      framesRef.current[i] = el
                    }}
                    className="absolute inset-0"
                    style={{ zIndex: i + 1 }}
                  >
                    <img
                      src={asset.src}
                      alt={asset.alt}
                      width={1600}
                      height={Math.round(1600 / asset.ratio)}
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 1024px) 100vw, 46vw"
                      className={`h-full w-full object-cover ${i === 0 ? 'grayscale' : ''}`}
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-charcoal/80 to-transparent p-4 md:p-6">
                      <span className="meta text-ivory">{frame.label}</span>
                      <span className="max-w-[28ch] text-right text-[0.75rem] leading-snug text-ivory/75">
                        {frame.note}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="col-span-12 mt-12 lg:col-span-5 lg:col-start-8 lg:mt-0 lg:py-[24svh]">
          <Body paragraphs={ABOUT.body} />

          <div className="mt-20 space-y-10 md:mt-28 md:space-y-14">
            {ABOUT.stagger.map((group, i) => (
              <Lines
                key={group[0]}
                as="p"
                lines={group}
                className={`text-[clamp(1.35rem,2.6vw,2.35rem)] leading-[1.08] ${
                  i % 2 === 1 ? 'lg:pl-[12%]' : ''
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6 pb-[16svh] pt-[10svh] md:pt-[14svh]">
        <div className="col-span-12 lg:col-span-8 lg:col-start-4">
          <Lines
            as="p"
            lines={ABOUT.closing}
            className="text-[clamp(2rem,5vw,4.5rem)] leading-[1] text-timber"
          />
        </div>
      </div>
    </section>
  )
}
