import { fetchPostById } from "@/lib/api";

export default async function PostPage({ params }: { params: unknown }) {
  const typedParams = params as { id: string };
  const post = await fetchPostById(typedParams.id);
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
