const afterLogin = async ({
  doc,
  req: {
    payload,
  },
}) => {
  payload.update({
    collection: 'users',
    id: doc.id,
    data: {
      lastLoggedIn: new Date(),
    },
  });
};

export default afterLogin;
