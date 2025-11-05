import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEO = ({ title, description, keywords, image, type = 'website' }) => {
  const location = useLocation()
  const baseUrl = 'https://v43.pro'
  const currentUrl = `${baseUrl}${location.pathname}`
  const defaultImage = `${baseUrl}/V43%20Logo.png`
  const defaultTitle = 'V43 | VibeX Solution - AI-Powered Business Solutions'
  const defaultDescription = 'V43 and VibeX Solution - Leading AI-powered business solutions provider. We help 50+ companies worldwide enhance efficiency, scale operations, and unlock growth through innovative AI technology.'
  const defaultKeywords = 'V43, VibeX Solution, vibexsolution, AI solutions, business automation, digital transformation, AI-powered solutions'

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
    updateMetaTag('og:title', title || defaultTitle, true)
    updateMetaTag('og:description', description || defaultDescription, true)
    updateMetaTag('og:image', image || defaultImage, true)
    updateMetaTag('og:url', currentUrl, true)
    updateMetaTag('og:type', type, true)
    updateMetaTag('twitter:title', title || defaultTitle, true)
    updateMetaTag('twitter:description', description || defaultDescription, true)
    updateMetaTag('twitter:image', image || defaultImage, true)
    updateMetaTag('twitter:url', currentUrl, true)

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', currentUrl)

  }, [title, description, keywords, image, type, currentUrl, defaultTitle, defaultDescription, defaultKeywords, defaultImage])

  return null
}

export default SEO

