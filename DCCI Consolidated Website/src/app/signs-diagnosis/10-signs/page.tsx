import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'The 10 Early Signs of Dementia',
  description: 'Plain-language guide to the 10 warning signs of Alzheimer\'s disease and dementia recognized by the Alzheimer\'s Association.',
}

const signs = [
  { num: 1, title: 'Memory loss that disrupts daily life', desc: 'Forgetting recently learned information, important dates or events, asking the same questions over and over, and relying on memory aids or family members for things they used to handle on their own.' },
  { num: 2, title: 'Challenges in planning or solving problems', desc: 'Trouble following a plan or working with numbers, following a familiar recipe, keeping track of monthly bills, or concentrating and taking longer to do things than before.' },
  { num: 3, title: 'Difficulty completing familiar tasks', desc: 'Having trouble driving to a familiar location, managing a budget at work, or remembering the rules of a favorite game.' },
  { num: 4, title: 'Confusion with time or place', desc: "Losing track of dates, seasons and the passage of time. Having trouble understanding something if it's not happening immediately. Forgetting where they are or how they got there." },
  { num: 5, title: 'Trouble understanding visual images and spatial relationships', desc: 'For some people, having vision problems is a sign of Alzheimer\'s. They may have difficulty reading, judging distance and determining color or contrast.' },
  { num: 6, title: 'New problems with words in speaking or writing', desc: 'Having trouble following or joining a conversation. Stopping in the middle of a conversation with no idea how to continue, or repeating themselves. Trouble finding the right word or calling things by the wrong name.' },
  { num: 7, title: 'Misplacing things and losing the ability to retrace steps', desc: 'Putting things in unusual places. Losing things and being unable to go back over their steps to find them again. Sometimes accusing others of stealing.' },
  { num: 8, title: 'Decreased or poor judgment', desc: 'Experiencing changes in judgment or decision-making. May pay less attention to grooming or keeping themselves clean. May give large amounts of money to telemarketers.' },
  { num: 9, title: 'Withdrawal from work or social activities', desc: 'Removing themselves from hobbies, social activities, work projects, or sports. Trouble keeping up with a favorite sports team or completing a favorite hobby.' },
  { num: 10, title: 'Changes in mood and personality', desc: 'Becoming confused, suspicious, depressed, fearful or anxious. Easily upset at home, at work, with friends, or in places where they are out of their comfort zone.' },
]

export default function TenSigns() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'Signs & Diagnosis', href: '/signs-diagnosis' },
        { label: 'The 10 Early Signs' },
      ]} />
      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">The 10 Early Signs of Dementia</h1>
      <p className="text-lg text-warmgray-500 mb-8 leading-relaxed max-w-2xl">
        The Alzheimer's Association identifies 10 warning signs. Having one or more of these signs doesn't mean a person has Alzheimer's or dementia — but it does mean they should see a doctor.
      </p>

      <div className="space-y-4 mb-10">
        {signs.map((sign) => (
          <div key={sign.num} className="flex gap-4 p-5 rounded-2xl bg-white border border-warmgray-100 shadow-card">
            <div className="w-10 h-10 rounded-full bg-lavender-100 text-lavender-700 font-bold text-sm flex items-center justify-center shrink-0">
              {sign.num}
            </div>
            <div>
              <h2 className="text-base font-bold text-warmgray-900 mb-1.5">{sign.title}</h2>
              <p className="text-sm text-warmgray-500 leading-relaxed">{sign.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-lavender-50 border border-lavender-200">
        <p className="text-sm font-semibold text-lavender-900 mb-2">Noticed several of these signs?</p>
        <p className="text-sm text-lavender-700 mb-4">The next step is talking to a doctor. Download the free toolkit or call the helpline.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/signs-diagnosis/toolkit" className="btn-primary text-sm">
            <ArrowRight className="w-4 h-4" aria-hidden /> Get the free toolkit
          </Link>
          <a href="tel:+18503862778" className="btn-secondary text-sm">
            <Phone className="w-4 h-4" aria-hidden /> Call (850) 386-2778
          </a>
        </div>
      </div>
      <p className="text-xs text-warmgray-400 mt-4">Source: Alzheimer's Association (alz.org) · Alzheimer's Project Big Bend · TMH Memory Disorder Clinic</p>
    </article>
  )
}
