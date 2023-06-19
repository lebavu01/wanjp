import React from 'react'
import { Search } from '@mui/icons-material'
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material'
import classNames from 'classnames/bind'
import styles from './SearchBox.module.scss'
import { Search2Icon } from '@/components/Icons'
const cx = classNames.bind(styles)

const MyComponent = ({ id, label, placeholder }) => {
  return (
    <FormControl variant='outlined' className={cx('searchbox')}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        startAdornment={
          <InputAdornment position='start'>
            <Search2Icon />
          </InputAdornment>
        }
        placeholder={placeholder}
      />
    </FormControl>
  )
}

export default MyComponent
