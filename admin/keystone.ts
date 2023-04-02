import { config } from '@keystone-6/core';

import { lists } from './src/schema';
import { withAuth, session } from './src/auth';

require('dotenv').config();

const {
  BASE_URL: baseUrl
} = process.env

export default config(
  withAuth({
    db: {
      provider: 'mysql',
      url: process.env.DATABASE_URL as string,
      prismaPreviewFeatures: ['referentialIntegrity'],
      additionalPrismaDatasourceProperties: {
        referentialIntegrity: 'prisma',
      },
    },
    ui: {
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    server: {
      port: Number(process.env.PORT),
      cors: {
        origin: process.env.CORS_ORIGIN || '*',
      },
    },
    storage:{
      local_images: {
        kind: 'local',
        type: 'image',
        generateUrl: path => `${baseUrl}/images${path}`,
        serverRoute: {
          path: '/images',
        },
        storagePath: 'public/images'
      }
    },
    lists,
    session,
  })
);
