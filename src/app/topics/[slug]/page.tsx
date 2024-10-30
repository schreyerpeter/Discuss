import PostCreateForm from '@/components/posts/PostCreateForm';
import { db } from '@/db';

interface TopicShowPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = await params;

  const topics = await db.topic.findMany({
    where: {
      slug,
    },
  });
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
      </div>
      {topics.map((topic) => (
        <div key={topic.id}>{topic.description}</div>
      ))}
      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}
