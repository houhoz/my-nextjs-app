import Link from 'next/link';
import ProductCard from './components/ProductCart';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1 className="font-mona">
        hello {session && <span>{session.user!.name}</span>}
      </h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
