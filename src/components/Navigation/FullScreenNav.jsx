import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavbarContext } from '../../context/NavContext'

const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)

    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const [pakistanTime, setPakistanTime] = useState('')
    const navigate = useNavigate()

    const handleLogoClick = () => {
        setNavOpen(false)
        navigate('/')
    }

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





    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
        tl.to('.policy-links', {
            opacity: 1,
            pointerEvents: 'auto',
            duration: 0.3
        }, '-=0.2')
        tl.to('.footer-menu', {
            opacity: 1,
            pointerEvents: 'auto',
            duration: 0.3
        }, '-=0.2')
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.policy-links', {
            opacity: 0,
            pointerEvents: 'none',
            duration: 0.15
        })
        tl.to('.footer-menu', {
            opacity: 0,
            pointerEvents: 'none',
            duration: 0.15
        }, '-=0.15')
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        }, '-=0.1')
        tl.to('.navlink', {
            opacity: 0,
            duration: 0.15
        }, '-=0.15')
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        }, '-=0.15')
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])

    return (
        <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute'>
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                <div className="navlink flex w-full justify-between lg:p-5 p-2 items-start">
                    <div className=''>
                        <div className='lg:w-36 w-24 cursor-pointer' onClick={handleLogoClick}>
                            <img src="/V43 Logo.png" alt="V43 Logo" className="w-full h-auto" />
                        </div>
                    </div>
                    <div onClick={() => {
                        setNavOpen(false)
                    }} className='lg:h-16 h-10 w-10 lg:w-16 relative cursor-pointer'>
                        <div className='lg:h-20 h-14 lg:w-0.5 w-[2px] -rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                        <div className='lg:h-20 h-14 lg:w-0.5 w-[2px] right-0 rotate-45 origin-top absolute bg-[#D3FD50]'></div>

                    </div>
                </div>
                <div className='policy-links opacity-0 pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 flex justify-center items-center gap-4 lg:gap-6 py-4 lg:py-6'>
                    <a href="/privacy-policy" className='text-white hover:text-[#D3FD50] transition-colors text-sm lg:text-base uppercase cursor-pointer'>Privacy Policy</a>
                    <span className='text-white'>|</span>
                    <a href="/terms-of-service" className='text-white hover:text-[#D3FD50] transition-colors text-sm lg:text-base uppercase cursor-pointer'>Terms of Service</a>
                    <span className='text-white'>|</span>
                    <a href="/cookie-policy" className='text-white hover:text-[#D3FD50] transition-colors text-sm lg:text-base uppercase cursor-pointer'>Cookie Policy</a>
                </div>
                <div className=' py-12 lg:py-16'>
                    <div 
                        className='link origin-top relative border-t-1 border-white cursor-pointer'
                        onClick={() => {
                            setNavOpen(false)
                            navigate('/projects')
                        }}
                    >
                        <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-2 uppercase'>Projets</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Our Projects</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Our Projects</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Our Projects</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Our Projects</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                    <div 
                        className='link origin-top relative border-t-1 border-white cursor-pointer'
                        onClick={() => {
                            setNavOpen(false)
                            navigate('/agence')
                        }}
                    >
                        <h1 className='font-[font2] text-4xl lg:text-[7vw] text-center lg:leading-[0.8] lg:pt-9 pt-2 uppercase'>Agency</h1>
                        <div className='moveLink absolute text-black flex top-0 bottom-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>About Us</h2>
                                <img className='lg:h-30 h-14 rounded-full shrink-0 lg:w-60 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>About Us</h2>
                                <img className='lg:h-30 h-12 rounded-full shrink-0 lg:w-60 w-28 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>About Us</h2>
                                <img className='lg:h-30 h-12 rounded-full shrink-0 lg:w-60 w-28 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>About Us</h2>
                                <img className='lg:h-30 h-12 rounded-full shrink-0 lg:w-60 w-28 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                    <div 
                        className='link origin-top relative border-t-1 border-white cursor-pointer'
                        onClick={() => {
                            setNavOpen(false)
                            navigate('/contact')
                        }}
                    >
                        <h1 className='font-[font2] text-4xl lg:text-[6.5vw] text-center lg:leading-[0.8] lg:pt-8 pt-2 uppercase'>Contact</h1>
                        <div className='moveLink absolute text-black flex top-0 bottom-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Contact Us Now</h2>
                                <img className='lg:h-26 h-12 rounded-full shrink-0 lg:w-60 w-28 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Contact Us Now</h2>
                                <img className='lg:h-26 h-12 rounded-full shrink-0 lg:w-60 w-28 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Contact Us Now</h2>
                                <img className='lg:h-26 h-12 rounded-full shrink-0 lg:w-60 w-28 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Contact Us Now</h2>
                                <img className='lg:h-26 h-12 rounded-full shrink-0 lg:w-60 w-28 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                    <div 
                        className='link origin-top relative border-y-1 border-white cursor-pointer'
                        onClick={() => {
                            setNavOpen(false)
                            navigate('/fact')
                        }}
                    >
                        <h1 className='font-[font2] text-4xl lg:text-[6vw] text-center lg:leading-[0.8] lg:pt-7 pt-2 uppercase'>Fact</h1>
                        <div className='moveLink absolute text-black flex top-0 bottom-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Fun Facts</h2>
                                <img className='lg:h-24 h-12 rounded-full shrink-0 lg:w-60 w-28 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Fun Facts</h2>
                                <img className='lg:h-24 h-12 rounded-full shrink-0 lg:w-60 w-28 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Fun Facts</h2>
                                <img className='lg:h-24 h-12 rounded-full shrink-0 lg:w-60 w-28 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Fun Facts</h2>
                                <img className='lg:h-24 h-12 rounded-full shrink-0 lg:w-60 w-28 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='footer-menu opacity-0 pointer-events-none absolute  left-0 right-0 flex justify-between items-center px-4 lg:px-8 pb-2 lg:pb-3 text-white hover:text-[#D3FD50] transition-colors'>
                    <div className='flex items-center gap-3 lg:gap-4'>
                        <svg className='w-6 h-6 lg:w-8 lg:h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h1.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                        <span className='uppercase text-lg lg:text-2xl font-semibold'>{pakistanTime}</span>
                    </div>
                    
                    <div className='flex items-center gap-3 lg:gap-4'>
                        <a href="https://facebook.com/mydashypro" target="_blank" rel="noopener noreferrer" className='px-6  lg:px-4 rounded-full border border-white flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-base lg:text-xl font-bold uppercase text-white bg-transparent'>
                            FB
                        </a>
                        <a href="https://www.instagram.com/vibex.solution/" target="_blank" rel="noopener noreferrer" className='px-6  lg:px-4 rounded-full border border-white flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-base lg:text-xl font-bold uppercase text-white bg-transparent'>
                            IG
                        </a>
                        <a href="https://x.com/vibex_solution" target="_blank" rel="noopener noreferrer" className='px-6  lg:px-4 rounded-full border border-white flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-base lg:text-xl font-bold uppercase text-white bg-transparent'>
                            X
                        </a>
                        <a href="https://wa.me/923113840943?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer" className='px-6  lg:px-4 rounded-full border border-white flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-base lg:text-xl font-bold uppercase text-white bg-transparent'>
                            WA
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav