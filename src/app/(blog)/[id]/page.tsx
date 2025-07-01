import { fetchPostById } from "@/lib/api";

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const awaitedParams = await params;
  const post = await fetchPostById(awaitedParams.id);
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
