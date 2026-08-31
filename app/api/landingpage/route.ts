import serverConfig from '@/state/sanity/server.config';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {

   const data = await req.json()

    await serverConfig.create({
      _type: 'landingpage', 
      ...data
    })

    return NextResponse.json({
      success: true
    })


  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({
        error: error?.message,
      });
    }
  }
}
