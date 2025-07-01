'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { FaCreditCard, FaPaypal, FaMoneyBillWave } from 'react-icons/fa';
import { supabase } from '@/lib/supabaseClient';
import { Home, LogOut, Ticket } from 'lucide-react';

export default function HostDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [ticketName, setTicketName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [flyer, setFlyer] = useState<File | null>(null);
  const [flyerPreview, setFlyerPreview] = useState<string | null>(null);
  const [paymentMethods, setPaymentMethods] = useState<string[]>([]);

  const [ticketsSold, setTicketsSold] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [eventsCount, setEventsCount] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/login');
    if (session?.user?.role !== 'Host') router.push('/dashboard/audience');

    setTimeout(() => {
      setEventsCount(3);
      setTicketsSold(128);
      setTotalRevenue(384000);
    }, 1200);
  }, [status, session, router]);

  const handlePaymentChange = (method: string) => {
    setPaymentMethods((prev) =>
      prev.includes(method) ? prev.filter((m) => m !== method) : [...prev, method]
    );
  };

  const handleFlyerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFlyer(file || null);
    setFlyerPreview(file ? URL.createObjectURL(file) : null);
  };

  const isFutureDate = (dateStr: string) => {
    const selected = new Date(dateStr);
    const today = new Date();
    selected.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    return selected >= today;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!ticketName || !price || !eventDate || !description) {
      return setError('All fields are required.');
    }

    if (!isFutureDate(eventDate)) {
      return setError('Please select a valid future date.');
    }

    if (paymentMethods.length === 0) {
      return setError('Select at least one payment option.');
    }

    let flyerUrl = '';

    if (flyer) {
      const fileExt = flyer.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { data } = await supabase.storage
        .from('flyers')
        .upload(fileName, flyer);

      if (data) {
        console.log('Uploaded to:', data.path);
      }


      const { data: publicUrl } = supabase.storage.from('flyers').getPublicUrl(fileName);
      flyerUrl = publicUrl.publicUrl;
    }

    const formData = {
      name: ticketName,
      description,
      date: eventDate,
      price,
      flyerUrl,
      paymentMethods,
    };

    try {
      const res = await fetch('/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('🎉 Ticket posted successfully!');
        router.push('/tickets');
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to post ticket.');
      }
    } catch (err) {
      setError('Something went wrong.');
      console.error(err);
    }
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-orange-50 via-white to-orange-100 text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-sm border-b border-teal-200">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/ticketna.png" alt="Ticketna Logo" width={42} height={42} />
            <span className="text-2xl font-bold text-teal-700">Ticketna</span>
          </Link>

          {session?.user && (
            <div className="flex items-center gap-4">
              <button
                onClick={() => signOut()}
                className="hidden md:inline-flex px-4 py-1.5 text-sm font-medium bg-teal-600 text-white rounded-full hover:bg-red-500 cursor-pointer transition"
              >
                 <LogOut size={20} /> Logout 
              </button>

              <div className="text-right">
                <p className="text-sm font-semibold">{session.user.name || session.user.email}</p>
                <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full font-medium">
                  {session.user.role}
                </span>
              </div>

              <div className="relative group cursor-pointer w-11 h-11 rounded-full overflow-hidden border-2 border-teal-600 shadow">
                <Image
                  src={getProfileImage()}
                  alt="Profile"
                  width={44}
                  height={44}
                  className="object-cover"
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



      {/* Hero */}
      <section className="text-center py-10 px-4">
        <h1 className="text-4xl font-extrabold text-teal-700">🎟️ Host Dashboard</h1>
        <p className="text-lg text-teal-600 mt-2">
          Create tickets, manage events, and grow your brand!
        </p>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 mb-12">
        {[{ label: 'Events', value: eventsCount, color: 'bg-teal-600' },
          { label: 'Tickets Sold', value: ticketsSold, color: 'bg-orange-500' },
          { label: 'Revenue (Ksh)', value: totalRevenue.toLocaleString(), color: 'bg-green-500' },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`w-44 h-44 mx-auto rounded-full flex flex-col items-center justify-center text-white text-center shadow-lg ${stat.color} hover:scale-105 transition-transform duration-300`}
          >
            <span className="uppercase text-sm">{stat.label}</span>
            <span className="text-3xl font-bold mt-2 animate-pulse">{stat.value}</span>
          </div>
        ))}
      </section>

      {/* Ticket Form */}
      <section className="max-w-3xl mx-auto px-6 mb-24">
        <form
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-teal-700">🎫 Create a New Ticket</h2>

          {error && (
            <p className="bg-red-100 text-red-700 p-3 rounded-md font-medium">{error}</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium">Ticket Name</label>
              <input
                type="text"
                value={ticketName}
                onChange={(e) => setTicketName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400"
                placeholder="e.g. VIP"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Price (Ksh)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400"
                placeholder="e.g. 2500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Description</label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe ticket access and benefits..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Event Date (YYYY-MM-DD)</label>
            <input
              type="text"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              placeholder="e.g. 2025-08-15"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Upload Flyer (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFlyerChange}
              className="block w-full text-sm"
            />
            {flyerPreview && (
              <Image
                src={flyerPreview}
                alt="Flyer Preview"
                width={400}
                height={200}
                className="mt-4 rounded-lg shadow-md object-cover"
              />
            )}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Payment Options</h3>
            <div className="flex flex-wrap gap-4">
              {[{ label: 'M-Pesa', icon: <FaMoneyBillWave /> },
                { label: 'PayPal', icon: <FaPaypal /> },
                { label: 'Credit Card', icon: <FaCreditCard /> },
              ].map((gateway) => (
                <label
                  key={gateway.label}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition ${
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

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white py-2 rounded-lg font-semibold text-lg shadow-md hover:from-teal-700 hover:to-teal-600 transition-all"
          >
            🚀 Publish Ticket
          </button>
        </form>
      </section>

      {/* Footer */}
      <div className="hidden md:block mt-auto">
        <Footer />
      </div>

      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around items-center py-2 z-50">
      <Link href="/" className="text-teal-700 flex flex-col items-center text-sm hover:text-teal-900">
        <Home size={20} />
        Home
      </Link>

      <Link href="/tickets" className="text-teal-700 flex flex-col items-center text-sm hover:text-teal-900">
        <Ticket size={20} />
        Tickets
      </Link>

      <button
        onClick={() => signOut()}
        className="text-teal-700 flex flex-col items-center cursor-pointer text-sm hover:text-teal-900"
      >
        <LogOut size={20} />
        Logout
      </button>
    </footer>
    </div>
  );
}
