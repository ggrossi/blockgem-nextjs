import { GetStaticPaths, GetStaticProps } from 'next';
import { getSortedArticlesData, getArticleData } from '@/lib/getArticles';

export default function Article({ articleData }: { articleData: { [key: string]: any } }) {
  return (
    <article>
      <h1>{articleData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getSortedArticlesData()).map(({ id }) => ({
    params: {
      id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articleData = await getArticleData(params.id as string);
  return {
    props: {
      articleData,
    },
  };
};
