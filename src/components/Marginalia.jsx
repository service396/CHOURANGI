import { img } from '../data/media'
import { gsap, useGsap, useReducedMotion } from '../lib/motion'

/**
 * A pen-and-ink drawing set into a section's empty column.
 *
 * These are marginalia, not photography: they sit in space the layout already
 * leaves blank, they carry no information the copy does not, and they are
 * hidden from assistive technology. Each one is chosen for the section it sits
 * in — the fish beside the chapter about the fish — never decoratively.
 *
 * The drawings are black ink on white, so they are composited rather than
 * placed. On the light surfaces `multiply` drops the white out and leaves the
 * ink; on the dark ones the drawing is inverted first and screened, so the
 * same file reads as white line work. One asset covers both, and neither needs
 * a cutout.
 */
export function Marginalia({
  name,
  className = '',
  tone = 'light',
  /** How far the drawing counter-drifts across the section, in pixels. */
  drift = 46,
  /** Resting opacity. Low by default: this sits under the type, not beside it. */
  opacity = 0.6,
}) {
  const reduced = useReducedMotion()

  const scope = useGsap(() => {
    const root = scope.current
    const art = root.querySelector('[data-ink]')
    if (reduced) {
      gsap.set(art, { opacity, y: 0, clipPath: 'inset(0% 0% 0% 0%)' })
      return
    }

    // Drawn on: the ink arrives from the bottom edge up, the way it would be
    // laid down, rather than fading in.
    gsap.set(art, { opacity, clipPath: 'inset(0% 0% 100% 0%)' })
    gsap.to(art, {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.1,
      ease: 'expo.out',
      scrollTrigger: { trigger: root, start: 'top 88%', once: true },
    })

    // Scrubbed both ways, so scrolling back up returns it. This is the whole
    // of the interaction: the drawing answers the scroll and nothing more.
    gsap.fromTo(
      art,
      { y: drift },
      {
        y: -drift,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      },
    )
  }, [reduced, drift, opacity])

  const asset = img(name)

  return (
    <div
      ref={scope}
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <img
        data-ink
        src={asset.src}
        alt=""
        width={1200}
        height={Math.round(1200 / asset.ratio)}
        loading="lazy"
        decoding="async"
        sizes="(max-width: 768px) 40vw, 24vw"
        className="h-auto w-full"
        style={{
          mixBlendMode: tone === 'dark' ? 'screen' : 'multiply',
          filter: tone === 'dark' ? 'invert(1)' : 'none',
        }}
      />
    </div>
  )
}
