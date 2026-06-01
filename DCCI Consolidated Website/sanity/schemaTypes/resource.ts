import { defineField, defineType } from 'sanity'

export const RESOURCE_CATEGORIES = [
  { title: 'Helpline & First Contact', value: 'helpline' },
  { title: 'Diagnosis & Evaluation', value: 'diagnosis' },
  { title: 'Respite & Adult Day', value: 'respite' },
  { title: 'Support Group', value: 'support-group' },
  { title: 'Caregiver Education', value: 'caregiver-education' },
  { title: 'In-Home Care', value: 'in-home-care' },
  { title: 'Long-Term Care', value: 'long-term-care' },
  { title: 'Financial & Insurance', value: 'financial' },
  { title: 'Legal Planning', value: 'legal' },
  { title: 'Safety & Emergency', value: 'safety-emergency' },
  { title: 'Transportation', value: 'transportation' },
  { title: 'Brain Health & Prevention', value: 'brain-health' },
  { title: 'Research & Trials', value: 'research' },
  { title: 'Professional Training', value: 'professional-training' },
]

export const BIG_BEND_COUNTIES = [
  { title: 'Leon', value: 'leon' },
  { title: 'Jefferson', value: 'jefferson' },
  { title: 'Wakulla', value: 'wakulla' },
  { title: 'Franklin', value: 'franklin' },
  { title: 'Gadsden', value: 'gadsden' },
  { title: 'Gulf', value: 'gulf' },
  { title: 'Madison', value: 'madison' },
  { title: 'Taylor', value: 'taylor' },
  { title: 'Statewide', value: 'statewide' },
  { title: 'National', value: 'national' },
]

export default defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: R => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: R => R.required() }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: RESOURCE_CATEGORIES },
      validation: R => R.required(),
    }),
    defineField({
      name: 'counties',
      title: 'Counties Served',
      type: 'array',
      of: [{ type: 'string' }],
      options: { list: BIG_BEND_COUNTIES },
    }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'phone2', title: 'Secondary Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'url', title: 'Website', type: 'url' }),
    defineField({ name: 'address', title: 'Address', type: 'address' }),
    defineField({ name: 'description', title: 'Short Description', type: 'text', rows: 3, validation: R => R.required() }),
    defineField({
      name: 'longDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'organization',
      title: 'Source Organization',
      type: 'reference',
      to: [{ type: 'organization' }],
    }),
    defineField({
      name: 'languages',
      title: 'Languages Available',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Spanish', value: 'es' },
        ],
      },
    }),
    defineField({ name: 'isFeatured', title: 'Featured on Homepage', type: 'boolean', initialValue: false }),
    defineField({ name: 'isEmergency', title: 'Emergency / Crisis Resource', type: 'boolean', initialValue: false }),
    defineField({ name: 'hours', title: 'Hours of Operation', type: 'string' }),
    defineField({ name: 'eligibility', title: 'Eligibility Requirements', type: 'text', rows: 2 }),
    defineField({ name: 'cost', title: 'Cost / Fees', type: 'string' }),
    defineField({ name: 'lastVerified', title: 'Last Verified Date', type: 'date' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
})
