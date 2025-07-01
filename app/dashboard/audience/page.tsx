'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { FaCartPlus, FaTrash } from 'react-icons/fa';

type Ticket = {
  id: string;
  name: string;
  description: string;
  date: string;
  price: number;
  flyerUrl?: string;
  paymentMethods: string[];
};

export default function AudienceDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [cart, setCart] = useState<Ticket[]>([]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/login');
    if (session?.user?.role === 'Host') router.push('/dashboard/host');
  }, [session, status]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await fetch('/api/tickets');
        if (!res.ok) throw new Error('Failed to fetch tickets');
        const data = await res.json();
        setTickets(data);
      } catch (err) {
        console.error(err);
        setError('Could not load tickets');
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const handleAddToCart = (ticket: Ticket) => {
    setCart((prev) => [...prev, ticket]);
  };

  const handleRemoveFromCart = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    alert(`✅ Payment of Ksh ${cartTotal} made using ${paymentMethod}`);
    setCart([]);
    setPaymentMethod('');
    setShowCart(false);
  };

  const handleProfileImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !session?.user?.email) return;

    const reader = new FileReader();
    reader.onload = () => {
      const image = reader.result as string;
      localStorage.setItem(`profile-${session.user.email}`, image);
      location.reload();
    };
    reader.readAsDataURL(file);
  };

  const getProfileImage = (): string => {
    if (typeof window !== 'undefined' && session?.user?.email) {
      const stored = localStorage.getItem(`profile-${session.user.email}`);
      return stored || session.user.image || '/default-avatar.png';
    }
    return '/default-avatar.png';
  };

  if (status === 'loading') return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">
      {/* Header */}
      <header className="bg-teal-600 text-white sticky top-0 z-50 w-full shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/ticketna.png" alt="Ticketna Logo" width={40} height={40} />
            <span className="text-xl font-bold">Ticketna</span>
          </Link>

          {session?.user && (
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-semibold">{session.user.name}</p>
                <p className="text-xs">{session.user.email}</p>
                <span className="bg-white text-teal-700 px-3 py-1 rounded-full text-xs font-bold mt-1 inline-block">
                  {session.user.role}
                </span>
              </div>

              <div className="relative group cursor-pointer">
                <Image
                  src={getProfileImage()}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full border object-cover"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfileImageChange}
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  title="Upload Profile"
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Welcome */}
      <section className="text-center py-8 px-4">
        <h1 className="text-4xl font-bold text-teal-700 mb-2 tracking-tight">
          Welcome {session?.user?.name || '🎉'}!
        </h1>
        <p className="text-teal-600 text-lg">Explore & Book Your Next Event 🎟️</p>
      </section>

      {/* Ticket Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        {loading && <p className="text-center col-span-full">Loading tickets...</p>}
        {error && <p className="text-center text-red-500 col-span-full">{error}</p>}
        {!loading && !error && tickets.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">No tickets available.</p>
        )}

        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col"
          >
            {ticket.flyerUrl ? (
              <Image
                src={ticket.flyerUrl}
                alt={`${ticket.name} flyer`}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                No Flyer
              </div>
            )}

            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-teal-700 mb-1">{ticket.name}</h2>
              <p className="text-sm text-gray-600 mb-2 line-clamp-3">{ticket.description}</p>
              <p className="text-sm text-gray-500 mb-1">
                📅 <strong>{new Date(ticket.date).toLocaleDateString()}</strong>
              </p>
              <p className="text-green-700 font-bold text-lg mb-4">
                Ksh {ticket.price.toLocaleString()}
              </p>

              <button
                onClick={() => handleAddToCart(ticket)}
                className="mt-auto w-full bg-gradient-to-r from-teal-500 to-teal-700 text-white py-2 px-4 rounded-xl hover:from-teal-600 hover:to-teal-800 transition-colors duration-300 font-semibold flex items-center justify-center gap-2"
              >
                <FaCartPlus /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Cart Button */}
      {cart.length > 0 && (
        <div className="fixed bottom-24 right-4 sm:right-6 bg-white border border-teal-500 text-teal-700 shadow-xl rounded-2xl px-6 py-3 flex items-center gap-4 z-50">
          <FaCartPlus size={24} />
          <span>{cart.length} ticket(s) | Total: Ksh {cartTotal}</span>
          <button
            onClick={() => setShowCart(true)}
            className="bg-teal-600 text-white px-3 py-1 rounded-full hover:bg-teal-700"
          >
            Open Cart
          </button>
        </div>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-teal-700">Your Cart</h2>

            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center mb-3">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">Ksh {item.price}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            ))}

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">Select payment method</option>
                {[...new Set(cart.flatMap((item) => item.paymentMethods))].map((method, idx) => (
                  <option key={idx} value={method}>{method}</option>
                ))}
              </select>
            </div>

            <div className="flex justify-between items-center mt-6">
              <p className="font-bold">Total: Ksh {cartTotal}</p>
              <button
                onClick={handleCheckout}
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
              >
                Pay Now
              </button>
            </div>

            <button
              onClick={() => setShowCart(false)}
              className="mt-4 text-sm text-gray-600 hover:underline block text-center w-full"
            >
              Close Cart
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="hidden md:block mt-auto">
        <Footer />
      </div>

      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around items-center py-2 z-50">
        <Link href="/" className="text-teal-700 flex flex-col items-center text-sm hover:text-teal-900">
          <span>🏠</span>Home
        </Link>
        <Link href="/tickets" className="text-teal-700 flex flex-col items-center text-sm hover:text-teal-900">
          <span>🎫</span>Tickets
        </Link>
        <button
          onClick={() => signOut()}
          className="text-teal-700 flex flex-col items-center cursor-pointer text-sm hover:text-teal-900"
        >
          <span>🚪</span>Logout
        </button>
      </footer>
    </div>
  );
}
