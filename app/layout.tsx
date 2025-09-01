import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { ParticleBackground } from '@/components/ui/ParticleBackground'
import { MusicPlayer } from '@/components/ui/MusicPlayer'
import { PWAInstall } from '@/components/ui/PWAInstall'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name - Ultra Modern Portfolio',
  description: 'Next-generation interactive portfolio showcasing cutting-edge development skills and innovative projects.',
  keywords: 'developer, portfolio, web development, AI, machine learning, full stack',
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourportfolio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Your Name - Ultra Modern Portfolio',
    description: 'Next-generation interactive portfolio showcasing cutting-edge development skills and innovative projects.',
    url: 'https://yourportfolio.com',
    siteName: 'Your Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Name Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Ultra Modern Portfolio',
    description: 'Next-generation interactive portfolio showcasing cutting-edge development skills and innovative projects.',
    images: ['/og-image.jpg'],
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00d4ff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Portfolio" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#00d4ff" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={`${inter.className} custom-cursor dark-transition`}>
        <ThemeProvider>
          <ParticleBackground />
          <CustomCursor />
          <main className="relative z-10">
            {children}
          </main>
          <MusicPlayer />
          <PWAInstall />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'rgba(0, 0, 0, 0.8)',
                color: '#fff',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}