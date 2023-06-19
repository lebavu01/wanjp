import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link, NavLink } from 'react-router-dom'
import FeedbackIcon from '@/assets/feedback.png'
import { FeatherIcon } from 'lucide-react'
import mainLogo from '@/assets/logo.png'
import AccountDropdown from '@/components/AccountDropdown'
import board from '@/assets/board.png'
import board1 from '@/assets/board1.png'
import config from '@/config'
import Home from '@/pages/Home'
import SideBar from '@/components/SideBar'

const drawerWidth = 240

interface Props {
  window?: () => Window
}

function HomeLayout({ children, props }: Props) {
  const { window } = props || {}
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar sx={{ paddingInline: '1rem!important' }}>
        <NavLink to='/' className='flex items-center gap-1'>
          <img src={mainLogo} className='logo react h-[3.1rem] w-auto flex-shrink-0' alt='React logo' />
          <h1 className='font-bold leading-[calc(48/14)] text-black'>Order Management System</h1>
        </NavLink>
      </Toolbar>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ paddingBlock: '16px' }}>
            <NavLink className='flex items-center' to={config.routes.SaleOrderSearch}>
              <ListItemIcon sx={{ flexShrink: 0, minWidth: '4rem' }}>
                <img src={board} className='logo react h-[2.8rem] w-auto' alt='React logo' />
              </ListItemIcon>
              <ListItemText primary='Sale Order Search' />
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ paddingBlock: '16px' }}>
            <NavLink className='flex items-center' to={config.routes.PurchaseRequestOrders}>
              <ListItemIcon sx={{ flexShrink: 0, minWidth: '4rem' }}>
                <img src={board} className='logo react h-[2.8rem] w-auto' alt='React logo' />
              </ListItemIcon>
              <ListItemText primary='Purchase Request Orders' />
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ paddingBlock: '16px' }}>
            <NavLink className='flex items-center' to={config.routes.SupplierInventorySearch}>
              <ListItemIcon sx={{ flexShrink: 0, minWidth: '4rem' }}>
                <img src={board} className='logo react h-[2.8rem] w-auto' alt='React logo' />
              </ListItemIcon>
              <ListItemText primary='Supplier Inventory Search' />
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ paddingBlock: '16px' }}>
            <NavLink className='flex items-center' to={config.routes.ProductInventorySearch}>
              <ListItemIcon sx={{ flexShrink: 0, minWidth: '4rem' }}>
                <img src={board} className='logo react h-[2.8rem] w-auto' alt='React logo' />
              </ListItemIcon>
              <ListItemText primary='Product Inventory Search' />
            </NavLink>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: '#fbfbfb',
          boxShadow: 'none',
          color: '#000'
        }}
      >
        <Toolbar>
          <IconButton
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h2' sx={{ color: '#000' }} noWrap component='div'>
            Home
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', marginLeft: 'auto' }}>
            <Box sx={{ width: '2.4rem' }}>
              <img src={FeedbackIcon} className='w-full' alt='icon' />
            </Box>
            <Typography variant='body1'>Feedback?</Typography>
          </Box>
          <AccountDropdown />
        </Toolbar>
        <Divider />
      </AppBar>
      <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default HomeLayout
