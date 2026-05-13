import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Submission from '@/models/Submission';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();
    
    const submission = await Submission.create(data);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully',
      id: submission._id 
    });
  } catch (error: any) {
    console.error('Submission Error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit application',
      error: error.message 
    }, { status: 500 });
  }
}
