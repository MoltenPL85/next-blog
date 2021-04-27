import PostsGrid from './posts-grid';
import classes from './all-posts.module.css';
import { Post } from '../../interfaces';

interface AllPostsProps {
  posts: Post[];
}

const AllPosts = ({ posts }: AllPostsProps) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
