import { getSession, getSubscription } from '@/app/supabase-server';
import { redirect } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import XRPReport from './XRPReport';

const meta = {
  title:
    'XRP (Ripple) Deep Dive: A Comprehensive Analysis of Its Potential and Risks',
  description:
    'Explore our in-depth analysis of XRP (Ripple), a unique digital asset with significant potential. Understand its role in the growing cross-border payments and digital asset management markets, and learn about the risks and opportunities it presents.',
  cardImage: '/og.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  url: 'https://blockgem.co/articles/xrp',
  type: 'website'
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  cardImage: meta.cardImage,
  robots: meta.robots,
  favicon: meta.favicon,
  url: meta.url,
  type: meta.type,
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
    type: meta.type,
    site_name: meta.title
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vercel',
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage
  }
};

export default async function GemsPage() {
  const session = await getSession();

  console.log('Session:', session); // Add this line

  if (!session) {
    return redirect('/signin');
  }

  const subscription = await getSubscription();
  const isPayingCustomer = !!subscription;

  console.log('Subscription:', subscription); // Add this line

  if (!isPayingCustomer) {
    return redirect('/account');
  }

  return (
    <>
      <Navbar user={session?.user || null} subscription={subscription} />
      <XRPReport />
    </>
  );
}
