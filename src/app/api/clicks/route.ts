import { createHash } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { Clicks, LINKS_ENUM } from '@/types';

import { connectToDatabase } from '@/lib/connectToDatabase';
import { env } from '@/lib/env';

const { IP_ADDRESS_SALT } = env;
const { EMAIL, GITHUB, LINKEDIN, RESUME } = LINKS_ENUM;

const newClicks: Clicks = {
  userId: '',
  [EMAIL]: 0,
  [GITHUB]: 0,
  [LINKEDIN]: 0,
  [RESUME]: 0,
  workExperience: 0,
  pixelCraft: 0,
  pondero: 0,
  flair: 0,
  quizzy: 0,
  geaux: 0,
};

export async function POST(request: NextRequest) {
  try {
    const { clickSCollection } = await connectToDatabase();
    const { link } = await request.json();

    const ipAddress = request.headers.get('x-real-ip') ?? '0.0.0.0';

    const currentUserId = createHash('md5')
      .update(ipAddress + IP_ADDRESS_SALT, 'utf8')
      .digest('hex');

    const user = await clickSCollection.findOne({ userId: currentUserId });

    if (!user) {
      const insertResponse = await clickSCollection.insertOne({
        ...newClicks,
        userId: currentUserId,
        [link]: 1,
      });

      if (!insertResponse.acknowledged) {
        return NextResponse.json(`Could not add new click document`, { status: 400 });
      }

      return NextResponse.json(
        { ok: insertResponse, message: 'Successfully added new click document' },
        { status: 200 }
      );
    }

    const updateResponse = await clickSCollection.updateOne(
      { userId: currentUserId },
      { $inc: { [link]: 1 } }
    );

    if (!updateResponse.acknowledged) {
      return NextResponse.json(`Could not increment ${link}`, { status: 400 });
    }

    return NextResponse.json({ ok: true, message: `Successfully incremented ${link}` }, { status: 200 });
  } catch (e: any) {
    console.error(e.message);
    return NextResponse.json(e.message, { status: 400 });
  }
}
