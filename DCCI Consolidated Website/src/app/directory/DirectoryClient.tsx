'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, SlidersHorizontal, Phone, X } from 'lucide-react'
import ResourceCard from '@/components/directory/ResourceCard'
import { BIG_BEND_COUNTIES, RESOURCE_CATEGORY_LABELS } from '@/lib/utils/constants'

interface Props {
  initialResources: any[]
}

export default function DirectoryClient({ initialResources }: Props) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [county, setCounty] = useState('')
  const [spanishOnly, setSpanishOnly] = useState(false)

  const filtered = useMemo(() => {
    return initialResources.filter((r) => {
      if (query && !r.name?.toLowerCase().includes(query.toLowerCase()) &&
          !r.description?.toLowerCase().includes(query.toLowerCase())) return false
      if (category && r.category !== category) return false
      if (county && (!r.counties || !r.counties.includes(county))) return false
      if (spanishOnly && (!r.languages || !r.languages.includes('es'))) return false
      return true
    })
  }, [initialResources, query, category, county, spanishOnly])

  const hasFilters = query || category || county || spanishOnly
  const categories = Object.entries(RESOURCE_CATEGORY_LABELS)

  function clearFilters() {
    setQuery(''); setCategory(''); setCounty(''); setSpanishOnly(false)
  }

  return (
    <div className="pt-header">
      <div className="bg-gradient-to-b from-warmgray-50 to-white border-b border-warmgray-100 py-10">
        <div className="container-main">
          <h1 className="text-3xl font-bold text-warmgray-900 mb-2">Resource Directory</h1>
          <p className="text-warmgray-500 mb-6 max-w-xl">
            All dementia caregiving resources in the Big Bend region, searchable by need, county, and language.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="relative sm:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-warmgray-400 pointer-events-none" aria-hidden />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search resources…"
                className="input-base pl-9 text-sm"
                aria-label="Search resources"
              />
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input-base text-sm"
              aria-label="Filter by category"
            >
              <option value="">All categories</option>
              {categories.map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>

            <select
              value={county}
              onChange={(e) => setCounty(e.target.value)}
              className="input-base text-sm"
              aria-label="Filter by county"
            >
              <option value="">All counties</option>
              {BIG_BEND_COUNTIES.map((c) => (
                <option key={c} value={c.toLowerCase()}>{c} County</option>
              ))}
              <option value="statewide">Statewide</option>
              <option value="national">National</option>
            </select>

            <label className="flex items-center gap-2 cursor-pointer col-span-1">
              <input
                type="checkbox"
                checked={spanishOnly}
                onChange={(e) => setSpanishOnly(e.target.checked)}
                className="w-4 h-4 rounded border-warmgray-300 text-warmgray-800 focus:ring-warmgray-700"
              />
              <span className="text-sm text-warmgray-700">Spanish available</span>
            </label>
          </div>
        </div>
      </div>

      <div className="container-main py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-warmgray-500">
            {filtered.length === 0
              ? hasFilters ? 'No resources match your filters' : 'No resources found'
              : `${filtered.length} resource${filtered.length !== 1 ? 's' : ''}${hasFilters ? ' matching your filters' : ''}`
            }
          </p>
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 rounded"
            >
              <X className="w-3.5 h-3.5" aria-hidden />
              Clear filters
            </button>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filtered.map((resource) => (
              <ResourceCard key={resource._id} resource={resource} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-warmgray-200 mx-auto mb-4" aria-hidden />
            <h2 className="text-lg font-semibold text-warmgray-700 mb-2">
              {hasFilters ? 'No results for these filters' : 'Directory not yet populated'}
            </h2>
            <p className="text-sm text-warmgray-500 mb-6 max-w-sm mx-auto">
              {hasFilters
                ? 'Try fewer filters, or call the helpline for personalized resource navigation.'
                : 'Resources will appear here once content is added in Sanity.'
              }
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {hasFilters && <button onClick={clearFilters} className="btn-secondary text-sm">Clear filters</button>}
              <a href="tel:+18503862778" className="btn-primary text-sm">
                <Phone className="w-4 h-4" aria-hidden />
                Call (850) 386-2778
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
