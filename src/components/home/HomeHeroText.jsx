import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] mt-20 md:mt-32 lg:mt-0 pt-5 md:pt-8 lg:pt-0 text-center px-4 md:px-6 lg:px-0'>
            <div className='lg:text-[8vw] md:text-[10vw] text-[14vw] justify-center flex items-center uppercase lg:leading-[8vw] md:leading-[10vw] leading-[14vw]'>
                The intelligence
            </div>
            <div className='lg:text-[8vw] md:text-[10vw] text-[14vw] justify-center flex items-start uppercase lg:leading-[8vw] md:leading-[10vw] leading-[14vw] gap-1 md:gap-2 lg:gap-0'>
                that
                <div className='h-[8vw] w-[16vw] md:h-[7vw] md:w-[14vw] lg:h-[8vw] lg:w-[16vw] rounded-full -mt-2 md:-mt-3 lg:-mt-3 overflow-hidden flex-shrink-0'>
                    <Video />
                </div>
                scales
            </div>
            <div className='lg:text-[8vw] md:text-[10vw] text-[14vw] justify-center flex items-center uppercase lg:leading-[8vw] md:leading-[10vw] leading-[14vw]'>
                your business
            </div>
        </div>
    )
}

export default HomeHeroText