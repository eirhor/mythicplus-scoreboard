import {defineField} from 'sanity'

export const person = defineField({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'alias',
      title: 'Alias',
      type: 'string',
    },
    {
      name: 'discordReference',
      title: 'Discord name',
      type: 'string',
    },
    {
      name: 'characters',
      title: 'Characters',
      type: 'array',
      of: [{type: 'reference', to: {type: 'character'}}],
    },
  ],
})
