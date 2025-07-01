import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-teal-700 to-teal-950 text-black pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo and About */}
        <div>
          <Link href="/" className="flex mb-4 items-center space-x-2">
            <Image src="/tiketna.png" alt="Ticketna" width={80} height={40} />
          </Link>
          <p className="text-gray-300 text-xl">
            Your trusted event ticketing partner — hosting and booking made simple and elegant.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-orange-400 mb-3">Short Cuts</h4>
          <ul className="space-y-2 text-gray-300 text-xl">
            <li>
              <Link href="/" className="hover:text-orange-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-orange-400">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-orange-400">
                Register
              </Link>
            </li>
            <li>
              <Link href="/termsofservice" className="hover:text-orange-400">
                Term of Service
              </Link>
            </li>
            {/* Added Privacy Policy Link */}
            <li>
              <Link href="/privacy-policy" className="hover:text-orange-400">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold text-orange-400 mb-3">Get In Touch</h4>
          <div className="flex space-x-4">
            {/* X (Twitter) */}
            <a href="https://x.com/ticketna?s=11" aria-label="X" className="text-orange-400 transition">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M22 4.01L14.65 13 21.5 20h-3.2l-5.35-6.19L7.14 20H2l8.03-9.76L2.5 4h3.2l4.88 5.81L16.64 4H22z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="text-orange-400 transition">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M22 12a10 10 0 10-11.6 9.87v-7H8v-3h2.4V9.5A3.5 3.5 0 0114 6h2v3h-2c-.33 0-.6.27-.6.6V12H16l-.5 3h-2.1v7A10 10 0 0022 12z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-orange-400 transition">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.07 2 .25 2.6.52a5.4 5.4 0 012 1.3c.5.5.9 1.2 1.3 2 .27.6.45 1.4.52 2.6.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.07 1.2-.25 2-.52 2.6a5.4 5.4 0 01-1.3 2 5.4 5.4 0 01-2 1.3c-.6.27-1.4.45-2.6.52-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.07-2-.25-2.6-.52a5.4 5.4 0 01-2-1.3 5.4 5.4 0 01-1.3-2c-.27-.6-.45-1.4-.52-2.6C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.07-1.2.25-2 .52-2.6a5.4 5.4 0 011.3-2 5.4 5.4 0 012-1.3c.6-.27 1.4-.45 2.6-.52C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.2 0-3.5 0-4.7.07-1 .05-1.5.2-1.9.34-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.14.4-.29.9-.34 1.9-.07 1.2-.07 1.5-.07 4.7s0 3.5.07 4.7c.05 1 .2 1.5.34 1.9.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.14.9.29 1.9.34 1.2.07 1.5.07 4.7.07s3.5 0 4.7-.07c1-.05 1.5-.2 1.9-.34.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.14-.4.29-.9.34-1.9.07-1.2.07-1.5.07-4.7s0-3.5-.07-4.7c-.05-1-.2-1.5-.34-1.9-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.14-.9-.29-1.9-.34-1.2-.07-1.5-.07-4.7-.07zm0 3.8a5.2 5.2 0 110 10.4 5.2 5.2 0 010-10.4zm0 1.8a3.4 3.4 0 100 6.8 3.4 3.4 0 000-6.8zm5.5-2.2a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="text-orange-400 transition">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.001 2.5 2.5 0 01.01-5.001zM3 9h4v12H3V9zm7 0h3.6v1.7h.1c.5-.9 1.8-1.8 3.6-1.8 3.8 0 4.5 2.5 4.5 5.8V21h-4v-5.6c0-1.3 0-3-1.8-3s-2.2 1.4-2.2 2.9V21h-4V9z" />
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" aria-label="TikTok" className="text-orange-400 transition">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M16.75 2a5.25 5.25 0 005.25 5.25v3.5a8.75 8.75 0 01-5.25-1.75v6.5a6.25 6.25 0 11-6.25-6.25c.56 0 1.1.08 1.61.22v3.75a2.5 2.5 0 102.5 2.5V2h2.14z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Thin Line */}
      <div className="border-t border-white opacity-20 mt-12 mb-4" />

      {/* Copyright */}
      <p className="text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Ticketna. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;