"use client";

import React from "react";
import { useRouter } from "next/navigation";
import SubscribeCard from "./Subscribe";

const steps = [
  {
    title: "Create Your Event",
    description: "Provide event details, date, location, and upload a banner.",
  },
  {
    title: "Customize Your Ticketing",
    description: "Set ticket types, prices, and availability rules easily.",
  },
  {
    title: "Publish and Share",
    description: "Launch your event and start sharing it across platforms.",
  },
];

const bookingSteps = [
  {
    title: "Browse Events",
    description: "Explore upcoming events across music, culture, and more.",
  },
  {
    title: "Choose Your Spot",
    description: "Select the ticket type and number of seats you want.",
  },
  {
    title: "Secure Checkout",
    description: "Pay securely and receive tickets instantly via email or SMS.",
  },
];

const StepItem = ({
  step,
  index,
}: {
  step: { title: string; description: string };
  index: number;
}) => (
  <div className="flex flex-col items-center text-center max-w-xs mx-auto space-y-4">
    <div className="w-14 h-14 flex items-center justify-center rounded-full border-4 border-orange-500 text-xl font-bold text-orange-500">
      {index + 1}
    </div>
    <h3 className="text-lg font-semibold text-teal-900">{step.title}</h3>
    <p className="text-gray-600 text-lg">{step.description}</p>
  </div>
);

function Maincontent() {
  const router = useRouter();

  return (
    <main className="py-16 px-4 bg-gray-50 space-y-28">
      {/* Host Your Event */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-12">
          Host Your Event in 3 Steps
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, idx) => (
            <StepItem key={idx} step={step} index={idx} />
          ))}
        </div>
        <div className="mt-10">
          <button
            onClick={() => router.push("/host")}
            className="bg-orange-500 text-white px-6 py-2 cursor-pointer rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Host Your Event
          </button>
        </div>
      </section>

      {/* Book Your Ticket */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-12">
          Book Your Ticket in 3 Steps
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {bookingSteps.map((step, idx) => (
            <StepItem key={idx} step={step} index={idx} />
          ))}
        </div>
        <div className="mt-10">
          <button
            onClick={() => router.push("/events")}
            className="bg-orange-500 text-white px-6 py-2 cursor-pointer rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Buy Ticket
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="text-center max-w-7xl mx-auto mt-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-10">
          Why Choose Tiketna?
        </h2>

        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-teal-600 scrollbar-track-gray-200">
          <div className="flex gap-6 md:gap-10 px-1 md:px-8 py-4 w-max md:w-full transition-all duration-300 ease-in-out snap-x scroll-smooth">
            {[
              {
                title: "All-in-One Platform",
                text: "Host events, sell tickets, and manage everything from one dashboard.",
              },
              {
                title: "Instant Payouts",
                text: "Get your funds in real-time — no waiting, no extra steps.",
              },
              {
                title: "24/7 Support",
                text: "Get help from our friendly team at any time you need it.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="snap-center shrink-0 w-72 bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="animate-fade-in-up group-hover:animate-pulse">
                  <h4 className="text-xl font-semibold text-teal-700 mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm text-gray-600">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Statistics */}
      <section className="bg-white py-10 rounded-lg shadow max-w-5xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-3xl font-bold text-orange-500">1K+</p>
            <p className="text-sm text-gray-600">Tickets Sold</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">25</p>
            <p className="text-sm text-gray-600">Events Hosted</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">3</p>
            <p className="text-sm text-gray-600">Countries Supported</p>
          </div>
        </div>
      </section>

      {/* Subscribe Card */}
      <SubscribeCard />

      {/* Final CTA */}
      <section className="bg-white text-teal-800 text-center py-10 mt-20 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">
          Ready to Experience Seamless Event Ticketing?
        </h3>
        <button
          onClick={() => router.push("/register")}
          className="mt-4 px-6 py-2 bg-teal-800 text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get Started Today
        </button>
      </section>
    </main>
  );
}

export default Maincontent;
