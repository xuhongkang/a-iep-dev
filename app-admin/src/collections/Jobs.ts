import { CollectionConfig } from 'payload/types'

const Jobs: CollectionConfig = {
  slug: 'jobs',
  admin: {
    useAsTitle: 'uploadedBy',
  },
  timestamps: true,
  fields: [
    {
      name: 'uploadedBy',
      type: 'relationship',
      relationTo: 'users', // Assuming your users collection is named 'users'
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'targetLocale',
      type: 'radio',
      options: [
        {
          label: 'English',
          value: 'en',
        },
        {
          label: 'Spanish',
          value: 'es',
        },
        {
          label: 'Tagalog',
          value: 'tl',
        },
        {
          label: 'Chinese',
          value: 'zh',
        },
      ],
      required: true,
    },
    {
      name: 'files',
      type: 'array',
      fields: [
        {
          type: 'upload',
          name: 'file',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ]
}

export default Jobs
