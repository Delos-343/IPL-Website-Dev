import React from 'react'

function Hero() {
  return (
    <div>
      <div className='text-white flex justify-between items-center py-10 lg:py-0'>
        <div className='px-10 space-y-10'>
          <h1 className="text-5xl max-w-xl leading-snug font-['Poppins'] font-semibold">
            <span className='underline decoration-white decoration-4'>
              Empowering
            </span>{" "}
              young individuals in becoming the future leaders of the FMCG industry.
          </h1>
          <h2>
            Take a look at IPL's exclusive leadership developmental program for awardees, public seminars, and many other excitements!
          </h2>
        </div>

        <img 
            className='hidden md:inline-flex h-32 lg:h-full'
            src='./logo-title.png'
            alt='logo'
        />

        <div></div>

      </div>
    </div>
  )
}

export default Hero
