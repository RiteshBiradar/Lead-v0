"use client";

import React from 'react'
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight-new";

function Navbar() {
  return (
    <div>
<header className="w-full px-6 py-3 shadow-md bg-white dark:bg-black fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <Link href="/Navbar.tsx" className="text-2xl font-bold text-indigo-600 dark:text-white">
        LEAD
        </Link>

        <nav className="flex items-center space-x-6">
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

        <Link
          href="/get-started"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm transition"
        >
          Get Started
        </Link>
      </div>
    </header>
    </div>
  )
}

export default Navbar







