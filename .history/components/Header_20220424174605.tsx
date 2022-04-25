import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header>
        <div>
            <Link href='/'>
                <img 
                    className='w-44 object-contain cursor-pointer'
                    src='https://i.postimg.cc/76fgsQkz/IPL-LOGO-14.png'
                    alt='logo'
                />
            </Link>
        </div>

        <div></div>
    </header>
  )
}

export default Header