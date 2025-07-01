type Post = {
  id: string;
  title: string;
  body: string;
};

export async function fetchPosts(): Promise<Post[]> {
  return [
    { id: "1", title: "Post 1", body: "Conteúdo do post 1..." },
    { id: "2", title: "Post 2", body: "Conteúdo do post 2..." },
  ];
}

export async function fetchPostById(id: string): Promise<Post> {
  const posts = await fetchPosts();
  const post = posts.find((p) => p.id === id);
  if (!post) throw new Error("Post não encontrado");
  return post;
}
