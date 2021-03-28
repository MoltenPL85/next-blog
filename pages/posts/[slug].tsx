import { GetStaticPaths, GetStaticProps } from 'next';
import PostContent from '../../conponents/posts/post-detail/post-content';
import { Post } from '../../interfaces';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

interface PostDetailPageProps {
  post: Post;
}

const PostDetailPage = ({ post }: PostDetailPageProps) => {
  return <PostContent post={post} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug as string);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
