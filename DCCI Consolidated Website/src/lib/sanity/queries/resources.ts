import { sanityClient } from '../client'

export const resourceFields = `
  _id,
  name,
  slug,
  category,
  counties,
  phone,
  phone2,
  email,
  url,
  address,
  description,
  longDescription,
  languages,
  isEmergency,
  isFeatured,
  hours,
  eligibility,
  cost,
  lastVerified,
  organization-> {
    _id,
    name,
    abbreviation,
    phone,
    website,
    slug
  }
`

export async function getAllResources() {
  return sanityClient.fetch(
    `*[_type == "resource"] | order(order asc, name asc) { ${resourceFields} }`,
    {},
    { next: { revalidate: 3600 } }
  )
}

export async function getResourcesByCategory(category: string) {
  return sanityClient.fetch(
    `*[_type == "resource" && category == $category] | order(name asc) { ${resourceFields} }`,
    { category },
    { next: { revalidate: 3600 } }
  )
}

export async function getResourceBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "resource" && slug.current == $slug][0] { ${resourceFields} }`,
    { slug },
    { next: { revalidate: 3600 } }
  )
}

export async function getFeaturedResources() {
  return sanityClient.fetch(
    `*[_type == "resource" && isFeatured == true] | order(order asc) [0...6] { ${resourceFields} }`,
    {},
    { next: { revalidate: 3600 } }
  )
}

export async function getEmergencyResources() {
  return sanityClient.fetch(
    `*[_type == "resource" && isEmergency == true] | order(order asc) { ${resourceFields} }`,
    {},
    { cache: 'no-store' }
  )
}

export async function searchResources(query: string, category?: string, county?: string) {
  const filters = [`_type == "resource"`]
  if (query) filters.push(`(name match $query || description match $query)`)
  if (category) filters.push(`category == $category`)
  if (county) filters.push(`$county in counties`)

  const groqQuery = `*[${filters.join(' && ')}] | order(name asc) [0...50] { ${resourceFields} }`
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (sanityClient.fetch as any)(groqQuery, { query: query ? `${query}*` : '', category, county })
}
