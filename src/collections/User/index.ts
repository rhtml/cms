import roles from './roles';
import { CollectionConfig } from 'payload/types';
import adminsAndUser from './access/adminsAndUser';
import admins from './access/admins';
import anyone from './access/anyone';
import afterChange from './hooks/afterChange';
import afterLogin from './hooks/afterLogin';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: anyone,
    read: adminsAndUser,
    update: adminsAndUser,
    delete: admins,
    admin: admins,
  },
  hooks: {
    afterChange: [afterChange],
    afterLogin: [afterLogin],
  },
  fields: [
    {
      name: 'lastLoggedIn',
      label: 'Last Logged In',
      type: 'date',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      saveToJWT: true,
    },
    {
      name: 'roles',
      label: 'Roles',
      type: 'select',
      options: roles,
      required: true,
      hasMany: true,
      defaultValue: 'user',
    },
  ],
};

export default Users;