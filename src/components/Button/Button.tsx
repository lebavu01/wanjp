import React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const CustomButton = styled(Button)(({ theme }) => ({
  display: 'inline-flex',
  textAlign: 'center',
  fontSize: '1.4rem',
  fontWeight: 400,
  textTransform: 'capitalize',
  alignItems: 'center',
  padding: '0.5rem 1.2rem',
  gap: '0.8rem',
  background: '#252C32',
  color: '#fff',
  borderRadius: '0.6rem',
  border: '1px solid transparent',
  '&.MuiButton-outlined': {
    background: '#ffffff',
    color: '#252C32',
    border: '1px solid #dde2e4'
  },
  '&:not(.MuiButton-outlined)': {
    '> svg': {
      filter: 'brightness(0) invert(1)'
    }
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

export default CustomButton
