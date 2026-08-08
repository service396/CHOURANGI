import { useRef } from 'react'
import { Body, Figure, Lines, Meta } from '../components/primitives'
import { gsap, revealIn, useDesktopPointer, useGsap, useReducedMotion } from '../lib/motion'

/**
 * 01.1 — Hilsa.
 * A pinned photograph on the left holds while the copy scrolls past it, then
 * cuts to a macro crop as the section releases. Appetite first, argument second.
 */
function DishPinned({ dish }) {
  const reduced = useReducedMotion()
  const swapRef = useRef(null)

  const scope = useGsap(() => {
    const root = scope.current
    revealIn(root, { start: 'top 72%' })
    if (reduced) return

    // A hard cut to the macro, two thirds of the way through the read.
    gsap.set(swapRef.current, { clipPath: 'inset(100% 0% 0% 0%)' })
    gsap.to(swapRef.current, {
      clipPath: 'inset(0% 0% 0% 0%)',
      ease: 'expo.inOut',
      duration: 0.55,
      scrollTrigger: { trigger: root, start: '58% center', toggleActions: 'play none none reverse' },
    })
  }, [reduced])

  return (
    <section
      ref={scope}
      data-tone="light"
      aria-labelledby="hilsa-dish-title"
      className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6 gap-y-12 bg-ivory py-[14svh] md:py-[18svh]"
    >
      <div className="col-span-12 lg:col-span-5">
        <div className="lg:sticky lg:top-[18svh]">
          <div className="relative overflow-hidden" style={{ aspectRatio: 4 / 5 }}>
            <Figure name={dish.images.primary} className="absolute inset-0 !aspect-auto h-full w-full" sizes="(max-width: 1024px) 100vw, 40vw" />
            <div ref={swapRef} className="absolute inset-0">
              <Figure
                name={dish.images.secondary}
                mask={false}
                className="h-full w-full !aspect-auto"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
          <Meta className="reveal-fade mt-4 text-rattan">Smoked · mashed · toasted</Meta>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-6 lg:col-start-7">
        <Meta className="reveal-fade mb-8 text-ceramic">{dish.meta}</Meta>
        <Lines
          as="h3"
          id="hilsa-dish-title"
          lines={dish.headline}
          className="mb-10 text-[clamp(2.4rem,5.4vw,4.75rem)] leading-[0.94]"
        />
        <Body paragraphs={dish.body} />
        <div className="mt-16 md:mt-24">
          <Lines
            as="p"
            lines={dish.statement}
            className="text-[clamp(1.75rem,3.6vw,3.4rem)] leading-[1.04] text-timber"
          />
        </div>
      </div>
    </section>
  )
}

/**
 * 02.1 — Gondhoraj.
 * Built as a turn: a flat ingredient list, a full-bleed band of photography,
 * then one line that resets the whole dish.
 */
function DishTurn({ dish, chapterId }) {
  const desktop = useDesktopPointer()
  const reduced = useReducedMotion()
  const bandRef = useRef(null)

  const scope = useGsap(() => {
    const root = scope.current
    revealIn(root, { start: 'top 74%' })
    if (reduced || !desktop) return
    gsap.to(bandRef.current.querySelector('img'), {
      yPercent: -9,
      ease: 'none',
      scrollTrigger: { trigger: bandRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
    })
  }, [reduced, desktop])

  return (
    <section ref={scope} data-tone="light" aria-labelledby={`${chapterId}-dish-title`} className="bg-ivory">
      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6 pb-[10svh] pt-[14svh] md:pb-[12svh] md:pt-[18svh]">
        <div className="col-span-12 lg:col-span-7">
          <Meta className="reveal-fade mb-8 text-ceramic">{dish.meta}</Meta>
          <Lines
            as="h3"
            id={`${chapterId}-dish-title`}
            lines={dish.headline}
            className="text-[clamp(2.4rem,5.6vw,5rem)] leading-[0.94]"
          />
        </div>
        <div className="col-span-12 mt-10 self-end lg:col-span-4 lg:col-start-9 lg:mt-0">
          <p className="reveal-fade text-[clamp(1.1rem,1.55vw,1.4rem)] leading-snug text-timber">{dish.lead}</p>
        </div>
      </div>

      <div ref={bandRef} className="relative overflow-hidden">
        <Figure
          name={dish.images.secondary}
          ratio={2.55}
          sizes="100vw"
          imgClassName="h-[118%] object-[center_45%]"
          className="w-full"
        />
      </div>

      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6 pb-[16svh] pt-[12svh] md:pt-[16svh]">
        <div className="col-span-12 lg:col-span-8">
          <Lines
            as="p"
            lines={dish.turn}
            className="text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.02]"
          />
        </div>
        <div className="col-span-12 mt-12 lg:col-span-5 lg:col-start-8 lg:mt-20">
          <Body paragraphs={dish.body} />
        </div>
        <div className="col-span-12 mt-16 md:mt-24 lg:col-span-6">
          <Lines
            as="p"
            lines={dish.statement}
            className="text-[clamp(1.75rem,3.6vw,3.4rem)] leading-[1.04] text-ceramic"
          />
        </div>
      </div>
    </section>
  )
}

/**
 * 03.1 — Railway.
 * The title breaks out over the top edge of a right-weighted photograph, with
 * the copy held in a narrow column at the left.
 */
function DishOverlap({ dish, chapterId }) {
  const scope = useGsap(() => {
    revealIn(scope.current, { start: 'top 74%' })
  })

  return (
    <section
      ref={scope}
      data-tone="light"
      aria-labelledby={`${chapterId}-dish-title`}
      className="relative overflow-hidden bg-ivory py-[14svh] md:py-[18svh]"
    >
      <div className="page-x mx-auto w-full max-w-[100rem]">
        <Meta className="reveal-fade mb-10 text-ceramic">{dish.meta}</Meta>

        <div className="relative">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <Figure name={dish.images.primary} ratio={4 / 5} sizes="(max-width: 768px) 100vw, 55vw" />
            </div>
          </div>

          {/* The headline sits over the ivory to the left of the plate, never on it. */}
          <div className="relative z-10 -mt-6 md:absolute md:left-0 md:top-[10%] md:mt-0 md:w-[62%]">
            <Lines
              as="h3"
              id={`${chapterId}-dish-title`}
              lines={dish.headline}
              className="text-[clamp(2.5rem,6.4vw,5.75rem)] leading-[0.9]"
            />
          </div>

          <div className="mt-10 grid grid-cols-12 gap-x-6 md:absolute md:bottom-[6%] md:left-0 md:mt-0 md:w-[40%]">
            <div className="col-span-12">
              <Body paragraphs={dish.body} measure="max-w-[42ch]" />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-x-6 md:mt-24">
          <div className="col-span-12 lg:col-span-8">
            <Lines
              as="p"
              lines={dish.statement}
              className="text-[clamp(1.75rem,3.8vw,3.5rem)] leading-[1.03] text-timber"
            />
          </div>
          <p className="reveal-fade body-copy col-span-12 mt-8 max-w-[40ch] lg:col-span-4 lg:mt-0 lg:self-end">
            {dish.coda}
          </p>
        </div>
      </div>
    </section>
  )
}

const LAYOUTS = [DishPinned, DishTurn, DishOverlap]

export function DishSection({ chapter, variant }) {
  const Layout = LAYOUTS[variant] ?? DishPinned
  return <Layout dish={chapter.dish} chapterId={chapter.id} />
}
