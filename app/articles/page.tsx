import { getSession, getSubscription } from '@/app/supabase-server';
import Navbar from '@/components/ui/Navbar';
import ArticlesUI from './ArticlesUI';
import { GetServerSideProps } from 'next';
import { Session } from 'next-auth'; // Assuming you're using next-auth for sessions.
import { ParsedUrlQuery } from 'querystring';

interface ArticlePageProps {
  session: Session;
  subscription: any; // Replace with actual type if known
}

export default function ArticlePage({
  session,
  subscription
}: ArticlePageProps) {
  return (
    <>
      <Navbar user={session?.user || null} subscription={subscription} />
      <ArticlesUI />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  ArticlePageProps,
  ParsedUrlQuery
> = async (context) => {
  const session = await getSession(context.req);
  const subscription = await getSubscription(session?.user?.id);

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    };
  }

  const isPayingCustomer = !!subscription;

  if (!isPayingCustomer) {
    return {
      redirect: {
        destination: '/account',
        permanent: false
      }
    };
  }

  return {
    props: {
      session,
      subscription
    }
  };
};
