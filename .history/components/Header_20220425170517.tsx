import Link from 'next/link'
import React from 'react'
import DropdownOne from './DropdownOne'
import DropdownTwo from './DropdownTwo'

function Header() {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto bg-0 backdrop-blur-md'>
        <div className='flex items-center space-x-5'>
            <Link href='/'>
                <img 
                    className='w-44 object-contain cursor-pointer'
                    src='/IPL-LOGO-15.png'
                    alt='logo'
                />
            </Link>
            <div className='hidden md:inline-flex items-center space-x-10 text-white font-semibold'>
                <h3>
                    <a href="#" className='hover:text-blue-600'> About </a>
                </h3>
                <DropdownOne />
                <DropdownTwo />
            </div>
        </div>

        <div className='flex items-center space-x-5 text-white hover:text-blue-60 font-semibold'>
            <h3>
                <a href="#" className='hover:text-blue-600'> Contact </a>
            </h3>
            <h3 className='border px-4 py-1 rounded-full border-white hover:bg-blue-600 hover:text-white'>
            <   a href="#"> Login </a>
            </h3>
        </div>
    </header>
  )
}

export default Header