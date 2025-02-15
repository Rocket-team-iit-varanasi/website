"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl">
          <Link href="/">Rocket Team</Link>
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/events" className="hover:text-purple-500 text-black">Events</Link>
          <Link href="/projects" className="hover:text-green-500 text-black">Projects</Link>
          <Link href="/about" className="hover:text-yellow-500 text-black">About Us</Link>
          <Link href="/blog" className="hover:text-red-500 text-black">Blog</Link>
          <Link href="/team" className="hover:text-orange-500 text-black">Team</Link>
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white shadow-md z-60 transform duration-300 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="px-4 pt-2 pb-4 flex items-center justify-between">
          <div className="flex-1"></div>
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="focus:outline-none ml-auto"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-4 py-2 space-y-4 text-center text-2xl">
          <Link href="/events" className="block text-2xl hover:text-purple-500" onClick={() => setIsOpen(false)}>
            Events
          </Link>
          <Link href="/projects" className="block text-2xl hover:text-green-500" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="/about" className="block text-2xl hover:text-yellow-500" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link href="/blog" className="block text-2xl hover:text-red-500" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link href="/team" className="block text-2xl hover:text-orange-500" onClick={() => setIsOpen(false)}>
            Team
          </Link>
        </div>
      </div>
    </nav>
  );
}