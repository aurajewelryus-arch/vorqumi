import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'

const FOOTER_LINKS = {
  services: {
    title: 'Services',
    links: [
      { label: 'Plumbing', href: '/services/plumbing' },
      { label: 'Electrical', href: '/services/electrical' },
      { label: 'Cleaning', href: '/services/cleaning' },
      { label: 'AC Repair', href: '/services/ac-repair' },
      { label: 'Carpentry', href: '/services/carpentry' },
      { label: 'All Services', href: '/categories' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  professionals: {
    title: 'Professionals',
    links: [
      { label: 'Join as a Pro', href: '/auth/register?role=PROFESSIONAL' },
      { label: 'Pro Dashboard', href: '/dashboard/pro' },
      { label: 'Verification', href: '/pros/verification' },
      { label: 'Training Centre', href: '/pros/training' },
      { label: 'Referral Program', href: '/pros/referrals' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Terms of Service', href: '/legal/terms' },
      { label: 'Escrow Policy', href: '/legal/escrow' },
      { label: 'Cookie Policy', href: '/legal/cookies' },
      { label: 'Insurance', href: '/legal/insurance' },
    ],
  },
}

const SOCIAL_LINKS = [
  { icon: Facebook, href: 'https://facebook.com/vorqumi', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/vorqumi', label: 'X / Twitter' },
  { icon: Instagram, href: 'https://instagram.com/vorqumi', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/vorqumi', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com/@vorqumi', label: 'YouTube' },
]

const CITIES = ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Kano', 'Enugu', 'Benin City', 'Kaduna']

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-dark text-white" aria-label="Site footer">
      <div className="container-vorqumi py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col gap-5">
            <Logo variant="light" size="md" />
            <p className="font-body text-small text-white/60 leading-relaxed max-w-xs">Nigeria's most trusted platform for home services. Verified professionals, escrow protection, and guaranteed satisfaction.</p>
            <div className="space-y-2.5">
              {[
                { icon: Mail, text: 'hello@vorqumi.com', href: 'mailto:hello@vorqumi.com' },
                { icon: Phone, text: '+234 800 967 7864', href: 'tel:+2348009677864' },
                { icon: MapPin, text: 'Lagos, Nigeria', href: '#' },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href} className="flex items-center gap-2.5 font-body text-tiny text-white/50 hover:text-copper-light transition-colors duration-200"><Icon size={14} className="shrink-0" />{text}</a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/8 hover:bg-copper/20 flex items-center justify-center text-white/50 hover:text-copper-light transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper" aria-label={label}><Icon size={16} /></a>
              ))}
            </div>
          </div>
          {Object.values(FOOTER_LINKS).map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="font-body font-bold text-small text-white uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-2.5" role="list">
                {section.links.map((link) => (
                  <li key={link.label}><Link href={link.href} className="font-body text-tiny text-white/50 hover:text-copper-light transition-colors duration-200">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/8">
          <p className="font-body text-tiny text-white/30 font-semibold uppercase tracking-wider mb-3">Available In</p>
          <div className="flex flex-wrap gap-2">
            {CITIES.map((city) => (
              <span key={city} className="px-3 py-1 rounded-pill bg-white/5 border border-white/8 font-body text-tiny text-white/40">{city}</span>
            ))}
            <span className="px-3 py-1 rounded-pill bg-copper/15 border border-copper/20 font-body text-tiny text-copper-light font-medium">+ More coming</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="container-vorqumi py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-tiny text-white/30">© {year} Vorqumi Technologies Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/legal/privacy" className="font-body text-tiny text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/legal/terms" className="font-body text-tiny text-white/30 hover:text-white/60 transition-colors">Terms</Link>
            <Link href="/legal/cookies" className="font-body text-tiny text-white/30 hover:text-white/60 transition-colors">Cookies</Link>
          </div>
          <p className="font-body text-tiny text-white/20">Made with ♥ in Nigeria</p>
        </div>
      </div>
    </footer>
  )
}