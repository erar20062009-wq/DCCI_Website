import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'toolkit',
  title: 'Toolkit / Download',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: R => R.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'file', title: 'File', type: 'file', options: { accept: '.pdf,.docx,.doc' } }),
    defineField({ name: 'thumbnail', title: 'Thumbnail', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Doctor Visit', value: 'doctor-visit' },
          { title: 'Caregiver Guide', value: 'caregiver-guide' },
          { title: 'Legal & Financial', value: 'legal-financial' },
          { title: 'Safety', value: 'safety' },
          { title: 'Education', value: 'education' },
          { title: 'Community Resource', value: 'community-resource' },
        ],
      },
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Spanish', value: 'es' },
          { title: 'English & Spanish', value: 'en-es' },
        ],
      },
      initialValue: 'en',
    }),
    defineField({ name: 'isFeatured', title: 'Featured Download', type: 'boolean', initialValue: false }),
    defineField({ name: 'source', title: 'Source Organization', type: 'string' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
    },
  },
})
