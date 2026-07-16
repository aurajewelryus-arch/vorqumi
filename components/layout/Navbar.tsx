'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Search, Wrench, Home, Truck, Zap, Wind, Bell, LogIn } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

interface NavItem {
  label: string
  href?: string
  children?: { label: string; href: string; description: string; icon: React.ElementType }[]
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Services',
    children: [
      { label: 'Plumbing', href: '/services/plumbing', description: 'Leaks, installations, repairs', icon: Wrench },
      { label: 'Electrical', href: '/services/electrical', description: 'Wiring, faults, installations', icon: Zap },
      { label: 'AC Repair', href: '/services/ac-repair', description: 'Service, repair, installation', icon: Wind },
      { label: 'Cleaning', href: '/services/cleaning', description: 'Home, office, deep clean', icon: Home },
      { label: 'Moving', href: '/services/moving', description: 'Local and inter-city removals', icon: Truck },
    ],
  },
  { label: 'Professionals', href: '/professionals' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Suppliers', href: '/suppliers' },
  { label: 'Pricing', href: '/pricing' },
]

function NavDropdown({ item, isOpen, onToggle }: { item: NavItem; isOpen: boolean; onToggle: () => void }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node) && isOpen) onToggle()
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onToggle])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1.5 font-body text-small font-medium text-text-secondary dark:text-text-muted hover:text-navy dark:hover:text-porcelain transition-colors duration-200 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper rounded-lg px-1"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown size={15} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-navy-dark rounded-card shadow-modal border border-sand/50 dark:border-navy/50 py-2 z-50 animate-scale-in origin-top-left"
          role="menu"
        >
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="flex items-start gap-3 px-4 py-3 hover:bg-linen dark:hover:bg-navy transition-colors duration-150 group"
              role="menuitem"
              onClick={onToggle}
            >
              <div className="w-9 h-9 rounded-xl bg-copper/8 dark:bg-copper/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-copper/15 dark:group-hover:bg-copper/25 transition-colors">
                <child.icon size={16} className="text-copper" />
              </div>
              <div>
                <p className="font-body font-semibold text-small text-text-primary dark:text-text-light">{child.label}</p>
                <p className="font-body text-tiny text-text-muted mt-0.5">{child.description}</p>
              </div>
            </Link>
          ))}
          <div className="border-t border-sand dark:border-navy mx-4 mt-1 pt-2">
            <Link
              href="/categories"
              className="block px-2 py-2 text-tiny font-semibold text-copper hover:underline transition-all"
              role="menuitem"
              onClick={onToggle}
            >
              View all 25+ services →
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setMobileDropdownOpen(null)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const toggleDropdown = useCallback((label: string) => {
    setOpenDropdown(prev => prev === label ? null : label)
  }, [])

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen(prev => prev === label ? null : label)
  }

  return (
    <>
      <nav className={`navbar transition-shadow duration-300 ${scrolled ? 'shadow-card' : ''}`} aria-label="Main navigation">
        <div className="container-vorqumi">
          <div className="flex items-center justify-between h-16">
            <Logo size="md" />

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1" role="list">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <li key={item.label}>
                    <NavDropdown
                      item={item}
                      isOpen={openDropdown === item.label}
                      onToggle={() => toggleDropdown(item.label)}
                    />
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href!}
                      className={`font-body text-small font-medium px-3 py-1.5 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper ${
                        pathname === item.href
                          ? 'text-copper bg-copper/8 dark:bg-copper/15'
                          : 'text-text-secondary dark:text-text-muted hover:text-navy dark:hover:text-porcelain'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Desktop Actions */}
            <div className="flex items-center gap-2">
              <button
                className="hidden sm:flex w-9 h-9 rounded-full items-center justify-center text-text-muted hover:text-copper hover:bg-copper/8 dark:hover:bg-copper/15 transition-all duration-200"
                aria-label="Search services"
              >
                <Search size={17} />
              </button>
              <ThemeToggle variant="icon" />
              <button
                className="hidden md:flex w-9 h-9 rounded-full relative items-center justify-center text-text-muted hover:text-copper hover:bg-copper/8 dark:hover:bg-copper/15 transition-all duration-200"
                aria-label="Notifications"
              >
                <Bell size={17} />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-copper border-2 border-white dark:border-navy-dark" />
              </button>
              <div className="hidden md:flex items-center gap-2 ml-1">
                <Link href="/auth/login" className="btn-ghost btn-sm flex items-center gap-1.5">
                  <LogIn size={15} />Log in
                </Link>
                <Link href="/auth/register" className="btn-primary btn-sm">
                  Get Started
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(prev => !prev)}
                className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-text-secondary dark:text-text-muted hover:bg-sand dark:hover:bg-navy transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-white dark:bg-navy-dark overflow-y-auto pt-20 pb-8 px-4 animate-fade-in"
          aria-label="Mobile navigation"
        >
          <nav className="space-y-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-sand dark:border-navy last:border-0">
                  <button
                    onClick={() => toggleMobileDropdown(item.label)}
                    className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-body font-semibold text-body text-text-primary dark:text-text-light hover:bg-linen dark:hover:bg-navy transition-colors duration-200"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${mobileDropdownOpen === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileDropdownOpen === item.label && (
                    <div className="ml-4 mt-1 space-y-1 pb-2 animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-secondary dark:text-text-muted hover:text-copper hover:bg-copper/5 transition-all duration-200"
                          onClick={() => {
                            setMobileOpen(false)
                            setMobileDropdownOpen(null)
                          }}
                        >
                          <child.icon size={16} className="text-copper shrink-0" />
                          <span className="font-body text-small font-medium">{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className={`block px-4 py-3.5 rounded-xl font-body font-semibold text-body transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-copper bg-copper/8 dark:bg-copper/15'
                      : 'text-text-primary dark:text-text-light hover:bg-linen dark:hover:bg-navy'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Actions */}
          <div className="mt-8 space-y-3 px-2">
            <Link
              href="/auth/login"
              className="btn-outline w-full justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/auth/register"
              className="btn-primary w-full justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Get Started Free
            </Link>
          </div>

          <div className="mt-6 px-2">
            <ThemeToggle variant="full" />
          </div>
        </div>
      )}
    </>
  )
}