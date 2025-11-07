import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Timeline } from '../components/ui/timeline'
import SEO from '../components/SEO/SEO'

const Agancy = () => {
  gsap.registerPlugin(ScrollTrigger)

  const heroRef = useRef(null)
  const teamSectionRef = useRef(null)
  const timelineSectionRef = useRef(null)
  const footerRef = useRef(null)
  const statsRef = useRef(null)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [footerTime, setFooterTime] = useState('PAKISTAN_00:00:00')

  const teamMembers = [
    {
      image: '/team member 1.png',
      role: 'FOUNDER',
      title: 'TEAM LEAD',
      name: 'Leadership'
    },
    {
      image: '/team member 2.png',
      role: 'CO-FOUNDER',
      title: 'DIRECTOR',
      name: 'Strategy'
    }
  ]

  // Timeline data for projects
  const timelineData = [
    {
      title: "myDashy Pro",
      content: (
        <div>
          <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-normal mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            Complete business management platform with automation and AI-powered workflows.
          </p>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
            <img
              src="/SaaS Management System.png"
              alt="myDashy Pro project"
              className="h-16 sm:h-24 md:h-32 lg:h-40 xl:h-44 w-full rounded-md sm:rounded-lg object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <img
              src="/myDashy-Pro-2.png"
              alt="myDashy Pro project 2"
              className="h-16 sm:h-24 md:h-32 lg:h-40 xl:h-44 w-full rounded-md sm:rounded-lg object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <img
              src="/myDashy-Pro-3.png"
              alt="myDashy Pro project 3"
              className="h-16 sm:h-24 md:h-32 lg:h-40 xl:h-44 w-full rounded-md sm:rounded-lg object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <img
              src="/myDashy-Pro-login.png"
              alt="myDashy Pro project 4"
              className="h-16 sm:h-24 md:h-32 lg:h-40 xl:h-44 w-full rounded-md sm:rounded-lg object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>
      ),
    },
    {
      title: "E-commerce",
      content: (
        <div>
          <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-normal mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            Innovative design solutions that blend creativity with functionality for exceptional user experiences.
          </p>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
            <img
              src="/E-commerce Platform.jpeg"
              alt="E-commerce project"
              className="rounded-md sm:rounded-lg object-cover h-16 sm:h-24 md:h-32 lg:h-44 xl:h-56 2xl:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <img
              src="/AI Dashboard Platform.jpeg"
              alt="E-commerce project 2"
              className="rounded-md sm:rounded-lg object-cover h-16 sm:h-24 md:h-32 lg:h-44 xl:h-56 2xl:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <img
              src="/AI Dashboard Platform.jpeg"
              alt="E-commerce project 3"
              className="rounded-md sm:rounded-lg object-cover h-16 sm:h-24 md:h-32 lg:h-44 xl:h-56 2xl:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <img
              src="/E-commerce Platform.jpeg"
              alt="E-commerce project 4"
              className="rounded-md sm:rounded-lg object-cover h-16 sm:h-24 md:h-32 lg:h-44 xl:h-56 2xl:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>
      ),
    },
    {
      title: "CRM Automation",
      content: (
        <div>
          <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-normal mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            A fresh approach to branding and digital presence that captures the essence of natural flavors.
          </p>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
            <img
              src="/CRM Automation Suite.jpeg"
              alt="CRM Automation project"
              className="rounded-md sm:rounded-lg object-cover h-16 sm:h-24 md:h-32 lg:h-44 xl:h-56 2xl:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <img
              src="/Data Analytics Platform.jpeg"
              alt="CRM Automation project"
              className="rounded-md sm:rounded-lg object-cover h-16 sm:h-24 md:h-32 lg:h-44 xl:h-56 2xl:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <img
              src="/Data Analytics Platform.jpeg"
              alt="CRM Automation project"
              className="rounded-md sm:rounded-lg object-cover h-16 sm:h-24 md:h-32 lg:h-44 xl:h-56 2xl:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <img
              src="/CRM Automation Suite.jpeg"
              alt="CRM Automation project"
              className="rounded-md sm:rounded-lg object-cover h-16 sm:h-24 md:h-32 lg:h-44 xl:h-56 2xl:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>
      ),
    },
  ]

  // Auto-rotate team members every 4 seconds
  useEffect(() => {
    if (teamMembers.length === 0) return
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [teamMembers.length])

  // GSAP Animations
  useGSAP(() => {
    // Configure ScrollTrigger for smooth scrolling
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    })

    // Hero section animations
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.querySelectorAll('.hero-text'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
            scrub: false
          }
        }
      )
    }

    // Stats section animation
    if (statsRef.current) {
      gsap.fromTo(statsRef.current.querySelectorAll('.stat-item'),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )
    }

    // Team section parallax with smooth scrolling
    if (teamSectionRef.current) {
      gsap.to(teamSectionRef.current.querySelector('.team-image'),
        {
          y: -50,
          scrollTrigger: {
            trigger: teamSectionRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1.5, // Smooth scrub for better scrolling experience
            ease: 'power1.inOut'
          }
        }
      )
    }

    // Background color transition - black from team section onwards
    ScrollTrigger.create({
      trigger: teamSectionRef.current,
      start: 'top 50%',
      onEnter: () => {
        const mainContainer = document.getElementById('main-container')
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
        const mainContainer = document.getElementById('main-container')
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

    // Ensure background stays black when footer appears
    if (footerRef.current && timelineSectionRef.current) {
      ScrollTrigger.create({
        trigger: timelineSectionRef.current,
        start: 'bottom bottom',
        onEnter: () => {
          // Ensure background is black when footer appears
          const mainContainer = document.getElementById('main-container')
          gsap.set('body', { backgroundColor: '#000000' })
          gsap.set('html', { backgroundColor: '#000000' })
          if (mainContainer) {
            gsap.set(mainContainer, { backgroundColor: '#000000' })
          }
        },
        onEnterBack: () => {
          // Keep black when scrolling back to footer area
          const mainContainer = document.getElementById('main-container')
          gsap.set('body', { backgroundColor: '#000000' })
          gsap.set('html', { backgroundColor: '#000000' })
          if (mainContainer) {
            gsap.set(mainContainer, { backgroundColor: '#000000' })
          }
        }
      })
    }

    // Footer animation - slide up from bottom when timeline section ends
    let footerScrollTrigger = null
    
    const initFooterAnimation = () => {
      if (timelineSectionRef.current && footerRef.current) {
        const footer = footerRef.current
        const trigger = timelineSectionRef.current
        
        // Force layout calculation
        void footer.offsetHeight
        void trigger.offsetHeight
        
        // Set initial position - footer starts below viewport (fully hidden)
        // Footer already has transform: translateY(100%) in inline styles
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
              const mainContainer = document.getElementById('main-container')
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
              const mainContainer = document.getElementById('main-container')
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
    
    // Initialize footer animation with delay for DOM readiness
    const footerTimeout = setTimeout(() => {
      initFooterAnimation()
    }, 300)

    return () => {
      // Clean up ScrollTrigger
      if (footerScrollTrigger) {
        footerScrollTrigger.kill()
      }
      // Clean up timeout
      if (footerTimeout) {
        clearTimeout(footerTimeout)
      }
      // Clean up other ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger !== footerScrollTrigger) {
          trigger.kill()
        }
      })
    }
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
      }, 200)
    })

    return () => {
      // Cleanup
    }
  }, [])

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

  const currentMember = teamMembers[currentImageIndex] || teamMembers[0]

  return (
    <>
      <SEO 
        title="V43 | VibeX Solution Agency - Our Team & Services"
        description="Meet the V43 and VibeX Solution team. Learn about our AI-powered business solutions, digital transformation services, and how we help companies worldwide scale operations."
        keywords="V43 agency, VibeX Solution team, vibexsolution services, V43 team members, VibeX Solution professionals, AI consulting team"
      />
      
      <div 
        className="overflow-x-hidden"
        id="main-container"
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
        <section ref={heroRef} className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 pb-0 sm:pb-2 md:pb-4 lg:pb-6 relative bg-white">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-0 sm:mb-1 md:mb-2">
              <h1 className="hero-text text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] xl:text-[8vw] font-[font2] font-bold uppercase leading-[0.9] mb-3 sm:mb-4 md:mb-5 text-black">
                VibeX
              </h1>
              <h1 className="hero-text text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] xl:text-[8vw] font-[font2] font-bold uppercase leading-[0.9] mb-4 sm:mb-6 md:mb-8 text-black">
                Solution
              </h1>
              <p className="hero-text text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
                Our journey began with a mission to bridge the gap between advanced AI research and real-world business needs. 
                Since then, we've helped <span className="font-bold text-[#D3FD50]">50+ companies</span> worldwide enhance efficiency, 
                scale operations, and unlock new growth through AI-powered solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="pt-0 sm:pt-1 md:pt-2 lg:pt-4 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              <div className="stat-item text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-2 sm:mb-3 md:mb-4">50+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 uppercase leading-tight">Companies Served</div>
              </div>
              <div className="stat-item text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-2 sm:mb-3 md:mb-4">2020</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 uppercase leading-tight">Founded</div>
              </div>
              <div className="stat-item text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-2 sm:mb-3 md:mb-4">100%</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 uppercase leading-tight">AI-Powered</div>
              </div>
              <div className="stat-item text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-2 sm:mb-3 md:mb-4">24/7</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 uppercase leading-tight">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section ref={teamSectionRef} className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
          {/* Animated background text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] font-bold uppercase text-white opacity-5 whitespace-nowrap">
              {currentMember?.title || 'TEAM'}
            </h2>
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
              {/* Team Member Image */}
              <div className="team-image relative">
                <div className="w-[250px] h-[375px] sm:w-[280px] sm:h-[420px] md:w-[320px] md:h-[480px] lg:w-[380px] lg:h-[570px] xl:w-[400px] xl:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#D3FD50] to-[#a8d140] p-1 shadow-2xl">
                  <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black">
                    <img 
                      src={currentMember?.image || '/team member 1.png'} 
                      alt={currentMember?.name || 'Team Member'}
                      className="w-full h-full object-cover transition-opacity duration-500"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#D3FD50] rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#D3FD50] rounded-full opacity-20 blur-3xl"></div>
              </div>

              {/* Team Member Info */}
              <div className="text-center lg:text-left">
                <div className="mb-4 sm:mb-5 md:mb-6">
                  <div className="text-[#D3FD50] text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider mb-2 sm:mb-3">
                    {currentMember?.role || 'FOUNDER'}
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white uppercase mb-3 sm:mb-4 leading-tight">
                    {currentMember?.title || 'TEAM LEAD'}
                  </h2>
                  <p className="text-gray-400 text-base sm:text-lg md:text-xl">
                    {currentMember?.name || 'Leadership'}
                  </p>
                </div>

                {/* Indicator dots */}
                <div className="flex gap-2 justify-center lg:justify-start mt-6 sm:mt-8">
                  {teamMembers.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-[#D3FD50] w-8' 
                          : 'bg-white/30 hover:bg-white/50 w-3'
                      }`}
                      aria-label={`View team member ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section ref={timelineSectionRef} className="relative bg-black">
          <Timeline data={timelineData} />
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
            transform: 'translateY(100%)', // Start hidden below viewport
            borderTop: '4px solid #D3FD50' // Green border on top
          }}
        >
          {/* Top Section - Social Icons and Contact */}
          <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 gap-3 sm:gap-4 md:gap-0">
            {/* Left - Social Icons */}
            <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 flex-wrap justify-center md:justify-start">
              <a
                href="https://facebook.com/mydashypro"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-12 rounded-full border-2 border-white flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-white bg-transparent text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold uppercase"
              >
                FB
              </a>
              <a
                href="https://www.instagram.com/vibex.solution/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-12 rounded-full border-2 border-white flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-white bg-transparent text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold uppercase"
              >
                IG
              </a>
              <a
                href="https://x.com/vibex_solution"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-12 rounded-full border-2 border-white flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-white bg-transparent text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold uppercase"
              >
                X
              </a>
              <a
                href="https://wa.me/923113840943?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-12 rounded-full border-2 border-white flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-white bg-transparent text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold uppercase"
              >
                WA
              </a>
            </div>

            {/* Right - Contact Button */}
            <div className="flex items-center">
              <Link to="/contact" className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-16 rounded-full border-2 border-white flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-white bg-transparent text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold uppercase">
                CONTACT
                <span className="text-white">♥</span>
              </Link>
            </div>
          </div>

          {/* Bottom Section - Links */}
          <div className="flex flex-col md:flex-row items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3.5 relative gap-2 sm:gap-3 md:gap-0">
            {/* Left - Time */}
            <div className="flex-1 flex items-center justify-center md:justify-start gap-2 sm:gap-2.5 md:gap-3 lg:gap-4">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h1.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="uppercase text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl font-[font2] font-semibold text-white whitespace-nowrap">{footerTime}</span>
            </div>
            
            {/* Policy Links - Centered */}
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 xl:gap-4 text-xs sm:text-xs md:text-sm lg:text-base">
              <a href="/privacy-policy" className="text-white hover:text-[#D3FD50] transition-colors uppercase cursor-pointer">
                PRIVACY POLICY
              </a>
              
              <span className="text-white hidden sm:inline">|</span>
              
              <a href="/terms-of-service" className="text-white hover:text-[#D3FD50] transition-colors uppercase cursor-pointer">
                TERMS OF SERVICE
              </a>
              
              <span className="text-white hidden sm:inline">|</span>
             
              <a href="/cookie-policy" className="text-white hover:text-[#D3FD50] transition-colors uppercase cursor-pointer">
                COOKIE POLICY
              </a>
            </div>
            
            {/* Right - BACK TO TOP */}
            <div className="flex-1 flex justify-center md:justify-end">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-white hover:text-[#D3FD50] transition-colors uppercase cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl font-[font2] font-semibold whitespace-nowrap"
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

export default Agancy

