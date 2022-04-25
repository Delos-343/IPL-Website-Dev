import Link from 'next/link'
import React from 'react'
import DropdownOne from './DropdownOne'
import DropdownTwo from './DropdownTwo'

function Header() {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto bg-0'>
        <div className='flex items-center space-x-5'>
            <Link href='/'>
                <img 
                    className='w-44 object-contain cursor-pointer'
                    src='https://i.postimg.cc/76fgsQkz/IPL-LOGO-14.png'
                    alt='logo'
                />
            </Link>
            <div className='hidden md:inline-flex items-center space-x-5 text-blue-600 font-semibold'>
                <h3>
                    <a href="#" className='hover:text-white'> About </a>
                </h3>
                <DropdownOne />
                <DropdownTwo />
            </div>
        </div>

        <div className='flex items-center space-x-5 text-blue-600 font-semibold'>
            <h3>
                <a href="#" className='hover:text-white'> Contact </a>
            </h3>
            <h3 className='border px-4 py-1 rounded-full border-blue-600 hover:bg-blue-600 hover:text-white'>
            <   a href="#"> Login </a>
            </h3>
        </div>
    </header>
  )
}

export default Header