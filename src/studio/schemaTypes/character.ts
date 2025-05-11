import {defineField} from 'sanity'

export const character = defineField({
  name: 'character',
  title: 'Character',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'realm',
      title: 'Realm',
      type: 'string',
    },
  ],
})
