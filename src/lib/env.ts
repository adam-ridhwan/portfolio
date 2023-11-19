import { cleanEnv, str } from 'envalid';

export const env = cleanEnv(process.env, {
  NEXT_PUBLIC_NODE_ENV: str(),
  MONGODB_URI: str(),
  MONGODB_DATABASE: str(),
  CLICKS_COLLECTION: str(),
  IP_ADDRESS_SALT: str(),
});
