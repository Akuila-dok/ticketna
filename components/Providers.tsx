'use client';

import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      {/* ✅ Center-aligned toast */}
      <Toaster
        position="top-center" // You can also try "bottom-center"
        toastOptions={{
          className: 'text-sm text-center',
          duration: 3000, // Optional: sets duration to 3s
        }}
      />
      {children}
    </SessionProvider>
  );
}
