import { CollectionConfig } from 'payload/types';

const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'key',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'json',
      required: true,
    },
  ],
};

export default Pages;
