import NextAuth from 'next-auth';
import { authOptions } from '@/app/lib/auth';

const handler = NextAuth(authOptions);

// 修改版本
// https://authjs.dev/getting-started/adapters/prisma?_gl=1*1fj34sn*_gcl_au*MjA4NDgxNzg0My4xNzIyNjA5NTE4LjE2NDA3NjAyNTguMTcyMjYxNDIwMS4xNzIyNjE0MjA0

export { handler as GET, handler as POST };
