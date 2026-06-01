import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, XCircle, ArrowRight, Phone } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Warning Signs vs. Normal Aging',
  description: 'Learn the difference between normal aging and potential warning signs of dementia, with a side-by-side comparison guide.',
}

const comparisons = [
  {
    normal: 'Occasionally forgetting a name or appointment, but remembering it later',
    warning: 'Forgetting recently learned information, repeatedly asking the same question',
    category: 'Memory',
  },
  {
    normal: 'Making occasional errors when managing finances',
    warning: 'Difficulty following a familiar recipe, or losing track of monthly bills',
    category: 'Problem-Solving',
  },
  {
    normal: 'Getting confused about the day of the week but figuring it out later',
    warning: 'Losing track of dates, seasons, or the passage of time',
    category: 'Time & Place',
  },
  {
    normal: 'Vision changes related to cataracts',
    warning: 'Difficulty reading, judging distance, or recognizing colors',
    category: 'Vision',
  },
  {
    normal: 'Sometimes having trouble finding the right word',
    warning: 'Stopping mid-sentence, repeating self, or calling things by wrong names',
    category: 'Language',
  },
  {
    normal: 'Misplacing things and retracing steps to find them',
    warning: 'Putting objects in unusual places and being unable to retrace steps',
    category: 'Misplacing Things',
  },
  {
    normal: 'Making a questionable decision occasionally',
    warning: 'Reduced ability to manage money, personal hygiene, or safety',
    category: 'Judgment',
  },
  {
    normal: 'Tiring of housework and wanting more time away from social obligations',
    warning: 'Withdrawing from social activities, hobbies, or work projects',
    category: 'Social Withdrawal',
  },
  {
    normal: 'Feeling weary of work, family, or social obligations',
    warning: 'Increased confusion, suspicion, depression, fear, or anxiety',
    category: 'Mood & Personality',
  },
]

export default function WarningSigns() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'Signs & Diagnosis', href: '/signs-diagnosis' },
        { label: 'Warning Signs vs. Normal Aging' },
      ]} />

      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">
        Warning Signs vs. Normal Aging
      </h1>
      <p className="text-lg text-warmgray-500 mb-8 leading-relaxed max-w-2xl">
        Not all memory lapses are warning signs. Here's a plain-language guide to help you tell the difference between what's a normal part of aging and what may be worth discussing with a doctor.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-8 p-4 bg-warmgray-50 rounded-xl text-sm">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-sage-600" aria-hidden />
          <span className="text-warmgray-700 font-medium">Normal aging</span>
        </div>
        <div className="flex items-center gap-2">
          <XCircle className="w-4 h-4 text-emergency-500" aria-hidden />
          <span className="text-warmgray-700 font-medium">Potential warning sign</span>
        </div>
      </div>

      <div className="space-y-4 mb-10">
        {comparisons.map((item) => (
          <div key={item.category} className="rounded-2xl border border-warmgray-100 overflow-hidden bg-white">
            <div className="px-4 py-2 bg-warmgray-50 border-b border-warmgray-100">
              <span className="text-xs font-semibold uppercase tracking-wide text-warmgray-500">
                {item.category}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex items-start gap-3 p-4 border-b md:border-b-0 md:border-r border-warmgray-100">
                <CheckCircle className="w-5 h-5 text-sage-500 shrink-0 mt-0.5" aria-hidden />
                <p className="text-sm text-warmgray-700 leading-relaxed">{item.normal}</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-emergency-50/30">
                <XCircle className="w-5 h-5 text-emergency-500 shrink-0 mt-0.5" aria-hidden />
                <p className="text-sm text-warmgray-700 leading-relaxed">{item.warning}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA block */}
      <div className="p-6 rounded-2xl bg-lavender-50 border border-lavender-200">
        <h2 className="text-lg font-bold text-lavender-900 mb-2">
          Noticing some of these warning signs?
        </h2>
        <p className="text-sm text-lavender-700 mb-5 leading-relaxed">
          The next step is talking to a doctor. Download our free toolkit with checklists and questions to bring to your appointment, or call the helpline to speak with someone now.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/signs-diagnosis/toolkit" className="btn-primary text-sm">
            <ArrowRight className="w-4 h-4" aria-hidden />
            Get the free toolkit
          </Link>
          <a href="tel:+18503862778" className="btn-secondary text-sm">
            <Phone className="w-4 h-4" aria-hidden />
            Call (850) 386-2778
          </a>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between text-sm text-warmgray-400">
        <span>Source: Alzheimer's Association · TMH Memory Disorder Clinic · Alzheimer's Project</span>
        <Link href="/signs-diagnosis/10-signs" className="text-lavender-600 hover:text-lavender-700 transition-colors font-medium flex items-center gap-1">
          Next: 10 Early Signs <ArrowRight className="w-4 h-4" aria-hidden />
        </Link>
      </div>
    </article>
  )
}
