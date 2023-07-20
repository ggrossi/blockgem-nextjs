'use client';

import { useEffect, useState } from 'react';

export default function GemsUI() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  interface Topic {
    keyword: string;
    description: string;
    absolute_volume: number;
    search_history: {
      growth: {
        '6': number;
        '3': number;
      };
    };
  }

  useEffect(() => {
    let isMounted = true;

    fetch('/api/topics/topics')
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setTopics(data.result);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error.message);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="bg-darken">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text sm:text-center sm:text-6xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 pb-8">
            Unearth Hidden Crypto Gems
          </h2>
          <p className="max-w-4xl m-auto mt-5 text-xl text-lighten sm:text-4xl font-extrabold sm:text-center mb-24">
            Discover potential{' '}
            <span className="text-rose-400">crypto breakthrough </span>
            with our comprehensive Signals database.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.isArray(topics) &&
              topics.map((topic: Topic, index: number) => (
                <div
                  key={index}
                  className="p-4 border rounded-md shadow-lg border-pink-500 border-opacity-50 rounded-lg shadow-sm bg-zinc-900"
                >
                  <h2 className="text-xl font-bold mb-2">{topic.keyword}</h2>
                  <p className="text-zinc-200 mb-2">{topic.description}</p>
                  <p className="text-sm text-zinc-200 mb-1">
                    <b>Search Volume:</b> {topic.absolute_volume}
                  </p>
                  <p className="text-sm text-zinc-200">
                    <b>Growth (6 months):</b>{' '}
                    {topic.search_history?.growth['6']}%
                  </p>
                  <p className="text-sm text-zinc-200">
                    <b>Growth (3 months):</b>{' '}
                    {topic.search_history?.growth['3']}%
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
