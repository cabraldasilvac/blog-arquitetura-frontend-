import { fetchPosts } from "@/lib/api";
import PostCard from "@/components/ui/PostCard";

export default async function BlogPage() {
  const posts = await fetchPosts();
  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
