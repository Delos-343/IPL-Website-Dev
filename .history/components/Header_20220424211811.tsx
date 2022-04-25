import Link from 'next/link'
import React from 'react'
import DropdownOne from './DropdownOne'

function Header() {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
        <div className='flex items-center space-x-5'>
            <Link href='/'>
                <img 
                    className='w-44 object-contain cursor-pointer'
                    src='https://i.postimg.cc/76fgsQkz/IPL-LOGO-14.png'
                    alt='logo'
                />
            </Link>
            <div className='hidden md:inline-flex items-center space-x-5 text-blue-600 font-semibold'>
                <h3> About </h3>
                <h3 className='text-white bg-blue-600 px-4 py-1 rounded-full'> Our Programs ▾ </h3>

                <DropdownOne />

                <h3 className='text-white bg-blue-600 px-4 py-1 rounded-full'> Our Community ▾ </h3>
            </div>
        </div>

        <div className='flex items-center space-x-5 text-blue-600 font-semibold'>
            <h3> Contact </h3>
            <h3 className='border px-4 py-1 rounded-full border-blue-600'> Login </h3>
        </div>
    </header>
  )
}

export default Header