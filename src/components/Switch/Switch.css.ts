import { vars } from "../../utils/theme.css";
import { style, styleVariants } from '@vanilla-extract/css'

export const base = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.572rem',
  fontSize: '1.143rem',
  ':hover': {
    cursor: 'pointer'
  },
  selectors: {
    '&[data-disabled]:hover': {
      cursor: 'default'
    }
  }
})

const indicatorBase = style({
  width: '40px',
  height: '22px',
  border: 'none',
  background: '#B3B3B2', // atm missing in vars
  borderRadius: '11px',
  transition: 'all 300ms',
  '::before': {
    content: '',
    display: 'block',
    margin: '0.143rem',
    width: '18px',
    height: '18px',
    background: 'white',
    borderRadius: '16px',
    transition: 'all 200ms',
  },
  selectors: {
    [`${base}[data-selected] &`]:{
      borderColor: vars.colors.orange[100],
      background:  vars.colors.orange[100],
    },
    [`${base}[data-selected] &:before`]: {
      background: 'white',
      transform: 'translateX(100%)'
    },
    [`${base}[data-disabled] &`]: {
      opacity: '0.4'
    }
  }
})

export const indicator = styleVariants({
  normal: [indicatorBase, {
    width: '40px',
    height: '22px',
    '::before': {
      width: '18px',
      height: '18px'
    }
  }],
  small: [indicatorBase, {
    width: '28px',
    height: '16px',
    '::before': {
      width: '12px',
      height: '12px'
    }
  }],
})