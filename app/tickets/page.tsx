'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaCartPlus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';




type Ticket = {
  id: string;
  name: string;
  description: string;
  date: string;
  price: number;
  flyerUrl?: string;
  paymentMethods: string[];
};

type CartItem = Ticket;


export default function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await fetch('/api/tickets');
        if (!res.ok) throw new Error('Failed to load tickets');
        const data = await res.json();
        setTickets(data);
      } catch (err) {
        const error = err as Error;
        setError('Failed to fetch tickets.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const addToCart = (ticket: Ticket) => {
    setCart((prev) => [...prev, ticket]);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  const payForCart = (method: string) => {
    alert(`Paying Ksh ${cartTotal.toLocaleString()} using ${method}`);
    // Implement real payment logic here
    setCart([]);
    setShowCart(false);
  };

  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-tr from-orange-50 via-white to-orange-100 p-6">
        <h1 className="text-3xl font-bold text-center text-teal-700 mb-8">🎫 Upcoming Events</h1>
        {loading && (
        <div className="flex justify-center mt-8">
            <div className="w-10 h-10 border-[3px] border-teal-500 border-t-transparent rounded-full animate-spin shadow-md" />
        </div>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && tickets.length === 0 && (
          <p className="text-center text-gray-600">No tickets available as of now.</p>
        )}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              {ticket.flyerUrl ? (
                <Image
                  src={ticket.flyerUrl}
                  alt={`${ticket.name} Flyer`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                  No Flyer
                </div>
              )}

              <div className="p-4 space-y-2">
                <h2 className="text-xl font-bold text-teal-700">{ticket.name}</h2>
                <p className="text-gray-600">{ticket.description}</p>
                <p className="text-sm text-gray-500">
                  📅 {new Date(ticket.date).toDateString()}
                </p>
                <p className="text-green-600 font-semibold text-lg">
                  Ksh {ticket.price.toLocaleString()}
                </p>

                <div className="text-xs text-gray-500 mt-2">
                  <p>Accepted Payments:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {ticket.paymentMethods.map((method) => (
                      <span
                        key={method}
                        className="bg-gray-100 text-teal-700 px-2 py-1 rounded-full"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <button
                    onClick={() => addToCart(ticket)}
                    className="bg-teal-100 text-teal-700 px-3 py-1 text-xs rounded-full hover:bg-teal-200"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => setShowCart(true)}
                    className="bg-orange-100 text-orange-700 px-3 py-1 text-xs rounded-full hover:bg-orange-200"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {showCart && (
        <aside className="fixed top-16 right-0 w-full sm:w-96 h-[calc(100vh-4rem)] bg-white border-l z-50 shadow-lg overflow-y-auto">
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="text-xl font-bold text-teal-700">🛒 Your Cart</h2>
            <button
              onClick={() => setShowCart(false)}
              className="text-gray-600 hover:text-red-500 font-bold text-lg"
            >
              ✕
            </button>
          </div>

          <div className="p-4 space-y-4">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500">Cart is empty.</p>
            ) : (
              <>
                {cart.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-teal-700 font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                      <p className="text-green-700 font-bold">Ksh {item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(idx)}
                      className="text-red-500 hover:text-red-700"
                      aria-label="Remove Ticket"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>
                ))}

                <div className="mt-4">
                  <p className="text-lg font-bold text-teal-700">Total: Ksh {cartTotal}</p>
                  <p className="mt-2 text-sm text-gray-600">Choose a payment method:</p>
                  {Array.from(new Set(cart.flatMap((item) => item.paymentMethods))).map((method) => (
                    <button
                      key={method}
                      onClick={() => payForCart(method)}
                      className="w-full mt-2 bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
                    >
                      Pay with {method}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </aside>
      )}

      {cart.length > 0 && !showCart && (
        <button
          onClick={() => setShowCart(true)}
          className="fixed top-16 right-4 sm:top-6 sm:right-6 bg-orange-400 hover:bg-teal-700 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center z-[9999]"
          aria-label="Open Cart"
        >
          <FaCartPlus size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
            {cart.length}
          </span>
        </button>
      )}

      <Footer />
    </div>
  );
}
