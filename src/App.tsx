import { Outlet } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Navbar from './components/Navbar'
const theme = createTheme({
  typography: {
    fontSize: 22, // Set the base font size
    h1: {
      fontSize: '2.5rem', // Customize heading level 1
      fontWeight: 500
    },
    h2: {
      fontSize: '2rem', // Customize heading level 2
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
