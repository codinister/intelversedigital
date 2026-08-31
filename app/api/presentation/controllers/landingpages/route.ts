import { postData } from '@/app/api/infrastructure/repository/BlogPostRepository';
import csrfValidation from '@/app/api/lib/csrfValidation';
import redisCache from '@/app/api/lib/redisCache';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const fn = () => postData.getLandingPage();
    await csrfValidation();
    const data = await redisCache('landingpageids', fn);
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
