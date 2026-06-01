import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: R => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: R => R.required() }),
    defineField({ name: 'startDate', title: 'Start Date & Time', type: 'datetime', validation: R => R.required() }),
    defineField({ name: 'endDate', title: 'End Date & Time', type: 'datetime' }),
    defineField({ name: 'location', title: 'Location Name', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'address' }),
    defineField({ name: 'isVirtual', title: 'Virtual Event', type: 'boolean', initialValue: false }),
    defineField({ name: 'virtualLink', title: 'Virtual Meeting Link', type: 'url' }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'organization',
      title: 'Hosting Organization',
      type: 'reference',
      to: [{ type: 'organization' }],
    }),
    defineField({ name: 'isRecurring', title: 'Recurring Event', type: 'boolean', initialValue: false }),
    defineField({
      name: 'recurringSchedule',
      title: 'Recurring Schedule',
      type: 'string',
      description: 'E.g. "Every 2nd & 4th Thursday, 10–11:30am"',
    }),
    defineField({ name: 'registrationUrl', title: 'Registration URL', type: 'url' }),
    defineField({ name: 'isFree', title: 'Free Event', type: 'boolean', initialValue: true }),
    defineField({ name: 'targetAudience', title: 'Target Audience', type: 'string' }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Support Group', value: 'support-group' },
          { title: 'Education', value: 'education' },
          { title: 'Conference', value: 'conference' },
          { title: 'Training', value: 'training' },
          { title: 'Community', value: 'community' },
          { title: 'Caregivers', value: 'caregivers' },
          { title: 'Professionals', value: 'professionals' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'startDate',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'No date',
      }
    },
  },
})
