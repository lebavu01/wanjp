import React from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import ErrorIcon from '@mui/icons-material/Error'
import Autocomplete from '@mui/material/Autocomplete'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

export default function SearchAutocomplete() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        paddingBottom: 3,
        backgroundImage: `linear-gradient(to right, ${theme.palette.color.grey999} 100%,transparent 0%)`,
        backgroundSize: '10rem 1.5px',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Box className='mb-6 flex flex-wrap items-center justify-between gap-8'>
        <Typography sx={{}} variant='h3' gutterBottom>
          Search by Order
        </Typography>
        <Tooltip title='Want Sales Order ID, Market Order ID, Want Product ID, or Tracking Code' arrow>
          <ErrorIcon />
        </Tooltip>
      </Box>
      <Stack spacing={2} sx={{ width: '100%', background: '#fff' }}>
        <Autocomplete
          id='Search'
          options={searchData.map((option) => option.title)}
          renderInput={(params) => <TextField {...params} label='Search' />}
        />
      </Stack>
    </Box>
  )
}
const searchData = [{ title: 'Search save 1' }, { title: 'Search save 2' }, { title: 'Search save 3' }]
