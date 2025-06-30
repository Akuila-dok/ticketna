import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers'; // 👈 Import your wrapper

const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  variable: '--font-ubuntu',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ticketna',
  description: 'Event planner platform that helps you manage your concert effortlessly',
  icons: {
    icon: '/ticketna.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} antialiased`}>
        <Providers>{children}</Providers> {/* ✅ Wrap children with SessionProvider */}
      </body>
    </html>
  );
}
