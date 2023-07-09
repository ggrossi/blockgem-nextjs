'use client';

import MoreStories from '../../components/more-stories';
import HeroPost from '../../components/hero-post';
import Intro from '../../components/intro';
import PostType from '../../interfaces/post';

export default function ArticlesUI({ allPosts }: { allPosts: PostType[] }) {
  if (!allPosts) {
    return <div>Loading...</div>;
  }

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
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
    </>
  );
}
