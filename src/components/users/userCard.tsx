import { FC } from "react";
import { User } from "@/lib/types";
import { UserInitials } from "@/components/users/userInitials";

interface UserCardProps {
  user: User;
}

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div
      className={`
        flex cursor-pointer flex-row items-center gap-4 p-4 hover:bg-neutral-50
      `}
    >
      <UserInitials name={user.name} />
      <div className={"flex flex-col"}>
        <p className={"text-sm"}>{user.name}</p>
        <p className={"text-xs text-neutral-600"}>@{user.username}</p>
      </div>
    </div>
  );
};
