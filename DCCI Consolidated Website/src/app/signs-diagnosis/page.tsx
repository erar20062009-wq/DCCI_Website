import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Search, FileDown, Phone, AlertCircle } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Signs & Diagnosis',
  description: 'Learn the early warning signs of dementia, understand the difference from normal aging, and get your free doctor-visit toolkit.',
}

const subPages = [
  {
    href: '/signs-diagnosis/warning-signs',
    title: 'Warning Signs vs. Normal Aging',
    description: 'A clear two-column comparison of what\'s a normal part of aging and what may be a warning sign worth discussing with a doctor.',
    icon: Search,
  },
  {
    href: '/signs-diagnosis/10-signs',
    title: 'The 10 Early Signs of Dementia',
    description: 'Plain-language guide to the 10 warning signs recognized by the Alzheimer\'s Association and local experts.',
    icon: AlertCircle,
  },
  {
    href: '/signs-diagnosis/types-of-dementia',
    title: 'Types of Dementia',
    description: "Alzheimer's disease, vascular dementia, Lewy body, frontotemporal, Parkinson's disease dementia, mixed dementia, and early-onset.",
    icon: Search,
  },
  {
    href: '/signs-diagnosis/disease-stages',
    title: 'Disease Stages & What to Expect',
    description: 'Early, middle, and late stage descriptions — what changes, what stays the same, and how to plan ahead.',
    icon: Search,
  },
  {
    href: '/signs-diagnosis/getting-evaluated',
    title: 'Getting a Diagnosis',
    description: 'When to seek evaluation, how to get a referral, what to expect at the TMH Memory Disorder Clinic, and how to find a clinic near you.',
    icon: Phone,
  },
  {
    href: '/signs-diagnosis/toolkit',
    title: 'Free Doctor-Visit Toolkit',
    description: 'Downloadable checklists, caregiver observation guides, medication lists, and questions to bring to your next appointment. Free and printable.',
    icon: FileDown,
    featured: true,
  },
]

export default function SignsDiagnosisPage() {
  return (
    <article>

      <div className="p-5 rounded-2xl bg-lavender-50 border border-lavender-200 mb-10">
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-lavender-600 shrink-0 mt-0.5" aria-hidden />
          <div>
            <p className="text-sm font-semibold text-lavender-900 mb-0.5">Not sure where to start? Call the helpline.</p>
            <p className="text-sm text-lavender-700">
              The <strong>Alzheimer's Project Helpline</strong> is free and available Mon–Fri, 9am–5pm.{' '}
              <a href="tel:+18503862778" className="font-semibold underline hover:text-lavender-900 transition-colors">(850) 386-2778</a>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subPages.map((page) => {
          const Icon = page.icon
          return (
            <Link
              key={page.href}
              href={page.href}
              className={`group flex flex-col gap-3 p-5 rounded-2xl border-2 transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500 focus-visible:ring-offset-2 ${
                page.featured
                  ? 'border-lavender-300 bg-lavender-50 hover:border-lavender-400'
                  : 'border-warmgray-100 bg-white shadow-card hover:border-lavender-200'
              }`}
            >
              <div className={`flex items-center gap-2 ${page.featured ? 'text-lavender-700' : 'text-warmgray-700'}`}>
                <Icon className="w-4 h-4" aria-hidden />
                {page.featured && (
                  <span className="text-xs font-semibold bg-lavender-200 text-lavender-800 px-2 py-0.5 rounded-full">
                    Most popular
                  </span>
                )}
              </div>
              <div>
                <h2 className={`text-base font-bold mb-1.5 group-hover:text-lavender-700 transition-colors ${
                  page.featured ? 'text-lavender-900' : 'text-warmgray-900'
                }`}>
                  {page.title}
                </h2>
                <p className="text-sm text-warmgray-500 leading-relaxed">
                  {page.description}
                </p>
              </div>
              <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-lavender-600 group-hover:gap-2.5 transition-all duration-150">
                Open <ArrowRight className="w-3.5 h-3.5" aria-hidden />
              </div>
            </Link>
          )
        })}
      </div>
    </article>
  )
}
