import checkRole from '../checkRole';

const adminsAndUser = ({ req: { user } }) => {
  if (checkRole(['admin'], user)) {
    return true;
  }

  if (user) {
    return {
      email: user.email,
    };
  }

  return false;
};

export default adminsAndUser;
