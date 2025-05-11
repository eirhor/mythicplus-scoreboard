import {defineField} from 'sanity'

export const season = defineField({
  name: 'season',
  title: 'Season',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'expansion',
      title: 'Expansion',
      type: 'reference',
      to: {type: 'expansion'},
    },
    {
      name: 'dungeons',
      title: 'Dungeons',
      type: 'array',
      of: [{type: 'reference', to: {type: 'dungeon'}}],
    },
  ],
})
