import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { ip, nextUrl } = req;

  if (typeof ip === 'string') {
    nextUrl.searchParams.set('clientIp', ip);
  }

  console.log(req);

  return NextResponse.rewrite(nextUrl);
}
