import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: R => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: R => R.required() }),
    defineField({ name: 'section', title: 'Site Section', type: 'string', options: {
      list: [
        { title: 'Signs & Diagnosis', value: 'signs-diagnosis' },
        { title: 'Caregiver Support', value: 'caregiver-support' },
        { title: 'Care & Services', value: 'care-services' },
        { title: 'Money & Legal', value: 'money-legal' },
        { title: 'Emergency', value: 'emergency' },
        { title: 'Professionals', value: 'professionals' },
        { title: 'About', value: 'about' },
      ],
    }}),
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'caption', type: 'string', title: 'Caption' },
            { name: 'alt', type: 'string', title: 'Alt Text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'relatedResources',
      title: 'Related Resources',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'resource' }] }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Meta Title' },
        { name: 'metaDescription', type: 'text', rows: 2, title: 'Meta Description' },
        { name: 'ogImage', type: 'image', title: 'OG Image' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'section',
    },
  },
})
