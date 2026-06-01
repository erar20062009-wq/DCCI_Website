import { sanityClient } from '../client'

export const eventFields = `
  _id,
  title,
  slug,
  startDate,
  endDate,
  location,
  address,
  isVirtual,
  virtualLink,
  description,
  isRecurring,
  recurringSchedule,
  registrationUrl,
  isFree,
  targetAudience,
  tags,
  organization-> {
    _id,
    name,
    abbreviation,
    website,
    phone
  }
`

export async function getUpcomingEvents(limit = 20) {
  const now = new Date().toISOString()
  return sanityClient.fetch(
    `*[_type == "event" && (startDate >= $now || isRecurring == true)] | order(startDate asc) [0...$limit] { ${eventFields} }`,
    { now, limit },
    { next: { revalidate: 3600 } }
  )
}

export async function getAllEvents() {
  return sanityClient.fetch(
    `*[_type == "event"] | order(startDate asc) { ${eventFields} }`,
    {},
    { next: { revalidate: 3600 } }
  )
}

export async function getEventBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "event" && slug.current == $slug][0] { ${eventFields} }`,
    { slug },
    { next: { revalidate: 3600 } }
  )
}
