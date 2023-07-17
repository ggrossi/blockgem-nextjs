'use client';

import { useState } from 'react';
import { User } from '@supabase/supabase-js';
import Link from 'next/link';

import Logo from '@/components/icons/Logo';
import SignOutButton from './SignOutButton';

import s from './Navbar.module.css';
import SupabaseProvider from '@/app/supabase-provider';

interface NavbarClientProps {
  user: User | null;
  subscription: any; // Replace 'any' with the actual type of your subscription object
}

export default function NavbarClient({
  user,
  subscription
}: NavbarClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isPayingCustomer = !!subscription;

  return (
    <SupabaseProvider>
      <nav className={s.root}>
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div className="max-w-6xl px-6 mx-auto">
          <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
            <div className="flex items-center flex-1">
              <Link href="/">
                <Logo className={s.logo} aria-label="Logo" />
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden pl-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div
                className={`${
                  isOpen ? 'block' : 'hidden'
                } absolute top-full left-0 z-20 mt-2 space-y-2 text-lighten bg-zinc-900 border border-pink-500 rounded-lg shadow-lg lg:static lg:bg-transparent lg:border-0 lg:shadow-none lg:flex lg:items-center lg:space-y-0 lg:mt-0 lg:ml-6`}
              >
                <Link href="/" className="block px-4 py-2 lg:px-2 lg:py-0">
                  Home
                </Link>
                <Link
                  href="https://blog.blockgem.co"
                  target="_blank"
                  className="block px-4 py-2 lg:px-2 lg:py-0"
                >
                  Blog
                </Link>
                {user && (
                  <Link
                    href="/account"
                    className="block px-4 py-2 lg:px-2 lg:py-0"
                  >
                    Account
                  </Link>
                )}
                {isPayingCustomer && (
                  <Link
                    href="/articles"
                    className="block px-4 py-2 lg:px-2 lg:py-0"
                  >
                    Insights
                  </Link>
                )}
                {isPayingCustomer && (
                  <Link
                    href="/gems"
                    className="block px-4 py-2 lg:px-2 lg:py-0"
                  >
                    Gems
                  </Link>
                )}
              </div>
            </div>
            <div className="flex justify-end flex-1 space-x-8">
              {user ? (
                <SignOutButton />
              ) : (
                <Link
                  className="bg-pink-500 rounded-lg hover:bg-pink-700 focus:outline-none focus:shadow-outline text-white py-2 px-4 font-bold"
                  href="/signin#auth-sign-up"
                >
                  GET STARTED
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </SupabaseProvider>
  );
}
