import { sanityClient } from '../client'

export async function getPageBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "page" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      section,
      heroHeading,
      heroSubtext,
      content,
      seo,
      relatedResources[]-> {
        _id,
        name,
        slug,
        category,
        phone,
        url,
        description
      }
    }`,
    { slug },
    { next: { revalidate: 3600 } }
  )
}

export async function getToolkits(category?: string) {
  const filter = category
    ? `*[_type == "toolkit" && category == $category]`
    : `*[_type == "toolkit"]`

  return sanityClient.fetch(
    `${filter} | order(order asc, isFeatured desc) {
      _id,
      title,
      description,
      file { asset-> { url } },
      thumbnail,
      category,
      language,
      isFeatured,
      source
    }`,
    { category },
    { next: { revalidate: 3600 } }
  )
}
