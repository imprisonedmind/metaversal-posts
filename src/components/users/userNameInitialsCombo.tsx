import { FC, Fragment } from "react";
import { UserInitials } from "@/components/users/userInitials";
import { UsernameAndName } from "@/components/users/usernameAndName";
import { User } from "@/lib/types";

interface UseNameInitialsComboProps {
  user: User;
  small?: boolean;
  isLink?: boolean;
}

export const UserNameInitialsCombo: FC<UseNameInitialsComboProps> = ({
  user,
  small,
  isLink = false,
}) => {
  return (
    <div className={"flex flex-row gap-4"}>
      <UserInitials name={user.name} small={small} />
      <UsernameAndName
        id={user.id}
        name={user.name}
        username={user.username}
        isLink={isLink}
      />
    </div>
  );
};
