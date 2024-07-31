import { NextRequest, NextResponse } from 'next/server';

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }
  return NextResponse.json({
    id: params.id,
    name: 'Join',
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const { name } = await request.json();
  if (!name) {
    return NextResponse.json(
      { error: 'Name is required' },
      { status: 400 }
    );
  }
  if (params.id > 10) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }
  return NextResponse.json({
    id: params.id,
    name,
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }
  return NextResponse.json({});
}
