'use client';

import Link from 'next/link';

export default function ArticlesUI() {
  return (
    <section className="bg-darken">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text sm:text-center sm:text-6xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 pb-8">
            Weekly Insights on Crypto Trends
          </h2>
          <p className="max-w-4xl m-auto mt-5 text-xl text-lighten sm:text-4xl font-extrabold sm:text-center mb-24">
            Gain a competitive edge with our{' '}
            <span className="text-rose-400">in-depth, weekly insights </span>
            into under-the-radar crypto trends.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-md shadow-lg border-pink-500 border-opacity-50 rounded-lg shadow-sm bg-zinc-900">
              <Link href="/articles/xrp">
                <h2 className="text-xl font-bold mb-2">
                  Ripple (XRP): A Token Poised for a Breakthrough
                </h2>
                <p className="text-zinc-200 mb-2">
                  Want to know which tokens are at the forefront of massive
                  industries like cross-border payments, financial services, and
                  digital asset management? Look no further than Ripple's XRP.
                </p>
                <p className="text-zinc-200 mb-2">07/12/2023</p>
              </Link>
            </div>
            <div className="p-4 border rounded-md shadow-lg border-pink-500 border-opacity-50 rounded-lg shadow-sm bg-zinc-900">
              <Link href="/articles/link">
                <h2 className="text-xl font-bold mb-2">
                  Unveiling Chainlink: A Deep Dive into LINK's Market Potential
                </h2>
                <p className="text-zinc-200 mb-2">
                  Step into the world of Chainlink with our detailed analysis.
                  Discover how LINK is revolutionizing the DeFi sector with its
                  decentralized oracle network, and explore its price history,
                  market opportunities, and future prospects.
                </p>
                <p className="text-zinc-200 mb-2">07/19/2023</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
