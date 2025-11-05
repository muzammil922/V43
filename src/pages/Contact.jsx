import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import SEO from '../components/SEO/SEO'

// EmailJS Configuration Variables
// Get these from: https://www.emailjs.com/
// 
// 1. SERVICE_ID: 
//    - Dashboard > Email Services > Your Service > Copy "Service ID"
//    - Example format: 'service_abc123xyz'
//
// 2. TEMPLATE_ID:
//    - Dashboard > Email Templates > Your Template > Copy "Template ID"
//    - Already set: 'template_mblwoll'
//
// 3. PUBLIC_KEY:
//    - Dashboard > Account > General > API Keys > Copy "Public Key"
//    - Already set: 'MS1olsxj9CTWVh-wT'
//
const EMAILJS_SERVICE_ID = 'service_efjxuyk' // Replace with your Service ID from Email Services
const EMAILJS_TEMPLATE_ID = 'template_mblwoll' // Your Template ID (already set)
const EMAILJS_PUBLIC_KEY = 'MS1olsxj9CTWVh-wT' // Your Public Key (already set)

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger)

  const containerRef = useRef(null)
  const formRef = useRef(null)
  const footerRef = useRef(null)
  const contentSectionRef = useRef(null)
  const [footerTime, setFooterTime] = useState('PAKISTAN_00:00:00')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

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


  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send email using EmailJS
      // Template variables matching EmailJS template structure
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          // Standard EmailJS variables
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'vibexsolution@gmail.com', // Your receiving email
          
          // Additional variables for template (if needed)
          name: formData.name, // For {{name}} in template message content
          time: new Date().toLocaleString('en-US', { 
            timeZone: 'Asia/Karachi',
            dateStyle: 'short',
            timeStyle: 'short'
          }), // For {{time}} in template
        },
        EMAILJS_PUBLIC_KEY
      )

      console.log('Email sent successfully!', result.text)
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

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
          force3D: true
        })

        footerScrollTrigger = ScrollTrigger.create({
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
      // Clean up ScrollTrigger
      footerScrollTrigger?.kill()
      // Clean up timeout
      if (footerTimeout) {
        clearTimeout(footerTimeout)
      }
    }
  }, [])

  return (
    <>
      <SEO 
        title="V43 | VibeX Solution Contact - Get In Touch"
        description="Contact V43 and VibeX Solution for AI-powered business solutions. Reach out to us for digital transformation, AI consulting, and innovative technology solutions."
        keywords="V43 contact, VibeX Solution contact, vibexsolution email, V43 phone number, contact VibeX Solution, V43 support"
      />
      <div ref={containerRef} className="min-h-screen bg-white text-black relative pb-[35vh]" style={{ transform: 'scale(0.95)', transformOrigin: 'top center' }}>
        {/* Main Content */}
        <div ref={contentSectionRef} className="max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <h1 className="text-5xl lg:text-7xl font-[font2] font-bold mb-6 uppercase tracking-tight">
            Get In Touch
          </h1>
          <p className="text-black text-lg lg:text-xl max-w-2xl ">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-3 text-black font-[font2]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-2 border-black px-6 py-4 text-black placeholder-neutral-500 focus:outline-none focus:border-[#D3FD50] transition-colors font-[font1] text-lg"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-3 text-black font-[font2]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-2 border-black px-6 py-4 text-black placeholder-neutral-500 focus:outline-none focus:border-[#D3FD50] transition-colors font-[font1] text-lg"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm uppercase tracking-wider mb-3 text-black font-[font2]">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full bg-transparent border-2 border-black px-6 py-4 text-black placeholder-neutral-500 focus:outline-none focus:border-[#D3FD50] transition-colors font-[font1] text-lg"
              placeholder="What is this regarding?"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-3 text-black font-[font2]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full bg-transparent border-2 border-black px-6 py-4 text-black placeholder-neutral-500 focus:outline-none focus:border-[#D3FD50] transition-colors resize-none font-[font1] text-lg"
              placeholder="Tell us more about your project..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-16 lg:h-20 px-12 lg:px-16 rounded-full border-2 border-black flex items-center justify-center gap-3 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300 cursor-pointer text-black bg-transparent text-lg lg:text-xl font-[font2] font-bold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <span className="text-black hover:text-[#D3FD50] transition-colors">→</span>
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-100 border-2 border-green-500 rounded-lg">
              <p className="text-green-800 font-[font2] text-lg">
                ✓ Message sent successfully! We'll get back to you soon.
              </p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-100 border-2 border-red-500 rounded-lg">
              <p className="text-red-800 font-[font2] text-lg">
                ✗ Failed to send message. Please try again or contact us directly.
              </p>
            </div>
          )}
        </form>

        {/* Contact Information */}
        <div className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <h3 className="text-xl lg:text-2xl font-[font2] font-bold mb-4 uppercase tracking-tight">
              Email
            </h3>
            <a 
              href="mailto:vibexsolution@gmail.com
" 
              className="text-black hover:text-[#D3FD50] transition-colors text-lg lg:text-xl"
            >
              vibexsolution@gmail.com

            </a>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl font-[font2] font-bold mb-4 uppercase tracking-tight">
              Phone
            </h3>
            <a 
              href="tel:+923113840943" 
              className="text-black hover:text-[#D3FD50] transition-colors text-lg lg:text-xl"
            >
              +92 (311) 384-0943
            </a>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl font-[font2] font-bold mb-4 uppercase tracking-tight">
              Location
            </h3>
            <p className="text-black text-lg lg:text-xl">
              Karachi, Pakistan
            </p>
          </div>
        </div>
        </div>
      </div>

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
    </>
  )
}

export default Contact

