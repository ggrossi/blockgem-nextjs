import { getSession, getSubscription } from '@/app/supabase-server';
import { redirect } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import ArticlesUI from './ArticlesUI';
import getPosts from '@/utils/blog/getPosts';

export default function ArticlesPage({ allPosts, session, subscription }) {
  return (
    <>
      <Navbar user={session?.user || null} subscription={subscription} />
      <ArticlesUI allPosts={allPosts} />
    </>
  );
}

export async function getServerSideProps() {
  const session = await getSession();
  const subscription = await getSubscription();
  const isPayingCustomer = !!subscription;

  if (!session || !isPayingCustomer) {
    return {
      redirect: {
        destination: !session ? '/signin' : '/account',
        permanent: false,
      },
    };
  }

  const allPosts = await getPosts();
  return {
    props: {
      allPosts,
      session,
      subscription,
    },
  };
}
