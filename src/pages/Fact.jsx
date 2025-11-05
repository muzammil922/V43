import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'

const Fact = () => {
  gsap.registerPlugin(ScrollTrigger)

  const footerRef = useRef(null)
  const contentSectionRef = useRef(null)
  const heroRef = useRef(null)
  const factsRef = useRef(null)
  const [footerTime, setFooterTime] = useState('PAKISTAN_00:00:00')

  // Icon components
  const IconBug = () => (
    <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  )

  const IconCode = () => (
    <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  )

  const IconMoney = () => (
    <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )

  const IconLightBulb = () => (
    <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )

  const IconGlasses = () => (
    <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  )

  const IconDesign = () => (
    <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  )

  const IconMoon = () => (
    <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )

  const IconBinary = () => (
    <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
    </svg>
  )

  const IconSad = () => (
    <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )

  const IconCheck = () => (
    <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )

  // 10 Fun Facts/Jokes
  const facts = [
    {
      id: 1,
      fact: "Why don't programmers like nature? It has too many bugs!",
      category: "Tech Humor",
      icon: <IconBug />
    },
    {
      id: 2,
      fact: "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
      category: "Programming",
      icon: <IconCode />
    },
    {
      id: 3,
      fact: "Why did the developer go broke? Because he used up all his cache!",
      category: "Developer Life",
      icon: <IconMoney />
    },
    {
      id: 4,
      fact: "How many programmers does it take to change a light bulb? None. That's a hardware problem.",
      category: "Classic",
      icon: <IconLightBulb />
    },
    {
      id: 5,
      fact: "Why do Java developers wear glasses? Because they can't C#!",
      category: "Programming",
      icon: <IconGlasses />
    },
    {
      id: 6,
      fact: "A user interface is like a joke. If you have to explain it, it's not that good.",
      category: "UX Wisdom",
      icon: <IconDesign />
    },
    {
      id: 7,
      fact: "Why do developers prefer dark mode? Because light attracts bugs!",
      category: "Developer Life",
      icon: <IconMoon />
    },
    {
      id: 8,
      fact: "There are only 10 types of people in the world: those who understand binary and those who don't.",
      category: "Tech Humor",
      icon: <IconBinary />
    },
    {
      id: 9,
      fact: "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
      category: "Programming",
      icon: <IconSad />
    },
    {
      id: 10,
      fact: "The best thing about a boolean is even if you're wrong, you're only off by a bit.",
      category: "Tech Humor",
      icon: <IconCheck />
    }
  ]

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
    
    requestAnimationFrame(() => {
      if (window.scrollY > 0) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 300)
    })

    return () => {
      // Cleanup
    }
  }, [])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      clearTimeout(window.resizeTimeout)
      window.resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(window.resizeTimeout)
    }
  }, [])

  // GSAP Animations
  useGSAP(() => {
    // Configure ScrollTrigger
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    })

    // Hero section animation
    if (heroRef.current) {
      const heroTexts = heroRef.current.querySelectorAll('.hero-text')
      
      // Set initial state
      gsap.set(heroTexts, { opacity: 0, y: 50 })
      
      // Animate on scroll
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

    // Facts section animation
    if (factsRef.current) {
      const factCards = factsRef.current.querySelectorAll('.fact-item')
      
      // Set initial state for all cards
      gsap.set(factCards, { opacity: 0, y: 80, scale: 0.9 })
      
      // Animate each card on scroll
      factCards.forEach((card, index) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        })
      })
    }

    // Background color transition
    ScrollTrigger.create({
      trigger: factsRef.current,
      start: 'top 50%',
      onEnter: () => {
        const mainContainer = document.getElementById('fact-container')
        gsap.to('body', {
          backgroundColor: '#000000',
          duration: 0.5
        })
        gsap.to('html', {
          backgroundColor: '#000000',
          duration: 0.5
        })
        if (mainContainer) {
          gsap.to(mainContainer, {
            backgroundColor: '#000000',
            duration: 0.5
          })
        }
      },
      onLeaveBack: () => {
        const mainContainer = document.getElementById('fact-container')
        gsap.to('body', {
          backgroundColor: '#ffffff',
          duration: 0.5
        })
        gsap.to('html', {
          backgroundColor: '#ffffff',
          duration: 0.5
        })
        if (mainContainer) {
          gsap.to(mainContainer, {
            backgroundColor: '#ffffff',
            duration: 0.5
          })
        }
      }
    })

    // Footer animation
    let footerScrollTrigger = null
    
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
              const mainContainer = document.getElementById('fact-container')
              gsap.set('body', { backgroundColor: '#000000' })
              gsap.set('html', { backgroundColor: '#000000' })
              if (mainContainer) {
                gsap.set(mainContainer, { backgroundColor: '#000000' })
              }
              
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
              const mainContainer = document.getElementById('fact-container')
              gsap.set('body', { backgroundColor: '#000000' })
              gsap.set('html', { backgroundColor: '#000000' })
              if (mainContainer) {
                gsap.set(mainContainer, { backgroundColor: '#000000' })
              }
              
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
        
        // Refresh ScrollTrigger after layout is complete
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            ScrollTrigger.refresh()
          })
        })
      }
    }
    
    // Initialize footer animation with delay
    const footerTimeout = setTimeout(() => {
      initFooterAnimation()
    }, 300)

    // Final refresh after all animations are set up
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 500)

    return () => {
      if (footerScrollTrigger) {
        footerScrollTrigger.kill()
      }
      if (footerTimeout) {
        clearTimeout(footerTimeout)
      }
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger !== footerScrollTrigger) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <>
      <SEO 
        title="V43 | VibeX Solution Fun Facts - Tech Jokes & Facts"
        description="Fun facts and tech jokes from V43 and VibeX Solution. Discover interesting tech humor and facts while learning about our AI-powered solutions."
        keywords="V43 fun facts, VibeX Solution jokes, tech humor, programming jokes, AI facts, V43 tech facts"
      />
      
      <div 
        id="fact-container"
        className="overflow-x-hidden"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          backgroundColor: 'white',
          transition: 'background-color 0.5s ease',
          scrollBehavior: 'smooth'
        }}
      >
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex flex-col justify-center items-center px-4 py-20 lg:py-32 relative bg-white">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center">
              <h1 className="hero-text text-[15vw] lg:text-[12vw] font-[font2] font-bold uppercase leading-none mb-6 text-black">
                Fun
              </h1>
              <h1 className="hero-text text-[15vw] lg:text-[12vw] font-[font2] font-bold uppercase leading-none mb-8 text-black">
                Facts
              </h1>
              <p className="hero-text text-lg lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                A collection of tech jokes and fun facts to brighten your day. Scroll down to discover more!
              </p>
            </div>
          </div>
        </section>

        {/* Facts Grid Section */}
        <section ref={factsRef} className="py-20 lg:py-32 bg-white">
          <div ref={contentSectionRef} className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {facts.map((fact, index) => (
                <div
                  key={fact.id}
                  className="fact-item group relative bg-white border-2 border-black rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:border-[#D3FD50] hover:shadow-[0_0_30px_rgba(211,253,80,0.3)] transition-all duration-300 cursor-pointer"
                >
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-black text-white flex items-center justify-center font-[font2] font-bold text-lg lg:text-2xl group-hover:bg-[#D3FD50] group-hover:text-black transition-all duration-300 shadow-lg z-10">
                    {fact.id}
                  </div>

                  {/* Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-black flex items-center justify-center text-white group-hover:bg-[#D3FD50] group-hover:text-black transition-all duration-300">
                      {fact.icon}
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-4 py-2 bg-black text-white text-xs lg:text-sm uppercase tracking-wider font-[font2] rounded-full group-hover:bg-[#D3FD50] group-hover:text-black transition-all duration-300">
                        {fact.category}
                      </span>
                    </div>
                  </div>

                  {/* Fact Content */}
                  <div className="mt-4">
                    <p className="text-black text-xl lg:text-2xl font-[font1] leading-relaxed group-hover:text-[#D3FD50] transition-colors duration-300">
                      {fact.fact}
                    </p>
                  </div>

                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D3FD50]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl lg:rounded-3xl pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
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
            right: 0,
            transform: 'translateY(100%)'
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
              <Link to="/contact" className="h-12 md:h-16 lg:h-20 px-6 md:px-8 lg:px-16 rounded-full border-2 border-white flex items-center justify-center gap-1 md:gap-2 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-white bg-transparent text-xs md:text-sm lg:text-xl font-bold uppercase">
                CONTACT
                <span className="text-white">♥</span>
              </Link>
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

export default Fact
