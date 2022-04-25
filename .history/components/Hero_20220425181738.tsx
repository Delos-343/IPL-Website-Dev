import React from 'react'

function Hero() {
  return (
    <div className="text-white flex justify-between items-center py-14 lg:py-0 font-['Poppins'] sm:m-auto">
        <div className='p-16 space-y-10'>
            <h1 className='text-4xl max-w-xl leading-snug font-semibold'>
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
            className='hidden md:inline-flex h-32 lg:h-[100] mt-10 mr-5'
            src='./logo-title.png'
            alt='logo'
        />
    </div>
  )
}

export default Hero
