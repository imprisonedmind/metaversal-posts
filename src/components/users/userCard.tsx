import { FC } from "react";
import { User } from "@/lib/types";
import { UserNameInitialsCombo } from "@/components/users/userNameInitialsCombo";

interface UserCardProps {
  user: User;
  small?: boolean;
}

export const UserCard: FC<UserCardProps> = ({ user, small }) => {
  return (
    <div className={"flex flex-row items-center gap-3 p-0 pb-1"}>
      <UserNameInitialsCombo user={user} small={small} />
    </div>
  );
};
