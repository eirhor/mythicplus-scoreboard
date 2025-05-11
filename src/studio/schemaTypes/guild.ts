import {defineField} from 'sanity'

export const guild = defineField({
  name: 'guild',
  title: 'Guild',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{type: 'reference', to: {type: 'person'}}],
    },
  ],
})
