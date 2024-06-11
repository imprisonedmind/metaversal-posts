import { FC } from "react";

interface NavbarITemProps {
  title: string;
}

export const NavbarITem: FC<NavbarITemProps> = ({ title }) => {
  return <li>{title}</li>;
};
