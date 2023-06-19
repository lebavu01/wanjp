import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import '@fontsource/roboto'
import { publicRoutes } from '@/routes'
import DefaultLayout from '@/layouts/DefaultLayout'
import HomeLayout from '@/layouts/HomeLayout'

const theme = createTheme({
  palette: {
    color: {
      blue: '#2D3CC2',
      greyF6: '#f6f6f7',
      greyEd: '#ededed',
      grey999: '#999',
      greyFb: '#FBFBFB',
      grey18: '#18181B',
      grey1f: '#1F2020',
      green: '#12B76A'
    }
  },
  typography: {
    fontSize: 19.6, // Set the base font size
    fontFamily: 'Roboto, sans-serif',
    h2: {
      fontSize: '2.8rem', // Customize heading level 1
      fontWeight: 700,
      lineHeight: 'calc(48/28)'
    },
    h3: {
      fontSize: '2.4rem', // Customize heading level 2
      lineHeight: 'calc(28 / 24)',
      fontWeight: 400
    },
    h4: {
      fontSize: '2.1rem',
      lineHeight: 'calc(28 / 21)',
      fontWeight: '700'
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
      <Router>
        <div className='App'>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component
              let Layout: React.ComponentType = DefaultLayout

              if (route.layout) {
                Layout = route.layout
              } else if (route.layout === null) {
                Layout = React.Fragment
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              )
            })}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
