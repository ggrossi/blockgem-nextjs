import { User } from '@supabase/supabase-js';
import NavbarClient from './NavbarClient';

interface NavbarProps {
  user: User | null;
  subscription: any; // Replace 'any' with the actual type of your subscription object
}

export default function Navbar({ user, subscription }: NavbarProps) {
  return <NavbarClient user={user} subscription={subscription} />;
}
