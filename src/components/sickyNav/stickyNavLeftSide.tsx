"use client";
import { FC } from "react";
import BackArrowButton from "@/components/buttons/backArrowButton";
import { usePostsContext } from "@/lib/postsContext";

interface StickyLeftSideProps {
  name: string;
  author?: string;
}

export const StickyNavLeftSide: FC<StickyLeftSideProps> = ({
  name,
  author,
}) => {
  const { postsLength } = usePostsContext();

  return (
    <div className={"flex flex-row gap-2 pl-2"}>
      <BackArrowButton />
      <div>
        <p className={"line-clamp-1 w-full capitalize"}>{name}</p>
        {postsLength && (
          <p className={"text-xs text-neutral-500"}>{postsLength} posts</p>
        )}
        {author && (
          <p className={"text-xs capitalize text-neutral-500"}>{author}</p>
        )}
      </div>
    </div>
  );
};
