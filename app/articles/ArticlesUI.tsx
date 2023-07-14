'use client';

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
            <span className="text-rose-400">
              deep-dive insights
            </span>{' '}
            goes down below.
          </p>
        </div>
      </div>
    </section>
  );
}
