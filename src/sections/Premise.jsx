import { PREMISE } from '../data/content'
import { Figure, Lines, Meta } from '../components/primitives'
import { gsap, revealIn, useGsap } from '../lib/motion'

/**
 * Deliberate silence. One statement upper-left, a small paragraph bottom-right,
 * a single architectural rule, and a lot of ivory. The band of photography at
 * the foot exists to hand the eye down into the first chapter.
 */
export function Premise() {
  const scope = useGsap(() => {
    const root = scope.current
    revealIn(root, { start: 'top 74%' })
    gsap.fromTo(
      root.querySelector('[data-premise-rule]'),
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.1,
        ease: 'expo.out',
        scrollTrigger: { trigger: root, start: 'top 70%', once: true },
      },
    )
  })

  return (
    <section
      ref={scope}
      id="stories"
      data-tone="light"
      aria-labelledby="premise-title"
      className="relative bg-ivory"
    >
      <div className="page-x mx-auto grid w-full max-w-[100rem] grid-cols-12 gap-x-6 pb-[14svh] pt-[22svh] md:pb-[18svh] md:pt-[26svh]">
        <div className="col-span-12 lg:col-span-9">
          <Meta className="reveal-fade mb-10 text-ceramic md:mb-14">{PREMISE.meta}</Meta>
          <Lines
            as="h2"
            id="premise-title"
            lines={[PREMISE.headline]}
            className="max-w-[15ch] text-[clamp(2.6rem,7vw,6.75rem)] leading-[0.92]"
          />
        </div>

        <div className="col-span-12 mt-14 lg:col-span-7 lg:col-start-1 lg:mt-20">
          <Lines
            as="p"
            lines={PREMISE.lines}
            className="text-[clamp(1.5rem,3.1vw,3rem)] leading-[1.06] text-timber"
          />
        </div>

        <div
          data-premise-rule
          aria-hidden="true"
          className="col-span-12 mt-14 h-px origin-left bg-rattan/60 lg:mt-24"
        />

        <div className="col-span-12 mt-10 lg:col-span-5 lg:col-start-8 lg:mt-14">
          <div className="body-copy max-w-[46ch] space-y-5">
            {PREMISE.body.map((text) => (
              <p key={text} className="reveal-fade">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>

      <Figure
        name="roomMorning"
        ratio={2.9}
        sizes="100vw"
        className="w-full"
        imgClassName="object-[center_62%]"
      />
    </section>
  )
}
