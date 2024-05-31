import path from 'path'
import Posts from './collections/Posts';
import Pages from './collections/Pages';
import search from '@payloadcms/plugin-search';

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    Posts, 
    Pages
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  localization: {
    locales: ['en', 'es', 'zh', 'tl'],
    defaultLocale: 'en',
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud(),
    search({
      collections: ['pages', 'posts'],
      defaultPriorities: {
        pages: 10,
        posts: 20,
      },
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
