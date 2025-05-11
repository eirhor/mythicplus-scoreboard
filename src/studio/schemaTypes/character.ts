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
    {
      name: 'class',
      title: 'Class',
      type: 'reference',
      to: {type: 'characterClass'},
    },
    {
      name: 'spec',
      title: 'Spec',
      type: 'reference',
      to: {type: 'characterSpec'},
    },
  ],
})
