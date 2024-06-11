import { FC } from "react";
import Link from "next/link";
import { UserNameInitialsCombo } from "@/components/users/userNameInitialsCombo";
import { User } from "@/lib/types";

interface UserCardLinkProps {
  user: User;
}

export const UserCardLink: FC<UserCardLinkProps> = ({ user }) => {
  return (
    <Link
      href={`/user/${user.id}`}
      className={`
        flex cursor-pointer flex-row items-center gap-4 p-4 hover:bg-neutral-50
      `}
    >
      <UserNameInitialsCombo user={user} isLink={false} />
    </Link>
  );
};
