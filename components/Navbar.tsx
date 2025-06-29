"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-teal-600 text-white sticky top-0 z-50 relative">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Section: Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/ticketna.png" alt="Ticketna" width={80} height={40} />
          <span className="text-xl font-bold tracking-wide">Ticketna</span>
        </Link>

        {/* Mobile Layout: Register, Login, Hamburger */}
        <div className="flex md:hidden items-center space-x-3">
          <Link
            href="/register"
            className="px-3 py-1 bg-orange-500 text-white rounded-md text-sm hover:bg-orange-600 transition"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="px-3 py-1 border border-white text-white rounded-md text-sm hover:text-orange-400 hover:border-orange-400 transition"
          >
            Login
          </Link>
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
            className="text-white text-2xl focus:outline-none cursor-pointer"
          >
            ☰
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 font-semibold">
          <Link href="/" className="hover:text-orange-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-orange-400 transition">
            About Us
          </Link>
          <Link
            href="/login"
            className="px-4 py-1 border border-white rounded-md hover:border-orange-400 hover:text-orange-400 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-1 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
          >
            Register
          </Link>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-teal-6600 text-white font-semibold px-4 pb-4 pt-2 space-y-3 flex flex-col items-center">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-400">
            Home
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-400">
            About Us
          </Link>
           <Link href="/termsofservice" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-400">
            Terms of Service
          </Link>
        </div>
      )}

      {/* Decorative White Line */}
      <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-2/3 h-[2px] bg-white z-[-1]" />
    </header>
  );
};

export default Navbar;
