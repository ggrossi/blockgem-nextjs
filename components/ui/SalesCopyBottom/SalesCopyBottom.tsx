'use client';
import Image from 'next/image';
import Link from 'next/link';

const SalesCopyBottom = () => {
  return (
    <section className="bg-darken">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:pb-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text sm:text-center sm:text-6xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 pb-8">
            Blockgem Premium Membership
          </h2>
          <p className="max-w-4xl m-auto mt-5 text-xl text-lighten sm:text-4xl font-extrabold sm:text-center pb-8">
            Start digging for your{' '}
            <span className="text-rose-400">crypto gems</span>.{' '}
          </p>
          <p className="max-w-2xl m-auto mt-5 text-xl text-lighten sm:text-2xl text-zinc-200 pb-4">
            Join us today and save $81 with our yearly membership at just $99,
            or opt for our monthly plan at $15.
          </p>
          <p className="max-w-2xl m-auto mt-5 text-xl text-lighten sm:text-2xl text-zinc-200 pb-4">
            Start your galactic voyage for FREE with our 14-day trial. It's time
            to start digging for your crypto gems.
          </p>
        </div>
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text sm:text-center sm:text-6xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 py-8">
            Join the League of Intelligent Investors
          </h2>
          <p className="max-w-4xl m-auto mt-5 text-xl text-lighten sm:text-4xl font-extrabold sm:text-center pb-8">
            Start <span className="text-rose-400">picking</span> today.
          </p>
          <p className="max-w-2xl m-auto mt-5 text-xl text-lighten sm:text-2xl text-zinc-200 pb-4">
            With Blockgem, you're not just investing in crypto. You're investing
            in the future.
          </p>
          <p className="max-w-2xl m-auto mt-5 text-xl text-lighten sm:text-2xl text-zinc-200 pb-4">
            Our members have already seen significant returns on investments
            like Chainlink (+150%), Cardano (+200%), and Ripple (+100%).
          </p>
          <p className="max-w-2xl m-auto mt-5 text-xl text-lighten sm:text-2xl text-zinc-200 pb-4">
            Are you ready to join them and start unearthing your own crypto
            gems?
          </p>
          <Link
            href="/signin#auth-sign-up"
            className="max-w-2xl m-auto mt-5 text-xl px-4 py-2 font-bold text-lighten bg-pink-500 rounded-lg hover:bg-pink-700 focus:outline-none focus:shadow-outline"
          >
            <button>Get Started for FREE →</button>
          </Link>
        </div>
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text sm:text-center sm:text-6xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 py-8">
            Ready to Navigate the Cosmos?
          </h2>
          <p className="max-w-4xl m-auto mt-5 text-xl text-lighten sm:text-4xl font-extrabold sm:text-center pb-8">
            We'll <span className="text-rose-400">see you</span> on the other
            side...
          </p>
          <p className="max-w-2xl m-auto mt-5 text-xl text-lighten sm:text-2xl font-bold py-4">
            Team Blockgem
          </p>
        </div>
      </div>
    </section>
  );
};

export default SalesCopyBottom;
