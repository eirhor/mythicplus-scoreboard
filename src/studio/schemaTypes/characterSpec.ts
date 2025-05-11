import {defineField} from 'sanity'

export const characterSpec = defineField({
  name: 'characterSpec',
  title: 'Character spec',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          {title: 'Tank', value: 'tank'},
          {title: 'Healer', value: 'healer'},
          {title: 'DPS', value: 'dps'},
        ],
      },
    },
  ],
})
