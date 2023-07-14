import { getSession, getSubscription } from '@/app/supabase-server';
import { redirect } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import HelloWorld from './HelloWorld';

const meta = {
  title: 'Blog Post Meta',
  description: 'Blog Post Description',
  cardImage: '/og.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  url: 'https://blockgem.co/articles/helloworld',
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
      <HelloWorld />
    </>
  );
}
