import { FC } from "react";
import Link from "next/link";

interface UsernameAndNameProps {
  small?: boolean;
  id: number;
  name: string;
  username: string;
}

export const UsernameAndName: FC<UsernameAndNameProps> = ({
  small,
  id,
  name,
  username,
}) => {
  return (
    <div className={`flex flex-col`}>
      <p className={small ? "text-xs" : "text-sm"}>{name}</p>
      <Link
        href={`/user/${id}`}
        className={`
          ${small ? "text-[10px]" : "cursor-pointer text-xs"} 
          text-neutral-600 underline-offset-2 hover:underline
        `}
      >
        @{username}
      </Link>
    </div>
  );
};
