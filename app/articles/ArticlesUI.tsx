'use client';

import { useEffect, useState } from 'react';

export default function ArticlesUI() {
  const [allArticlesData, setAllArticlesData] = useState([]);

  useEffect(() => {
    fetch('/api/articles/articles')
      .then((response) => response.json())
      .then((data) => setAllArticlesData(data));
  }, []);

  return (
    <div>
      <h1>All Articles</h1>
      <ul>
        {allArticlesData.map(({ id, date, title }) => (
          <li key={id}>
            <a href={`/articles/${id}`}>{title}</a>
            <br />
            {date}
          </li>
        ))}
      </ul>
    </div>
  );
}
