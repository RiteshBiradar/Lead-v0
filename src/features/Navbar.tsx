"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // hamburger & close icons

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 py-3 shadow-md bg-white dark:bg-black fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-600 dark:text-white"
        >
          LEAD
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/features"
            className="text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition"
          >
            Features
          </Link>
          <Link
            href="/subjects"
            className="text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition"
          >
            Subjects
          </Link>
          <Link
            href="/testimonials"
            className="text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition"
          >
            Testimonials
          </Link>
        </nav>

        {/* CTA Button (hidden on small screens) */}
        <Link
          href="/"
          className="hidden md:inline bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm transition"
        >
          Get Started
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-neutral-700 dark:text-neutral-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-3">
          <Link
            href="/features"
            className="block text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/subjects"
            className="block text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Subjects
          </Link>
          <Link
            href="/testimonials"
            className="block text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="/get-started"
            className="block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm transition w-fit"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
