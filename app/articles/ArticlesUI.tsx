import Container from '@/components/blog/container';
import MoreStories from '@/components/blog/more-stories';
import HeroPost from '@/components/blog/hero-post';
import Intro from '@/components/blog/intro';
import Layout from '@/components/blog/layout';
import { Post } from '@/utils/blog/interfaces/post';

type Props = {
  allPosts: Post[]
}

export default function ArticlesUI({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}
