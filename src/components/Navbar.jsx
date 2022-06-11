import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav role='navigation' className='relative flex items-center justify-between h-16 font-mono text-black bg-white shadow-sm'>
        <Link to='/' className='pl-8'>
          EBB
        </Link>
        <div className='px-4 cursor-pointer md:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            stroke-width='2'
          >
            <path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </div>
        <div className='hidden pr-8 md:block'>
          <Link className='p-4' to='/'>
            Home
          </Link>
          <Link className='p-4' to='/menu'>
            Menu
          </Link>
          <Link className='p-4' to='/about'>
            About
          </Link>
          <Link className='p-4' to='/contact'>
            Contact
          </Link>
        </div>
      </nav>
  )
}

export default Navbar
