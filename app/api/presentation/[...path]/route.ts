import { NextRequest, NextResponse } from 'next/server';
import csrfValidation from '../../lib/csrfValidation';
import rateLimit from '../../lib/rateLimit';
import serviceRoutes from '../../lib/serviceRoutes';
import forwardedRequests from '../../lib/forwardedRequests';

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      path: string[];
    }>;
  },
) {
  try {
    const { path } = await params;

    await csrfValidation();
    await rateLimit();
    const url = serviceRoutes(path);
    const res = await forwardedRequests(req, url);

    return NextResponse.json({
      success: res?.data,
    });
  } catch (error) {
    return NextResponse.json({
      error: error,
    });
  }
}
