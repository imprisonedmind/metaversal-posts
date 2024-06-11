import { GetAllPosts } from "@/lib/fetchHelpers";
import { PostCard } from "@/components/posts/postCard";

export default async function Home() {
  const data = await GetAllPosts();

  return (
    <div className={`divide-y divide-neutral-100`}>
      {data.map((post, index) => {
        return <PostCard key={post.id + post.userId} post={post} />;
      })}
    </div>
  );
}
