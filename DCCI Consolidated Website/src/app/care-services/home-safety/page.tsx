import type { Metadata } from 'next'
import { Shield, ExternalLink } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Home Safety & Daily Care',
  description: 'Falls prevention, fire safety, kitchen safety, sleep, and other practical home safety guidance for dementia caregivers.',
}

const categories = [
  {
    title: 'Falls Prevention',
    color: 'amber',
    tips: [
      'Remove loose rugs and cords from walkways',
      'Install grab bars in bathrooms next to toilet and in shower/tub',
      'Ensure adequate lighting in all rooms, especially hallways at night',
      'Use non-slip mats in the bathroom and kitchen',
      'Consider a bed rail or lowering the bed height',
      'Keep pathways clear — no furniture blocking common routes',
      'Footwear should have non-slip soles and fit securely',
    ],
  },
  {
    title: 'Kitchen Safety',
    color: 'teal',
    tips: [
      'Consider automatic stove shut-off devices or stove knob covers',
      'Remove or lock away sharp knives and hazardous cleaning products',
      'Set water heater to 120°F or lower to prevent scalding',
      'Label cabinets with pictures as well as words',
      'Remove or disable microwaves if misuse is a concern',
      'Keep counters clear and simple to reduce confusion',
    ],
  },
  {
    title: 'Fire Safety',
    color: 'emergency',
    tips: [
      'Test smoke detectors monthly and change batteries annually',
      'Install carbon monoxide detectors on every level of the home',
      'Never leave candles, fireplaces, or the stove unattended',
      'Create a simple fire escape plan and practice it',
      'Consider automatic stove shut-offs (e.g., iGuard Stove)',
      'Keep lighters and matches locked away',
      'Keep a fire extinguisher accessible and know how to use it',
    ],
  },
  {
    title: 'Sleep Challenges & Sundowning',
    color: 'lavender',
    tips: [
      'Maintain consistent sleep and wake times every day',
      'Increase physical activity during daylight hours',
      'Reduce caffeine after noon',
      'Dim lights gradually in the evening to ease the transition',
      'Minimize noise and activity in the evening',
      'Try a small healthy snack before bed if they seem hungry at night',
      'Use nightlights in bathrooms and hallways',
    ],
  },
  {
    title: '"Safe Sitting" Technique',
    color: 'healthblue',
    tips: [
      'The "safe sitting" technique is a positioning approach used during personal care (bathing, dressing) to reduce fall risk and caregiver injury',
      'The person sits on a stable surface while the caregiver works at their level, minimizing the need for the person to stand unsupported',
      'Watch the Alzheimer\'s Project video "What is Safe Sitting?" for a full demonstration',
    ],
  },
]

const colorMap: Record<string, { badge: string; dot: string }> = {
  amber: { badge: 'bg-warmgray-100 text-warmgray-800', dot: 'bg-warmgray-600' },
  teal: { badge: 'bg-warmgray-100 text-warmgray-800', dot: 'bg-warmgray-600' },
  emergency: { badge: 'bg-emergency-100 text-emergency-700', dot: 'bg-emergency-500' },
  lavender: { badge: 'bg-warmgray-100 text-warmgray-800', dot: 'bg-warmgray-600' },
  healthblue: { badge: 'bg-warmgray-100 text-warmgray-800', dot: 'bg-warmgray-600' },
}

export default function HomeSafetyPage() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'Find Care & Services', href: '/care-services' },
        { label: 'Home Safety' },
      ]} />

      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Home Safety & Daily Care</h1>
      <p className="text-lg text-warmgray-500 mb-8 leading-relaxed max-w-2xl">
        A safer home environment reduces accidents, reduces caregiver stress, and helps the person with dementia remain independent longer. These tips address the most common hazards.
      </p>

      <div className="space-y-5 mb-10">
        {categories.map((cat) => {
          const colors = colorMap[cat.color]
          return (
            <details key={cat.title} className="group rounded-2xl bg-white border border-warmgray-100 shadow-card overflow-hidden">
              <summary className="flex items-center justify-between gap-3 p-5 cursor-pointer list-none hover:bg-warmgray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${colors.badge}`}>
                    <Shield className="w-4 h-4" aria-hidden />
                  </div>
                  <h2 className="text-base font-bold text-warmgray-900">{cat.title}</h2>
                </div>
                <span className="text-warmgray-400 transition-transform duration-200 group-open:rotate-180" aria-hidden>▾</span>
              </summary>
              <div className="px-5 pb-5 border-t border-warmgray-100 pt-4">
                <ul className="space-y-2" role="list">
                  {cat.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2.5 text-sm text-warmgray-700">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${colors.dot}`} aria-hidden />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          )
        })}
      </div>

      <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200">
        <p className="text-sm font-semibold text-warmgray-900 mb-2">Free home safety videos</p>
        <p className="text-sm text-warmgray-900 mb-3">
          The Alzheimer's Project has a full video library covering Home Safety, Fire Safety, Kitchen Safety, Falls, and Safe Sitting — all free on their website.
        </p>
        <a href="https://alzheimersproject.org" target="_blank" rel="noopener noreferrer"
          className="text-sm font-medium text-warmgray-900 hover:text-warmgray-900 transition-colors flex items-center gap-1">
          Watch the video library <ExternalLink className="w-3.5 h-3.5" aria-hidden />
        </a>
      </div>
    </article>
  )
}
