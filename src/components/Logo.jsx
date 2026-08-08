import { SITE } from '../data/content'

/**
 * The Chourangi identity, drawn from the supplied artwork rather than set in a
 * substitute typeface — the wordmark is a slab serif that Instrument Serif was
 * only ever approximating.
 *
 * Each piece is painted as a CSS mask over `currentColor`, so the identity
 * takes the colour of whatever it sits on: charcoal over ivory and parchment,
 * ivory over the ceramic blue, heritage green and timber chapters. An <img>
 * would be locked to the black it was drawn in and disappear against half the
 * page. The source artwork is already black on full transparency, so its alpha
 * channel is the mask with no processing at runtime.
 */
const ASSETS = {
  mark: { src: '/brand/chourangi-mark.png', ratio: 225 / 297 },
  wordmark: { src: '/brand/chourangi-wordmark.png', ratio: 742 / 71 },
  lockup: { src: '/brand/chourangi-lockup.png', ratio: 742 / 404 },
}

function Masked({ asset, height, width, className = '' }) {
  const { src, ratio } = ASSETS[asset]
  return (
    <span
      aria-hidden="true"
      className={`block shrink-0 bg-current ${className}`}
      style={{
        // Give one dimension and let the aspect ratio derive the other; the
        // ratio must always be set or the unspecified dimension collapses.
        height: height ?? undefined,
        width: width ?? undefined,
        aspectRatio: ratio,
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
      }}
    />
  )
}

/**
 * `inline` sets the mark beside the wordmark, for the navigation bar.
 * `stacked` uses the supplied lockup whole, for the footer.
 */
export function Logo({ variant = 'inline', className = '', markHeight, lockupWidth }) {
  if (variant === 'stacked') {
    return (
      <span className={`inline-block ${className}`}>
        <Masked asset="lockup" width={lockupWidth ?? 'clamp(8.5rem, 13vw, 11rem)'} />
        <span className="sr-only">{SITE.name}</span>
      </span>
    )
  }

  return (
    <span className={`inline-flex items-center gap-2.5 md:gap-3 ${className}`}>
      <Masked asset="mark" height={markHeight ?? 'clamp(1.5rem, 2.2vw, 1.9rem)'} />
      <Masked asset="wordmark" height="clamp(0.6rem, 0.85vw, 0.75rem)" />
      <span className="sr-only">{SITE.name}</span>
    </span>
  )
}
