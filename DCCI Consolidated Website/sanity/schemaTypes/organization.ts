import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'organization',
  title: 'Organization',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: R => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: R => R.required() }),
    defineField({ name: 'abbreviation', title: 'Abbreviation', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'website', title: 'Website', type: 'url' }),
    defineField({ name: 'address', title: 'Address', type: 'address' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url', title: 'Facebook' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'twitter', type: 'url', title: 'Twitter / X' },
        { name: 'youtube', type: 'url', title: 'YouTube' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn' },
      ],
    }),
    defineField({
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'isPartner', title: 'Featured Partner', type: 'boolean', initialValue: true }),
    defineField({ name: 'partnerOrder', title: 'Partner Display Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'abbreviation' },
  },
})
