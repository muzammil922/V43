import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useEffect } from 'react'

const TermsOfService = () => {
  gsap.registerPlugin(ScrollTrigger)

  const containerRef = useRef(null)
  const contentRef = useRef(null)

  // Set background to white on mount
  useEffect(() => {
    document.body.style.backgroundColor = 'white'
    document.documentElement.style.backgroundColor = 'white'

    return () => {
      document.body.style.backgroundColor = 'black'
      document.documentElement.style.backgroundColor = 'black'
    }
  }, [])

  // Animate content reveal on scroll
  useGSAP(() => {
    const scrollTriggers = []
    
    if (contentRef.current) {
      const sections = contentRef.current.querySelectorAll('.terms-section')

      sections.forEach((section, index) => {
        const animation = gsap.fromTo(section,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'top 50%',
              toggleActions: 'play none none reverse'
            },
            delay: index * 0.1
          }
        )
        if (animation.scrollTrigger) {
          scrollTriggers.push(animation.scrollTrigger)
        }
      })
    }
    
    return () => {
      // Clean up all ScrollTriggers
      scrollTriggers.forEach(trigger => trigger?.kill())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white text-black relative"
      style={{ transform: 'scale(0.95)', transformOrigin: 'top center' }}
    >
      {/* Main Content */}
      <div ref={contentRef} className="max-w-4xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        {/* Header */}
        <div className="mb-16 lg:mb-24 terms-section">
          <h1 className="text-5xl lg:text-7xl font-[font2] font-bold mb-6 uppercase tracking-tight">
            Terms of Service
          </h1>
          <p className="text-black text-lg lg:text-xl max-w-2xl">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 lg:space-y-16">
          <div className="terms-section">
            <h2 className="text-3xl lg:text-4xl font-[font2] font-bold mb-4 uppercase tracking-tight">
              Agreement to Terms
            </h2>
            <p className="text-black text-lg lg:text-xl leading-relaxed mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <p className="text-black text-lg lg:text-xl leading-relaxed">
              These Terms of Service constitute a legally binding agreement made between you and VibeX Solution, whether personally or on behalf of an entity.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="text-3xl lg:text-4xl font-[font2] font-bold mb-4 uppercase tracking-tight">
              Use License
            </h2>
            <p className="text-black text-lg lg:text-xl leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials on VibeX Solution's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-black text-lg lg:text-xl ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="text-3xl lg:text-4xl font-[font2] font-bold mb-4 uppercase tracking-tight">
              User Accounts
            </h2>
            <p className="text-black text-lg lg:text-xl leading-relaxed mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
            </p>
            <p className="text-black text-lg lg:text-xl leading-relaxed">
              You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity, or a name that is otherwise offensive, vulgar, or obscene.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="text-3xl lg:text-4xl font-[font2] font-bold mb-4 uppercase tracking-tight">
              Prohibited Uses
            </h2>
            <p className="text-black text-lg lg:text-xl leading-relaxed mb-4">
              You may not use our service:
            </p>
            <ul className="list-disc list-inside space-y-2 text-black text-lg lg:text-xl ml-4">
              <li>In any way that violates any applicable law or regulation</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material</li>
              <li>To impersonate or attempt to impersonate the company or any employee, another user, or any other person or entity</li>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="text-3xl lg:text-4xl font-[font2] font-bold mb-4 uppercase tracking-tight">
              Contact Information
            </h2>
            <p className="text-black text-lg lg:text-xl leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-black text-lg lg:text-xl leading-relaxed mt-2">
              Email: <a href="mailto:vibexsolution@gmail.com" className="text-black hover:underline hover:text-[#D3FD50]">vibexsolution@gmail.com</a>
            </p>
            <p className="text-black text-lg lg:text-xl leading-relaxed mt-2">
              Phone: <a href="tel:+923113840943" className="text-black hover:underline hover:text-[#D3FD50]">+92 (311) 384-0943</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService

