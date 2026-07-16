'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Wrench, PaintBucket, Zap, Wind, Droplets, Home, Truck, Hammer, Shield, Sparkles, Bug, Camera, Tv, WashingMachine, Thermometer, HardHat, Drill, Trash2, Power, Plug, ShowerHead, Warehouse, Lock, Flame, Settings } from 'lucide-react'

const categories = [
  { icon: Wrench, label: 'Plumbing', slug: 'plumbing', color: '#D97706' },
  { icon: PaintBucket, label: 'Painting', slug: 'painting', color: '#1A2F4A' },
  { icon: Zap, label: 'Electrical', slug: 'electrical', color: '#C4551F' },
  { icon: Wind, label: 'AC Repair', slug: 'ac-repair', color: '#479968' },
  { icon: Droplets, label: 'Cleaning', slug: 'cleaning', color: '#D97706' },
  { icon: Home, label: 'Housekeeping', slug: 'housekeeping', color: '#1A2F4A' },
  { icon: Truck, label: 'Moving', slug: 'moving', color: '#C4551F' },
  { icon: Hammer, label: 'Carpentry', slug: 'carpentry', color: '#479968' },
  { icon: Shield, label: 'Security', slug: 'security', color: '#D97706' },
  { icon: Sparkles, label: 'Fumigation', slug: 'fumigation', color: '#1A2F4A' },
  { icon: Bug, label: 'Pest Control', slug: 'pest-control', color: '#C4551F' },
  { icon: Camera, label: 'CCTV', slug: 'cctv', color: '#479968' },
  { icon: Tv, label: 'TV Mounting', slug: 'tv-mounting', color: '#D97706' },
  { icon: WashingMachine, label: 'Laundry', slug: 'laundry', color: '#1A2F4A' },
  { icon: Thermometer, label: 'Heating', slug: 'heating', color: '#C4551F' },
  { icon: HardHat, label: 'Roofing', slug: 'roofing', color: '#479968' },
  { icon: Drill, label: 'Flooring', slug: 'flooring', color: '#D97706' },
  { icon: Trash2, label: 'Waste Disposal', slug: 'waste-disposal', color: '#1A2F4A' },
  { icon: Power, label: 'Generator', slug: 'generator', color: '#C4551F' },
  { icon: Plug, label: 'Solar Panels', slug: 'solar-panels', color: '#479968' },
  { icon: ShowerHead, label: 'Water Treatment', slug: 'water-treatment', color: '#D97706' },
  { icon: Warehouse, label: 'Storage', slug: 'storage', color: '#1A2F4A' },
  { icon: Lock, label: 'Locksmith', slug: 'locksmith', color: '#C4551F' },
  { icon: Flame, label: 'Gas Services', slug: 'gas-services', color: '#479968' },
  { icon: Settings, label: 'Appliance Repair', slug: 'appliance-repair', color: '#D97706' },
]

export function CategoriesGrid() {
  return (
    <section className="section-pad bg-white dark:bg-navy-dark">
      <div className="container-vorqumi">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="badge-copper">Services</span>
          <h2 className="section-title">Explore Our Services</h2>
          <p className="section-subtitle text-center mx-auto">Over 25 professional services for your home — all verified, insured, and backed by our escrow guarantee</p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.div key={category.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03, duration: 0.4 }}>
              <Link href={`/services/${category.slug}`} className="card flex flex-col items-center text-center p-6 gap-3 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: `${category.color}12` }}>
                  <category.icon className="w-7 h-7" style={{ color: category.color }} />
                </div>
                <span className="font-body font-medium text-small text-text-primary dark:text-text-light leading-tight">{category.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/categories" className="btn-outline inline-flex">View All Categories</Link>
        </div>
      </div>
    </section>
  )
}