import SpecialOffer from './SpecialOffer';
import Pricing from '@/components/Pricing';
import Navbar from '@/components/ui/Navbar';
import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';

export default async function OfferPage() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  return (
    <>
      <Navbar user={session?.user || null} subscription={subscription} />
      <SpecialOffer />
      <Pricing
        session={session}
        user={session?.user}
        products={products}
        subscription={subscription}
      />
    </>
  );
}
