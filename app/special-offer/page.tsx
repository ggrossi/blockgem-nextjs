import SpecialOffer from './SpecialOffer';
import Navbar from '@/components/ui/Navbar';
import { getSession, getSubscription } from '@/app/supabase-server';

export default async function OfferPage() {
  const [session, subscription] = await Promise.all([
    getSession(),
    getSubscription()
  ]);

  return (
    <>
      <Navbar user={session?.user || null} subscription={subscription} />
      <SpecialOffer />
    </>
  );
}
