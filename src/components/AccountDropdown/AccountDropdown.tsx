import React, { useState, useEffect, useRef } from 'react'
import userImg from '@/assets/profile-user.png'

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])
  const handleLogout = () => {
    // Perform logout logic here
    console.log('Logout')
  }

  return (
    <div className='relative z-10 ml-8 flex h-[10rem] items-center' ref={dropdownRef}>
      <button
        className='bg-gray-200 text-gray-800 inline-flex items-center rounded font-semibold'
        onClick={handleToggleDropdown}
      >
        <div className='w-[2.5rem]'>
          <img src={userImg} className='w-full' alt='user' />
        </div>
      </button>
      {isOpen && (
        <ul className='absolute right-0 top-full z-10 min-w-[20rem] rounded bg-white py-2 shadow-md'>
          <li className='hover:bg-gray-100 cursor-pointer px-6 py-2 hover:text-blue' onClick={handleLogout}>
            Logout
          </li>
          {/* Add more dropdown options here */}
        </ul>
      )}
    </div>
  )
}

export default AccountDropdown
