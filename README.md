# V43 - VibeX Solution Website

A modern, responsive website for VibeX Solution built with React, Vite, GSAP, and Tailwind CSS.

## Features

- 🎨 Modern UI/UX with smooth animations
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎭 GSAP animations and scroll triggers
- 📧 Contact form with EmailJS integration
- 📄 Policy pages (Privacy, Terms, Cookies)
- 🎬 Video background support
- 🕐 Real-time Pakistan time display
- 💬 WhatsApp integration

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **GSAP** - Animation library
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **EmailJS** - Email service

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
V43/
├── public/          # Static assets (images, fonts, video)
├── src/
│   ├── components/  # React components
│   ├── pages/       # Page components
│   ├── context/     # Context providers
│   └── lib/         # Utility functions
└── dist/            # Build output (generated)
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings
5. Deploy!

The `vercel.json` file is already configured for optimal deployment.

### Environment Variables

For EmailJS functionality, set these in Vercel:
- Not required in code (already configured)

## Pages

- `/` - Home page
- `/agancy` - Agency/Team page
- `/projects` - Projects showcase
- `/contact` - Contact form
- `/fact` - Fun facts page
- `/privacy-policy` - Privacy Policy
- `/terms-of-service` - Terms of Service
- `/cookie-policy` - Cookie Policy

## License

Private project - All rights reserved
