'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Booking {
  id: string;
  ticket: {
    name: string;
    description: string;
    date: string;
  };
}

export default function BookedTicketsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await fetch('/api/user/bookings');
      const data: Booking[] = await res.json();
      setBookings(data);
      setLoading(false);
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="p-6 min-h-screen">
        <h1 className="text-3xl font-bold text-teal-700 text-center mb-6">🎟️ My Booked Tickets</h1>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <ul className="space-y-4 max-w-4xl mx-auto">
            {bookings.map((b) => (
              <li key={b.id} className="border p-4 rounded shadow">
                <h2 className="text-xl font-bold">{b.ticket.name}</h2>
                <p>{b.ticket.description}</p>
                <p className="text-sm text-gray-600">
                  📅 {new Date(b.ticket.date).toDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
}
