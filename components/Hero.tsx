"use client";

import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-teal-600 to-teal-950 text-white">
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover. Book. Experience.
          </h1>
          <p className="text-lg text-gray-200">
            Ticketna helps you find and book the best concerts, festivals, and
            live shows in just a few clicks. Whether you &apos;re attending or
            hosting, we &apos;ve got you covered.
          </p>

          <div className="flex space-x-4 mt-6">
            <Link
              href="/tickets"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-sm font-semibold transition"
            >
              Buy Tickets
            </Link>
            <Link
              href="/host"
              className="border border-white text-white hover:bg-white hover:text-teal-950 px-6 py-3 rounded-md text-sm font-semibold transition"
            >
              Host an Event
            </Link>
          </div>
        </div>

        {/* Optional Illustration or Graphic *
        <div className="hidden md:block">
          <img
            src="/ticketna-hero-graphic.png"
            alt="Concert Crowd"
            className="w-[480px] rounded-xl shadow-lg"
          />
        </div>
        */}
      </div>
    </section>
  );
}

export default Hero;
