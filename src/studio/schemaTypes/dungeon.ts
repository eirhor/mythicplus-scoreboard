import {defineField} from 'sanity'

export const dungeon = defineField({
  name: 'dungeon',
  title: 'Dungeon',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
  ],
})
