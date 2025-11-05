import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEO = ({ title, description, keywords, image, type = 'website', author, robots = 'index, follow' }) => {
  const location = useLocation()
  const baseUrl = 'https://v43.pro'
  const currentUrl = `${baseUrl}${location.pathname}`
  const defaultImage = `${baseUrl}/V43%20Logo.png`
  const defaultTitle = 'V43 | VibeX Solution - AI-Powered Business Solutions'
  const defaultDescription = 'V43 and VibeX Solution - Leading AI-powered business solutions provider. We help 50+ companies worldwide enhance efficiency, scale operations, and unlock growth through innovative AI technology.'
  const defaultKeywords = 'V43, VibeX Solution, vibexsolution, AI solutions, business automation, digital transformation, AI-powered solutions'
  const defaultAuthor = 'VibeX Solution'

  useEffect(() => {
    // Update document title
    document.title = title || defaultTitle

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    // Primary Meta Tags
    updateMetaTag('title', title || defaultTitle)
    updateMetaTag('description', description || defaultDescription)
    updateMetaTag('keywords', keywords || defaultKeywords)
    updateMetaTag('author', author || defaultAuthor)
    updateMetaTag('robots', robots)
    updateMetaTag('theme-color', '#D3FD50')
    updateMetaTag('msapplication-TileColor', '#000000')
    
    // Open Graph / Facebook
    updateMetaTag('og:title', title || defaultTitle, true)
    updateMetaTag('og:description', description || defaultDescription, true)
    updateMetaTag('og:image', image || defaultImage, true)
    updateMetaTag('og:image:width', '1200', true)
    updateMetaTag('og:image:height', '630', true)
    updateMetaTag('og:image:alt', title || defaultTitle, true)
    updateMetaTag('og:url', currentUrl, true)
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:site_name', 'V43 | VibeX Solution', true)
    updateMetaTag('og:locale', 'en_US', true)
    
    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title || defaultTitle)
    updateMetaTag('twitter:description', description || defaultDescription)
    updateMetaTag('twitter:image', image || defaultImage)
    updateMetaTag('twitter:image:alt', title || defaultTitle)
    updateMetaTag('twitter:url', currentUrl)
    updateMetaTag('twitter:site', '@vibex_solution')
    updateMetaTag('twitter:creator', '@vibex_solution')

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', currentUrl)

    // Add or update structured data
    const addStructuredData = (data) => {
      let script = document.querySelector('script[type="application/ld+json"][data-seo="page"]')
      if (!script) {
        script = document.createElement('script')
        script.setAttribute('type', 'application/ld+json')
        script.setAttribute('data-seo', 'page')
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(data)
    }

    // Page-specific structured data
    const pageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title || defaultTitle,
      "description": description || defaultDescription,
      "url": currentUrl,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "name": "V43 | VibeX Solution",
        "url": baseUrl
      },
      "about": {
        "@type": "Organization",
        "name": "VibeX Solution",
        "alternateName": "V43"
      }
    }

    addStructuredData(pageSchema)

  }, [title, description, keywords, image, type, author, robots, currentUrl, defaultTitle, defaultDescription, defaultKeywords, defaultAuthor, defaultImage])

  return null
}

export default SEO

