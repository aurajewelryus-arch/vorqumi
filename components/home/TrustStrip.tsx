import { ShieldCheck, Award, Users, BadgeCheck } from 'lucide-react'

const PARTNERS = [
  { name: 'GTBank' }, { name: 'Interswitch' }, { name: 'NIBSS' }, { name: 'Paystack' },
  { name: 'NCC Certified' }, { name: 'FCCPC Compliant' }, { name: 'ISO 27001' }, { name: 'CAC Registered' },
]

const TRUST_ITEMS = [
  { icon: ShieldCheck, text: 'Escrow Protected', color: 'text-sage' },
  { icon: BadgeCheck, text: 'KYC Verified Pros', color: 'text-copper' },
  { icon: Award, text: 'Insured to ₦2M', color: 'text-sage' },
  { icon: Users, text: '50,000+ Customers', color: 'text-copper' },
]

export function TrustStrip() {
  return (
    <div className="bg-sand/50 dark:bg-navy/60 border-y border-sand dark:border-navy py-5 overflow-hidden">
      <div className="container-vorqumi mb-4">
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {TRUST_ITEMS.map(({ icon: Icon, text, color }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon size={18} className={color} />
              <span className="font-body text-small font-semibold text-text-secondary dark:text-text-muted whitespace-nowrap">{text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-sand/50 dark:from-navy/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-sand/50 dark:from-navy/60 to-transparent z-10 pointer-events-none" />
        <div className="flex overflow-hidden" aria-hidden="true">
          <div className="marquee-track">
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <span key={`${partner.name}-${i}`} className="inline-flex items-center gap-2 font-body text-small font-medium text-text-muted dark:text-text-muted px-6 whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity duration-200">
                <span className="w-1.5 h-1.5 rounded-full bg-copper/40" />{partner.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}