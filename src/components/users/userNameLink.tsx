import { FC } from "react";
import Link from "next/link";

interface UserNameLinkProps {
  id: number;
  small?: boolean;
  username: string;
}

export const UserNameLink: FC<UserNameLinkProps> = ({
  id,
  small,
  username,
}) => {
  return (
    <Link
      href={`/user/${id}`}
      className={`
          ${small ? "text-[10px]" : "cursor-pointer text-xs"} 
          text-neutral-600 underline-offset-2 hover:underline
        `}
    >
      @{username}
    </Link>
  );
};
