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
    <div className={`${hideUserCard && "px-4"} flex flex-col gap-4 p-4`}>
      <div className={"flex flex-col gap-1"}>
        <div className={"flex flex-row items-center justify-between"}>
          <Link
            href={`/post/${post.id}`}
            className={"capitalize underline-offset-4 hover:underline"}
          >
            {post.title}
          </Link>
          {canDelete && <TrashButton />}
        </div>
        <p className={"line-clamp-2 pr-8 text-sm text-neutral-500"}>
          {post.body}
        </p>
      </div>
      {!hideUserCard && (
        <UserCard user={post.user} small={true} isLink={true} />
      )}
    </div>
  );
};
