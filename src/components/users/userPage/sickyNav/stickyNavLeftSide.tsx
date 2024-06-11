import { FC } from "react";
import BackArrowButton from "@/components/buttons/backArrowButton";

interface StickyLeftSideProps {
  name: string;
  postsLength?: number;
  author?: string;
}

export const StickyNavLeftSide: FC<StickyLeftSideProps> = ({
  name,
  postsLength,
  author,
}) => {
  return (
    <div className={"flex flex-row gap-2 pl-2 "}>
      <BackArrowButton />
      <div>
        <p className={"capitalize"}>{name}</p>
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
