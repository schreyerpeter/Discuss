import Link from 'next/link';
import PostShow from '@/components/posts/PostShow';
import CommentList from '@/components/comments/CommentList';
import CommentCreateForm from '@/components/comments/CommentCreateForm';
import paths from '@/paths';

interface PostShowPageProps {
  params: Promise<{
    slug: string;
    postId: string;
  }>;
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = await params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {'< '}Back to {slug}
      </Link>
      {/* <PostShow /> */}
      {/* <CommentCreateForm postId={postId} startOpen /> */}
      {/* <CommentList comments={comments} /> */}
    </div>
  );
}
