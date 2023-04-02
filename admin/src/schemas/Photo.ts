import { list } from '@keystone-6/core';
import { image, relationship } from '@keystone-6/core/fields';
import document from '../document';

import roles from '../roles';

const Photo = list({
  fields: {
    photo: image({storage: 'local_images'}),
  },
});

export default Photo;
