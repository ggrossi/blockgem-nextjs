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
    <div className="grid grid-cols-3 gap-4">
      {Array.isArray(topics) && topics.map((topic: Topic, index: number) => (
        <div key={index} className="p-4 border rounded-md shadow-lg">
          <h2 className="text-xl font-bold mb-2">{topic.keyword}</h2>
          <p className="text-gray-700 mb-2">{topic.description}</p>
          <p className="text-sm text-gray-500 mb-1">Absolute Volume: {topic.absolute_volume}</p>
          <p className="text-sm text-gray-500">Growth (6 months): {topic.search_history?.growth['6']}%</p>
          <p className="text-sm text-gray-500">Growth (3 months): {topic.search_history?.growth['3']}%</p>
        </div>
      ))}
    </div>
  );
}
