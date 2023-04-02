import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';

require('dotenv').config();

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'username',
  secretField: 'password',
  sessionData: 'name username admin',

  initFirstItem: {
    fields: ['admin', 'name', 'username', 'password'],
  },
});

const sessionSecret = process.env.SESSION_SECRET as string;
const sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret,
});

export { withAuth, session };
