import type { Metadata, Viewport } from 'next'
import { Fraunces, Public_Sans } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '500', '600', '700', '800', '900'],
  style: ['normal'],
  variable: '--font-fraunces',
  display: 'swap',
})

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-public-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vorqumi.com'),
  title: {
    default: 'Vorqumi — Trusted Home Services Across Nigeria',
    template: '%s | Vorqumi',
  },
  description:
    'Find and book verified plumbers, electricians, cleaners, and 25+ home service professionals across Nigeria. Protected by escrow. Guaranteed satisfaction.',
  keywords: [
    'home services Nigeria',
    'plumber Lagos',
    'electrician Abuja',
    'professional cleaner',
    'home repair Nigeria',
    'verified handyman',
    'escrow payment Nigeria',
    'vorqumi',
  ],
  authors: [{ name: 'Vorqumi', url: 'https://vorqumi.com' }],
  creator: 'Vorqumi Technologies',
  publisher: 'Vorqumi Technologies',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://vorqumi.com',
    siteName: 'Vorqumi',
    title: 'Vorqumi — Trusted Home Services Across Nigeria',
    description: 'Book verified professionals for plumbing, electrical, cleaning & more. Escrow-protected payments.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Vorqumi Home Services Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vorqumi',
    creator: '@vorqumi',
    title: 'Vorqumi — Trusted Home Services',
    description: 'Verified professionals. Escrow protection. 25+ services across Nigeria.',
    images: ['/og-image.jpg'],
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
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
    shortcut: '/favicon.ico',
  },
  alternates: { canonical: 'https://vorqumi.com' },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF8F5' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${publicSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-porcelain dark:bg-navy-dark antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}