import { FC } from "react";
import { Post } from "@/lib/types";
import { UserCard } from "@/components/users/userCard";
import TrashButton from "@/components/buttons/trashButton";
import Link from "next/link";

interface PostCardProps {
  post: Post;
  hideUserCard?: boolean;
  canDelete?: boolean;
}

export const PostCard: FC<PostCardProps> = ({
  post,
  hideUserCard = false,
  canDelete = false,
}) => {
  return (
    <div
      className={`
        ${hideUserCard && "px-4"} 
        group flex cursor-pointer flex-col gap-4 p-4 hover:bg-neutral-100
      `}
    >
      <Link href={`/post/${post.id}`} className={"flex flex-col gap-1"}>
        <div className={"flex flex-row items-center justify-between"}>
          <p className={"capitalize"}>{post.title}</p>
          {canDelete && <TrashButton />}
        </div>
        <p className={"line-clamp-2 pr-8 text-sm text-neutral-500"}>
          {post.body}
        </p>
      </Link>
      {!hideUserCard && (
        <UserCard user={post.user} small={true} isLink={true} />
      )}
    </div>
  );
};
