"use client";
import { FC } from "react";
import FollowButton from "@/components/buttons/followButton";
import { useAdminContext } from "@/lib/adminContext";
import DeleteButton from "@/components/buttons/deleteButton";

interface StickyNavRightSideProps {
  scrolled: boolean;
}

export const StickyNavRightSide: FC<StickyNavRightSideProps> = ({
  scrolled,
}) => {
  const { isAdmin } = useAdminContext();

  return (
    <div
      className={`
        ${scrolled ? "-translate-x-4 opacity-100" : "pointer-events-none opacity-0"} 
        flex flex-row items-center gap-4 transition duration-150 
        ease-in-out
      `}
    >
      <FollowButton />
      {isAdmin && <DeleteButton />}
    </div>
  );
};
