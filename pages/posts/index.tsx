import { GetStaticProps } from 'next';
import Head from 'next/head';
import AllPosts from '../../conponents/posts/all-posts';
import { Post } from '../../interfaces';
import { getAllPosts } from '../../lib/posts-util';

interface AllPostsPageProps {
  posts: Post[];
}

const AllPostsPage = ({ posts }: AllPostsPageProps) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
