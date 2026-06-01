import Link from 'next/link'
import { Phone, Globe, MapPin, Clock, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { RESOURCE_CATEGORY_LABELS } from '@/lib/utils/constants'

interface Resource {
  _id: string
  name: string
  slug: { current: string }
  category: string
  counties?: string[]
  phone?: string
  url?: string
  description: string
  languages?: string[]
  hours?: string
  organization?: { name: string; abbreviation?: string }
}

const categoryColors: Record<string, string> = {
  'helpline': 'bg-warmgray-100 text-warmgray-800',
  'diagnosis': 'bg-warmgray-100 text-warmgray-800',
  'respite': 'bg-warmgray-100 text-warmgray-800',
  'support-group': 'bg-warmgray-100 text-warmgray-800',
  'caregiver-education': 'bg-warmgray-100 text-warmgray-800',
  'in-home-care': 'bg-warmgray-100 text-warmgray-800',
  'long-term-care': 'bg-warmgray-100 text-warmgray-800',
  'financial': 'bg-warmgray-100 text-warmgray-800',
  'legal': 'bg-warmgray-100 text-warmgray-800',
  'safety-emergency': 'bg-emergency-100 text-emergency-700',
  'transportation': 'bg-warmgray-100 text-warmgray-800',
  'brain-health': 'bg-warmgray-100 text-warmgray-800',
  'research': 'bg-warmgray-100 text-warmgray-800',
  'professional-training': 'bg-warmgray-100 text-warmgray-800',
}

export default function ResourceCard({ resource }: { resource: Resource }) {
  const categoryLabel = RESOURCE_CATEGORY_LABELS[resource.category] || resource.category
  const badgeColor = categoryColors[resource.category] || 'bg-warmgray-100 text-warmgray-600'

  return (
    <div className="card-interactive group p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-warmgray-900 leading-snug group-hover:text-warmgray-900 transition-colors">
          {resource.name}
        </h3>
        <span className={cn('badge shrink-0 mt-0.5', badgeColor)}>
          {categoryLabel}
        </span>
      </div>

      <p className="text-sm text-warmgray-500 leading-relaxed flex-1">
        {resource.description}
      </p>

      {/* Counties */}
      {resource.counties && resource.counties.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {resource.counties.slice(0, 4).map((county) => (
            <span key={county} className="badge bg-warmgray-100 text-warmgray-600 capitalize">
              <MapPin className="w-2.5 h-2.5" aria-hidden />
              {county}
            </span>
          ))}
          {resource.counties.length > 4 && (
            <span className="badge bg-warmgray-100 text-warmgray-500">
              +{resource.counties.length - 4} more
            </span>
          )}
        </div>
      )}

      {/* Languages */}
      {resource.languages && resource.languages.includes('es') && (
        <div className="flex items-center gap-1.5">
          <span className="badge bg-warmgray-50 text-warmgray-800 border border-warmgray-200 text-xs">
            🌐 Español disponible
          </span>
        </div>
      )}

      {/* Contact row */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-2 border-t border-warmgray-100">
        {resource.phone && (
          <a
            href={`tel:${resource.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 rounded"
            aria-label={`Call ${resource.name} at ${resource.phone}`}
          >
            <Phone className="w-3.5 h-3.5" aria-hidden />
            {resource.phone}
          </a>
        )}
        {resource.url && (
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 rounded"
            aria-label={`Visit ${resource.name} website (opens in new tab)`}
          >
            <Globe className="w-3.5 h-3.5" aria-hidden />
            Website
          </a>
        )}
        {resource.hours && (
          <span className="flex items-center gap-1.5 text-xs text-warmgray-400">
            <Clock className="w-3 h-3" aria-hidden />
            {resource.hours}
          </span>
        )}
      </div>

      {resource.organization && (
        <p className="text-xs text-warmgray-400">
          via {resource.organization.abbreviation || resource.organization.name}
        </p>
      )}
    </div>
  )
}
