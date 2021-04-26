import { GetStaticProps } from 'next';
import React from 'react';
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
