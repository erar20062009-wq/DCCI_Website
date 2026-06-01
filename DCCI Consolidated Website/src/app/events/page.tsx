import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, Clock, ExternalLink, Phone, Users } from 'lucide-react'
import { formatDate, formatTime } from '@/lib/utils/formatDate'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Events & Classes',
  description: 'Upcoming dementia education events, support group schedules, and conferences in the Big Bend region.',
}

export default function EventsPage() {
  const events: any[] = []

  const recurringGroups = [
    { name: 'Mindful Moments (Early-Stage)', schedule: '2nd & 4th Thursday, 10–11:30am', location: "St. Paul's UMC, Tallahassee" },
    { name: 'Evening Support Group', schedule: '2nd & 4th Tuesday, 6–7:30pm', location: 'Immanuel Baptist Church, Tallahassee' },
    { name: 'Luncheon Support Group', schedule: '1st & 3rd Tuesday, 11:30am–1pm', location: "St. Paul's UMC, Tallahassee" },
    { name: 'Morning Support Group', schedule: '2nd & 4th Friday, 10–11:30am', location: 'Westminster Oaks, Tallahassee' },
    { name: 'Jefferson Co. Support Group', schedule: 'Last Monday monthly, 12–1pm', location: 'CowHaus Coffee, Monticello' },
  ]

  return (
    <div className="pt-header">
      <div className="bg-gradient-to-b from-warmgray-50 to-white border-b border-warmgray-100 py-10">
        <div className="container-main">
          <Breadcrumbs crumbs={[{ label: 'Events & Stay Connected' }]} />
          <h1 className="text-3xl font-bold text-warmgray-900 mb-2">Events & Classes</h1>
          <p className="text-warmgray-500 max-w-xl">
            Support groups, education classes, and community events from all partner organizations.
          </p>
        </div>
      </div>

      <div className="container-main py-10">
        {/* Recurring support groups */}
        <section className="mb-12" aria-labelledby="recurring-heading">
          <h2 id="recurring-heading" className="text-2xl font-bold text-warmgray-900 mb-2">
            Recurring Support Groups
          </h2>
          <p className="text-sm text-warmgray-500 mb-6">
            All groups are free, facilitated by Alzheimer's Project, and require no RSVP.
            Call <a href="tel:+18503862778" className="text-warmgray-800 font-medium hover:text-warmgray-900">(850) 386-2778</a> to confirm times.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recurringGroups.map((group) => (
              <div key={group.name} className="card-base p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-warmgray-100 flex items-center justify-center">
                    <Users className="w-4 h-4 text-warmgray-700" aria-hidden />
                  </div>
                  <span className="badge bg-warmgray-100 text-warmgray-800">Recurring</span>
                </div>
                <h3 className="text-sm font-bold text-warmgray-900 mb-1.5">{group.name}</h3>
                <div className="space-y-1 text-xs text-warmgray-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 shrink-0" aria-hidden />
                    {group.schedule}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 shrink-0" aria-hidden />
                    {group.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Annual conference highlight */}
        <section className="mb-12" aria-labelledby="conference-heading">
          <h2 id="conference-heading" className="text-2xl font-bold text-warmgray-900 mb-6">
            Annual Conference
          </h2>
          <div className="p-6 rounded-2xl bg-warmgray-50 border border-warmgray-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-warmgray-200 flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-warmgray-900" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-bold text-warmgray-900 mb-1">
                  Alzheimer's Disease Education & Training Conference
                </h3>
                <p className="text-sm text-warmgray-900 mb-2">
                  <strong>June 20, 2026</strong> · 9am–4pm · FSU College of Medicine, 1115 W. Call St., Tallahassee
                </p>
                <p className="text-sm text-warmgray-800 mb-4">
                  Annual conference for caregivers and healthcare professionals. Hosted by Alzheimer's Project and FSU College of Medicine.
                </p>
                <a
                  href="https://alzheimersproject.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-warmgray-900 hover:text-warmgray-900 transition-colors"
                >
                  Visit Alzheimer's Project for registration
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming events from Sanity */}
        {events.length > 0 && (
          <section aria-labelledby="upcoming-heading">
            <h2 id="upcoming-heading" className="text-2xl font-bold text-warmgray-900 mb-6">
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event._id} className="card-base p-5 flex gap-4">
                  <div className="flex flex-col items-center justify-center w-14 h-14 bg-warmgray-100 rounded-xl shrink-0 text-center">
                    <span className="text-xs font-bold text-warmgray-800 uppercase leading-none">
                      {new Date(event.startDate).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                    <span className="text-xl font-bold text-warmgray-900 leading-tight">
                      {new Date(event.startDate).getDate()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-warmgray-900 mb-1">{event.title}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-warmgray-500">
                      {event.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" aria-hidden />
                          {event.location}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" aria-hidden />
                        {formatTime(event.startDate)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {events.length === 0 && (
          <div className="text-center py-8 text-sm text-warmgray-500">
            Upcoming events will appear here once the Sanity CMS is configured.<br />
            See recurring support groups above, or call <a href="tel:+18503862778" className="text-warmgray-800 font-medium">(850) 386-2778</a>.
          </div>
        )}
      </div>
    </div>
  )
}
