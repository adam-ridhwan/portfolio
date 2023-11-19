import { clientPromise } from '@/mongodb';

import { env } from '@/lib/env';

const { MONGODB_DATABASE, CLICK_COLLECTION } = env;

export const connectToDatabase = async () => {
  const client = await clientPromise;
  const db = client.db(MONGODB_DATABASE);

  const clickCollection = db.collection(CLICK_COLLECTION);

  return { clickCollection };
};
