import {defineField} from 'sanity'

export const characterClass = defineField({
  name: 'characterClass',
  title: 'Character class',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'specs',
      title: 'Specs',
      type: 'array',
      of: [{type: 'reference', to: {type: 'characterSpec'}}],
    },
  ],
})
