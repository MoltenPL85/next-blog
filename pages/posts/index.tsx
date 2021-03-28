import { GetStaticProps } from 'next';
import AllPosts from '../../conponents/posts/all-posts';
import { Post } from '../../interfaces';
import { getAllPosts } from '../../lib/posts-util';

interface AllPostsPageProps {
  posts: Post[];
}

const AllPostsPage = ({ posts }: AllPostsPageProps) => {
  return <AllPosts posts={posts} />;
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
