import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useEffect } from 'react'

const Fact = () => {
  gsap.registerPlugin(ScrollTrigger)

  const containerRef = useRef(null)
  const jokesRef = useRef(null)

  // Set background to white on mount (like Contact page)
  useEffect(() => {
    document.body.style.backgroundColor = 'white'
    document.documentElement.style.backgroundColor = 'white'
    
    return () => {
      document.body.style.backgroundColor = 'black'
      document.documentElement.style.backgroundColor = 'black'
    }
  }, [])

  // 10 Fun Facts/Jokes
  const jokes = [
    {
      id: 1,
      fact: "Why don't programmers like nature? It has too many bugs!",
      category: "Tech Humor"
    },
    {
      id: 2,
      fact: "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
      category: "Programming"
    },
    {
      id: 3,
      fact: "Why did the developer go broke? Because he used up all his cache!",
      category: "Developer Life"
    },
    {
      id: 4,
      fact: "How many programmers does it take to change a light bulb? None. That's a hardware problem.",
      category: "Classic"
    },
    {
      id: 5,
      fact: "Why do Java developers wear glasses? Because they can't C#!",
      category: "Programming"
    },
    {
      id: 6,
      fact: "A user interface is like a joke. If you have to explain it, it's not that good.",
      category: "UX Wisdom"
    },
    {
      id: 7,
      fact: "Why do developers prefer dark mode? Because light attracts bugs!",
      category: "Developer Life"
    },
    {
      id: 8,
      fact: "There are only 10 types of people in the world: those who understand binary and those who don't.",
      category: "Tech Humor"
    },
    {
      id: 9,
      fact: "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
      category: "Programming"
    },
    {
      id: 10,
      fact: "The best thing about a boolean is even if you're wrong, you're only off by a bit.",
      category: "Tech Humor"
    }
  ]

  // Animate jokes reveal on scroll
  useGSAP(() => {
    const scrollTriggers = []
    
    if (jokesRef.current) {
      const jokeElements = jokesRef.current.querySelectorAll('.joke-item')
      
      jokeElements.forEach((element, index) => {
        const animation = gsap.fromTo(element, 
          {
            opacity: 0,
            y: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
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
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <h1 className="text-5xl lg:text-7xl font-[font2] font-bold mb-6 uppercase tracking-tight">
            Fun Facts
          </h1>
          <p className="text-black text-lg lg:text-xl max-w-2xl">
            A collection of tech jokes and fun facts to brighten your day. Scroll down to discover more!
          </p>
        </div>

        {/* Jokes Container */}
        <div ref={jokesRef} className="space-y-8 lg:space-y-12">
          {jokes.map((joke) => (
            <div 
              key={joke.id} 
              className="joke-item bg-transparent border-2 border-black rounded-lg p-6 lg:p-8 hover:border-[#D3FD50] transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 lg:gap-6">
                {/* Number Badge */}
                <div className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-black text-white flex items-center justify-center font-[font2] font-bold text-lg lg:text-2xl group-hover:bg-[#D3FD50] group-hover:text-black transition-all duration-300">
                  {joke.id}
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <p className="text-black text-xl lg:text-3xl font-[font1] leading-relaxed mb-3 group-hover:text-[#D3FD50] transition-colors duration-300">
                    {joke.fact}
                  </p>
                  <span className="inline-block px-4 py-1.5 bg-black text-white text-xs lg:text-sm uppercase tracking-wider font-[font2] rounded-full group-hover:bg-[#D3FD50] group-hover:text-black transition-all duration-300">
                    {joke.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-24 lg:mt-32 pt-8 border-t-2 border-black">
          <p className="text-black text-base lg:text-lg text-center font-[font1]">
            Keep scrolling for more fun facts!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Fact

