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

  const allPosts = (await getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ])).map(post => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    coverImage: post.coverImage,
    excerpt: post.excerpt,
    ogImage: {
      url: post.ogImage?.url || ''
    },
    content: post.content || '',
    author: {
      name: post.author?.name || '',
      picture: post.author?.picture || ''
    }
  }));
  
  return (
    <>
      <Navbar user={session?.user || null} subscription={subscription} />
      <ArticlesUI allPosts={allPosts} />
    </>
  );
}
