import { list } from '@keystone-6/core';
import { relationship, timestamp, text, select } from '@keystone-6/core/fields';
import document from '../document';
import roles from '../roles';

const Post = list({
  access: {
    filter: {
      query: roles.canAccessPost,
    },
  },
  fields: {
    creation: timestamp({
      hooks: {
        resolveInput: ({ operation, resolvedData }) => {
          if (operation === 'create') return new Date().toISOString();
          return resolvedData.creation;
        },
      },
      ui: {
        itemView: {
          fieldMode: ({ session }) =>
            roles.admin({ session }) ? 'edit' : 'hidden',
        },
        createView: {
          fieldMode: 'hidden',
        },
      },
    }),
    author: relationship({
      ref: 'User.posts',
      many: false,
      hooks: {
        validateInput: ({ operation, resolvedData, addValidationError }) => {
          if (operation !== 'create') return;
          if (!resolvedData.author)
            addValidationError('Post must have an author!');
        },
      },
    }),
    title: text({ validation: { isRequired: true } }),
    // description: text({
    //   validation: { isRequired: true },
    //   ui: {
    //     displayMode: 'textarea',
    //   },
    // }),
    country: select({
      type: "enum",
      options: [
        { label: "Czechia", value: "czechia" },
        { label: "Lithuania", value: "lithuania" },
        { label: "Romania", value: "romania" },
        { label: "Italy", value: "italy" },
        { label: "Portugal", value: "portugal" },
      ],
      ui: { displayMode: 'select' },
      validation: {
        isRequired: true
      }

    }),
    content: document,
  },
});

export default Post;
