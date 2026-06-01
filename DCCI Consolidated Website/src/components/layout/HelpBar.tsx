'use client'

import Link from 'next/link'
import { Phone, AlertCircle } from 'lucide-react'
import { HELPLINE_PHONE, ELDER_HELPLINE } from '@/lib/utils/constants'

export default function HelpBar() {
  return (
    <div
      className="bg-healthblue-800 text-white z-50 sticky top-0"
      style={{ height: 'var(--helpbar-height)' }}
      role="banner"
    >
      <div className="container-main h-full flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs font-medium whitespace-nowrap text-healthblue-100">
            <Phone className="w-3 h-3 shrink-0" aria-hidden />
            <span className="hidden sm:inline">Need help?</span>
          </div>

          <a
            href={`tel:+18503862778`}
            className="flex items-center gap-1 text-xs font-semibold text-white hover:text-healthblue-200 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
            aria-label="Call Alzheimer's Project Helpline at (850) 386-2778"
          >
            <span className="hidden sm:inline text-healthblue-200">Helpline:</span>
            {HELPLINE_PHONE}
          </a>

          <span className="text-healthblue-600 hidden sm:inline" aria-hidden>·</span>

          <a
            href={`tel:+18009635337`}
            className="flex items-center gap-1 text-xs font-semibold text-white hover:text-healthblue-200 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
            aria-label="Call Elder Helpline at 1-800-963-5337"
          >
            <span className="hidden sm:inline text-healthblue-200">Elder Helpline:</span>
            {ELDER_HELPLINE}
          </a>

          <span className="text-healthblue-600 hidden md:inline" aria-hidden>·</span>

          <a
            href="tel:911"
            className="hidden md:flex items-center gap-1 text-xs font-semibold text-emergency-300 hover:text-emergency-200 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
            aria-label="Call 911 for emergencies"
          >
            Emergency: 911
          </a>

          <a
            href="tel:988"
            className="hidden md:flex items-center gap-1 text-xs font-semibold text-white hover:text-healthblue-200 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
            aria-label="Call or text 988 for mental health crisis support"
          >
            Crisis: 988
          </a>
        </div>

        <Link
          href="/emergency"
          className="flex items-center gap-1.5 text-xs font-semibold bg-emergency-600 hover:bg-emergency-700 text-white px-3 py-1 rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Emergency resources page"
        >
          <AlertCircle className="w-3 h-3" aria-hidden />
          <span>Emergency</span>
        </Link>
      </div>
    </div>
  )
}
