"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function AboutPage() {
  return (
    <div className="bg-gray-50 text-teal-900">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-600 to-teal-900 text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Ticketna</h1>
        <p className="max-w-2xl mx-auto text-lg text-teal-100">
          Empowering creators and fans with seamless ticketing experiences.
        </p>
      </section>

<section className="py-20 px-6 text-gray-800 max-w-4xl mx-auto text-lg leading-relaxed space-y-6">
  <p>
    It all began on a rainy night — somewhere between an overpriced concert ticket and a{' '}
    &quot;<strong>Technical Issue.</strong>&quot; that conveniently ate someone&apos;s payment. That someone? —{' '}
    <strong>Us.</strong> And that moment? —The{' '}
    <span className="text-orange-600 font-semibold">spark</span> that would become Ticketna.
  </p>

  <p>
    Tired of platforms that crash faster than your neighbor&apos;s Wi-Fi, and ticketing systems that
    feel like a{' '}
    <span className="font-semibold text-teal-700">Black Friday stampede</span> in a hallway, we said:{' '}
    <span className="font-bold text-orange-500">
      &quot;Why not just build our own?&quot;
    </span>
  </p>

  <p>
    So, we grabbed some code, a gallon of coffee, a sprinkle of hope, and started sketching a
    platform that would make both event organizers and attendees go:{' '}
    <span className="font-bold text-teal-700">&quot;Well, finally!&quot;</span>
  </p>

  <p>
    Ticketna was born from the chaotic genius of people who love events but hate nonsense — a team
    obsessed with{' '}
    <span className="underline decoration-dotted decoration-orange-400">
      making your event journey less dramatic than your ex
    </span>
    . From secure payments to sleek dashboards, we&apos;ve packed everything into one vibrant stage.
  </p>

  <p className="text-teal-800 font-semibold text-center text-xl mt-10">
    Because tickets shouldn&apos;t feel like a trap.
  </p>

  <p className="text-center">
    <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mt-4">
      Welcome to Ticketna — where events begin and drama ends.
    </span>
  </p>
</section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-teal-800 mb-4">We Seek</h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            To simplify and revolutionize how people plan, manage, and enjoy
            events by offering a reliable, affordable, and user-friendly ticketing platform.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-teal-800 mb-4">Motive?</h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            To become Africa&apos;s most trusted ticketing and event engagement hub.
          </p>
        </div>

       <div className="grid md:grid-cols-3 gap-6 text-center">
  {/* Transparency */}
  <div className="flex flex-col items-center">
    <div className="w-52 h-52 flex items-center justify-center rounded-full border-4 border-teal-600 p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <p className="text-lg text-gray-700 leading-snug">
        <span className="block text-xl font-semibold text-orange-500 mb-2">
          Transparency
        </span>
        We build trust by being clear and honest in everything we do.
      </p>
    </div>
  </div>

  {/* Accessibility */}
  <div className="flex flex-col items-center">
    <div className="w-52 h-52 flex items-center justify-center rounded-full border-4 border-teal-600 p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <p className="text-lg text-gray-700 leading-snug">
        <span className="block text-xl font-semibold text-orange-500 mb-2">
          Accessibility
        </span>
        Everyone should be able to create and attend events with ease.
      </p>
    </div>
  </div>

  {/* Innovation */}
  <div className="flex flex-col items-center">
    <div className="w-52 h-52 flex items-center justify-center rounded-full border-4 border-teal-600 p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <p className="text-lg text-gray-700 leading-snug">
        <span className="block text-xl font-semibold text-orange-500 mb-2">
          Innovation
        </span>
        We&apos;re constantly improving to stay ahead in event technology.
      </p>
    </div>
  </div>

        </div>
      </section>

     {/* Why Choose Us */}
      <section className="text-center max-w-7xl mx-auto mt-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-10">
          Why Choose Ticketna?
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

   {/* Meet the Team */}
<section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto text-center">
  <h2 className="text-4xl font-bold text-teal-800 mb-4">Meet the Team Behind Ticketna</h2>
  <p className="text-gray-700 max-w-3xl text-xl mx-auto mb-14">
    We&apos;re not just building code — we&apos;re crafting joy. These are the architects of your next favorite event experience.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center">
    {/* Akuila */}
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden max-w-sm w-full">
      <img
        src="/akuila.jpg"
        alt="Akuila"
        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="p-6 flex flex-col justify-between flex-grow">
        <a
          href="https://x.com/akuiladok?s=11"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-teal-700 hover:text-orange-600 transition duration-300"
        >
          Akuila
        </a>
        <p className="text-lg text-gray-600 mt-1">
          Lead Engineer & Logic Whisperer who brings a wealth of experience to life to help creators discover, book,
          and experience creativity with their audience.
        </p>
      </div>
    </div>

    {/* Teflon */}
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden max-w-sm w-full">
      <img
        src="/teflon.jpg"
        alt="Teflon"
        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="p-6 flex flex-col justify-between flex-grow">
        <a
          href="https://x.com/ntateflon?s=11"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-teal-700 hover:text-orange-600 transition duration-300"
        >
          Teflon
        </a>
        <p className="text-lg text-gray-600 mt-1">
          Backend Sorcerer & Optimization Wizard with deep insight into how algorithms favor intentional innovation.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Call to Action */}
      <section className="bg-orange-100 text-center py-12 px-4">
        <h3 className="text-2xl font-bold text-teal-900 mb-3">
          Ready to host or attend amazing events?
        </h3>
        <p className="text-gray-700 mb-6">
          Join thousands of event lovers already using Ticketna today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.href = "/register"}
            className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition"
          >
            Get Started
          </button>
          <button
            onClick={() => window.location.href = "/events"}
            className="bg-white border cursor-pointer border-teal-700 text-teal-700 hover:bg-teal-50 px-6 py-2 rounded-full font-semibold transition"
          >
            Explore Events
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;
