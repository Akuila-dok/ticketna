'use client';

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardRedirect() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;

    if (!session?.user) {
      router.replace('/login');
    } else if (session.user.role === 'Host') {
      router.replace('/dashboard/host');
    } else {
      router.replace('/dashboard/audience');
    }
  }, [session, status, router]);

  return <p className="text-center mt-10">Redirecting...</p>;
}
