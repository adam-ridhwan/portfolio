import { clientPromise } from '@/mongodb';

import { env } from '@/lib/env';

const { MONGODB_DATABASE, CLICKS_COLLECTION } = env;

export const connectToDatabase = async () => {
  const client = await clientPromise;
  const db = client.db(MONGODB_DATABASE);

  const clickSCollection = db.collection(CLICKS_COLLECTION);

  return { clickSCollection };
};
