import { getSession, getSubscription } from '@/app/supabase-server';
import { redirect } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import ArticlesUI from './ArticlesUI';
import { GetServerSideProps } from 'next';

export default function ArticlePage({ session, subscription }) {
  if (!session) {
    return redirect('/signin');
  }

  const isPayingCustomer = !!subscription;

  if (!isPayingCustomer) {
    return redirect('/account');
  }

  return (
    <>
      <Navbar user={session?.user || null} subscription={subscription} />
      <ArticlesUI />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context.req);
  const subscription = await getSubscription(session?.user?.id);

  return {
    props: {
      session,
      subscription
    }
  };
};
