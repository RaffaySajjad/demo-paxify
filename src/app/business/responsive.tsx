import { css } from '@emotion/react'

const breakpoints = {
  // Numerical values will result in a min-width query
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  mdpiScreen: 1279,
  largeLaptop: 1439,
  fourK: 2160,
  // String values will be used as is
  tallPhone: '(max-width: 360px) and (min-height: 740px)',
}

export const mq: any = Object.keys(breakpoints)
  .map((key) => [key, breakpoints[key]] as [string, number])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (min-width: ${breakpoint}px)`
    return prev
  }, {} as { [index: string]: string })

export function isMobileDevice() {
  if (typeof window != 'undefined') {
    let mq = window.matchMedia('(max-width: 768px)')
    return mq.matches
  } else return null
}
