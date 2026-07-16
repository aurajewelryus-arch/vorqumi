'use client'

import { motion } from 'framer-motion'
import { ClipboardList, Users, ShieldCheck, ThumbsUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const STEPS = [
  { number: '01', icon: ClipboardList, title: 'Post Your Job', description: 'Describe what you need, set your budget, and choose your preferred timeline. Takes less than 2 minutes.', details: ['No account required to browse', 'Add photos to get accurate quotes', 'Set your own budget or get estimates'], color: 'copper' },
  { number: '02', icon: Users, title: 'Get Matched', description: 'Receive bids from verified professionals in your area. Compare profiles, ratings, and quotes.', details: ['Up to 5 bids within 2 hours', 'View full professional profiles', 'Check reviews from real customers'], color: 'sage' },
  { number: '03', icon: ShieldCheck, title: 'Pay Securely', description: "Fund the escrow with your preferred payment method. Your money is protected until you're satisfied.", details: ['Bank transfer, card, or USSD', 'Funds held safely in escrow', 'Zero payment until you approve'], color: 'copper' },
  { number: '04', icon: ThumbsUp, title: 'Approve & Release', description: 'Once the job is done to your satisfaction, release payment with one tap. Rate your professional.', details: ['Photo documentation of work', 'One-tap escrow release', 'Leave a review to help others'], color: 'sage' },
]

export function HowItWorks() {
  return (
    <section className="section-pad bg-linen dark:bg-navy" id="how-it-works">
      <div className="container-vorqumi">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="badge-sage">Process</span>
          <h2 className="section-title">How Vorqumi Works</h2>
          <p className="section-subtitle text-center mx-auto">From posting your job to approving the work — a transparent, protected process every step of the way</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-copper via-sage to-copper opacity-20 z-0" aria-hidden="true" />
          {STEPS.map((step, index) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12, duration: 0.5 }} className="card p-8 flex flex-col gap-5 relative z-10">
              <div className="flex items-center gap-3">
                <div className={`step-circle ${step.color === 'copper' ? 'bg-gradient-copper' : 'bg-sage'}`}>{step.number}</div>
                <step.icon size={20} className={step.color === 'copper' ? 'text-copper' : 'text-sage'} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-body font-bold text-h4 text-text-primary dark:text-text-light">{step.title}</h3>
                <p className="font-body text-small text-text-secondary dark:text-text-muted leading-relaxed">{step.description}</p>
              </div>
              <ul className="space-y-1.5 mt-auto">
                {step.details.map(detail => (
                  <li key={detail} className="flex items-start gap-2 font-body text-tiny text-text-muted">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${step.color === 'copper' ? 'bg-copper' : 'bg-sage'}`} />{detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.5 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link href="/post-job" className="btn-primary btn-lg">Post Your First Job Free<ArrowRight size={18} /></Link>
          <Link href="/how-it-works" className="btn-outline btn-lg">See Full Process</Link>
        </motion.div>
      </div>
    </section>
  )
}