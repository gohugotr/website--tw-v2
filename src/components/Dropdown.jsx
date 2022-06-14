import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={isOpen ? 'grid grid-rows-4 text-center items-center bg-yellow-500' : 'hidden'}
      onClick={toggle}
    >
      <Link to='/website-tw-v2/' className='p-4'>
        Home
      </Link>
      <Link to='/website-tw-v2/menu' className='p-4'>
        Menu
      </Link>
      <Link to='/website-tw-v2/about' className='p-4'>
        About
      </Link>
      <Link to='/website-tw-v2/contact' className='p-4'>
        Contact
      </Link>
    </div>
  )
}

export default Dropdown
