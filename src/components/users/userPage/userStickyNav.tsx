"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

interface UserStickyNavProps {
  name: string;
  postsLength: number;
}

export const UserStickyNav: FC<UserStickyNavProps> = ({
  name,
  postsLength,
}) => {
  const { back } = useRouter();

  return (
    <section className={"sticky mt-0 flex items-center gap-2 py-4"}>
      <div
        onClick={() => back()}
        className={"cursor-pointer rounded-full p-2 hover:bg-neutral-100"}
      >
        <FaArrowLeft className={"h-4 w-4 text-neutral-950"} />
      </div>
      <div>
        <p>{name}</p>
        <p className={"text-xs text-neutral-500"}>{postsLength} posts</p>
      </div>
    </section>
  );
};
