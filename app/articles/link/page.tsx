import { getSession, getSubscription } from '@/app/supabase-server';
import { redirect } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import LINKReport from './LINKReport';

const meta = {
  title: "Unveiling Chainlink: A Deep Dive into LINK's Market Potential",
  description:
    'Step into the world of Chainlink (LINK) with our detailed analysis. Discover how LINK is revolutionizing the DeFi sector with its decentralized oracle network, and explore its price history, market opportunities, and future prospects.',
  cardImage: '/og.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  url: 'https://blockgem.co/articles/link',
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
      <LINKReport />
    </>
  );
}
