import { sanityClient } from '../client'

export const orgFields = `
  _id,
  name,
  slug,
  abbreviation,
  phone,
  email,
  website,
  address,
  logo,
  description,
  socialLinks,
  services,
  isPartner,
  partnerOrder
`

export async function getAllOrganizations() {
  return sanityClient.fetch(
    `*[_type == "organization"] | order(partnerOrder asc, name asc) { ${orgFields} }`,
    {},
    { next: { revalidate: 3600 } }
  )
}

export async function getPartnerOrganizations() {
  return sanityClient.fetch(
    `*[_type == "organization" && isPartner == true] | order(partnerOrder asc) { ${orgFields} }`,
    {},
    { next: { revalidate: 3600 } }
  )
}

export async function getOrganizationBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "organization" && slug.current == $slug][0] { ${orgFields} }`,
    { slug },
    { next: { revalidate: 3600 } }
  )
}
