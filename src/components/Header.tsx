"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-black shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
          Netportal Solutions
        </Link>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:text-gray-600 dark:focus:text-gray-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? "" : "hidden"}`}>
          <div className="lg:flex-grow flex flex-col lg:flex-row items-center">
            <Link
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 mr-4"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 mr-4"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 mr-4"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
