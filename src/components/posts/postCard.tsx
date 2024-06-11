import { FC } from "react";
import { Post } from "@/lib/types";
import { UserCard } from "@/components/users/userCard";

interface PostCardProps {
  post: Post;
  hideUserCard?: boolean;
}

export const PostCard: FC<PostCardProps> = ({ post, hideUserCard = false }) => {
  return (
    <div className={`${hideUserCard && "px-4"} flex flex-col gap-4 p-4`}>
      <div className={""}>
        <p className={"capitalize"}>{post.title}</p>
        <p className={"line-clamp-2 text-sm text-neutral-500"}>{post.body}</p>
      </div>
      {!hideUserCard && (
        <UserCard user={post.user} small={true} isLink={true} />
      )}
    </div>
  );
};
