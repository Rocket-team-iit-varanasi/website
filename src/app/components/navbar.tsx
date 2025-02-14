"use client";
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl">
          <Link href="/">Rocket Team</Link>
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/projects" className="hover:text-blue-500">Projects</Link>
          <Link href="/about" className="hover:text-blue-500">About Us</Link>
          <Link href="/blog" className="hover:text-blue-500">Blog</Link>
          <Link href="/team" className="hover:text-blue-500">Team</Link>
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="focus:outline-none"
          >
            {isOpen ? (
              // Close Icon
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
              // Hamburger Icon
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
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/projects" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/about" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="/blog" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/team" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Team</Link>
          </div>
        </div>
      )}
    </nav>
  )
}