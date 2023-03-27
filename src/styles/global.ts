import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    backgroundColor: '$blue',
  },

  body: {
    backgroundColor: '$blue',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
