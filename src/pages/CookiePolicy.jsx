import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useEffect, useState } from 'react'
import SEO from '../components/SEO/SEO'

const CookiePolicy = () => {
  gsap.registerPlugin(ScrollTrigger)

  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const footerRef = useRef(null)
  const contentSectionRef = useRef(null)
  const [footerTime, setFooterTime] = useState('PAKISTAN_00:00:00')

  // Update footer time
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
      setFooterTime(`PAKISTAN_${pakistanTime}`)
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  // Set background to white on mount
  useEffect(() => {
    document.body.style.backgroundColor = 'white'
    document.documentElement.style.backgroundColor = 'white'

    return () => {
      document.body.style.backgroundColor = 'black'
      document.documentElement.style.backgroundColor = 'black'
    }
  }, [])

  // GSAP Animations
  useGSAP(() => {
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    })

    ScrollTrigger.refresh()

    // Hero section animation
    if (heroRef.current) {
      const heroTexts = heroRef.current.querySelectorAll('.hero-text')
      gsap.set(heroTexts, { opacity: 0, y: 50 })
      gsap.to(heroTexts, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })
    }

    // Content sections animation
    if (contentRef.current) {
      const sections = contentRef.current.querySelectorAll('.cookie-section')
      gsap.set(sections, { opacity: 0, y: 80, scale: 0.95 })
      sections.forEach((section, index) => {
        gsap.to(section, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        })
      })
    }

    // Refresh ScrollTrigger after animations setup
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 300)
  }, [])

  // Footer animation - slide up from bottom when content section ends
  useGSAP(() => {
    let footerScrollTrigger = null
    let footerTimeout = null
    
    const initFooterAnimation = () => {
      if (contentSectionRef.current && footerRef.current) {
        const footer = footerRef.current
        const trigger = contentSectionRef.current
        
        // Force layout calculation
        void footer.offsetHeight
        void trigger.offsetHeight
        
        // Set initial position - footer starts below viewport (fully hidden)
        gsap.set(footer, {
          y: '100%',
          force3D: true,
          immediateRender: true
        })

        footerScrollTrigger = ScrollTrigger.create({
          trigger: trigger,
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: false,
          invalidateOnRefresh: true,
          onEnter: () => {
            if (footer) {
              gsap.set('body', { backgroundColor: '#ffffff' })
              gsap.set('html', { backgroundColor: '#ffffff' })
              
              gsap.to(footer, {
                y: '0%',
                duration: 0.8,
                ease: 'power2.out',
                force3D: true
              })
            }
          },
          onLeave: () => {
            if (footer) {
              gsap.to(footer, {
                y: '0%',
                duration: 0.3,
                ease: 'power2.out',
                force3D: true
              })
            }
          },
          onEnterBack: () => {
            if (footer) {
              gsap.set('body', { backgroundColor: '#ffffff' })
              gsap.set('html', { backgroundColor: '#ffffff' })
              
              gsap.to(footer, {
                y: '0%',
                duration: 0.8,
                ease: 'power2.out',
                force3D: true
              })
            }
          },
          onLeaveBack: () => {
            if (footer) {
              gsap.to(footer, {
                y: '100%',
                duration: 0.5,
                ease: 'power2.in',
                force3D: true
              })
            }
          }
        })
        
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            ScrollTrigger.refresh()
          })
        })
      }
    }
    
    footerTimeout = setTimeout(initFooterAnimation, 300)

    return () => {
      footerScrollTrigger?.kill()
      if (footerTimeout) {
        clearTimeout(footerTimeout)
      }
    }
  }, [])

  return (
    <>
      <SEO 
        title="V43 | VibeX Solution Cookie Policy"
        description="Cookie Policy for V43 and VibeX Solution. Learn about how we use cookies on our website and how you can manage your cookie preferences."
        keywords="V43 cookie policy, VibeX Solution cookies, cookie policy"
      />
      <div
        ref={containerRef}
        className="min-h-screen bg-white text-black relative overflow-x-hidden"
        style={{ paddingBottom: '35vh' }}
      >
        {/* Hero Section */}
        <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="hero-text mb-6">
              <h1 className="text-6xl lg:text-8xl font-[font2] font-bold uppercase tracking-tight mb-6">
                Cookie Policy
              </h1>
            </div>
            <div className="hero-text">
              <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section ref={contentRef} className="relative px-6 lg:px-12 pb-20 lg:pb-32">
          <div className="max-w-5xl mx-auto space-y-16 lg:space-y-24">
            
            {/* What Are Cookies */}
            <div className="cookie-section">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-lg">
                <h2 className="text-4xl lg:text-5xl font-[font2] font-bold mb-6 uppercase tracking-tight">
                  What Are Cookies
                </h2>
                <div className="space-y-4 text-lg lg:text-xl leading-relaxed text-gray-700">
                  <p>
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
                  </p>
                  <p>
                    Cookies allow a website to recognize your device and store some information about your preferences or past actions.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Cookies */}
            <div className="cookie-section">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-lg">
                <h2 className="text-4xl lg:text-5xl font-[font2] font-bold mb-6 uppercase tracking-tight">
                  How We Use Cookies
                </h2>
                <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-6">
                  We use cookies for several reasons:
                </p>
                <ul className="space-y-4 text-lg lg:text-xl text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#D3FD50] font-bold mt-1">•</span>
                    <span>To enable certain functions of the website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D3FD50] font-bold mt-1">•</span>
                    <span>To provide analytics and track user behavior</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D3FD50] font-bold mt-1">•</span>
                    <span>To store your preferences and personalize your experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D3FD50] font-bold mt-1">•</span>
                    <span>To improve our services and user experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D3FD50] font-bold mt-1">•</span>
                    <span>To understand how visitors interact with our website</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Types of Cookies We Use */}
            <div className="cookie-section">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-lg">
                <h2 className="text-4xl lg:text-5xl font-[font2] font-bold mb-8 uppercase tracking-tight">
                  Types of Cookies We Use
                </h2>
                <div className="space-y-8">
                  <div className="border-l-4 border-[#D3FD50] pl-6">
                    <h3 className="text-2xl lg:text-3xl font-[font2] font-bold mb-3 uppercase">
                      Essential Cookies
                    </h3>
                    <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
                      These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#D3FD50] pl-6">
                    <h3 className="text-2xl lg:text-3xl font-[font2] font-bold mb-3 uppercase">
                      Analytics Cookies
                    </h3>
                    <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#D3FD50] pl-6">
                    <h3 className="text-2xl lg:text-3xl font-[font2] font-bold mb-3 uppercase">
                      Functional Cookies
                    </h3>
                    <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
                      These cookies enable the website to provide enhanced functionality and personalization based on your preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div className="cookie-section">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-lg">
                <h2 className="text-4xl lg:text-5xl font-[font2] font-bold mb-6 uppercase tracking-tight">
                  Contact Us
                </h2>
                <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-6">
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <div className="space-y-4 text-lg lg:text-xl">
                  <p className="text-gray-700">
                    Email: <a href="mailto:vibexsolution@gmail.com" className="text-[#D3FD50] hover:underline font-semibold">vibexsolution@gmail.com</a>
                  </p>
                  <p className="text-gray-700">
                    Phone: <a href="tel:+923113840943" className="text-[#D3FD50] hover:underline font-semibold">+92 (311) 384-0943</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="cookie-section">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-lg">
                <h2 className="text-4xl lg:text-5xl font-[font2] font-bold mb-6 uppercase tracking-tight">
                  Managing Cookies
                </h2>
                <div className="space-y-4 text-lg lg:text-xl leading-relaxed text-gray-700">
                  <p>
                    Most web browsers allow you to control cookies through their settings preferences. However, limiting the ability of websites to set cookies can worsen your overall user experience.
                  </p>
                  <p>
                    You can choose to disable cookies through your browser settings. Instructions for managing cookies in popular browsers can be found in your browser's help section.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Spacer for footer */}
       

        {/* Content Section Ref for Footer Trigger */}
        <div ref={contentSectionRef} className="w-full" style={{ minHeight: '1px' }}></div>

        {/* Footer - Full width at bottom of page with animation */}
        <footer
          ref={footerRef}
          className="bg-black text-white flex flex-col"
          style={{ 
            height: 'auto',
            minHeight: '25vh',
            maxHeight: '35vh',
            zIndex: 50,
            width: '100%',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0
          }}
        >
          {/* Top Section - Social Icons and Contact */}
          <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 lg:px-12 py-4 md:py-6 lg:py-8 gap-4 md:gap-0">
            {/* Left - Social Icons */}
            <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
              <a
                href="https://facebook.com/mydashypro"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 md:h-16 lg:h-20 px-4 md:px-6 lg:px-12 rounded-full border-2 border-white flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-white bg-transparent text-xs md:text-sm lg:text-xl font-bold uppercase"
              >
                FB
              </a>
              <a
                href="https://www.instagram.com/vibex.solution/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 md:h-16 lg:h-20 px-4 md:px-6 lg:px-12 rounded-full border-2 border-white flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-white bg-transparent text-xs md:text-sm lg:text-xl font-bold uppercase"
              >
                IG
              </a>
              <a
                href="https://x.com/vibex_solution"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 md:h-16 lg:h-20 px-4 md:px-6 lg:px-12 rounded-full border-2 border-white flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-white bg-transparent text-xs md:text-sm lg:text-xl font-bold uppercase"
              >
                X
              </a>
              <a
                href="https://wa.me/923113840943?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 md:h-16 lg:h-20 px-4 md:px-6 lg:px-12 rounded-full border-2 border-white flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-white bg-transparent text-xs md:text-sm lg:text-xl font-bold uppercase"
              >
                WA
              </a>
            </div>

            {/* Right - Contact Button */}
            <div className="flex items-center">
              <button className="h-12 md:h-16 lg:h-20 px-6 md:px-8 lg:px-16 rounded-full border-2 border-white flex items-center justify-center gap-1 md:gap-2 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-white bg-transparent text-xs md:text-sm lg:text-xl font-bold uppercase">
                CONTACT
                <span className="text-white">♥</span>
              </button>
            </div>
          </div>

          {/* Bottom Section - Links */}
          <div className="flex flex-col md:flex-row items-center justify-between px-3 md:px-4 lg:px-8 py-2 md:py-3 lg:py-4 relative gap-2 md:gap-0">
            {/* Left - Time */}
            <div className="flex-1 flex items-center justify-center md:justify-start gap-2 md:gap-3 lg:gap-4">
              <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h1.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="uppercase text-xs md:text-sm lg:text-2xl font-[font2] font-semibold text-white">{footerTime}</span>
            </div>
            
            {/* Policy Links - Centered */}
            <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 lg:gap-4 text-xs md:text-sm lg:text-base">
              <a href="/privacy-policy" className="text-white hover:text-[#D3FD50] transition-colors uppercase cursor-pointer">
                PRIVACY POLICY
              </a>
              
              <span className="text-white hidden md:inline">|</span>
              
              <a href="/terms-of-service" className="text-white hover:text-[#D3FD50] transition-colors uppercase cursor-pointer">
                TERMS OF SERVICE
              </a>
              
              <span className="text-white hidden md:inline">|</span>
             
              <a href="/cookie-policy" className="text-white hover:text-[#D3FD50] transition-colors uppercase cursor-pointer">
                COOKIE POLICY
              </a>
            </div>
            
            {/* Right - BACK TO TOP */}
            <div className="flex-1 flex justify-center md:justify-end">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-white hover:text-[#D3FD50] transition-colors uppercase cursor-pointer text-xs md:text-sm lg:text-2xl font-[font2] font-semibold"
              >
                BACK TO TOP
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default CookiePolicy
