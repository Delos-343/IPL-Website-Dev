import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header>
        <div className='flex items-center space-x-5'>
            <Link href='/'>
                <img 
                    className='w-44 object-contain cursor-pointer'
                    src='https://i.postimg.cc/76fgsQkz/IPL-LOGO-14.png'
                    alt='logo'
                />
            </Link>
            <div className='hidden md:inline-flex items-center space-x-5 font-semibold'>
                <h3> About </h3>
                <h3 className='text-white bg-blue-600 px-4 py-1 rounded-full'> Our Programs ⮟ </h3>
                <h3 className='text-white bg-blue-600 px-4 py-1 rounded-full'> Our Community ⮟ </h3>
            </div>
        </div>

        <div>
            <h3> Contact </h3>
            <h3> See More </h3>
        </div>
    </header>
  )
}

export default Header