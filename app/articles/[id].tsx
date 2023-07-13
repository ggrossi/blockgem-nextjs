import { GetStaticPaths, GetStaticProps } from 'next';
import { getSortedArticlesData, getArticleData } from '@/lib/getArticles';

export default function Article({
  articleData
}: {
  articleData: { [key: string]: any };
}) {
  if (!articleData) {
    return <div>No article data</div>;
  }

  return (
    <article>
      <h1>{articleData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = [];
  try {
    paths = (await getSortedArticlesData()).map(({ id }) => ({
      params: {
        id
      }
    }));
  } catch (err) {
    console.error('Error getting article data:', err);
  }
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let articleData = null;
  try {
    if (params && params.id) {
      articleData = await getArticleData(params.id as string);
    }
  } catch (err) {
    console.error('Error getting article data:', err);
  }
  if (!articleData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      articleData
    }
  };
};
