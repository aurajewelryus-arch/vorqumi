import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './context/**/*.{ts,tsx}',
    './utils/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A2F4A',
          dark: '#0F172A',
          light: '#2D3F52',
        },
        copper: {
          DEFAULT: '#D97706',
          light: '#F0A23D',
          forge: '#C4551F',
        },
        sage: {
          DEFAULT: '#479968',
          mist: '#5C8371',
          light: '#E8F0EB',
        },
        porcelain: '#FAF8F5',
        sand: '#E5E1DA',
        linen: '#F1ECE3',
        semantic: {
          success: '#3A8556',
          error: '#D6483A',
          warning: '#F0A23D',
          info: '#3B6EA8',
        },
        text: {
          primary: '#14171C',
          secondary: '#4A5259',
          muted: '#8B9198',
          light: '#F5F0EB',
        },
      },
      fontFamily: {
        heading: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-public-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['clamp(3rem, 6vw, 4.5rem)', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display': ['clamp(2.25rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'h1': ['clamp(1.875rem, 3.5vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h3': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'small': ['0.875rem', { lineHeight: '1.6' }],
        'tiny': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'section': '6rem',
        'section-sm': '4rem',
        'card-padding': '2rem',
      },
      borderRadius: {
        'card': '24px',
        'modal': '32px',
        'pill': '9999px',
        'input': '10px',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(18,24,31,0.04), 0 8px 24px rgba(18,24,31,0.06)',
        'hover': '0 4px 8px rgba(18,24,31,0.06), 0 20px 40px rgba(18,24,31,0.12)',
        'dropdown': '0 2px 6px rgba(18,24,31,0.08), 0 12px 32px rgba(18,24,31,0.14)',
        'modal': '0 8px 16px rgba(11,15,20,0.12), 0 40px 80px rgba(11,15,20,0.28)',
        'cta': '0 4px 12px rgba(217,119,6,0.28), 0 12px 32px rgba(217,119,6,0.22)',
        'cta-hover': '0 6px 20px rgba(217,119,6,0.40), 0 20px 48px rgba(217,119,6,0.30)',
        'verified': '0 0 0 4px rgba(71,153,104,0.08), 0 4px 12px rgba(71,153,104,0.15)',
        'focus': '0 0 0 4px rgba(217,119,6,0.15)',
        'dark-card': '0 1px 2px rgba(0,0,0,0.30), 0 8px 24px rgba(0,0,0,0.40)',
        'dark-hover': '0 4px 8px rgba(0,0,0,0.40), 0 20px 40px rgba(0,0,0,0.50)',
        'navbar': '0 1px 0 rgba(18,24,31,0.06)',
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #0F172A 0%, #1A2F4A 45%, #2D3F52 100%)',
        'gradient-copper': 'linear-gradient(120deg, #D97706 0%, #F0A23D 100%)',
        'gradient-premium': 'linear-gradient(135deg, #D97706 0%, #C4551F 40%, #1A2F4A 100%)',
        'gradient-sage': 'linear-gradient(135deg, #479968 0%, #2D4A3E 100%)',
        'gradient-hero': 'linear-gradient(160deg, #0F172A 0%, #1A2F4A 50%, #2D3F52 100%)',
        'gradient-linen': 'linear-gradient(180deg, #FAF8F5 0%, #F1ECE3 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fade-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'slide-up': 'slide-up 0.35s ease-out forwards',
        'scale-in': 'scale-in 0.25s ease-out forwards',
        bounce: 'bounce 1.5s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config