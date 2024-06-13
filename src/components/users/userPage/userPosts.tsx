import { PostCard } from "@/components/posts/postCard";
import { Post } from "@/lib/types";
import PostsLengthHandler from "@/components/posts/postsLengthHandler";

interface UserPostsProps {
  posts: Post[];
}

export default async function UserPosts({ posts }: UserPostsProps) {
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
