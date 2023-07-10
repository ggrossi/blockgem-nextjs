import { getArticleData, getSortedArticlesData } from '@/lib/getArticles';
import { useRouter } from 'next/router';

export default function Article({ articleData }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{articleData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </div>
  );
}

export async function getStaticPaths() {
  const allArticlesData = await getSortedArticlesData();
  console.log(allArticlesData); // Add this line
  const paths = allArticlesData.map(({ id }) => {
    return {
      params: {
        id: id
      }
    };
  });

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const articleData = await getArticleData(params.id);
  console.log(articleData); // Add this line
  return {
    props: {
      articleData
    }
  };
}
ops: {
      articleData
    }
  }
}
