import React, { useContext, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'

const Navbar = () => {

    const navGreenRef = useRef(null)
    const [navOpen,setNavOpen] = useContext(NavbarContext)
    const [navColor, setNavColor] = useContext(NavbarColorContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.location.reload()
        } else {
            navigate('/')
        }
    }

    return (
        <div className='z-50 flex fixed top-0 w-full items-start justify-between'>
            <div className='md:p-4 lg:p-5 p-2'>
                <div className='md:w-32 lg:w-36 w-20 cursor-pointer' onClick={handleLogoClick}>
                    <img 
                        src="/V43 Logo.png" 
                        alt="V43 Logo" 
                        className={`w-full h-auto ${navColor === 'black' ? 'brightness-0' : ''}`} 
                    />
                </div>
            </div>
            <div onClick={()=>{
                setNavOpen(true)
            }} onMouseEnter={() => {
                navGreenRef.current.style.height = '100%'
            }}
                onMouseLeave={() => {
                    navGreenRef.current.style.height = '0%'
                }}
                className='md:h-14 lg:h-16 h-10 bg-black relative md:w-[18vw] lg:w-[16vw] w-36 cursor-pointer'>
                <div ref={navGreenRef} className='bg-[#D3FD50] transition-all absolute top-0 h-0 w-full'></div>
                <div className='relative h-full md:px-10 lg:px-12 px-6 flex flex-col justify-center items-end md:gap-1 lg:gap-1.5 gap-0.5'>
                    <div className="md:w-16 lg:w-18 w-10 h-0.5 bg-white"></div>
                    <div className="md:w-8 lg:w-10 w-5 h-0.5 bg-white"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar