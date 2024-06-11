import { FC } from "react";
import { PostCard } from "@/components/posts/postCard";
import { Post } from "@/lib/types";

interface UserPostsProps {
  posts: Post[];
}

export const UserPosts: FC<UserPostsProps> = ({ posts }) => {
  return (
    <section className={"divide-y divide-neutral-100"}>
      {posts.map((post, index) => {
        return (
          <PostCard
            key={post.userId + post.userId}
            hideUserCard={true}
            post={post}
          />
        );
      })}
    </section>
  );
};
