import { Outlet } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Navbar from './components/Navbar'
const theme = createTheme({
  palette: {
    color: {
      blue: '#0ea5e9',
      greyF6: '#f6f6f7',
      greyEd: '#ededed',
      grey999: '#999'
    }
  },
  typography: {
    fontSize: 22, // Set the base font size
    h1: {
      fontSize: '3rem', // Customize heading level 1
      fontWeight: 500
    },
    h2: {
      fontSize: '2.8rem', // Customize heading level 2
      fontWeight: 500
    },
    h3: {
      fontSize: '2.4rem', // Customize heading level 2
      fontWeight: 500
    },
    h4: {
      fontSize: '2.2rem', // Customize heading level 2
      fontWeight: 500
    },
    h5: {
      fontSize: '2rem', // Customize heading level 2
      fontWeight: 500
    },
    h6: {
      fontSize: '1.8rem', // Customize heading level 2
      fontWeight: 500
    }
    // Add more heading levels and customize as needed
    // ...
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className='px-[2rem] py-[2rem] lg:px-[4rem]'>
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

export default App
