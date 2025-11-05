import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useEffect } from 'react'

const PrivacyPolicy = () => {
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
      const sections = contentRef.current.querySelectorAll('.policy-section')

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
        <div className="mb-16 lg:mb-24 policy-section">
          <h1 className="text-5xl lg:text-7xl font-[font2] font-bold mb-6 uppercase tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-black text-lg lg:text-xl max-w-2xl">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 lg:space-y-16">
          <div className="policy-section">
            <h2 className="text-3xl lg:text-4xl font-[font2] font-bold mb-4 uppercase tracking-tight">
              Introduction
            </h2>
            <p className="text-black text-lg lg:text-xl leading-relaxed mb-4">
              At VibeX Solution, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p className="text-black text-lg lg:text-xl leading-relaxed">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </div>

          <div className="policy-section">
            <h2 className="text-3xl lg:text-4xl font-[font2] font-bold mb-4 uppercase tracking-tight">
              Information We Collect
            </h2>
            <p className="text-black text-lg lg:text-xl leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we may collect on the site includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-black text-lg lg:text-xl ml-4">
              <li>Personal data such as name, email address, and phone number</li>
              <li>Derivative data such as IP address, browser type, and device information</li>
              <li>Financial data such as payment information when you make purchases</li>
              <li>Mobile device data such as device ID and location data</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2 className="text-3xl lg:text-4xl font-[font2] font-bold mb-4 uppercase tracking-tight">
              How We Use Your Information
            </h2>
            <p className="text-black text-lg lg:text-xl leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-black text-lg lg:text-xl ml-4">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you for customer service and updates</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2 className="text-3xl lg:text-4xl font-[font2] font-bold mb-4 uppercase tracking-tight">
              Data Security
            </h2>
            <p className="text-black text-lg lg:text-xl leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>
          </div>

          <div className="policy-section">
            <h2 className="text-3xl lg:text-4xl font-[font2] font-bold mb-4 uppercase tracking-tight">
              Contact Us
            </h2>
            <p className="text-black text-lg lg:text-xl leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy

