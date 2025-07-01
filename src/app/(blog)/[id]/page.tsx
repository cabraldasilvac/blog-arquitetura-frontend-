import { fetchPostById } from "@/lib/api";

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await fetchPostById(params.id);
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
