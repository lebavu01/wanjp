import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
const MenuDropdown = () => {
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
  return (
    <div className='relative flex h-[10rem] items-center' ref={dropdownRef}>
      <button className='' onClick={handleToggleDropdown}>
        <span className='toggle text-[2.4rem]'>
          <FontAwesomeIcon icon={faBars} />
        </span>
      </button>
      {isOpen && (
        <>
          <ul className='absolute left-0 top-full min-w-[20rem] rounded bg-white py-2 shadow-md'>
            <li
              className='hover:bg-gray-100 cursor-pointer px-6 py-2 transition hover:text-blue'
              onClick={handleToggleDropdown}
            >
              <NavLink to='Sale-Order-Search'>Sale Order Search</NavLink>
            </li>
            <li
              className='hover:bg-gray-100 cursor-pointer px-6 py-2 transition hover:text-blue'
              onClick={handleToggleDropdown}
            >
              <NavLink to='Product-Inventory-Search'>Product Inventory Search</NavLink>
            </li>
            <li
              className='hover:bg-gray-100 cursor-pointer px-6 py-2 transition hover:text-blue'
              onClick={handleToggleDropdown}
            >
              <NavLink to='Supplier-Inventory-Search'>Supplier Inventory Search</NavLink>
            </li>
          </ul>
        </>
      )}
    </div>
  )
}

export default MenuDropdown