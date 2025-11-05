import React, { useState, useEffect } from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  const [pakistanTime, setPakistanTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const pakistanTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Karachi',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }).format(now)
      setPakistanTime(`PAKISTAN_${pakistanTime}`)
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomText />
        
        {/* Time Display - Left Bottom */}
        <div className='absolute bottom-0 left-0 flex items-center gap-3 lg:gap-4 px-4 lg:px-8 pb-4 lg:pb-6'>
          <svg className='w-6 h-6 lg:w-8 lg:h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h1.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg>
          <span className='uppercase text-lg lg:text-2xl font-semibold'>{pakistanTime}</span>
        </div>

        {/* WhatsApp Icon - Right Bottom */}
        <div className='absolute bottom-0 right-0 px-4 lg:px-8 pb-4 lg:pb-6'>
          <a
            href="https://wa.me/923113840943?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className=" px-6  lg:px-4 w-20 h-15 rounded-full border-2 border-white flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-white bg-transparent text-lg lg:text-xl font-bold uppercase"
            aria-label="WhatsApp Chat"
          >
      WA
    </a>
  </div>
</div>
</div>
);
};

export default Home;