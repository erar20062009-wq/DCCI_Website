import type { Metadata } from 'next'
import DirectoryClient from './DirectoryClient'

export const metadata: Metadata = {
  title: 'Resource Directory',
  description: 'Search and filter all dementia caregiving resources in the Big Bend region by category, county, and language.',
}

export default function DirectoryPage() {
  return <DirectoryClient initialResources={[]} />
}
