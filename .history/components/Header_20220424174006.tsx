import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header>
        <div>
            <Link href='/'>
                <img 
                    className='w-44 object-contain'
                    src=''
                    alt='logo'
                />
            </Link>
        </div>

        <div></div>
    </header>
  )
}

export default Header