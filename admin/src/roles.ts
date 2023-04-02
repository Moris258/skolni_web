import type { Session } from './types';

const admin = ({ session }: Session | any) => !!session?.data.admin;

const isUserOrAdmin = ({ session }: Session | any) => {
  if (admin({ session })) return true;

  return {
    id: {
      equals: session?.itemId,
    },
  };
};

const canAccessPost = ({ session }: Session | any) => {
  if (admin({ session })) return true;

  return {
    author: {
      id: {
        equals: session?.itemId,
      },
    },
  };

  // TODO: Maybe try this...
  // return {
  //   author: isUserOrAdmin()
  // };
};

export default { admin, isUserOrAdmin, canAccessPost };
