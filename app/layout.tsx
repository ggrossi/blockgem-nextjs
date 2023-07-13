import SupabaseProvider from './supabase-provider';
import Footer from '@/components/ui/Footer';
import { PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/react';
import 'styles/main.css';

const meta = {
  title: 'Blockgem: Unearth Crypto Investment Trends With Huge Upside',
  description:
    'Dive into our weekly trends insights and access our comprehensive Signals database to spot emerging crypto projects. Begin your journey to unearth potential crypto gems with our risk-free trial.',
  cardImage: '/og.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  url: 'https://blockgem.co',
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

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-darken loading">
        <SupabaseProvider>
          <main
            id="skip"
            className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
          >
            {children}
          </main>
          <Analytics />
          <Footer />
        </SupabaseProvider>
      </body>
    </html>
  );
}
