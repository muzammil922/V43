import React, { useState, useEffect } from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import SEO from '../components/SEO/SEO'

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
    <>
      <SEO 
        title="V43 | VibeX Solution - AI-Powered Business Solutions & Digital Transformation"
        description="V43 and VibeX Solution - Leading AI-powered business solutions provider. We help 50+ companies worldwide enhance efficiency, scale operations, and unlock growth through innovative AI technology. Founded in 2020."
        keywords="V43, VibeX Solution, vibexsolution, AI solutions, business automation, digital transformation, AI-powered solutions, V43 technology, VibeX AI, enterprise AI"
      />
      <div className='text-white'>
      <div className='h-screen w-screen fixed top-0 left-0'>
        <Video />
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between min-h-screen'>
        <HomeHeroText />
        <HomeBottomText />
        
        {/* Time Display - Mobile: Vertical on left side with green background, Desktop: Horizontal with icon */}
        <div className=' rounded-full rounded-tl-none rounded-br-none h-54 text-center justify-center absolute left-0 top-0-translate-y-1/2 bottom-4 md:bottom-0 md:top-auto md:translate-y-0 flex flex-col md:flex-row items-center md:items-end gap-1 md:gap-3 lg:gap-4 px-2 md:px-4 lg:px-8 py-4 md:pb-4 lg:pb-6 z-10 bg-black text-white md:bg-transparent'>
          {/* Icon - Hidden on mobile, shown on tablet+ */}
          <svg className='text-center text-white md:block w-6 md:h-6 lg:w-8 lg:h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h1.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg>
          {/* Time - Vertical on mobile (left side), horizontal on desktop */}
          <span className=' text-center justify-center uppercase text-xs md:text-base lg:text-2xl font-semibold whitespace-nowrap text-white md:text-white [writing-mode:vertical-rl] md:[writing-mode:horizontal-tb] transform rotate-180 md:rotate-0'>{pakistanTime}</span>
        </div>

        {/* WhatsApp Icon - Right Bottom */}
        <div className='absolute bottom-0 right-0 px-3 md:px-4 lg:px-8 pb-3 md:pb-4 lg:pb-6 z-10'>
          <a
            href="https://wa.me/923113840943?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 md:px-6 lg:px-8 h-10 md:h-12 lg:h-16 rounded-full border-2 border-white flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-white bg-transparent text-xs md:text-sm lg:text-xl font-bold uppercase"
            aria-label="WhatsApp Chat"
          >
            WA
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home