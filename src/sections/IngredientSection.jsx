import { useRef } from 'react'
import { Body, Caption, Figure, Lines, Meta } from '../components/primitives'
import { gsap, revealIn, useDesktopPointer, useGsap, useReducedMotion } from '../lib/motion'

/**
 * 01.2 — Hilsa.
 * Three macro crops at three different scales on an asymmetric grid, with the
 * ingredient name run oversized off the left edge of the page.
 */
function IngredientCrops({ ingredient }) {
  const scope = useGsap(() => {
    revealIn(scope.current, { start: 'top 76%', stagger: 0.09 })
  })

  const [a, b, c] = ingredient.images

  return (
    <section ref={scope} data-tone="light" aria-labelledby="hilsa-ingredient-title" className="relative overflow-hidden bg-ivory py-[14svh] md:py-[18svh]">
      <div className="page-x mx-auto w-full max-w-[100rem]">
        <Meta className="reveal-fade text-ceramic">{ingredient.meta}</Meta>
      </div>

      {/* The word runs off the left edge, cropped by the viewport. */}
      <h3
        id="hilsa-ingredient-title"
        className="display mt-6 -ml-[3vw] text-[clamp(5rem,21vw,17rem)] leading-[0.78] text-timber/90 md:-ml-[2vw]"
      >
        <span className="reveal-line">
          <span>{ingredient.title}</span>
        </span>
      </h3>

      <div className="page-x mx-auto mt-12 grid w-full max-w-[100rem] grid-cols-12 gap-x-6 gap-y-14 md:mt-16">
        <div className="col-span-12 md:col-span-7">
          <Lines
            lines={ingredient.headline}
            as="p"
            className="text-[clamp(1.6rem,3.5vw,3.1rem)] leading-[1.06]"
          />
        </div>

        <figure className="col-span-7 md:col-span-4 md:col-start-9 md:-mt-32">
          <Figure name={a.key} ratio={4 / 5} sizes="(max-width: 768px) 58vw, 30vw" />
          <Caption>{a.caption}</Caption>
        </figure>

        <div className="col-span-12 md:col-span-5 md:col-start-2">
          <Body paragraphs={ingredient.body} />
        </div>

        <figure className="col-span-12 md:col-span-5 md:col-start-8">
          <Figure name={b.key} ratio={3 / 2} sizes="(max-width: 768px) 100vw, 38vw" />
          <Caption>{b.caption}</Caption>
        </figure>

        <figure className="col-span-8 col-start-4 md:col-span-3 md:col-start-2">
          <Figure name={c.key} ratio={4 / 5} sizes="(max-width: 768px) 66vw, 24vw" />
          <Caption>{c.caption}</Caption>
        </figure>

        <div className="col-span-12 self-end md:col-span-6 md:col-start-6">
          <Lines
            as="p"
            lines={ingredient.statement}
            className="text-[clamp(1.4rem,2.8vw,2.5rem)] leading-[1.08] text-ceramic"
          />
        </div>
      </div>
    </section>
  )
}

/**
 * 02.2 — Gondhoraj.
 * One macro takes most of the viewport. The name is set vertically down the
 * left edge at architectural scale; the copy stays small underneath it.
 */
