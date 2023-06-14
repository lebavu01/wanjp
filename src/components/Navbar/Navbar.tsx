import { Link, NavLink } from 'react-router-dom'
import MenuDropdown from '@/components/MenuDropdown'
import mainLogo from '@/assets/logo.png'
import AccountDropdown from '@/components/AccountDropdown'
import FeedbackIcon from '@mui/icons-material/Feedback'

export default function navbar() {
  const options = [{ value: 1 }, { value: 2 }, { value: 3 }]
  return (
    <div>
      <div className='flex h-[10rem] flex-wrap items-center items-center gap-2 bg-grey-f6 px-[2rem] lg:px-[4rem]'>
        <MenuDropdown />
        <div className='logo'>
          <NavLink to='/' className='block h-[4rem] children:h-full'>
            <img src={mainLogo} className='logo react' alt='React logo' />
          </NavLink>
        </div>
        <div className='text-xl max-md:hidden'>Order Manager System</div>
        <div className='right ml-auto flex flex-wrap items-center'>
          <p className='max-md:hidden'>Welcome, levu</p>
          <FeedbackIcon sx={{ marginLeft: 3, fontSize: 28 }} />
          <AccountDropdown />
        </div>
      </div>
    </div>
  )
}
