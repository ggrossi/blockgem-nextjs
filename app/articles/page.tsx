import { getSession, getSubscription } from '@/app/supabase-server';
import { redirect } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import ArticlesUI from './ArticlesUI';
import { getAllPosts } from '../../lib/api';

export default async function ArticlesPage() {
  const session = await getSession();

  console.log('Session:', session);

  if (!session) {
    return redirect('/signin');
  }

  const subscription = await getSubscription();
  const isPayingCustomer = !!subscription;

  console.log('Subscription:', subscription);

  if (!isPayingCustomer) {
    return redirect('/account');
  }

  const allPosts = await getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ]);

  return (
    <>
      <Navbar user={session?.user || null} subscription={subscription} />
      <ArticlesUI allPosts={allPosts} />
    </>
  );
}
