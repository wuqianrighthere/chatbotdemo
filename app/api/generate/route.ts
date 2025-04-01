import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    // 这里是一个简单的回复，后续可以集成真正的AI处理
    const response = `这是对 "${message}" 的回复`;
    
    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'API is working' });
}
