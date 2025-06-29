"use client";

import React, { useState } from "react";

function SubscribeCard() {
  const [expanded, setExpanded] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section
      className={`relative bg-orange-300 rounded-xl shadow-md max-w-2xl mx-auto overflow-hidden transition-all duration-700 ease-in-out ${
        expanded ? "max-h-[500px] p-6" : "max-h-20 p-2"
      }`}
    >
      <div className="text-center">
        <h3
          className={`font-bold text-teal-800 transition-all duration-500 ${
            expanded ? "text-2xl mb-2" : "text-base"
          }`}
        >
          Stay Updated
        </h3>

        {/* Expand Button (Visible when collapsed) */}
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="mt-1 bg-teal-700 text-white cursor-pointer px-4 py-1 text-sm rounded-md hover:bg-teal-800 transition"
          >
            Subscribe
          </button>
        )}

        {/* Collapse Button (Visible when expanded) */}
        {expanded && (
          <button
            onClick={() => setExpanded(false)}
            className="absolute cursor-pointer top-2 right-4 text-sm text-teal-900 font-semibold hover:text-red-600 transition"
          >
            ✖
          </button>
        )}

        {/* Expanded Content */}
        {expanded && (
          <div className="mt-4 animate-fade-in-up">
            <p className="text-gray-600 mb-6 text-sm">
              Subscribe to our newsletter and never miss an event update.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md border border-gray-300 w-full sm:w-auto sm:min-w-[250px] focus:outline-none ring-2 ring-orange-400"
                required
              />
              <button
                type="submit"
                className="bg-teal-700 text-white px-6 py-2 rounded-md hover:bg-teal-800 transition cursor-pointer"
              >
                Submit
              </button>
            </form>
            {submitted && (
              <p className="text-green-600 mt-3 text-sm">
                ✅ Subscribed successfully!
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default SubscribeCard;
