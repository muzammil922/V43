import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Timeline } from '../components/ui/timeline'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const page2CenterImageRef = useRef(null)
  const page2CenterImageImgRef = useRef(null)
  const page2BackTextRef = useRef(null)
  const page2FrontTextRef = useRef(null)
  const page2BackTextContentRef = useRef(null)
  const page2FrontTextContentRef = useRef(null)
  const timelineSectionRef = useRef(null)
  const contentSectionRef = useRef(null)
  const footerRef = useRef(null)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [footerTime, setFooterTime] = useState('PAKISTAN_00:00:00')

  const imageArray = [
    '/team member 1.png',
    '/team member 2.png',
  ]

  // Text arrays that change with images
  const backTextArray = [
    'TEAM LEAD',
    'DIRECTOR',
  ]

  const frontTextArray = [
    'FOUNDER',
    'CO-FOUNDER',
  ]

  const page1Ref = useRef(null)
  const isFirstRender = useRef(true)

  // Timeline data for projects
  const timelineData = [
    {
      title: "myDashy Pro",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
          Complete business management platform with automation and AI-powered workflows.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/SaaS Management System.png"
              alt="myDashy Pro project"
              className=" h-20 md:h-40 lg:h-55 w-50% rounded-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <img
              src="/myDashy-Pro-2.png"
              alt="myDashy Pro project 2"
              className="h-20 md:h-40 lg:h-55 w-50% rounded-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <img
              src="/myDashy-Pro-3.png"
              alt="myDashy Pro project 3"
              className="h-20 md:h-40 lg:h-55 w-50% rounded-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <img
              src="/myDashy-Pro-login.png"
              alt="myDashy Pro project 4"
              className="h-20 md:h-40 lg:h-55 w-50% rounded-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>
      ),
    },
    {
      title: "E-commerce",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Innovative design solutions that blend creativity with functionality for exceptional user experiences.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/E-commerce Platform.jpeg"
              alt="E-commerce project"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <img
              src="/AI Dashboard Platform.jpeg"
              alt="E-commerce project 2"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <img
              src="/AI Dashboard Platform.jpeg"
              alt="E-commerce project 3"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <img
              src="/E-commerce Platform.jpeg"
              alt="E-commerce project 4"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>
      ),
    },
    {
      title: "CRM Automation",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            A fresh approach to branding and digital presence that captures the essence of natural flavors.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/CRM Automation Suite.jpeg"
              alt="CRM Automation project"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <img
              src="/Data Analytics Platform.jpeg"
              alt="CRM Automation project"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <img
              src="/Data Analytics Platform.jpeg"
              alt="CRM Automation project"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <img
              src="/CRM Automation Suite.jpeg"
              alt="CRM Automation project"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>
      ),
    },
  ]

  // Auto-rotate images and text every 3 seconds
  useEffect(() => {
    if (imageArray.length === 0) return
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [imageArray.length])

  // Animate image and text changes when currentImageIndex changes
  useEffect(() => {
    // Skip animation on first render
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    
    // Validate array bounds
    if (currentImageIndex < 0 || currentImageIndex >= imageArray.length || !imageArray[currentImageIndex]) {
      return
    }
    
    // Preload next image to prevent blinking
    const nextImage = new Image()
    nextImage.src = imageArray[currentImageIndex]
    
    const animateImageChange = () => {
      // Smoothly animate image change with crossfade
      if (page2CenterImageImgRef.current) {
        gsap.to(page2CenterImageImgRef.current, {
          opacity: 0,
          scale: 0.98,
          duration: 0.4,
          ease: 'power1.in',
          onComplete: () => {
            if (page2CenterImageImgRef.current) {
              page2CenterImageImgRef.current.src = imageArray[currentImageIndex]
              gsap.fromTo(page2CenterImageImgRef.current, 
                { opacity: 0, scale: 1.02 },
                { opacity: 1, scale: 1, duration: 0.4, ease: 'power1.out' }
              )
            }
          }
        })
      }
    }
    
    // Check if image is already loaded (cached)
    if (nextImage.complete) {
      animateImageChange()
    } else {
      nextImage.onload = animateImageChange
      nextImage.onerror = animateImageChange // Fallback if image fails to load
    }

    // Smoothly animate back text changes - smooth transition
    if (page2BackTextContentRef.current) {
      const textElements = page2BackTextContentRef.current.querySelectorAll('h2')
      gsap.to(textElements, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: 'power1.inOut',
        onComplete: () => {
          // Wait for React to update, then fade in smoothly
          setTimeout(() => {
            if (page2BackTextContentRef.current) {
              const updatedElements = page2BackTextContentRef.current.querySelectorAll('h2')
              gsap.fromTo(updatedElements, 
                { opacity: 0, y: 10 },
                { opacity: 0.3, y: 0, duration: 0.3, ease: 'power1.inOut' }
              )
            }
          }, 10)
        }
      })
    }

    // Smoothly animate front text changes - smooth transition
    if (page2FrontTextContentRef.current) {
      const textElements = page2FrontTextContentRef.current.querySelectorAll('h2')
      gsap.to(textElements, {
        opacity: 0,
        y: 10,
        duration: 0.3,
        ease: 'power1.inOut',
        onComplete: () => {
          // Wait for React to update, then fade in smoothly
          setTimeout(() => {
            if (page2FrontTextContentRef.current) {
              const updatedElements = page2FrontTextContentRef.current.querySelectorAll('h2')
              gsap.fromTo(updatedElements, 
                { opacity: 0, y: -10 },
                { opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }
              )
            }
          }, 10)
        }
      })
    }
  }, [currentImageIndex, imageArray])

  useGSAP(function () {
    if (!imageDivRef.current) return

    const scrollTrigger = ScrollTrigger.create({
      trigger: imageDivRef.current,
      // markers: true,
      start: 'top 28%',
      end: 'top -70%',
      pin: true,
      pinSpacing: true,
      pinReparent: true,
      pinType: 'transform',
      scrub: 0.3, // Reduced scrub for smoother, less sticky scrolling
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (elem) => {
        let imageIndex;
        if (elem.progress < 1) {
          imageIndex = Math.floor(elem.progress * imageArray.length)
        } else {
          imageIndex = imageArray.length - 1
        }
        if (imageRef.current && imageArray[imageIndex]) {
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })

    // Background color change and show page2 when scrolling past page1
    const page2Element = document.getElementById('page2')
    let page2ScrollTrigger = null
    if (page2Element) {
      page2ScrollTrigger = ScrollTrigger.create({
        trigger: page2Element,
        start: 'top 60%',
        end: 'top 0%',
        scrub: false,
        onEnter: () => {
          document.body.style.backgroundColor = 'black'
          document.documentElement.style.backgroundColor = 'black'
          gsap.to(page2Element, {
            opacity: 1,
            pointerEvents: 'auto',
            duration: 0.3
          })
          
          // Hide page 1 content (image and text) when entering page 2
          if (page1Ref.current) {
            gsap.to(page1Ref.current, {
              opacity: 0,
              pointerEvents: 'none',
              duration: 0.3,
              ease: 'power2.in'
            })
          }
          
          // Start infinite loop animations for text
          // Back text - moves from left to right (behind image)
          if (page2BackTextRef.current) {
            gsap.set(page2BackTextRef.current, { x: 0 })
            gsap.to(page2BackTextRef.current, {
              x: '-100vw', // Move one full screen width so second copy appears seamlessly
              duration: 8,
              repeat: -1,
              ease: 'none'
            })
          }
          
          // Front text - moves from right to left (in front of image)
          if (page2FrontTextRef.current) {
            gsap.set(page2FrontTextRef.current, { x: '-100vw' })
            gsap.to(page2FrontTextRef.current, {
              x: 0, // Move from right (-100vw) to center (0) for seamless loop
              duration: 8,
              repeat: -1,
              ease: 'none'
            })
          }
        },
        onLeaveBack: () => {
          document.body.style.backgroundColor = 'white'
          document.documentElement.style.backgroundColor = 'white'
          gsap.to(page2Element, {
            opacity: 0,
            pointerEvents: 'none',
            duration: 0.3
          })
          
          // Show page 1 content (image and text) when leaving page 2
          if (page1Ref.current) {
            gsap.to(page1Ref.current, {
              opacity: 1,
              pointerEvents: 'auto',
              duration: 0.3,
              ease: 'power2.out'
            })
          }
          
          // Stop animations
          if (page2BackTextRef.current) {
            gsap.killTweensOf(page2BackTextRef.current)
            gsap.set(page2BackTextRef.current, { x: 0 })
          }
          if (page2FrontTextRef.current) {
            gsap.killTweensOf(page2FrontTextRef.current)
            gsap.set(page2FrontTextRef.current, { x: 0 })
          }
        },
        onEnterBack: () => {
          document.body.style.backgroundColor = 'white'
          document.documentElement.style.backgroundColor = 'white'
          gsap.to(page2Element, {
            opacity: 0,
            pointerEvents: 'none',
            duration: 0.3
          })
          
          // Show page 1 content (image and text) when entering back from page 2
          if (page1Ref.current) {
            gsap.to(page1Ref.current, {
              opacity: 1,
              pointerEvents: 'auto',
              duration: 0.3,
              ease: 'power2.out'
            })
          }
          
          // Stop animations
          if (page2BackTextRef.current) {
            gsap.killTweensOf(page2BackTextRef.current)
            gsap.set(page2BackTextRef.current, { x: 0 })
          }
          if (page2FrontTextRef.current) {
            gsap.killTweensOf(page2FrontTextRef.current)
            gsap.set(page2FrontTextRef.current, { x: 0 })
          }
        }
      })
    }

    // Footer animation - slide up from bottom when timeline section ends
    let footerScrollTrigger = null
    let footerTimeout = null
    
    // Use requestAnimationFrame for better performance
    const initFooterAnimation = () => {
      if (timelineSectionRef.current && footerRef.current) {
        const footer = footerRef.current
        const trigger = timelineSectionRef.current
        
        // Force layout calculation
        void footer.offsetHeight
        void trigger.offsetHeight
        
        // Set initial position - footer starts below viewport (fully hidden)
        gsap.set(footer, {
          y: '100%',
          force3D: true
        })

        footerScrollTrigger = ScrollTrigger.create({
          trigger: trigger,
          start: 'bottom bottom', // When timeline section bottom reaches viewport bottom
          end: 'bottom top',
          scrub: false,
          invalidateOnRefresh: true,
          onEnter: () => {
            if (footer) {
              gsap.to(footer, {
                y: '0%', // Fully visible
                duration: 0.8,
                ease: 'power2.out',
                force3D: true
              })
            }
          },
          onLeave: () => {
            if (footer) {
              // When scrolling past, keep footer visible
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
              // When scrolling back up, animate footer again
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
              // When scrolling back up past trigger, hide footer
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
    
    // Initialize footer animation with slight delay for DOM readiness
    footerTimeout = setTimeout(initFooterAnimation, 100)

    return () => {
      // Clean up all ScrollTriggers
      scrollTrigger?.kill()
      page2ScrollTrigger?.kill()
      footerScrollTrigger?.kill()
      
      // Clean up timeout
      if (footerTimeout) {
        clearTimeout(footerTimeout)
      }
      
      // Kill all GSAP animations
      if (page2BackTextRef.current) {
        gsap.killTweensOf(page2BackTextRef.current)
      }
      if (page2FrontTextRef.current) {
        gsap.killTweensOf(page2FrontTextRef.current)
      }
      if (page2CenterImageImgRef.current) {
        gsap.killTweensOf(page2CenterImageImgRef.current)
      }
    }
  }, [imageArray])

  // Set background to white on mount (for page 1)
  useEffect(() => {
    // Set background to white immediately when component mounts
    document.body.style.backgroundColor = 'white'
    document.documentElement.style.backgroundColor = 'white'
    
    // Also scroll to top to ensure we start at page 1
    window.scrollTo(0, 0)
    
    return () => {
      // Reset to black when leaving (optional, can be removed if not needed)
      // document.body.style.backgroundColor = 'black'
      // document.documentElement.style.backgroundColor = 'black'
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

  // Handle window resize for ScrollTrigger
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  return (
    <div 
      className='parent' 
      style={{ 
        transform: 'scale(0.95)', 
        transformOrigin: 'top center',
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE and Edge
        overflowX: 'hidden',
        marginBottom: 0,
        paddingBottom: 0
      }}
    >
      <div ref={page1Ref} id='page1' className='py-1 '>
        <div ref={contentSectionRef}>
          <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 -top-80 lg:left-[30vw] left-[30vw]'>
            <img ref={imageRef} className='h-full object-cover w-full' src="/team member 1.png" alt="" />
          </div>
          <div className='relative font-[font2]'>
            <div className='lg:mt-[55vh] mt-[30vh]'>
              <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>
                VIbeX Solution</h1>
            </div>
            <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
              <p className='lg:text-6xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our journey began with a mission to bridge the gap between advanced AI research and real-world business needs. Since then, we've helped 50+ companies worldwide enhance efficiency, scale operations, and unlock new growth through AI-powered solutions.</p>
            </div>
          </div>
        </div>
      </div>
      <div id='page2' className="relative bg-black opacity-0 pointer-events-none overflow-x-hidden flex flex-col" style={{ paddingBottom: 0, marginBottom: 0, minHeight: '100vh', scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
        {/* Back text - behind image - moves from left - positioned at top */}
        <div ref={page2BackTextRef} className="absolute top-20 bottom-0 left-0 right-0 flex flex-row items-start pt-8 z-0" style={{ width: '200vw', pointerEvents: 'none' }}>
          <div ref={page2BackTextContentRef} className="flex flex-row w-full">
            <h2 className="lg:text-[8vw] text-[10vw] font-bold uppercase text-white leading-none opacity-30 whitespace-nowrap flex-shrink-0 w-screen text-center">{backTextArray[currentImageIndex] || ''}</h2>
            <h2 className="lg:text-[8vw] text-[10vw] font-bold uppercase text-white leading-none opacity-30 whitespace-nowrap flex-shrink-0 w-screen text-center">{backTextArray[currentImageIndex] || ''}</h2>
          </div>
        </div>
        
        {/* Center image */}
        <div className="absolute inset-0 flex items-center justify-center z-10" style={{ height: '100vh', pointerEvents: 'none' }}>
          <div ref={page2CenterImageRef} className="lg:w-[400px] lg:h-[600px] w-[250px] h-[400px] rounded-3xl overflow-hidden bg-[#2a2a1a] shadow-2xl border border-gray-700">
            <img 
              ref={page2CenterImageImgRef} 
              src={imageArray[currentImageIndex]} 
              alt="Team member" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        
        {/* Front text - in front of image - moves from right - positioned at bottom */}
        <div ref={page2FrontTextRef} className="absolute bottom-40 top-0 left-0 right-0 flex flex-row items-end justify-end pb-8 z-20" style={{ width: '200vw', height: '100vh', pointerEvents: 'none' }}>
          <div ref={page2FrontTextContentRef} className="flex flex-row w-full">
            <h2 className="lg:text-[8vw] text-[10vw] font-bold uppercase text-[#D3FD50] leading-none whitespace-nowrap flex-shrink-0 w-screen text-center">{frontTextArray[currentImageIndex] || ''}</h2>
            <h2 className="lg:text-[8vw] text-[10vw] font-bold uppercase text-[#D3FD50] leading-none whitespace-nowrap flex-shrink-0 w-screen text-center">{frontTextArray[currentImageIndex] || ''}</h2>
          </div>
        </div>

        {/* Spacer to prevent overlap */}
        <div style={{ height: '100vh', width: '100%', pointerEvents: 'none' }}></div>

        {/* Timeline Section - Below team member section */}
        <div ref={timelineSectionRef} className="relative z-30" style={{ paddingBottom: '35vh' }}>
          <Timeline data={timelineData} />
        </div>

        {/* Footer - Full width at bottom of page with animation */}
        <footer
          ref={footerRef}
          className="bg-black text-white flex flex-col"
          style={{ 
            height: '35vh',
            zIndex: 50,
            width: '100vw',
            position: 'fixed',
            bottom: 0,
            left: 0
          }}
        >
          {/* Top Section - Social Icons and Contact */}
          <div className="flex items-center justify-between px-6 lg:px-12 py-6 lg:py-8">
            {/* Left - Social Icons */}
            <div className="flex items-center gap-3 lg:gap-4">
              <a
                href="https://facebook.com/mydashypro"
                target="_blank"
                rel="noopener noreferrer"
                className="h-20 px-8 lg:px-12 rounded-full border-2 border-white flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-white bg-transparent text-lg lg:text-xl font-bold uppercase"
              >
                FB
              </a>
              <a
                href="https://www.instagram.com/vibex.solution/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-20 px-8 lg:px-12 rounded-full border-2 border-white flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-white bg-transparent text-lg lg:text-xl font-bold uppercase"
              >
                IG
              </a>
              <a
                href="https://x.com/vibex_solution"
                target="_blank"
                rel="noopener noreferrer"
                className="h-20 px-8 lg:px-12 rounded-full border-2 border-white flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-white bg-transparent text-lg lg:text-xl font-bold uppercase"
              >
                X
              </a>
              <a
                href="https://wa.me/923113840943?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="h-20 px-8 lg:px-12 rounded-full border-2 border-white flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-white bg-transparent text-lg lg:text-xl font-bold uppercase"
              >
                WA
              </a>
            </div>

            {/* Right - Contact Button */}
            <div className="flex items-center">
              <Link to="/contact" className="h-20 px-10 lg:px-16 rounded-full border-2 border-white flex items-center justify-center gap-2 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors cursor-pointer text-white bg-transparent text-lg lg:text-xl font-bold uppercase">
                CONTACT
                <span className="text-white">♥</span>
              </Link>
            </div>
          </div>

          {/* Bottom Section - Links */}
          <div className="flex items-center justify-between px-4 lg:px-8 py-3 lg:py-4 absolute bottom-0 left-0 right-0">
            {/* Left - Time */}
            <div className="flex-1 flex items-center gap-3 lg:gap-4">
              <svg className="w-7 h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h1.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="uppercase text-base text-xl font-[font2] lg:text-2xl font-semibold text-white">{footerTime}</span>
            </div>
            
          {/* Policy Links - Centered */}
          <div className="flex items-center justify-center gap-3 lg:gap-4 text-sm lg:text-base">
            <a href="/privacy-policy" className="text-white hover:text-[#D3FD50] transition-colors uppercase cursor-pointer">
              PRIVACY POLICY
            </a>
            
            <span className="text-white">|</span>
            
            <a href="/terms-of-service" className="text-white hover:text-[#D3FD50] transition-colors uppercase cursor-pointer">
              TERMS OF SERVICE
            </a>
            
            <span className="text-white">|</span>
           
            <a href="/cookie-policy" className="text-white hover:text-[#D3FD50] transition-colors uppercase cursor-pointer">
              COOKIE POLICY
            </a>
          </div>
            
            {/* Right - BACK TO TOP */}
            <div className="flex-1 flex justify-end">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-white hover:text-[#D3FD50] transition-colors uppercase cursor-pointer text-xl font-[font2] lg:text-2xl font-semibold"
              >
                BACK TO TOP
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Agence