import { FC, ReactNode } from "react";
import Link from "next/link";

interface UserIconTextProps {
  link: string;
  icon: ReactNode;
  title: string;
  target?: string;
}

export const UserIconText: FC<UserIconTextProps> = ({
  link,
  icon,
  title,
  target,
}) => {
  return (
    <Link
      href={link}
      target={target || "_self"}
      className={"flex flex-row items-center gap-1 !text-neutral-800"}
    >
      {icon}
      <p className={"text-sm text-blue-800 underline-offset-2 hover:underline"}>
        {title}
      </p>
    </Link>
  );
};
