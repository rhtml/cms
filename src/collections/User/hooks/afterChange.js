const afterChange = async ({
  doc,
  req,
  req: {
    payload,
    body = {},
    res,
  }, operation,
}) => {
  if (operation === 'create') {
    const { 
      email, 
      password 
    } = body;

    if (email && password) {
      const { user, token } = await payload.login({
        collection: 'users',
        data: { 
          email, 
          password 
        },
        req,
        res,
      });

      return {
        ...doc,
        token,
        user,
      };
    }
  }

  return doc;
};

export default afterChange;
