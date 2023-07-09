import { getSession, getSubscription } from '@/app/supabase-server';
import { redirect } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import ArticlesUI from './ArticlesUI';
import { GetServerSideProps } from 'next';
import { getAllPosts } from '../../lib/api';
import { PostType } from '../../interfaces/post';

export const getServerSideProps: GetServerSideProps = async () => {
  const allPosts = await getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};

export default async function ArticlesPage({ allPosts }: { allPosts: PostType[] }) {
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

  return (
    <>
      <Navbar user={session?.user || null} subscription={subscription} />
      <ArticlesUI allPosts={allPosts} />
    </>
  );
}
