import React, { useState } from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import DataTable from '@/components/DataTable'
import SelectBox from '@/components/SelectItem'
import Box from '@mui/material/Box'
import UploadImage from '@/assets/upload.png'
import Typography from '@mui/material/Typography'
import Autocomplete from '@/components/Autocomplete'
import { useTheme } from '@mui/material/styles'
import { Input } from '@/components/Input/Input'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function SaleOrderSearch() {
  const theme = useTheme()
  const options = [
    { value: 'A option1', label: 'A Option 1' },
    { value: 'A option2', label: 'A Option 2' },
    { value: 'A option3', label: 'A Option 3' }
  ]
  const options2 = [
    { value: 'B option1', label: 'B Option 1' },
    { value: 'B option2', label: 'B Option 2' },
    { value: 'B option3', label: 'B Option 3' }
  ]
  const options3 = [
    { value: 'C option1', label: 'C Option 1' },
    { value: 'C option2', label: 'C Option 2' },
    { value: 'C option3', label: 'C Option 3' }
  ]

  return (
    <div>
      <Breadcrumb />
      <h2 className='border-grey-df border-b-[1px] border-solid pb-[1.5rem] text-xl'>Sale Order Search</h2>
      <div className='main-layout'>
        <aside className='aside bg-grey-f6 p-8'>
          <Autocomplete />
          <div className='mt-8'>
            <h4 className='text-s'>Filter Search</h4>
            <SelectBox options={options} label='Marketplace' />
            <SelectBox options={options2} label='Status' />
            <SelectBox options={options3} label='Shipping Carrier' />
            {/* <Dropdown options={options} selectedOption={selectedOption} onOptionChange={handleOptionChange} /> */}
          </div>
          <Input id='1' label='Date field' />
          <Stack spacing={2} direction='row' sx={{ marginTop: 3 }}>
            <Button sx={{ textTransform: 'capitalize' }} variant='contained'>
              Search
            </Button>
            <Button sx={{ textTransform: 'capitalize' }} variant='contained'>
              Save
            </Button>
            <Button sx={{ textTransform: 'capitalize' }} variant='contained'>
              Clear
            </Button>
          </Stack>
          <Box
            sx={{
              paddingTop: 3,
              backgroundImage: `linear-gradient(to right, ${theme.palette.color.grey999} 100%,transparent 0%)`,
              backgroundSize: '10rem 1.5px',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat',
              marginTop: 3
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
              <Box sx={{ width: '100%', maxWidth: '4rem' }}>
                <img src={UploadImage} className='w-full' alt='upload' />
              </Box>
              <Typography sx={{ textAlign: 'center', maxWidth: '18rem' }} variant='h5' gutterBottom>
                Sales Order Manual Upload
              </Typography>
            </Box>
          </Box>
        </aside>
        <main className='main-content'>
          <DataTable></DataTable>
        </main>
      </div>
    </div>
  )
}
