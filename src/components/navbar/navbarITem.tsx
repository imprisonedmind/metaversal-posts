import { FC } from "react";
import Link from "next/link";

interface NavbarITemProps {
  title: string;
  active: boolean;
}

export const NavbarITem: FC<NavbarITemProps> = ({ title, active = false }) => {
  const url = title == "Posts" ? "/" : title;

  return (
    <li
      className={`
        ${active && "bg-green-500 text-neutral-50"} 
        rounded-md p-1 px-2 text-sm
    `}
    >
      <Link href={url.toLowerCase()}>{title}</Link>
    </li>
  );
};
