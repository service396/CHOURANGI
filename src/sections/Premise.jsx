import { PREMISE } from '../data/content'
import { Lines, Meta } from '../components/primitives'
import { StoryCarousel } from '../components/StoryCarousel'
import { gsap, revealIn, useGsap } from '../lib/motion'

/**
 * The opening. The statement carries the idea, the two halves of the argument
 * sit level with each other rather than stacked down the page, and the carousel
 * closes the section — so the reader meets all three dishes before being taken
 * into the first one.
 */
export function Premise() {
  const scope = useGsap(() => {
    const root = scope.current
    revealIn(root, { start: 'top 82%' })
    gsap.fromTo(
      root.querySelector('[data-premise-rule]'),
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.1,
        ease: 'expo.out',
        scrollTrigger: { trigger: root, start: 'top 78%', once: true },
      },
    )
  })

  return (
    <section
      ref={scope}
      id="stories"
      data-tone="light"
      aria-labelledby="premise-title"
      className="relative bg-ivory pb-[12svh] pt-[17svh] md:pb-[14svh] md:pt-[20svh]"
    >
      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-10">
          <Meta className="reveal-fade mb-8 text-ceramic md:mb-10">{PREMISE.meta}</Meta>
          <Lines
            as="h1"
            id="premise-title"
            lines={[PREMISE.headline]}
            className="max-w-[15ch] text-[clamp(2.6rem,7vw,6.75rem)] leading-[0.92]"
          />
        </div>

        <div className="col-span-12 mt-10 md:col-span-6 md:mt-14">
          <Lines
            as="p"
            lines={PREMISE.lines}
            className="text-[clamp(1.35rem,2.5vw,2.35rem)] leading-[1.1] text-timber"
          />
        </div>

        <div className="col-span-12 mt-7 md:col-span-5 md:col-start-8 md:mt-14">
          <div className="body-copy max-w-[44ch] space-y-4">
            {PREMISE.body.map((text) => (
              <p key={text} className="reveal-fade">
                {text}
              </p>
            ))}
          </div>
        </div>

        <div
          data-premise-rule
          aria-hidden="true"
          className="col-span-12 mt-12 h-px origin-left bg-rattan/60 md:mt-16"
        />
      </div>

      <StoryCarousel />
    </section>
  )
}
