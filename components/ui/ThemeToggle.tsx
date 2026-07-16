'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useEffect, useState } from 'react'

interface ThemeToggleProps {
  variant?: 'icon' | 'full'
}

export function ThemeToggle({ variant = 'icon' }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full bg-sand dark:bg-navy animate-pulse" aria-hidden="true" />
  }

  if (variant === 'icon') {
    const isDark = resolvedTheme === 'dark'
    return (
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="w-9 h-9 rounded-full flex items-center justify-center bg-sand dark:bg-navy text-text-secondary dark:text-text-muted hover:bg-copper/10 hover:text-copper dark:hover:bg-copper/20 dark:hover:text-copper-light transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? <Sun size={17} /> : <Moon size={17} />}
      </button>
    )
  }

  const options = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ] as const

  return (
    <div className="inline-flex items-center gap-1 p-1 bg-sand dark:bg-navy rounded-pill border border-sand dark:border-navy-light" role="group" aria-label="Theme selection">
      {options.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-pill font-body text-tiny font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-1 ${theme === value ? 'bg-white dark:bg-navy-dark text-copper shadow-card' : 'text-text-muted hover:text-text-secondary dark:hover:text-text-light'}`}
          aria-pressed={theme === value}
          aria-label={`${label} mode`}
        >
          <Icon size={13} />{label}
        </button>
      ))}
    </div>
  )
}