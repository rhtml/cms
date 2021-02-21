import checkRole from '../checkRole';

const admins = ({ req: { user } }) => checkRole(['admin'], user);

export default admins;
