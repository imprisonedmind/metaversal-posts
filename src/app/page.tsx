import { PostsClientScrollFetch } from "@/components/posts/postsClientScrollFetch";
import { GetAllPosts } from "@/app/actions";

export default async function Home() {
  const data = await GetAllPosts();

  return <PostsClientScrollFetch initialData={data} />;
}
