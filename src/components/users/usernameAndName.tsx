import { FC } from "react";
import { UserNameLink } from "@/components/users/userNameLink";

interface UsernameAndNameProps {
  small?: boolean;
  id: number;
  name: string;
  username: string;
  isLink?: boolean;
}

export const UsernameAndName: FC<UsernameAndNameProps> = ({
  small,
  id,
  name,
  username,
  isLink = false,
}) => {
  return (
    <div className={`flex flex-col`}>
      <p className={small ? "text-xs" : "text-sm"}>{name}</p>
      {isLink ? (
        <UserNameLink id={id} username={username} small={small} />
      ) : (
        <p className={"text-xs text-neutral-500"}>@{username}</p>
      )}
    </div>
  );
};
