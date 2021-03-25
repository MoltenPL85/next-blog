import { Post } from '../../interfaces';
import PostItem from './post-item';
import classes from './posts-grid.module.css';

interface PostsGridProps {
  posts: Post[];
}

const PostsGrid: React.FC<PostsGridProps> = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
