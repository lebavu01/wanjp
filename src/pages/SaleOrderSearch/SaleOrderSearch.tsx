import React, { useState } from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import SelectBox from '@/components/SelectItem'
import UploadImage from '@/assets/upload.png'
import Typography from '@mui/material/Typography'
import Autocomplete from '@/components/Autocomplete'
import { useTheme } from '@mui/material/styles'
import { Input } from '@/components/Input/Input'
import CustomButton from '@/components/Button'
import CustomButton2 from '@/components/Button2'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  IconButton,
  Grid,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  OutlinedInput,
  InputAdornment
} from '@mui/material'
import {
  Search,
  FilterList,
  Refresh,
  Fullscreen,
  CloudDownload,
  ArrowUpward,
  ArrowDownward,
  ArrowBackIos,
  ArrowForwardIos
} from '@mui/icons-material'
import { Search2Icon } from '@/components/Icons'

const PagiButton = Button
const CustomPagiButton = styled(PagiButton)(({ theme }) => ({
  background: '#ffffff',
  border: '1px solid #b3b3b3',
  width: 'auto',
  height: '3.2rem',
  borderRadius: '0',
  display: 'grid',
  placeItems: 'center',
  minWidth: 'auto',
  color: '#b3b3b3',
  '> svg': {
    width: '7.5rem',
    height: '1.2rem'
  },
  '&.next,&.prev': {
    width: '3.2rem'
  },
  '&.active,&:hover': {
    border: '1px solid #000',
    color: '#000'
  }
}))
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

import { SearchIcon, DownloadIcon, RefeshIcon, ClolumnsIcon, AdjustmentsIcon, FullscreenIcon } from '@/components/Icons'
import { FilterIcon } from 'lucide-react'
import SearchBox from '@/components/SearchBox'
import Datatable from '@/components/DataTable'

const CustomTablePagination = ({ count, page, rowsPerPage, onPageChange, onRowsPerPageChange }) => {
  const handleChangePage = (event, newPage) => {
    onPageChange(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    onRowsPerPageChange(parseInt(event.target.value, 10))
  }

  const totalPages = Math.ceil(count / rowsPerPage)
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className='custom-table-pagination mt-[1.5rem] overflow-hidden'>
      <Stack gap={2} direction='row' justifyContent='space-between'>
        <Stack direction='row' gap={1} alignItems='center'>
          <span className='pagination-label'>Rows per page:</span>
          <select className='rows-per-page-select' value={rowsPerPage} onChange={handleChangeRowsPerPage}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
          </select>

          <span className='page-info'>{`Page ${page + 1} of ${totalPages}`}</span>
        </Stack>

        <Stack direction='row' gap='.8rem' className='table-pagination'>
          <CustomPagiButton
            className='prev'
            disabled={page === 0}
            onClick={(event) => handleChangePage(event, page - 1)}
          >
            <ArrowBackIos />
          </CustomPagiButton>
          {pageNumbers.map((pageNumber) => (
            <Stack key={pageNumber}>
              <CustomPagiButton
                className={`page-button ${pageNumber === page + 1 ? 'active' : ''}`}
                onClick={(event) => handleChangePage(event, pageNumber - 1)}
              >
                {pageNumber}
              </CustomPagiButton>
            </Stack>
          ))}
          <CustomPagiButton
            className='next'
            disabled={page >= totalPages - 1}
            onClick={(event) => handleChangePage(event, page + 1)}
          >
            <ArrowForwardIos />
          </CustomPagiButton>
        </Stack>
      </Stack>
    </div>
  )
}

