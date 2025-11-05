import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-end justify-center gap-2 '>
      <p className='absolute lg:w-[17vw] w-64 lg:right-5 right-0 bottom-28  lg:bottom-60 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight hover:text-[#D3FD50] transition-all duration-300'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Founded in 2020, VibeX began with a bold vision to make AI accessible for businesses of every scale. From a small team of innovators, we’ve evolved into a global force driving transformation across industries..</p>
      <div className='lg:border-2 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center justify-center px-6  lg:px-6  border-white rounded-full uppercase'>
        <Link className='text-[5vw]' to='/projects'>Projects</Link>
      </div>
      <div className='lg:border-2 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center justify-center px-6 lg:px-6 border-white rounded-full uppercase'>
        <Link className='text-[5vw]' to='/agence'>Agency</Link>
      </div>
    </div>
  )
}

export default HomeBottomText