function IngredientMonolith({ ingredient }) {
  const desktop = useDesktopPointer()
  const reduced = useReducedMotion()
  const heroRef = useRef(null)

  const scope = useGsap(() => {
    const root = scope.current
    revealIn(root, { start: 'top 76%' })
    if (reduced || !desktop) return
    gsap.to(heroRef.current.querySelector('img'), {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: { trigger: heroRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
    })
  }, [reduced, desktop])

  return (
    <section ref={scope} data-tone="light" aria-labelledby="gondhoraj-ingredient-title" className="relative overflow-hidden bg-ivory py-[14svh] md:py-[18svh]">
      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6">
        {/* Stacks until lg: "Gondhoraj" at display scale will not sit in a
            four-column measure at tablet widths. */}
        <div className="col-span-12 lg:col-span-4">
          <Meta className="reveal-fade text-ceramic">{ingredient.meta}</Meta>
          <h3
            id="gondhoraj-ingredient-title"
            className="display mt-6 text-[clamp(3.25rem,8.5vw,7rem)] leading-[0.86] text-timber"
          >
            <span className="reveal-line">
              <span>{ingredient.title}</span>
            </span>
          </h3>
        </div>

        <div ref={heroRef} className="col-span-12 mt-10 lg:col-span-8 lg:mt-0">
          <Figure
            name={ingredient.hero}
            ratio={4 / 5}
            sizes="(max-width: 1024px) 100vw, 62vw"
            imgClassName="h-[112%]"
            className="w-full"
          />
        </div>

        <div className="col-span-12 mt-14 md:col-span-7 md:mt-20">
          <Lines
            as="p"
            lines={ingredient.headline}
            className="text-[clamp(1.6rem,3.6vw,3.2rem)] leading-[1.05]"
          />
        </div>

        <div className="col-span-12 mt-10 md:col-span-5 md:col-start-2 md:mt-16">
          <Body paragraphs={ingredient.body} />
        </div>

        <div className="col-span-12 mt-12 grid grid-cols-2 gap-6 md:col-span-4 md:col-start-9 md:mt-16 md:grid-cols-1 md:gap-10">
          {ingredient.supports.map((support) => (
            <figure key={support.key}>
              <Figure name={support.key} ratio={3 / 2} sizes="(max-width: 768px) 46vw, 28vw" />
              <Caption>{support.caption}</Caption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * 03.2 — Black cardamom.
 * Three words, three lines, and a strip of macro plates that each take over the
 * frame as their line arrives. The layering is the point.
 */
function IngredientLayers({ ingredient }) {
  const reduced = useReducedMotion()
  const scope = useGsap(() => {
    const root = scope.current
    revealIn(root, { start: 'top 76%' })
    if (reduced) return
    gsap.from(root.querySelectorAll('[data-layer]'), {
      clipPath: 'inset(0% 0% 100% 0%)',
      duration: 0.7,
      ease: 'expo.out',
      stagger: 0.12,
      scrollTrigger: { trigger: root.querySelector('[data-layer-grid]'), start: 'top 78%', once: true },
    })
  }, [reduced])

  return (
    <section ref={scope} data-tone="light" aria-labelledby="railway-ingredient-title" className="relative overflow-hidden bg-ivory py-[14svh] md:py-[18svh]">
      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-6">
          <Meta className="reveal-fade text-ceramic">{ingredient.meta}</Meta>
          <p className="reveal-fade mt-6 text-[clamp(1.05rem,1.5vw,1.35rem)] text-rattan">{ingredient.title}</p>
          <Lines
            as="h3"
            id="railway-ingredient-title"
            lines={ingredient.headline}
            className="mt-4 text-[clamp(3rem,8vw,7rem)] leading-[0.9]"
          />
        </div>

        <div className="col-span-12 mt-12 lg:col-span-5 lg:col-start-8 lg:mt-32">
          <Body paragraphs={ingredient.body} />
        </div>
      </div>

      <div
        data-layer-grid
        className="page-x mx-auto mt-16 grid w-full max-w-[100rem] grid-cols-2 gap-x-4 gap-y-8 md:mt-24 md:grid-cols-4 md:gap-x-6"
      >
        {ingredient.layers.map((layer, i) => (
          <figure key={layer.key} data-layer className={i % 2 === 1 ? 'md:mt-14' : ''}>
            <Figure name={layer.key} mask={false} ratio={4 / 5} sizes="(max-width: 768px) 46vw, 22vw" />
            <figcaption className="mt-3">
              <span className="meta block text-ceramic">{layer.label}</span>
              <span className="mt-1 block text-[0.8125rem] leading-relaxed opacity-65">{layer.note}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="page-x mx-auto mt-16 grid w-full max-w-[100rem] grid-cols-12 gap-x-6 md:mt-24">
        <div className="col-span-12 lg:col-span-7">
          <Lines
            as="p"
            lines={ingredient.statement}
            className="text-[clamp(1.5rem,3.2vw,2.8rem)] leading-[1.06] text-timber"
          />
        </div>
        <p className="reveal-fade body-copy col-span-12 mt-6 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:self-end">
          {ingredient.coda}
        </p>
      </div>
    </section>
  )
}

const LAYOUTS = [IngredientCrops, IngredientMonolith, IngredientLayers]

export function IngredientSection({ chapter, variant }) {
  const Layout = LAYOUTS[variant] ?? IngredientCrops
  return <Layout ingredient={chapter.ingredient} />
}
