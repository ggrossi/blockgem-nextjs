'use client';
import Image from 'next/image';
import Link from 'next/link';

const SpecialOffer = () => {
  return (
    <section className="bg-darken">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <span className="flex justify-center text-8xl font-extrabold text-white sm:text-center sm:text-8xl my-8">
          <Image src="/Logo.gif" alt="Gem Box" width={154} height={100} />
        </span>
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text sm:text-center sm:text-6xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 py-8">
          We're thrilled to have you on board!
        </h2>
        <div className="sm:flex sm:flex-col sm:align-center">
          <p className="max-w-4xl m-auto mt-5 text-xl text-white sm:text-4xl font-extrabold sm:text-center pb-8">
            Welcome to the Blockgem community! Get ready to receive your daily
            dose of crypto trends and insights straight to your inbox.
          </p>
          <p className="max-w-2xl m-auto mt-5 text-xl text-white sm:text-2xl text-zinc-200 pb-4">
            As a token of our appreciation, we're excited to offer you a special
            discount. Use the coupon code below to enjoy a 20% discount on your
            first year of Blockgem Premium Membership.
          </p>
        </div>
        <div className="sm:flex sm:flex-col sm:align-center">
          <p className="max-w-4xl m-auto mt-5 text-xl text-white sm:text-4xl font-extrabold sm:text-center pb-8">
            Your Coupon Code: <span className="text-rose-400">GEM20</span>
          </p>
          <Link
            href="/signin#auth-sign-up"
            className="max-w-2xl m-auto mt-4 mb-8 text-xl px-4 py-2 font-bold text-white bg-pink-500 rounded-lg hover:bg-pink-700 focus:outline-none focus:shadow-outline"
          >
            <button>Get Started for FREE →</button>
          </Link>
          <p className="max-w-2xl m-auto mt-5 text-xl text-white sm:text-2xl text-zinc-200 pb-4">
            With Blockgem Premium, you'll gain access to our comprehensive
            Signals database and receive in-depth weekly insights into
            burgeoning Web3 projects before they skyrocket.
          </p>
          <p className="max-w-2xl m-auto mt-5 text-xl text-white sm:text-2xl text-zinc-200 pb-4">
            Don't miss this opportunity to dig deeper into the crypto universe
            with Blockgem.
          </p>
          <p className="max-w-2xl m-auto mt-5 text-xl text-white sm:text-2xl text-zinc-200 pb-4">
            Thank you once again for joining us. We look forward to helping you
            unearth the hidden gems of the crypto world.
          </p>
          <p className="max-w-2xl m-auto mt-5 text-xl text-white sm:text-2xl text-zinc-200 pb-4">
            See you soon,
          </p>
          <p className="max-w-2xl m-auto mt-5 text-xl text-white sm:text-2xl text-zinc-200 pb-4">
            <span className="text-rose-400 font-bold">Team Blockgem.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
