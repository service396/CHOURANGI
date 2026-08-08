import { useEffect, useState } from 'react'
import { SITE } from '../data/content'

/** Where the brand mark lives. Drop the file here and it appears everywhere. */
export const MARK_SRC = '/brand/chourangi-mark.svg'

/**
 * True once the brand mark is known to load.
 *
 * The mark is painted with a CSS mask so it inherits the surrounding text
 * colour — ivory over the dark chapters, charcoal over ivory — which an <img>
 * cannot do. A mask silently paints a filled rectangle when its source is
 * missing, so the asset is probed first and the mark is only rendered once it
 * is known to exist. Until then the wordmark stands alone rather than the page
 * showing a black box.
 */
function useMark() {
  const [ok, setOk] = useState(false)
  useEffect(() => {
    const probe = new Image()
    probe.onload = () => setOk(true)
    probe.src = MARK_SRC
    return () => {
      probe.onload = null
    }
  }, [])
  return ok
}

/**
 * The Chourangi lockup.
 *
 * `inline` sets the mark beside the wordmark, for the navigation bar.
 * `stacked` sets it above, matching the printed lockup, for the footer.
 */
export function Logo({
  variant = 'inline',
  className = '',
  markSize = '1.55em',
  wordmarkClassName = '',
}) {
  const hasMark = useMark()
  const stacked = variant === 'stacked'

  return (
    <span
      className={`inline-flex ${stacked ? 'flex-col items-center gap-3' : 'flex-row items-center gap-2.5'} ${className}`}
    >
      {hasMark ? (
        <span
          aria-hidden="true"
          className="block shrink-0 bg-current"
          style={{
            width: markSize,
            height: markSize,
            maskImage: `url(${MARK_SRC})`,
            WebkitMaskImage: `url(${MARK_SRC})`,
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
          }}
        />
      ) : null}
      <span className={`display uppercase leading-none ${wordmarkClassName}`}>{SITE.name}</span>
    </span>
  )
}
