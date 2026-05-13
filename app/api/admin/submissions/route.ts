import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import dbConnect from '@/lib/db';
import Submission from '@/models/Submission';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'aadhi-vithai-sacred-secret-key-2026'
);

export async function GET() {
  try {
    const token = (await cookies()).get('admin_token')?.value;

    if (!token) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    try {
      await jwtVerify(token, JWT_SECRET);
    } catch (e) {
      return NextResponse.json({ success: false, message: 'Invalid token' }, { status: 401 });
    }

    await dbConnect();
    const submissions = await Submission.find({}).sort({ submittedAt: -1 });

    return NextResponse.json({ success: true, submissions });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: 'Failed to fetch submissions' }, { status: 500 });
  }
}
