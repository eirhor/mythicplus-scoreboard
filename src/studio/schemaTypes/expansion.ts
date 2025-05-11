import {defineField} from 'sanity'

export const expansion = defineField({
  name: 'expansion',
  title: 'Expansion',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
  ],
})
