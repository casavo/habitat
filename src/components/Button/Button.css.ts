import { style } from '@vanilla-extract/css'

export const base = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.571rem',
  fontSize: '1.143rem',
  color: 'hotpink'
})

export const indicator = style({
  width: '2rem',
  height: '1.143rem',
  border: '2px solid red',
  background: 'greenyellow',
  borderRadius: '1.143rem',
  transition: 'all 200ms',
  '::before': {
    content: '',
    display: 'block',
    margin: '0.143rem',
    width: '0.857rem',
    height: '0.857rem',
    background: 'plum',
    borderRadius: '16px',
    transition: 'all 200ms',
  }
})