import React from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import { styled } from '@mui/material/styles'

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  // padding: '.5rem 9px'
}))
export default function SearchBox() {
  return (
    <div>
      <Stack spacing={2} sx={{ width: 300 }}>
        <StyledAutocomplete
          id='Search'
          options={searchData.map((option) => option.title)}
          renderInput={(params) => <TextField {...params} label='Search' />}
        />
      </Stack>
    </div>
  )
}
const searchData = [{ title: 'Search save 1' }, { title: 'Search save 2' }, { title: 'Search save 3' }]
