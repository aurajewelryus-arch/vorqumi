'use client'

import { useState, useEffect } from 'react'
import { X, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const announcements = [
  {
    id: 'trust',
    text: '🔒 All payments escrow-protected — you only pay when satisfied',
    cta: { label: 'Learn more', href: '/how-it-works' }
  },
  {
    id: 'pro-offer',
    text: '💼 Professionals: First 3 months free — zero commission on all bookings',
    cta: { label: 'Join as a Pro', href: '/auth/register?role=PROFESSIONAL' }
  },
  {
    id: 'verified',
    text: '✅ 15,000+ verified professionals across Nigeria — find trusted pros near you',
    cta: { label: 'Find a Pro', href: '/search' }
  },
]

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const stored = localStorage.getItem('announcement-dismissed')
    if (stored === 'true') setDismissed(true)
  }, [])

  const handleDismiss = () => {
    setDismissed(true)
    localStorage.setItem('announcement-dismissed', 'true')
  }

  if (dismissed) return null

  const active = announcements[activeIndex]

  return (
    <div className="announcement-bar relative flex items-center justify-between gap-3 px-4 py-2.5" role="banner" aria-label="Announcement">
      <div className="hidden sm:flex items-center gap-1 shrink-0">
        {announcements.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-white w-4' : 'bg-white/40'}`}
            aria-label={`Announcement ${i + 1}`}
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 flex-1 text-center">
        <Sparkles size={13} className="shrink-0 hidden sm:block" />
        <span className="font-body text-tiny font-medium">{active.text}</span>
        <Link
          href={active.cta.href}
          className="hidden sm:inline-flex items-center gap-1 font-body text-tiny font-bold underline underline-offset-2 hover:no-underline transition-all whitespace-nowrap"
        >
          {active.cta.label}
          <ArrowRight size={11} />
        </Link>
      </div>
      <button
        onClick={handleDismiss}
        className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1"
        aria-label="Dismiss announcement"
      >
        <X size={13} />
      </button>
    </div>
  )
}