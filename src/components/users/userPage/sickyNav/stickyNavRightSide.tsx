import { FC } from "react";
import FollowButton from "@/components/buttons/followButton";

interface StickyNavRightSideProps {
  scrolled: boolean;
}

export const StickyNavRightSide: FC<StickyNavRightSideProps> = ({
  scrolled,
}) => {
  return (
    <div
      className={`
        ${scrolled ? "-translate-x-4 opacity-100" : "opacity-0"} 
        transition duration-150 ease-in-out
      `}
    >
      <FollowButton />
    </div>
  );
};
