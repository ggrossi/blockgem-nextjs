import SpecialOffer from './SpecialOffer';
import Navbar from '@/components/ui/Navbar';

export default async function OfferPage() {
  return (
    <>
      <Navbar user={session?.user || null} subscription={subscription} />
      <SpecialOffer />
    </>
  );
}
