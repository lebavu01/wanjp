import React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
const Button2 = Button
const CustomButton2 = styled(Button2)(({ theme }) => ({
  display: 'inline-flex',
  textAlign: 'center',
  fontSize: '1.4rem',
  fontWeight: 400,
  textTransform: 'capitalize',
  alignItems: 'center',
  padding: '0.5rem 1.2rem',
  gap: '0.8rem',
  minWidth: '10.5rem',
  borderRadius: '2.6rem',
  background: theme.palette.color.grey1f,
  color: '#fff',
  border: '1px solid transparent',
  '&.MuiButton-outlined': {
    background: '#ffffff',
    border: '1px solid #969696',
    color: theme.palette.color.grey1f
  },
  '&:hover, &:focus': {
    border: '1px solid #2D3CC2',
    background: '#2D3CC2',
    color: '#fff',
    '> svg': {
      filter: 'brightness(0) invert(1)'
    }
  }
}))

export default CustomButton2
