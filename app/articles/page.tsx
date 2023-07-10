import { getSession, getSubscription } from '@/app/supabase-server'
import { redirect } from 'next/navigation'
import Navbar from '@/components/ui/Navbar'
import ArticlesUI from './ArticlesUI'

export default function ArticlesPage({ session, subscription }) {
  const isPayingCustomer = !!subscription

  if (!session) {
    return redirect('/signin')
  }

  if (!isPayingCustomer) {
    return redirect('/account')
  }

  return (
    <>
      <Navbar user={session?.user || null} subscription={subscription} />
      <ArticlesUI />
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context.req)
  const subscription = await getSubscription(session?.user?.id)

  return {
    props: {
      session,
      subscription
    }
  }
}
