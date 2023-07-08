'use client';

import { User } from '@supabase/supabase-js';
import Link from 'next/link';

import Logo from '@/components/icons/Logo';
import SignOutButton from './SignOutButton';

import s from './Navbar.module.css';

interface NavbarClientProps {
  user: User | null;
  subscription: any; // Replace 'any' with the actual type of your subscription object
}

export default function NavbarClient({
  user,
  subscription
}: NavbarClientProps) {
  const isPayingCustomer = !!subscription;

  return (
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
            <nav className="hidden ml-6 space-x-2 lg:block">
              <Link href="/">Pricing</Link>
              {user && <Link href="/account">Account</Link>}
              {isPayingCustomer && <Link href="/articles">Articles</Link>}
              {isPayingCustomer && <Link href="/gems">Gems</Link>}
            </nav>
          </div>
          <div className="flex justify-end flex-1 space-x-8">
            {user ? <SignOutButton /> : <Link href="/signin">Sign in</Link>}
          </div>
        </div>
      </div>
    </nav>
  );
}
