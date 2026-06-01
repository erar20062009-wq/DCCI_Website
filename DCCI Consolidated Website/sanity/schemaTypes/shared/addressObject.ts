import { defineType } from 'sanity'

export default defineType({
  name: 'address',
  title: 'Address',
  type: 'object',
  fields: [
    { name: 'street', type: 'string', title: 'Street' },
    { name: 'city', type: 'string', title: 'City', initialValue: 'Tallahassee' },
    { name: 'state', type: 'string', title: 'State', initialValue: 'FL' },
    { name: 'zip', type: 'string', title: 'ZIP Code' },
  ],
})
