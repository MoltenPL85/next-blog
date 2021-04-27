import { GetStaticProps } from 'next';
import Head from 'next/head';
import FeaturedPosts from '../conponents/home-page/featured-posts';
import Hero from '../conponents/home-page/hero';
import { Post } from '../interfaces';
import { getFeaturedPosts } from '../lib/posts-util';

interface HomePageProps {
  posts: Post[];
}

const HomePage = ({ posts }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>Max' Blog</title>
        <meta
          name="description"
          content="Posts about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
