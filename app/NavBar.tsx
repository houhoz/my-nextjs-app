'use client';
import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const NavBar = () => {
  const { status, data: session } = useSession();
  return (
    <div className="flex bg-slate-200 p-3 space-x-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'authenticated' && (
        <p>
          {session.user!.name || session.user?.email}
          <Link href="/api/auth/signout" className="ml-3">
            Sign Out
          </Link>
        </p>
      )}
      {status === 'unauthenticated' && (
        <>
          <Link href="/api/auth/signin" className="ml-3">
            Login
          </Link>
          <Link href="/auth/register" className="ml-3">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default NavBar;
