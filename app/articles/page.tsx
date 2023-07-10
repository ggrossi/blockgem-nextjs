import { getSession, getSubscription } from '@/app/supabase-server';
import { redirect } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import ArticlesUI from './ArticlesUI';

export default async function ArticlesPage() {
  const session = await getSession();

  if (!session) {
    return redirect('/signin');
  }

  const subscription = await getSubscription();
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

export async function getServerSideProps(context) {
  const session = await getSession(context.req);
  const subscription = await getSubscription(session?.user?.id);

  return {
    props: {
      session,
      subscription
    }
  };
}
