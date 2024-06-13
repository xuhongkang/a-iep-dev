import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Media from './collections/Media'
import Jobs from './collections/Jobs'

export default buildConfig({
  serverURL: 'https://a-iep.org',
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  routes: {
    api: '/cms/api',
    admin: '/cms/admin',
    graphQL: '/cms/graphql',
    graphQLPlayground: '/cms/graphql-playground',
  },
  editor: slateEditor({}),
  collections: [Users, Media, Jobs],
  csrf: [
    'a-iep.org',
    'app-backend:8000'
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
