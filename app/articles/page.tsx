import { getSession, getSubscription } from '@/app/supabase-server';
import { redirect } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import ArticlesUI from './ArticlesUI';
import getPosts from '@/utils/blog/getPosts';

export default function ArticlesPage({ allPosts }) {
  const session = getSession();

  if (!session) {
    return redirect('/signin');
  }

  const subscription = getSubscription();
  const isPayingCustomer = !!subscription;

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

export async function getStaticProps() {
  const allPosts = await getPosts();
  return {
    props: {
      allPosts
    }
  };
}