const MyDataTable = ({ data }) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [filteredData, setFilteredData] = useState(data)
  const [sortConfig, setSortConfig] = useState(null)
  const [filters, setFilters] = useState({
    name: '',
    email: '',
    age: ''
  })

  const handleChangePage = (newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage)
    setPage(0)
  }

  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase()
    const filtered = data.filter(
      (item) => item.name.toLowerCase().includes(keyword) || item.email.toLowerCase().includes(keyword)
    )
    setFilteredData(filtered)
    setPage(0)
  }

  const handleRefresh = () => {
    setFilteredData(data)
    setPage(0)
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, filteredData.length - page * rowsPerPage)

  const headers = filteredData.length > 0 ? Object.keys(filteredData[0]) : []

  return (
    <TableContainer>
      <Stack direction='row' gap={2} alignItems='flex-end' flexWrap='wrap' justifyContent='space-between'>
        <Typography sx={{}} variant='h3'>
          Sales Order Manual Upload
        </Typography>
        <Stack direction='row' gap={2} flexWrap='wrap'>
          <OutlinedInput
            id='search'
            size='small'
            onChange={handleSearch}
            sx={{
              maxWidth: '10.5rem',
              border: '1px solid #dde2e4',
              paddingLeft: '1rem',
              '> fieldset': {
                display: 'none'
              }
            }}
            startAdornment={
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            }
            placeholder='search'
          />
          <CustomButton variant='outlined' onClick={handleRefresh}>
            <RefeshIcon />
            Refresh
          </CustomButton>
          <CustomButton variant='outlined'>
            <ClolumnsIcon />
            Columns
          </CustomButton>
          <CustomButton variant='outlined'>
            <FilterIcon />
            Filter
          </CustomButton>
          <CustomButton variant='outlined'>
            <AdjustmentsIcon /> Sort
          </CustomButton>
          <CustomButton variant='outlined'>
            <FullscreenIcon />
            Fullscreen
          </CustomButton>
          <CustomButton variant='outlined'>
            <DownloadIcon />
            Download
          </CustomButton>
        </Stack>
      </Stack>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {header}
                  {sortConfig && sortConfig.key === header && (
                    <div style={{ marginLeft: '4px' }}>
                      {sortConfig.direction === 'asc' ? (
                        <ArrowUpward fontSize='small' />
                      ) : (
                        <ArrowDownward fontSize='small' />
                      )}
                    </div>
                  )}
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : filteredData
          ).map((row) => (
            <TableRow key={row.id}>
              {headers.map((header) => {
                if (header === 'Product Image') {
                  return (
                    <TableCell key={header}>
                      <img src={row[header]} alt='Product' style={{ width: '50px', height: '50px' }} />
                    </TableCell>
                  )
                }
                return <TableCell key={header}>{row[header]}</TableCell>
              })}
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={headers.length} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <CustomTablePagination
        count={filteredData.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  )
}
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
  const columns = [
    'Product Image',
    'Order ID',
    'Marketplace ID',
    'Order Date',
    'Status',
    'Marketplace (image)',
    'Store',
    'Country',
    'SLT'
  ]
  const demoData = [
    { 'Product Image': '/src/assets/image-8.png', name: 'John Doe', age: 25, email: 'john@example.com' },
    { 'Product Image': '/src/assets/image-8.png', name: 'Jane Smith', age: 30, email: 'jane@example.com' },
    { 'Product Image': '/src/assets/image-8.png', name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
    { 'Product Image': '/src/assets/image-8.png', name: 'Alice Williams', age: 28, email: 'alice@example.com' },
    { 'Product Image': '/src/assets/image-8.png', name: 'Mike Brown', age: 32, email: 'mike@example.com' },
    { 'Product Image': '/src/assets/image-8.png', name: 'Sarah Davis', age: 27, email: 'sarah@example.com' },
    { 'Product Image': '/src/assets/image-8.png', name: 'Tom Wilson', age: 29, email: 'tom@example.com' },
    { 'Product Image': '/src/assets/image-8.png', name: 'Emily Taylor', age: 31, email: 'emily@example.com' },
    { 'Product Image': '/src/assets/image-8.png', name: 'Alex Clark', age: 33, email: 'alex@example.com' },
    { 'Product Image': '/src/assets/image-8.png', name: 'Olivia Lee', age: 26, email: 'olivia@example.com' },
    { 'Product Image': '/src/assets/image-8.png', name: 'Daniel Hernandez', age: 34, email: 'daniel@example.com' },
    { 'Product Image': '/src/assets/image-8.png', name: 'Lily Johnson', age: 23, email: 'lily@example.com' },
    { 'Product Image': '/src/assets/image-8.png', name: 'Max Miller', age: 37, email: 'max@example.com' },
    { 'Product Image': '/src/assets/image-8.png', name: 'Sophia Davis', age: 24, email: 'sophia@example.com' },
    { 'Product Image': '/src/assets/image-8.png', name: 'Jacob Wilson', age: 31, email: 'jacob@example.com' }
  ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container height={100 + '%'} spacing={2}>
        <Grid item xs={12} lg={3} xl={2}>
          <Box sx={{ background: theme.palette.color.greyFb, height: '100%' }}>
            <Box sx={{ padding: '1rem 1rem 2rem' }}>
              <p className='mb-6 text-[1.6rem]'>
                Search for
                <strong> one </strong>
                order.
              </p>
              <SearchBox id='input-search' label='ID' placeholder='Order/Marketplace/Product ID' />
            </Box>
            <Divider sx={{ background: '#D9D8D8' }} />
            <Box sx={{ padding: '1.5rem 1rem 2rem' }}>
              <p className='text-[1.6rem]'>
                Search for
                <strong> multiple </strong> orders. Select one or more of the following.
              </p>
              <SelectBox options={options} label='Marketplace' />
              <SelectBox options={options2} label='Status' />
            </Box>
            <Divider sx={{ background: '#D9D8D8', marginTop: '10rem' }} />
            <Box sx={{ padding: '0 1rem 2rem' }}>
              <SelectBox options={options3} label='Saved Searches' />
            </Box>
            <Divider sx={{ background: '#D9D8D8' }} />

            <Stack gap={2} direction='row' flexWrap='wrap' sx={{ padding: '2rem 1rem' }}>
              <CustomButton2 variant='contained'>Search</CustomButton2>
              <CustomButton2 variant='outlined'>Clear</CustomButton2>
              <CustomButton2 variant='outlined'>Save</CustomButton2>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} lg={9} xl={10}>
          <Box sx={{ background: '#FFFFFF', border: '1px solid #E8E8E8', borderRadius: '5px', padding: '1.5rem' }}>
            <MyDataTable data={demoData} columns={columns} />
          </Box>
        </Grid>
      </Grid>
      {/* <Datatable></Datatable> */}
    </Box>
  )
}
