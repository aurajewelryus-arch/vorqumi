import Link from 'next/link'

interface LogoProps {
  variant?: 'default' | 'icon' | 'stacked' | 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

const sizeMap = {
  sm: { icon: 24, text: 'text-lg' },
  md: { icon: 32, text: 'text-xl' },
  lg: { icon: 48, text: 'text-2xl' },
}

export function Logo({ variant = 'default', size = 'md', href = '/' }: LogoProps) {
  const s = sizeMap[size]

  const iconSvg = (
    <svg width={s.icon} height={s.icon} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A2F4A" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      <path
        d="M 20 2 L 36 12 L 36 28 Q 36 36 20 38 Q 4 36 4 28 L 4 12 L 20 2 Z"
        fill="url(#logoGrad)"
        stroke="#1A2F4A"
        strokeWidth="1.5"
        className="dark:stroke-porcelain/30"
      />
      <path
        d="M 20 6 L 32 14 L 32 26 Q 32 32 20 34 Q 8 32 8 26 L 8 14 L 20 6 Z"
        fill="rgba(255,255,255,0.08)"
      />
      <path
        d="M 13 12 L 20 26 L 27 12"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="drop-shadow-sm"
      />
      <path
        d="M 22 17 L 19 21 L 16 19"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="20" cy="34" r="3" fill="#D97706" className="shadow-glow" />
    </svg>
  )

  if (variant === 'icon') return iconSvg

  if (variant === 'stacked') {
    return (
      <Link href={href} className="flex flex-col items-center gap-2 select-none group" aria-label="Vorqumi — Home">
        <div className="transition-transform duration-200 group-hover:scale-105">{iconSvg}</div>
        <span className={`${s.text} font-heading font-black text-navy dark:text-porcelain tracking-tight`}>Vorqumi</span>
      </Link>
    )
  }

  const textColor = variant === 'light' ? 'text-porcelain' : variant === 'dark' ? 'text-navy' : 'text-navy dark:text-porcelain'

  return (
    <Link href={href} className="inline-flex items-center gap-2.5 select-none group shrink-0" aria-label="Vorqumi — Home">
      <div className="w-9 h-9 rounded-xl bg-gradient-copper flex items-center justify-center shadow-cta transition-transform duration-200 group-hover:scale-105">
        <svg width={20} height={20} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
          <defs>
            <linearGradient id="logoGradMini" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1A2F4A" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
          </defs>
          <path
            d="M 20 2 L 36 12 L 36 28 Q 36 36 20 38 Q 4 36 4 28 L 4 12 L 20 2 Z"
            fill="url(#logoGradMini)"
          />
          <path
            d="M 13 12 L 20 26 L 27 12"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="20" cy="34" r="2.5" fill="white" />
        </svg>
      </div>
      <span className={`${s.text} font-heading font-bold ${textColor} tracking-tight`}>Vorqumi</span>
    </Link>
  )
}