import { postData } from '@/app/api/infrastructure/repository/BlogPostRepository';
import csrfValidation from '@/app/api/lib/csrfValidation';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    await csrfValidation();
    const result = postData.createComment(data);
    return NextResponse.json(result);
  } catch (error) {
    if(error instanceof Error){
        return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
    }
  }
}

