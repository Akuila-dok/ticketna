'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaCartPlus,
  FaCreditCard,
  FaPaypal,
  FaMoneyBillWave,
} from 'react-icons/fa';

const tickets = [
  {
    name: 'Lion',
    emoji: '🦁',
    price: 5000,
    description: 'VIP Front Row Experience',
    color: 'bg-yellow-500',
  },
  {
    name: 'Tiger',
    emoji: '🐯',
    price: 3000,
    description: 'Premium Seating + Perks',
    color: 'bg-orange-500',
  },
  {
    name: 'Buffalo',
    emoji: '🐃',
    price: 1000,
    description: 'General Admission',
    color: 'bg-teal-500',
  },
];

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [cart, setCart] = useState<{ name: string; price: number }[]>([]);
  const [paymentMethods, setPaymentMethods] = useState<string[]>([]);

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/login');
  }, [status]);

  if (status === 'loading') return <p className="text-center mt-10">Loading...</p>;

  const isHost = session?.user?.role === 'Host';

  const handleAddToCart = (ticket: { name: string; price: number }) => {
    setCart((prev) => [...prev, ticket]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePaymentChange = (method: string) => {
    setPaymentMethods((prev) =>
      prev.includes(method)
        ? prev.filter((m) => m !== method)
        : [...prev, method]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-orange-50">
      {/* Navbar */}
      <header className="bg-teal-600 text-white sticky top-0 z-50 w-full">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <Image src="/ticketna.png" alt="Ticketna Logo" width={40} height={40} />
            <span className="text-xl font-bold">Ticketna</span>
          </Link>

          {/* User Info */}
          {session?.user && (
            <div className="flex flex-col items-end text-right">
              <p className="text-sm font-semibold truncate max-w-[160px] sm:max-w-none">
                {session.user.name || session.user.email}
              </p>
              {session.user.name && (
                <p className="text-xs text-gray-100 truncate max-w-[160px] sm:max-w-none">
                  {session.user.email}
                </p>
              )}
              <span className="bg-white text-teal-700 px-3 py-1 rounded-full text-xs font-bold mt-1">
                {session.user.role}
              </span>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-8 px-4">
        <h1 className="text-3xl font-bold text-teal-700 mb-2">
          {isHost ? 'Create Tickets' : `Welcome ${session?.user?.name || '🎉'}!`}
        </h1>
        <p className="text-teal-600 text-lg">
          {isHost ? 'Set up ticket categories and choose payment options' : 'Book your event tickets below'}
        </p>
      </section>

      {/* HOST: Create Tickets & Set Payment */}
      {isHost && (
        <section className="max-w-xl mx-auto px-4 mb-20">
          <form className="bg-white p-6 rounded shadow space-y-4">
            <h2 className="text-xl font-bold text-teal-700">Ticket Settings</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="block mb-1 text-sm font-medium">Ticket Name</span>
                <input
                  type="text"
                  placeholder="e.g. Cheetah"
                  className="w-full px-3 py-2 border rounded"
                />
              </label>
              <label className="block">
                <span className="block mb-1 text-sm font-medium">Price (Ksh)</span>
                <input
                  type="number"
                  placeholder="e.g. 2000"
                  className="w-full px-3 py-2 border rounded"
                />
              </label>
            </div>

            <label className="block">
              <span className="block mb-1 text-sm font-medium">Description</span>
              <textarea className="w-full px-3 py-2 border rounded" rows={3}></textarea>
            </label>

            <div>
              <h3 className="text-sm font-semibold mb-2">Payment Gateways</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'M-Pesa', icon: <FaMoneyBillWave /> },
                  { label: 'PayPal', icon: <FaPaypal /> },
                  { label: 'Credit Card', icon: <FaCreditCard /> },
                ].map((gateway) => (
                  <label
                    key={gateway.label}
                    className={`flex items-center space-x-2 px-3 py-2 rounded border cursor-pointer ${
                      paymentMethods.includes(gateway.label)
                        ? 'bg-teal-100 border-teal-500'
                        : 'bg-white border-gray-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={paymentMethods.includes(gateway.label)}
                      onChange={() => handlePaymentChange(gateway.label)}
                    />
                    <span className="text-teal-700">{gateway.icon}</span>
                    <span className="text-sm">{gateway.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="bg-teal-600 text-white px-5 py-2 rounded hover:bg-teal-700">
              Post Ticket
            </button>
          </form>
        </section>
      )}

      {/* AUDIENT: Book Tickets */}
      {!isHost && (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-24">
          {tickets.map((ticket) => (
            <div
              key={ticket.name}
              className={`flex flex-col items-center justify-center rounded-full w-64 h-64 text-white ${ticket.color} shadow-lg mx-auto transition-transform hover:scale-105`}
            >
              <span className="text-6xl">{ticket.emoji}</span>
              <h2 className="text-2xl font-bold mt-2">{ticket.name}</h2>
              <p className="text-sm mt-1 text-center px-3">{ticket.description}</p>
              <p className="text-xl font-semibold mt-2">Ksh {ticket.price}</p>
              <button
                className="mt-4 px-4 py-2 bg-white text-teal-700 font-bold rounded-full hover:bg-gray-200"
                onClick={() => handleAddToCart({ name: ticket.name, price: ticket.price })}
              >
                Add to Cart 🛒
              </button>
            </div>
          ))}
        </section>
      )}

      {/* Floating Cart for Audient */}
      {!isHost && cart.length > 0 && (
        <div className="fixed bottom-24 right-4 bg-white border border-teal-500 text-teal-700 shadow-lg rounded-full px-5 py-3 flex items-center gap-4 z-50">
          <FaCartPlus size={24} />
          <span>{cart.length} ticket(s) | Total: Ksh {cartTotal}</span>
          <button className="bg-teal-600 text-white px-3 py-1 rounded-full hover:bg-teal-700">
            Checkout
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="hidden md:flex justify-between items-center bg-teal-700 text-white py-4 px-6 mt-auto">
        <p className="text-sm">© {new Date().getFullYear()} Ticketna. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-orange-300">About</Link>
          <Link href="/contact" className="hover:text-orange-300">Contact</Link>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around items-center py-2 z-50">
        <Link href="/" className="text-teal-700 flex flex-col items-center text-xs">
          <span>🏠</span>Home
        </Link>
        <Link href="/dashboard" className="text-teal-700 flex flex-col items-center text-xs">
          <span>🎟️</span>Tickets
        </Link>
        <Link href="/profile" className="text-teal-700 flex flex-col items-center text-xs">
          <span>👤</span>Profile
        </Link>
      </footer>
    </div>
  );
}
