import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1]  mt-72 lg:mt-0 pt-5 text-center'>
            <div className='lg:text-[8vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
            The intelligence
            </div>
            <div className='lg:text-[8vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
            that
                <div className='h-[8vw] w-[16vw] rounded-full -mt-3 overflow-hidden '>
                    <Video />
                </div>
                scales
            </div>
            <div className='lg:text-[8vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
            your business
            </div>
        </div>
    )
}

export default HomeHeroText