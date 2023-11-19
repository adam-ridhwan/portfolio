import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // console.log(request);
  const data = {
    ok: true,
    ip: request.headers.get('x-real-ip') ?? '127.0.0.1',
    message: 'Hello from the API',
  };
  const ipAddress =
    request.headers['x-forwarded-for'] ||
    // Fallback for localhost or non Vercel deployments
    '0.0.0.0';
  return new NextResponse(JSON.stringify(ipAddress, null, 2));
}
