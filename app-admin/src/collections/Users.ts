import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 7200, // How many seconds to keep the user logged in
    maxLoginAttempts: 5, // Automatically lock a user out after X amount of failed logins
    lockTime: 600 * 1000, // Time period to allow the max login attempts
  },
  access: {
    create: () => true,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      options: [
        'user',
        'advocate',
        'admin'
      ],
    },
  ],
}

export default Users
