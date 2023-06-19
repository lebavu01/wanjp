import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  Tooltip,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  TablePagination
} from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import SortIcon from '@mui/icons-material/Sort'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import GetAppIcon from '@mui/icons-material/GetApp'

const DataTable = ({ columns, data, rowsPerPageOptions }) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0])
  const [searchText, setSearchText] = useState('')
  const [sortColumn, setSortColumn] = useState('')
  const [sortDirection, setSortDirection] = useState('asc')
  const [fullscreen, setFullscreen] = useState(false)
  const [filteredColumns, setFilteredColumns] = useState(columns)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleSearch = (event) => {
    setSearchText(event.target.value)
  }

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection((prevSortDirection) => (prevSortDirection === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
      setFullscreen(false)
    } else {
      document.documentElement.requestFullscreen()
      setFullscreen(true)
    }
  }

  const handleDownload = () => {
    // Convert data to CSV format
    const csvData = [
      filteredColumns.join(','),
      ...data.map((row) => filteredColumns.map((column) => row[column]).join(','))
    ].join('\n')

    // Create a download link
    const downloadLink = document.createElement('a')
    downloadLink.href = URL.createObjectURL(new Blob([csvData], { type: 'text/csv' }))
    downloadLink.download = 'data.csv'
    downloadLink.click()
  }

  const handleRefresh = () => {
    setPage(0)
    setSearchText('')
    setSortColumn('')
    setSortDirection('asc')
    setFilteredColumns(columns)
  }

  const sortedData = [...data].sort((a, b) => {
    const valueA = String(a[sortColumn]).toLowerCase()
    const valueB = String(b[sortColumn]).toLowerCase()

    if (sortDirection === 'asc') {
      return valueA.localeCompare(valueB)
    } else {
      return valueB.localeCompare(valueA)
    }
  })

  const filteredData = sortedData.filter((row) =>
    Object.values(row).some((value) => String(value).toLowerCase().includes(searchText.toLowerCase()))
  )

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, filteredData.length - page * rowsPerPage)

  const handleColumnFilterChange = (event) => {
    setFilteredColumns(event.target.value)
  }

  return (
    <div>
      <Toolbar>
        {/* Search */}
        <TextField
          variant='outlined'
          label='Search'
          size='small'
          style={{ marginRight: '10px' }}
          onChange={handleSearch}
        />

        {/* Refresh */}
        <Tooltip title='Refresh'>
          <IconButton onClick={handleRefresh}>
            <RefreshIcon />
          </IconButton>
        </Tooltip>

        {/* Sort */}
        <Tooltip title='Sort'>
          <IconButton onClick={() => handleSort('Order ID')}>
            <SortIcon />
          </IconButton>
        </Tooltip>

        {/* Fullscreen */}
        <Tooltip title={fullscreen ? 'Exit Fullscreen' : 'Fullscreen'}>
          <IconButton onClick={handleFullscreen}>{fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}</IconButton>
        </Tooltip>

        {/* Download */}
        <Tooltip title='Download'>
          <IconButton onClick={handleDownload}>
            <GetAppIcon />
          </IconButton>
        </Tooltip>

        {/* Column Filter */}
        <FormControl variant='outlined' size='small' style={{ marginLeft: 'auto' }}>
          <InputLabel>Columns</InputLabel>
          <Select
            multiple
            value={filteredColumns}
            onChange={handleColumnFilterChange}
            label='Columns'
            renderValue={(selected) => selected.join(', ')}
            MenuProps={{
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left'
              },
              getContentAnchorEl: null,
              PaperProps: {
                style: {
                  maxHeight: 300,
                  width: 250
                }
              }
            }}
          >
            {columns.map((column) => (
              <MenuItem key={column} value={column}>
                {column}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Toolbar>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {filteredColumns.map((column) => (
                <TableCell key={column}>
                  <div onClick={() => handleSort(column)}>{column}</div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : filteredData
            ).map((row) => (
              <TableRow key={row.orderId}>
                {filteredColumns.map((column) => (
                  <TableCell key={column}>{row[column]}</TableCell>
                ))}
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={filteredColumns.length} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component='div'
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  )
}

// Example data
const exampleData = [
  {
    'Product Image': 'product1.jpg',
    'Order ID': 1,
    'Marketplace ID': 'MP001',
    'Order Date': '2023-06-01',
    Status: 'Pending',
    Marketplace: 'Amazon',
    Store: 'Store 1',
    Country: 'US',
    SLT: 'Yes'
  },
  {
    'Product Image': 'product1.jpg',
    'Order ID': 1,
    'Marketplace ID': 'MP001',
    'Order Date': '2023-06-01',
    Status: 'Pending',
    Marketplace: 'Amazon',
    Store: 'Store 1',
    Country: 'US',
    SLT: 'Yes'
  },
  {
    'Product Image': 'product1.jpg',
    'Order ID': 1,
    'Marketplace ID': 'MP001',
    'Order Date': '2023-06-01',
    Status: 'Pending',
    Marketplace: 'Amazon',
    Store: 'Store 1',
    Country: 'US',
    SLT: 'Yes'
  },
  {
    'Product Image': 'product1.jpg',
    'Order ID': 1,
    'Marketplace ID': 'MP001',
    'Order Date': '2023-06-01',
    Status: 'Pending',
    Marketplace: 'Amazon',
    Store: 'Store 1',
    Country: 'US',
    SLT: 'Yes'
  },
  {
    'Product Image': 'product1.jpg',
    'Order ID': 1,
    'Marketplace ID': 'MP001',
    'Order Date': '2023-06-01',
    Status: 'Pending',
    Marketplace: 'Amazon',
    Store: 'Store 1',
    Country: 'US',
    SLT: 'Yes'
  },
  {
    'Product Image': 'product1.jpg',
    'Order ID': 1,
    'Marketplace ID': 'MP001',
    'Order Date': '2023-06-01',
    Status: 'Pending',
    Marketplace: 'Amazon',
    Store: 'Store 1',
    Country: 'US',
    SLT: 'Yes'
  },
  {
    'Product Image': 'product1.jpg',
    'Order ID': 1,
    'Marketplace ID': 'MP001',
    'Order Date': '2023-06-01',
    Status: 'Pending',
    Marketplace: 'Amazon',
    Store: 'Store 1',
    Country: 'US',
    SLT: 'Yes'
  },
  {
    'Product Image': 'product1.jpg',
    'Order ID': 1,
    'Marketplace ID': 'MP001',
    'Order Date': '2023-06-01',
    Status: 'Pending',
    Marketplace: 'Amazon',
    Store: 'Store 1',
    Country: 'US',
    SLT: 'Yes'
  },
  {
    'Product Image': 'product1.jpg',
    'Order ID': 1,
    'Marketplace ID': 'MP001',
    'Order Date': '2023-06-01',
    Status: 'Pending',
    Marketplace: 'Amazon',
    Store: 'Store 1',
    Country: 'US',
    SLT: 'Yes'
  },
  {
    'Product Image': 'product1.jpg',
    'Order ID': 1,
    'Marketplace ID': 'MP001',
    'Order Date': '2023-06-01',
    Status: 'Pending',
    Marketplace: 'Amazon',
    Store: 'Store 1',
    Country: 'US',
    SLT: 'Yes'
  },
  {
    'Product Image': 'product1.jpg',
    'Order ID': 1,
    'Marketplace ID': 'MP001',
    'Order Date': '2023-06-01',
    Status: 'Pending',
    Marketplace: 'Amazon',
    Store: 'Store 1',
    Country: 'US',
    SLT: 'Yes'
  }

  // Add more data rows here...
]

const App = () => {
  return (
    <div>
      <Typography variant='h4' align='center' style={{ margin: '20px' }}>
        DataTable Example
      </Typography>
      <DataTable
        columns={[
          'Product Image',
          'Order ID',
          'Marketplace ID',
          'Order Date',
          'Status',
          'Marketplace (image)',
          'Store',
          'Country',
          'SLT'
        ]}
        data={exampleData}
        rowsPerPageOptions={[5, 10, 20]}
      />
    </div>
  )
}

export default App
