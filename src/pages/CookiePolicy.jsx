import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useEffect } from 'react'
import SEO from '../components/SEO/SEO'

const CookiePolicy = () => {
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
      const sections = contentRef.current.querySelectorAll('.cookie-section')

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
    <>
      <SEO 
        title="V43 | VibeX Solution Cookie Policy"
        description="Cookie Policy for V43 and VibeX Solution. Learn about how we use cookies on our website and how you can manage your cookie preferences."
        keywords="V43 cookie policy, VibeX Solution cookies, cookie policy"
      />
      <div
        ref={containerRef}
        className="min-h-screen bg-white text-black relative"
        style={{ transform: 'scale(0.95)', transformOrigin: 'top center' }}
      >
      {/* Main Content */}
      <div ref={contentRef} className="max-w-4xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        {/* Header */}
        <div className="mb-16 lg:mb-24 cookie-section">
          <h1 className="text-5xl lg:text-7xl font-[font2] font-bold mb-6 uppercase tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-black text-lg lg:text-xl max-w-2xl">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 lg:space-y-16">
          <div className="cookie-section">
            <h2 className="text-3xl lg:text-4xl font-[font2] font-bold mb-4 uppercase tracking-tight">
              What Are Cookies
            </h2>
            <p className="text-black text-lg lg:text-xl leading-relaxed mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
            </p>
            <p className="text-black text-lg lg:text-xl leading-relaxed">
              Cookies allow a website to recognize your device and store some information about your preferences or past actions.
            </p>
          </div>

          <div className="cookie-section">
            <h2 className="text-3xl lg:text-4xl font-[font2] font-bold mb-4 uppercase tracking-tight">
              How We Use Cookies
            </h2>
            <p className="text-black text-lg lg:text-xl leading-relaxed mb-4">
              We use cookies for several reasons:
            </p>
            <ul className="list-disc list-inside space-y-2 text-black text-lg lg:text-xl ml-4">
              <li>To enable certain functions of the website</li>
              <li>To provide analytics and track user behavior</li>
              <li>To store your preferences and personalize your experience</li>
              <li>To improve our services and user experience</li>
              <li>To understand how visitors interact with our website</li>
            </ul>
          </div>

          <div className="cookie-section">
            <h2 className="text-3xl lg:text-4xl font-[font2] font-bold mb-4 uppercase tracking-tight">
              Types of Cookies We Use
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl lg:text-2xl font-[font2] font-bold mb-2 uppercase">
                  Essential Cookies
                </h3>
                <p className="text-black text-lg lg:text-xl leading-relaxed">
                  These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                </p>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-[font2] font-bold mb-2 uppercase">
                  Analytics Cookies
                </h3>
                <p className="text-black text-lg lg:text-xl leading-relaxed">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-[font2] font-bold mb-2 uppercase">
                  Functional Cookies
                </h3>
                <p className="text-black text-lg lg:text-xl leading-relaxed">
                  These cookies enable the website to provide enhanced functionality and personalization based on your preferences.
                </p>
              </div>
            </div>
          </div>

          <div className="cookie-section">
            <h2 className="text-3xl lg:text-4xl font-[font2] font-bold mb-4 uppercase tracking-tight">
              Managing Cookies
            </h2>
            <p className="text-black text-lg lg:text-xl leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings preferences. However, limiting the ability of websites to set cookies can worsen your overall user experience.
            </p>
            <p className="text-black text-lg lg:text-xl leading-relaxed">
              You can choose to disable cookies through your browser settings. Instructions for managing cookies in popular browsers can be found in your browser's help section.
            </p>
          </div>

          <div className="cookie-section">
            <h2 className="text-3xl lg:text-4xl font-[font2] font-bold mb-4 uppercase tracking-tight">
              Contact Us
            </h2>
            <p className="text-black text-lg lg:text-xl leading-relaxed">
              If you have any questions about our use of cookies, please contact us at:
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
    </>
  )
}

export default CookiePolicy

