import { list } from '@keystone-6/core';
import document from '../document';

import roles from '../roles';

const Info = list({
  access: {
    operation: {
      create: roles.admin,
      update: roles.admin,
      delete: () => false,
    },
  },
  fields: {
    content: document,
  },
  hooks: {
    validateInput: async ({ operation, context, addValidationError }) => {
      if (operation !== 'create') return;
      if ((await context.db.Info.count()) > 0)
        addValidationError(
          'Cannot create more entries! Please edit the existing one.'
        );
    },
  },
  ui: {
    isHidden: ({ session }) => !roles.admin({ session }),
    hideDelete: true,
    hideCreate: async ({ context }) => {
      return (await context.db.Info.count()) > 0;
    },
  },
});

export default Info;
