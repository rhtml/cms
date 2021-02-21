import { buildConfig } from 'payload/config';
import Categories from './collections/Categories';
import Posts from './collections/Posts';
import Tags from './collections/Tags';
import Users from './collections/User';

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  serverURL: process.env.PAYLOAD_PUBLIC_API_URL,
  cors: [
    process.env.PAYLOAD_PUBLIC_APP_URL,
  ],
  csrf: [
    process.env.PAYLOAD_PUBLIC_APP_URL,
  ],
  rateLimit: {
    window: 15 * 60 * 100,
    max: 500,
    trustProxy: true,
  },
  collections: [
    Categories,
    Posts,
    Tags,
    Users,
  ],
});
