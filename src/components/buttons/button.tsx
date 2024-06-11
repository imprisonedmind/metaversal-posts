import { FC } from "react";

interface ButtonProps {
  title: string;
}

export const Button: FC<ButtonProps> = ({ title }) => {
  return (
    <div
      className={"flex h-fit cursor-pointer rounded-md bg-green-500 p-1 px-2"}
    >
      <p className={"text-sm text-neutral-50"}>{title}</p>
    </div>
  );
};
