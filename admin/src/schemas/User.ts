import { list } from '@keystone-6/core';
import {
  relationship,
  text,
  password,
  checkbox,
} from '@keystone-6/core/fields';

import roles from '../roles';

// TODO: opravit zobrazování určitých dat...

const User = list({
  access: {
    operation: {
      delete: roles.admin,
      update: roles.admin,
      create: roles.admin,
    },
    filter: {
      query: roles.isUserOrAdmin,
    },
  },
  fields: {
    admin: checkbox(),
    name: text({ validation: { isRequired: true } }),
    username: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    password: password({
      validation: { isRequired: true },
    }),
    posts: relationship({
      ref: 'Post.author',
      many: true,
    }),
    galleries: relationship({
      ref: 'Gallery.author',
      many: true
    })
  },
  ui: {
    listView: {
      defaultFieldMode: ({ session }) =>
        roles.admin({ session }) ? 'read' : 'hidden',
    },
    itemView: {
      defaultFieldMode: ({ session }) =>
        roles.admin({ session }) ? 'edit' : 'hidden',
    },
    hideCreate: ({ session }) => !roles.admin({ session }),
    hideDelete: ({ session }) => !roles.admin({ session }),
    isHidden: ({ session }) => !roles.admin({ session }),
  },
});

export default User;
