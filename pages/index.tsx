import React from 'react';
import FeaturedPosts from '../conponents/home-page/featured-posts';
import Hero from '../conponents/home-page/hero';
import { Post } from '../interfaces';

export const DUMMY_POSTS: Post[] = [
  {
    slug: 'getting-started-with-nestjs',
    title: 'Getting Started with NestJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a React Framework for production',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nestjs2',
    title: 'Getting Started with NestJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a React Framework for production',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nestjs3',
    title: 'Getting Started with NestJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a React Framework for production',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nestjs4',
    title: 'Getting Started with NestJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a React Framework for production',
    date: '2022-02-10',
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
