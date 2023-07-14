'use client';

import Link from 'next/link';

export default function ArticlesUI() {
  return (
    <section className="bg-darken">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text sm:text-center sm:text-6xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 pb-8">
            Blog Page Goes Here
          </h2>
          <p className="max-w-4xl m-auto mt-5 text-xl text-white sm:text-4xl font-extrabold sm:text-center pb-8">
            The list of{' '}
            <span className="text-rose-400">deep-dive insights</span> goes down
            below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-md shadow-lg border-pink-500 border-opacity-50 rounded-lg shadow-sm bg-zinc-900">
              <Link href="/articles/helloworld">
                <h2 className="text-xl font-bold mb-2">Hello World</h2>
                <p className="text-zinc-200 mb-2">Post Description</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
