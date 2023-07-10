import { getSortedArticlesData } from '@/lib/getArticles'

export default function ArticlesUI() {
  const allArticlesData = getSortedArticlesData()
  return (
    <div>
      <h1>All Articles</h1>
      <ul>
        {allArticlesData.map(({ id, date, title }) => (
          <li key={id}>
            <a href={`/articles/${id}`}>{title}</a>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}
