import Pricing from '@/components/Pricing';
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/Hero';
import SalesCopy from '@/components/ui/SalesCopy';
import SalesCopyBottom from '@/components/ui/SalesCopyBottom';
import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';

export default async function PricingPage() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  return (
    <>
      <Navbar user={session?.user || null} subscription={subscription} />
      <Hero />
      <SalesCopy />
      <Pricing
        session={session}
        user={session?.user}
        products={products}
        subscription={subscription}
      />
      <SalesCopyBottom />
    </>
  );
}
