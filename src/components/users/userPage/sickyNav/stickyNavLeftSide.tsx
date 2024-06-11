import { FC } from "react";
import BackArrowButton from "@/components/buttons/backArrowButton";

interface StickyLeftSideProps {
  scrolled: boolean;
  name: string;
  postsLength: number;
}

export const StickyNavLeftSide: FC<StickyLeftSideProps> = ({
  scrolled,
  name,
  postsLength,
}) => {
  return (
    <div className={`${scrolled && "translate-x-2"} flex flex-row gap-2`}>
      <BackArrowButton />
      <div>
        <p>{name}</p>
        <p className={"text-xs text-neutral-500"}>{postsLength} posts</p>
      </div>
    </div>
  );
};
