import { CollectionConfig } from 'payload/types';

const Jobs: CollectionConfig = {
  slug: 'jobs',
  admin: {
    useAsTitle: 'uploadedBy',
  },
  timestamps: true,
  access: {
    create: ({ req: { user } }) => {
      // Allow creation only if a user is authenticated
      return !!user;
    },
    update: ({ req: { user } }) => {
      // Allow update only if a user is authenticated and they own the job
      return user ? { uploadedBy: user.id } : false;
    },
  },
  fields: [
    {
      name: 'uploadedBy',
      type: 'relationship',
      relationTo: 'users', // Assuming your users collection is named 'users'
      required: true,
      admin: {
        position: 'sidebar',
      },
      access: {
        // Prevent users from modifying this field
        update: () => false,
      },
    },
    {
      name: 'targetLocale',
      type: 'radio',
      options: [
        { label: 'English', value: 'en' },
        { label: 'Spanish', value: 'es' },
        { label: 'Tagalog', value: 'tl' },
        { label: 'Chinese', value: 'zh' },
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
  ],
  hooks: {
    beforeChange: [
      ({ data, req: { user } }) => {
        // Set the uploadedBy field to the authenticated user's ID
        if (!data.uploadedBy) {
          data.uploadedBy = user.id;
        }
        return data;
      },
    ],
  },
};

export default Jobs;
