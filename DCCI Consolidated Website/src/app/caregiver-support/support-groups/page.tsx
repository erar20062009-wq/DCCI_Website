import type { Metadata } from 'next'
import { MapPin, Clock, Phone, Users } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Local Support Groups',
  description: 'Free dementia caregiver support groups in the Big Bend area. No RSVP required.',
}

const groups = [
  {
    name: 'Mindful Moments (Early-Stage Group)',
    location: "St. Paul's United Methodist Church",
    address: 'Tallahassee, FL',
    schedule: '2nd & 4th Thursday, 10–11:30am',
    notes: 'For caregivers of persons in early-stage dementia',
    type: 'Specialized',
  },
  {
    name: 'Luncheon Support Group',
    location: "St. Paul's UMC – Parlor Room",
    address: 'Tallahassee, FL',
    schedule: '1st & 3rd Tuesday, 11:30am–1pm',
    notes: '',
    type: 'General',
  },
  {
    name: 'Evening Support Group',
    location: 'Immanuel Baptist Church',
    address: 'Tallahassee, FL',
    schedule: '2nd & 4th Tuesday, 6–7:30pm',
    notes: 'Evening scheduling for working caregivers',
    type: 'General',
  },
  {
    name: 'Morning Support Group',
    location: 'Westminster Oaks – Bertrand Health Center',
    address: 'Tallahassee, FL',
    schedule: '2nd & 4th Friday, 10–11:30am',
    notes: '',
    type: 'General',
  },
  {
    name: 'Jefferson County Support Group',
    location: 'CowHaus Coffee Company',
    address: 'Monticello, FL',
    schedule: 'Last Monday of each month, 12–1pm',
    notes: 'Serving Jefferson County and surrounding areas',
    type: 'County',
  },
]

const typeColors: Record<string, string> = {
  Specialized: 'bg-lavender-100 text-lavender-700',
  General: 'bg-teal-100 text-teal-700',
  County: 'bg-healthblue-100 text-healthblue-700',
}

export default function SupportGroupsPage() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'For Caregivers', href: '/caregiver-support' },
        { label: 'Support Groups' },
      ]} />

      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Local Support Groups</h1>
      <p className="text-lg text-warmgray-500 mb-3 leading-relaxed max-w-2xl">
        All groups listed here are <strong>free</strong> and require <strong>no RSVP</strong>. Facilitated by trained professionals through the Alzheimer's Project.
      </p>
      <p className="text-sm text-warmgray-400 mb-8">
        Dates and times subject to change. Call <a href="tel:+18503862778" className="text-lavender-600 font-medium hover:text-lavender-700 transition-colors">(850) 386-2778</a> to confirm or for questions.
      </p>

      <div className="space-y-4 mb-10">
        {groups.map((group) => (
          <div key={group.name} className="p-5 rounded-2xl bg-white border border-warmgray-100 shadow-card">
            <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
              <h2 className="text-base font-bold text-warmgray-900">{group.name}</h2>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${typeColors[group.type]}`}>
                {group.type}
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm text-warmgray-600">
                <MapPin className="w-4 h-4 text-warmgray-400 shrink-0" aria-hidden />
                <span><strong>{group.location}</strong> — {group.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-warmgray-600">
                <Clock className="w-4 h-4 text-warmgray-400 shrink-0" aria-hidden />
                <span>{group.schedule}</span>
              </div>
              {group.notes && (
                <p className="text-sm text-warmgray-500 pl-6">{group.notes}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Online options */}
      <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200 mb-8">
        <div className="flex items-start gap-3">
          <Users className="w-5 h-5 text-warmgray-500 shrink-0 mt-0.5" aria-hidden />
          <div>
            <h2 className="text-base font-semibold text-warmgray-900 mb-1">Online Support Communities</h2>
            <p className="text-sm text-warmgray-600 mb-3">Can't attend in person? These free online communities offer peer support any time.</p>
            <ul className="space-y-1 text-sm">
              <li><a href="https://alzconnected.org" target="_blank" rel="noopener noreferrer" className="text-lavender-600 hover:text-lavender-700 font-medium transition-colors">ALZConnected</a> — Online community for people facing memory-disorder diseases</li>
              <li><a href="https://caregiver.org" target="_blank" rel="noopener noreferrer" className="text-lavender-600 hover:text-lavender-700 font-medium transition-colors">Family Caregiver Alliance</a> — National support and resources</li>
              <li><a href="https://caregiving.com" target="_blank" rel="noopener noreferrer" className="text-lavender-600 hover:text-lavender-700 font-medium transition-colors">Caregiving.com</a> — Multi-faceted online caregiver community</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-lavender-50 border border-lavender-200">
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-lavender-600 shrink-0 mt-0.5" aria-hidden />
          <div>
            <p className="text-sm font-semibold text-lavender-900 mb-1">Questions about support groups?</p>
            <p className="text-sm text-lavender-700">
              Call the Alzheimer's Project at <a href="tel:+18503862778" className="font-semibold underline hover:text-lavender-900">(850) 386-2778</a>, Mon–Fri 9am–5pm.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
