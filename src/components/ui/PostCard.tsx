// src/components/ui/PostCard.tsx
type Post = {
  id: string;
  title: string;
  body: string;
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="border p-4 rounded-lg">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="mt-2">{post.body.slice(0, 100)}...</p>
      <a href={`/blog/${post.id}`} className="text-blue-500 mt-4 inline-block">
        Ler mais →
      </a>
    </article>
  );
}
