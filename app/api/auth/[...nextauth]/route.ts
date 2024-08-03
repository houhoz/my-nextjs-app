import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/prisma/client';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};

const handler = NextAuth(authOptions);

// 修改版本
// https://authjs.dev/getting-started/adapters/prisma?_gl=1*1fj34sn*_gcl_au*MjA4NDgxNzg0My4xNzIyNjA5NTE4LjE2NDA3NjAyNTguMTcyMjYxNDIwMS4xNzIyNjE0MjA0

export { handler as GET, handler as POST };
