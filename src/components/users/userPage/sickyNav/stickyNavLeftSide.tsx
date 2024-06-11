import { FC } from "react";
import BackArrowButton from "@/components/buttons/backArrowButton";

interface StickyLeftSideProps {
  name: string;
  postsLength: number;
}

export const StickyNavLeftSide: FC<StickyLeftSideProps> = ({
  name,
  postsLength,
}) => {
  return (
    <div className={"flex flex-row gap-2 pl-2 "}>
      <BackArrowButton />
      <div>
        <p>{name}</p>
        <p className={"text-xs text-neutral-500"}>{postsLength} posts</p>
      </div>
    </div>
  );
};
