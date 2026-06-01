import type { Metadata } from 'next'
import { getAllResources } from '@/lib/sanity/queries/resources'
import DirectoryClient from './DirectoryClient'

export const metadata: Metadata = {
  title: 'Resource Directory',
  description: 'Search and filter all dementia caregiving resources in the Big Bend region by category, county, and language.',
}

export default async function DirectoryPage() {
  let resources: any[] = []
  try {
    resources = await getAllResources()
  } catch {
    resources = []
  }

  return <DirectoryClient initialResources={resources} />
}
