import type { Metadata } from 'next'
import { ExternalLink, Play } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Caregiver Video Library',
  description: 'Free on-demand how-to videos covering common dementia caregiving challenges including behaviors, safety, communication, and more.',
}

const apVideos = [
  'Agitation & Aggression',
  "Let's Talk Action Plans",
  'What is Safe Sitting?',
  'Wandering',
  'Strategies for Family Dynamics',
  'Kitchen Safety',
  'Fire Safety',
  'Home Safety',
  'Challenges with Sleep',
  'Noise & Distractions',
  'Financial & Legal Conversations',
  'Falls',
  'Dressing',
]

const uclaSections = [
  { title: 'Refusing Care', desc: 'What to do when a loved one refuses bathing, medications, or meals' },
  { title: 'Repeat Questions & Statements', desc: 'Techniques for responding calmly without frustration' },
  { title: 'Wandering Prevention', desc: 'Environmental and behavioral strategies to reduce wandering risk' },
  { title: 'Aggression & Agitation', desc: 'De-escalation approaches and identifying triggers' },
  { title: 'Nighttime Disturbances', desc: 'Sleep hygiene and overnight care strategies' },
]

export default function VideosPage() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'For Caregivers', href: '/caregiver-support' },
        { label: 'Video Library' },
      ]} />

      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Caregiver Video Library</h1>
      <p className="text-lg text-warmgray-500 mb-8 leading-relaxed max-w-2xl">
        Free on-demand videos covering the most common caregiving challenges. Watch at your own pace, as many times as you need.
      </p>

      {/* Alzheimer's Project library */}
      <section className="mb-10" aria-labelledby="ap-videos-heading">
        <div className="flex items-center justify-between mb-4 gap-3">
          <h2 id="ap-videos-heading" className="text-xl font-bold text-warmgray-900">
            Alzheimer's Project Video Library
          </h2>
          <a href="https://alzheimersproject.org" target="_blank" rel="noopener noreferrer"
            className="text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors flex items-center gap-1 shrink-0">
            Visit site <ExternalLink className="w-3.5 h-3.5" aria-hidden />
          </a>
        </div>
        <p className="text-sm text-warmgray-500 mb-4">
          Practical how-to videos on the most common caregiving challenges, produced locally. Also includes "Sandy's Story" (Dr. Sanjay Gupta's short film on Alzheimer's and end-of-life wishes) and past conference recordings.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {apVideos.map((title) => (
            <div key={title}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white border border-warmgray-100 shadow-card">
              <div className="w-7 h-7 rounded-lg bg-warmgray-100 flex items-center justify-center shrink-0">
                <Play className="w-3.5 h-3.5 text-warmgray-800 fill-warmgray-800" aria-hidden />
              </div>
              <span className="text-sm font-medium text-warmgray-800">{title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* UCLA library */}
      <section className="mb-10" aria-labelledby="ucla-videos-heading">
        <div className="flex items-center justify-between mb-4 gap-3">
          <h2 id="ucla-videos-heading" className="text-xl font-bold text-warmgray-900">
            UCLA Alzheimer's & Dementia Care — Caregiver Videos
          </h2>
          <span className="badge bg-warmgray-100 text-warmgray-800 shrink-0">En Español</span>
        </div>
        <p className="text-sm text-warmgray-500 mb-4">
          Free training videos on challenging behaviors from UCLA's program. <strong>Available in both English and Spanish.</strong> Linked through FSU REACH.
        </p>
        <div className="space-y-3">
          {uclaSections.map((item) => (
            <div key={item.title} className="flex gap-3 p-4 rounded-xl bg-white border border-warmgray-100 shadow-card">
              <div className="w-8 h-8 rounded-lg bg-warmgray-100 flex items-center justify-center shrink-0">
                <Play className="w-4 h-4 text-warmgray-700 fill-warmgray-700" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-semibold text-warmgray-900">{item.title}</p>
                <p className="text-xs text-warmgray-500 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <a href="https://reach.med.fsu.edu" target="_blank" rel="noopener noreferrer"
            className="text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors flex items-center gap-1">
            Access UCLA videos through FSU REACH <ExternalLink className="w-3.5 h-3.5" aria-hidden />
          </a>
        </div>
      </section>

      {/* FSU REACH crisis videos */}
      <section className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200">
        <h2 className="text-base font-bold text-warmgray-900 mb-2">Crisis Intervention Videos</h2>
        <p className="text-sm text-warmgray-600 mb-3">
          FSU REACH hosts short videos on what to do in dementia-related crisis situations — including emergent behavioral episodes and caregiver safety.
        </p>
        <a href="https://reach.med.fsu.edu" target="_blank" rel="noopener noreferrer"
          className="text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors flex items-center gap-1">
          View FSU REACH crisis resources <ExternalLink className="w-3.5 h-3.5" aria-hidden />
        </a>
      </section>
    </article>
  )
}
