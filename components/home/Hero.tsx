'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, Star, Shield, Clock, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const POPULAR_SEARCHES = ['Plumbing repair', 'AC installation', 'House cleaning', 'Electrical wiring', 'Painting services']
const TRUST_SIGNALS = [
  { icon: Shield, text: 'Escrow Protected', sub: 'Pay only when done' },
  { icon: Star, text: '4.8★ Average Rating', sub: 'From 50,000+ reviews' },
  { icon: Clock, text: '2hr Average Response', sub: 'Available 24/7' },
]
const CITIES = ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Kano', 'Enugu']

export function Hero() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('Lagos')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (location) params.set('city', location)
    router.push(`/search?${params.toString()}`)
  }

  return (
    <section className="bg-gradient-hero relative min-h-[92vh] flex flex-col justify-center overflow-hidden" aria-label="Hero — Find a professional">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-copper/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-sage/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-light/20 rounded-full blur-[80px]" />
      </div>
      <div className="container-vorqumi relative z-10 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 border border-white/15 backdrop-blur-sm rounded-pill font-body text-tiny font-semibold text-white/80">
              <span className="w-2 h-2 rounded-full bg-semantic-success animate-pulse" />15,000+ verified professionals across Nigeria
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading font-bold text-display-lg text-white text-center tracking-tight text-balance mb-6">
            Your Home, Fixed by <span className="text-gradient-copper">Verified Pros</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-body text-body-lg text-white/65 text-center max-w-2xl mx-auto leading-relaxed mb-10">
            Post a job, receive competitive bids, choose your professional, and pay securely through escrow — all in one platform built for Nigeria.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <form onSubmit={handleSearch} className="bg-white dark:bg-navy-dark rounded-card shadow-modal p-2 flex flex-col sm:flex-row gap-2" aria-label="Search for services">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" size={18} />
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="What service do you need?"
                  className="w-full pl-11 pr-4 py-3.5 font-body text-body text-text-primary dark:text-text-light placeholder:text-text-muted bg-transparent focus:outline-none rounded-xl"
                  aria-label="Search for home services"
                  autoComplete="off"
                />
              </div>
              <div className="hidden sm:block w-px bg-sand dark:bg-navy my-2" aria-hidden="true" />
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-copper pointer-events-none" size={18} />
                <select
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  className="pl-11 pr-8 py-3.5 font-body text-body text-text-primary dark:text-text-light bg-transparent appearance-none cursor-pointer focus:outline-none min-w-[140px]"
                  aria-label="Select your city"
                >
                  {CITIES.map(city => (<option key={city} value={city}>{city}</option>))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" size={14} />
              </div>
              <button type="submit" className="btn-primary btn-lg sm:self-stretch sm:px-8">Find Pros</button>
            </form>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-wrap items-center justify-center gap-2 mt-5">
            <span className="font-body text-tiny text-white/40">Popular:</span>
            {POPULAR_SEARCHES.map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="px-3 py-1 rounded-pill bg-white/8 border border-white/12 font-body text-tiny text-white/60 hover:bg-white/15 hover:text-white/90 hover:border-white/25 transition-all duration-200"
              >
                {term}
              </button>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
            {TRUST_SIGNALS.map(({ icon: Icon, text, sub }) => (
              <div key={text} className="flex flex-col items-center text-center gap-1.5 px-4 py-4 rounded-2xl bg-white/5 border border-white/8 backdrop-blur-sm">
                <Icon size={20} className="text-copper" />
                <span className="font-body font-semibold text-tiny text-white leading-snug">{text}</span>
                <span className="font-body text-tiny text-white/40 hidden sm:block">{sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1" aria-hidden="true">
        <span className="font-body text-tiny text-white/30">Scroll to explore</span>
        <ChevronDown size={16} className="text-white/30 animate-bounce" />
      </motion.div>
    </section>
  )
}