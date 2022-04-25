import React from 'react'

function Hero() {
  return (
    <div className='text-white flex justify-between items-center py-auto lg:py-0 sm:m-auto'>
        <div className='p-14 space-y-10'>
            <h1 className="text-5xl max-w-xl leading-snug font-['Poppins'] font-semibold">
            <span className='underline decoration-white decoration-4'>
                Empowering
            </span>{" "}
                young individuals in becoming the future leaders of the FMCG industry.
            </h1>
            <h2 className='w-2/3'>
                Take a look at IPL's exclusive leadership developmental program for awardees, public seminars, and many other excitements!
            </h2>
        </div>

        <img 
            className='hidden md:inline-flex h-32 lg:h-96 mr-5'
            src='./logo-title.png'
            alt='logo'
        />
    </div>
  )
}

export default Hero
