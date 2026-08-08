import { forwardRef } from 'react'
import { img } from '../data/media'

/** Uppercase tracked label. The structural voice of the page. */
export function Meta({ children, className = '', as: Tag = 'p' }) {
  return <Tag className={`meta ${className}`}>{children}</Tag>
}

/** A hairline architectural rule. */
export function Rule({ className = '' }) {
  return <div aria-hidden="true" className={`rule-h ${className}`} />
}

/**
 * Display type split into masked lines. Each line animates independently,
 * which is why the copy arrives as an array of strings rather than one blob.
 */
export function Lines({ lines, className = '', as: Tag = 'h2', animate = true, ...rest }) {
  const content = Array.isArray(lines) ? lines : [lines]
  return (
    <Tag className={`display ${className}`} {...rest}>
      {content.map((line, i) => (
        <span key={i} className={animate ? 'reveal-line' : 'block'}>
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  )
}

/**
 * An image from the manifest.
 *
 * `mask` gives it the house clip-path reveal. `ratio` overrides the source
 * aspect ratio when a crop is deliberate. Intrinsic width/height are always
 * emitted so the page never reflows as photography arrives.
 */
export const Figure = forwardRef(function Figure(
  {
    name,
    className = '',
    imgClassName = '',
    ratio,
    priority = false,
    mask = true,
    sizes = '100vw',
    children,
    ...rest
  },
  ref,
) {
  const asset = img(name)
  const aspect = ratio ?? asset.ratio
  const width = 1600
  const height = Math.round(width / asset.ratio)

  return (
    <figure
      ref={ref}
      className={`relative overflow-hidden ${mask ? 'reveal-mask' : ''} ${className}`}
      style={{ aspectRatio: aspect }}
      {...rest}
    >
      <img
        src={asset.src}
        alt={asset.alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
      {children}
    </figure>
  )
})

/** Small sans caption. Sits under cultural and archival imagery. */
export function Caption({ children, className = '' }) {
  return (
    <figcaption className={`mt-4 max-w-[46ch] text-[0.8125rem] leading-relaxed opacity-70 ${className}`}>
      {children}
    </figcaption>
  )
}

/** Body paragraphs at a controlled measure. */
export function Body({ paragraphs, className = '', measure = 'max-w-[52ch]' }) {
  return (
    <div className={`body-copy space-y-5 ${measure} ${className}`}>
      {paragraphs.map((text, i) => (
        <p key={i} className="reveal-fade">
          {text}
        </p>
      ))}
    </div>
  )
}

/** Text link with an underline that draws in from the left. */
export function ArrowLink({ href, children, external = false, className = '', size = 'base' }) {
  const scale = size === 'lg' ? 'text-[clamp(1.05rem,1.7vw,1.5rem)]' : 'text-sm'
  return (
    <a
      href={href}
      data-cursor="link"
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      className={`group inline-flex items-baseline gap-2 ${scale} ${className}`}
    >
      <span className="relative">
        <span className="meta !text-[inherit] !tracking-[0.14em]">{children}</span>
        <span
          aria-hidden="true"
          className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
        />
      </span>
      <span aria-hidden="true" className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1">
        ↗
      </span>
    </a>
  )
}
