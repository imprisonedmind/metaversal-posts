import { FC } from "react";
import { Post } from "@/lib/types";
import { UserCard } from "@/components/users/userCard";
import { GetSingleUser } from "@/lib/fetchHelpers";

interface PostCardProps {
  post: Post;
  hideUserCard?: boolean;
}

export const PostCard: FC<PostCardProps> = async ({
  post,
  hideUserCard = false,
}) => {
  const user = await GetSingleUser(post.userId);

  return (
    <div className={`${hideUserCard && "px-0"} flex flex-col gap-4 p-4`}>
      <div className={""}>
        <p className={"capitalize"}>{post.title}</p>
        <p className={"line-clamp-2 text-sm text-neutral-500"}>{post.body}</p>
      </div>
      {!hideUserCard && <UserCard user={user} small={true} />}
    </div>
  );
};
