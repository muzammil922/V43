import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 lg:gap-2 px-4 md:px-6 lg:px-0 mb-16 md:mb-20 lg:mb-0'>
      {/* Description Text - Hidden on mobile, shown on tablet and desktop */}
      <p className='hidden md:block absolute lg:w-[17vw] md:w-[25vw] lg:right-5 md:right-4 bottom-28 md:bottom-32 lg:bottom-60 font-[font1] lg:text-lg md:text-sm text-xs lg:leading-relaxed md:leading-relaxed leading-tight hover:text-[#D3FD50] transition-all duration-300 z-10'>
        Founded in 2020, VibeX began with a bold vision to make AI accessible for businesses of every scale. From a small team of innovators, we've evolved into a global force driving transformation across industries.
      </p>
      
      {/* Mobile Description - Shown only on mobile */}
      <p className='md:hidden text-center text-xs leading-relaxed px-4 mb-4 max-w-sm mx-auto'>
        Founded in 2020, VibeX began with a bold vision to make AI accessible for businesses of every scale.
      </p>
      
      {/* Button Links */}
      <div className='flex items-center gap-3 md:gap-4 lg:gap-2'>
        <div className='border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center justify-center px-4 md:px-6 lg:px-6 py-2 md:py-3 lg:py-0 border-white rounded-full uppercase transition-all'>
          <Link className='text-[4vw] md:text-[3vw] lg:text-[5vw]' to='/projects'>Projects</Link>
        </div>
        <div className='border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center justify-center px-4 md:px-6 lg:px-6 py-2 md:py-3 lg:py-0 border-white rounded-full uppercase transition-all'>
          <Link className='text-[4vw] md:text-[3vw] lg:text-[5vw]' to='/agancy'>Agency</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeBottomText