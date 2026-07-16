'use client'

import { motion } from 'framer-motion'
import { Shield, BadgeCheck, Clock, Banknote, HeadphonesIcon, FileCheck } from 'lucide-react'

const reasons = [
  { icon: Shield, title: 'Escrow Protection', description: 'Your funds are held securely and only released when you confirm satisfaction with the work done.', size: 'large' },
  { icon: BadgeCheck, title: 'Verified Professionals', description: 'Every pro passes identity verification, skill assessment, and background checks.', size: 'small' },
  { icon: Clock, title: 'Fast Matching', description: 'Get matched with available professionals in minutes. Average response time: 2 hours.', size: 'small' },
  { icon: Banknote, title: 'Fair Pricing', description: 'No hidden fees. See quotes upfront. Pay only what you agree to.', size: 'small' },
  { icon: HeadphonesIcon, title: '24/7 Support', description: 'Our team is always available to help with any questions or concerns.', size: 'small' },
  { icon: FileCheck, title: 'Insured Work', description: 'Every job is insured up to ₦2,000,000 for your peace of mind.', size: 'small' },
]

export function WhyVorqumi() {
  return (
    <section className="section-pad bg-white dark:bg-navy-dark">
      <div className="container-vorqumi">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="badge-sage">Why Vorqumi</span>
          <h2 className="section-title">Built for Trust, Designed for Speed</h2>
          <p className="section-subtitle text-center mx-auto">Every feature is designed to protect you, your home, and your money</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div key={reason.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} className="card p-8 flex flex-col gap-4">
              <div className={`w-14 h-14 rounded-2xl ${index === 0 ? 'bg-gradient-copper' : 'bg-sage/10 dark:bg-sage/20'} flex items-center justify-center`}>
                <reason.icon size={24} className={index === 0 ? 'text-white' : 'text-sage'} />
              </div>
              <div>
                <h3 className="font-body font-bold text-h4 text-text-primary dark:text-text-light mb-2">{reason.title}</h3>
                <p className="font-body text-small text-text-secondary dark:text-text-muted leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}