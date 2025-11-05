import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Projects = () => {
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

  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
    link: 'https://mydashy.pro'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',
    link: 'https://mydashy.pro'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
    link: 'https://mydashy.pro'
  }]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    const scrollTriggers = []
    
    // Hero animation
    const heroTrigger = ScrollTrigger.create({
      trigger: '.lol',
      start: 'top 100%',
      end: 'top -150%',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress
        const heroElements = document.querySelectorAll('.hero')
        heroElements.forEach((hero) => {
          const height = 100 + (progress * 750) // 100px to 850px
          gsap.set(hero, { height: `${height}px` })
        })
      }
    })
    scrollTriggers.push(heroTrigger)

    // Parallax effect for project images
    const parallaxImages = document.querySelectorAll('.parallax-img')
    
    parallaxImages.forEach((img, index) => {
      // Alternate parallax directions for visual variety - move images at different speeds
      const parallaxAmount = index % 2 === 0 ? 150 : -150
      
      const parallaxTrigger = gsap.to(img, {
        y: parallaxAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: img.closest('.hero'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
      scrollTriggers.push(parallaxTrigger.scrollTrigger)
    })

    // Footer animation - slide up from bottom when content section ends
    if (contentSectionRef.current && footerRef.current) {
      const footer = footerRef.current
      const trigger = contentSectionRef.current
      
      // Force layout calculation
      void footer.offsetHeight
      void trigger.offsetHeight
      
      // Set initial position - footer starts below viewport (fully hidden)
      gsap.set(footer, {
        y: '100%',
        force3D: true
      })

      const footerTrigger = ScrollTrigger.create({
        trigger: trigger,
        start: 'bottom bottom', // When content section bottom reaches viewport bottom
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
      scrollTriggers.push(footerTrigger)
      
      // Refresh ScrollTrigger after layout is complete
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh()
        })
      })
    }
    
    return () => {
      // Clean up all ScrollTriggers
      scrollTriggers.forEach(trigger => trigger?.kill())
    }
  }, [])

  return (
    <>
      <div className='lg:p-4 p-2 pb-[35vh]'>
        <div ref={contentSectionRef} className=''>
          <div className=' pt-[45vh]'>
            <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projects</h2>
          </div>
          <div className='-lg:mt-20 lol'>
            {projects.map(function (elem, idx) {
              return <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
                <ProjectCard 
                  image1={elem.image1} 
                  image2={elem.image2} 
                  link={elem.link}
                />
              </div>
            })}
          </div>
        </div>
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
    </>
  )
}

export default Projects