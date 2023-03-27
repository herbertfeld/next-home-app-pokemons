import { Button, Heading, styled } from '@ignite-ui/react'

export const Main = styled('main', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
  backgroundColor: '$blue',
})

export const Container = styled('div', {
  maxWidth: 'calc(100% - (100vw - 1160px) / 2)',
  marginLeft: 'auto',
  background: '$blue',
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  gap: '$20',
  padding: 0,
})

export const Hero = styled('div', {
  maxWidth: '480',
  padding: '0 $10',

  [`${Heading}`]: {
    '@media (max-width: 600px)': {
      fontSize: '$8xl',
    },
  },

  [`${Button}`]: {
    color: '$white',
    fontSize: '$md',
    backgroundColor: '$yellow',
  },

  a: {
    textDecorationLine: 'none',
    color: '$white',
    backgroundColor: '$danger',
    hover: {
      backgroundColor: 'acFechado700',
    },
  },
})

export const Prevew = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media(max-width: 600px)': {
    display: 'none',
  },
})
