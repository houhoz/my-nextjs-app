import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import WelcomeTemplate from '@/emails/WelcomeTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { data, error } = await resend.emails.send({
    from: '...',
    to: ['houyazhao@gmail.com'],
    subject: 'Hello world',
    react: WelcomeTemplate({ name: 'LeoHoo' }),
  });

  if (error) {
    return NextResponse.json(error, { status: 400 });
  }

  NextResponse.json(data);
}
