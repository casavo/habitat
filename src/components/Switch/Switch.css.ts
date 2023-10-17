import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../utils/theme.css";
import { style } from '@vanilla-extract/css'

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
  background: vars.colors.neutral[40], // atm missing in vars
  borderRadius: '11px',
  transition: 'all 300ms',
  '::before': {
    content: '',
    display: 'block',
    margin: '0.143rem',
    width: '18px',
    height: '18px',
    background: vars.colors.neutral[0],
    borderRadius: '16px',
    transition: 'all 200ms',
  },
  selectors: {
    [`${base}[data-selected] &`]:{
      background:  vars.colors.orange[100],
      borderColor: vars.colors.orange[100],
    },
    [`${base}[data-selected] &:before`]: {
      background: 'white',
      transform: 'translateX(100%)'
    },
    [`${base}[data-disabled] &`]: {
      background: vars.colors.neutral[10],
      borderColor: vars.colors.neutral[10],
    }
  }
})

export const indicator = recipe({
  base: indicatorBase,
  variants: {
    size: {
      normal: {
        width: '40px',
        height: '22px',
        '::before': {
          width: '18px',
          height: '18px'
        }
      },
      small: {
        width: '28px',
        height: '16px',
        '::before': {
          width: '12px',
          height: '12px'
        }
      }
    },
    theme: {
      b2c: {
        selectors: {
          [`${base}[data-selected] &`]: {
            borderColor: vars.colors.orange[100],
            background:  vars.colors.orange[100],
          },
          [`${base}[data-disabled][data-selected] &`]: {
            background: '#FFCE78',
            borderColor: '#FFCE78',
          }
        }
      },
      b2b: {
        selectors: {
          [`${base}[data-selected] &`]: {
            borderColor: vars.colors.green[100],
            background:  vars.colors.green[100],
          },
          [`${base}[data-disabled][data-selected] &`]: {
            background: vars.colors.green[40],
            borderColor: vars.colors.green[40],
          }
        }
      },
      neutral: {
        selectors: {
          [`${base}[data-selected] &`]: {
            borderColor: vars.colors.neutral[100],
            background:  vars.colors.neutral[100],
          },
          [`${base}[data-disabled][data-selected] &`]: {
            background: vars.colors.neutral[60],
            borderColor: vars.colors.neutral[60],
          }
        }
      },
      
    }
  }
})