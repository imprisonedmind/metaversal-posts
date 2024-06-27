import { PostCard } from "@/components/posts/postCard";
import { Post } from "@/lib/types";
import PostsLengthHandler from "@/components/posts/postsLengthHandler";
import { GetUserPosts } from "@/app/actions";

interface UserPostsProps {
  id: number;
}

export default async function UserPosts({ id }: UserPostsProps) {
  const posts = await GetUserPosts(id);

  return (
    <section className={"divide-y divide-neutral-100"}>
      <PostsLengthHandler postsLength={posts.length} />
      {posts.map((post, index) => {
        return (
          <PostCard
            key={post.userId + post.userId}
            hideUserCard={true}
            post={post}
            canDelete={true}
          />
        );
      })}
    </section>
  );
}
