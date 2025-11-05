import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger)

  const footerRef = useRef(null)
  const contentSectionRef = useRef(null)
  const heroRef = useRef(null)
  const projectsRef = useRef(null)
  const [footerTime, setFooterTime] = useState('PAKISTAN_00:00:00')
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'myDashy Pro',
      description: 'Complete business management platform with automation and AI-powered workflows',
      image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
      link: 'https://mydashy.pro',
      category: 'SaaS Platform'
    },
    {
      id: 2,
      title: 'E-commerce Suite',
      description: 'Innovative e-commerce solutions that blend creativity with functionality',
      image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',
      link: 'https://mydashy.pro',
      category: 'E-commerce'
    },
    {
      id: 3,
      title: 'Enterprise Solutions',
      description: 'Digital transformation for large-scale business operations',
      image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
      link: 'https://mydashy.pro',
      category: 'Enterprise'
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
      
      // Refresh ScrollTrigger after a delay to ensure DOM is ready
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

    // Projects section animation
    if (projectsRef.current) {
      const projectCards = projectsRef.current.querySelectorAll('.project-item')
      
      // Set initial state for all cards
      gsap.set(projectCards, { opacity: 0, y: 100, scale: 0.9 })
      
      // Animate each card on scroll
      projectCards.forEach((card, index) => {
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
      trigger: projectsRef.current,
      start: 'top 50%',
      onEnter: () => {
        const mainContainer = document.getElementById('projects-container')
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
        const mainContainer = document.getElementById('projects-container')
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
              const mainContainer = document.getElementById('projects-container')
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
              const mainContainer = document.getElementById('projects-container')
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
        title="V43 | VibeX Solution Projects - Our Work & Portfolio"
        description="Explore V43 and VibeX Solution projects. See our AI-powered solutions, digital transformation projects, and successful implementations for 50+ companies worldwide."
        keywords="V43 projects, VibeX Solution portfolio, vibexsolution work, V43 case studies, AI project examples, digital transformation projects"
      />
      
      <div 
        id="projects-container"
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
                Our
              </h1>
              <h1 className="hero-text text-[15vw] lg:text-[12vw] font-[font2] font-bold uppercase leading-none mb-8 text-black">
                Projects
              </h1>
              <p className="hero-text text-lg lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Showcasing innovative solutions that transform businesses through cutting-edge technology and creative design.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section ref={projectsRef} className="py-20 lg:py-32 bg-white">
          <div ref={contentSectionRef} className="max-w-7xl mx-auto px-4">
            <div className="space-y-8 lg:space-y-16">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="project-item group"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
                    {/* Project Images */}
                    <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl">
                      <div className="grid grid-cols-2 gap-4 h-[300px] lg:h-[500px]">
                        <div className="relative overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-500">
                          <img 
                            src={project.image1} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="relative overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-500">
                          <img 
                            src={project.image2} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-[#D3FD50]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl lg:rounded-3xl pointer-events-none">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-4 bg-[#D3FD50] text-black font-bold uppercase rounded-full text-lg lg:text-xl hover:scale-110 transition-transform duration-300 pointer-events-auto"
                        >
                          View Project →
                        </a>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-4 lg:space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="text-xs lg:text-sm font-bold text-[#D3FD50] uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-xs lg:text-sm text-gray-500">
                          Project {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h2 className="text-4xl lg:text-6xl font-[font2] font-bold text-black uppercase">
                        {project.title}
                      </h2>
                      <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-black hover:text-[#D3FD50] font-semibold uppercase text-sm lg:text-base transition-colors group"
                      >
                        Explore Project
                        <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                      </a>
                    </div>
                  </div>
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

export default Projects
