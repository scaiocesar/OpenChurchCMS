import { routing } from './routing'

/** Resolves how locale segments appear in URLs (aligned with `defineRouting`). */
export function localePrefixMode(): 'always' | 'as-needed' | 'never' {
  const lp = routing.localePrefix as
    | 'always'
    | 'as-needed'
    | 'never'
    | { mode: 'always' | 'as-needed' | 'never' }
    | undefined
  if (lp == null) return 'as-needed'
  if (typeof lp === 'string') return lp
  return lp.mode
}
