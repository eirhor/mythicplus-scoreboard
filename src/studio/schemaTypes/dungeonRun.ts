import {defineField} from 'sanity'

export const dungeonRun = defineField({
  name: 'dungeonRun',
  title: 'Dungeon run',
  type: 'document',
  fields: [
    {
      name: 'season',
      title: 'Season',
      type: 'reference',
      to: {type: 'season'},
    },
    {
      name: 'dungeon',
      title: 'Dungeon',
      type: 'reference',
      to: {type: 'dungeon'},
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'duration',
      title: 'Duration',
      description: 'Duration in seconds',
      type: 'number',
    },
    {
      name: 'timed',
      title: 'Timed',
      type: 'boolean',
    },
    {
      name: 'level',
      title: 'Level',
      type: 'number',
    },
    {
      name: 'characters',
      title: 'Characters',
      type: 'array',
      of: [{type: 'reference', to: {type: 'character'}}],
    },
  ],
})
