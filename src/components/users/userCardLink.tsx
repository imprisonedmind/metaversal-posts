import { FC } from "react";
import Link from "next/link";
import { UserNameInitialsCombo } from "@/components/users/userNameInitialsCombo";
import { User } from "@/lib/types";
import { Button } from "@/components/buttons/button";
import DeleteButton from "@/components/buttons/deleteButton";

interface UserCardLinkProps {
  user: User;
}

export const UserCardLink: FC<UserCardLinkProps> = ({ user }) => {
  return (
    <div
      className={
        "flex flex-row items-center justify-between pr-4 hover:bg-neutral-100"
      }
    >
      <Link
        href={`/user/${user.id}`}
        className={`
        relative flex w-full cursor-pointer flex-row items-center 
        justify-between p-4 
      `}
      >
        <UserNameInitialsCombo user={user} isLink={false} />
      </Link>
      <DeleteButton />
    </div>
  );
};
