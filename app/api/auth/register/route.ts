import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import bcrypt from 'bcrypt';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const body = Object.fromEntries(formData);
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, {
      status: 400,
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email as string,
    },
  });

  if (user) {
    return NextResponse.json(
      { message: 'User already exists' },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(
    body.password as string,
    10
  );
  const newUser = await prisma.user.create({
    data: {
      email: body.email as string,
      hashedPassword,
    },
  });
  return NextResponse.json({ email: newUser.email });
}
