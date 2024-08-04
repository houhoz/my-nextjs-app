'use client';

import Link from 'next/link';
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/app/lib/auth';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const HeavyComponent = dynamic(
  () => import('@/app/components/HeavyComponent'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  // const session = await getServerSession(authOptions);
  return (
    <main>
      {/* <h1 className="font-mona">
        hello {session && <span>{session.user!.name}</span>}
      </h1> */}
      <Link href="/users">Users</Link>
      <div>
        <button
          className="btn"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? 'Hide' : 'Show'}
        </button>
      </div>

      {isVisible && <HeavyComponent />}
    </main>
  );
}
