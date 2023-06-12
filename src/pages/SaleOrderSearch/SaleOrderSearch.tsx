import React, { useState } from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import DataTable from '@/components/DataTable'
import SearchBox from '@/components/SearchBox'
import ErrorIcon from '@mui/icons-material/Error'
import Box from '@/components/SelectItem'
import Tooltip from '@mui/material/Tooltip'

export default function SaleOrderSearch() {
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
          <div className='mb-8'>
            <div className='mb-6 flex flex-wrap items-center justify-between gap-8'>
              <h3 className='text-l'>Search by Order</h3>
              <Tooltip title='Want Sales Order ID, Market Order ID, Want Product ID, or Tracking Code' arrow>
                <ErrorIcon />
              </Tooltip>
            </div>
            <SearchBox />
          </div>
          <div>
            <h4 className='text-s'>Filter Search</h4>
            <Box options={options} label='Marketplace' />
            <Box options={options2} label='Status' />
            <Box options={options3} label='Shipping Carrier' />
            {/* <Dropdown options={options} selectedOption={selectedOption} onOptionChange={handleOptionChange} /> */}
          </div>
        </aside>
        <main className='main-content'>
          <DataTable></DataTable>
        </main>
      </div>
    </div>
  )
}
