import { FC, ReactNode } from "react";

interface ButtonProps {
  callBack: () => void;
  title: string;
  style?: string;
  icon?: ReactNode;
}

export const Button: FC<ButtonProps> = ({ callBack, title, style, icon }) => {
  return (
    <div
      onClick={callBack}
      className={`
        ${style} 
        flex h-fit cursor-pointer items-center gap-1 rounded-md bg-green-500 p-1 px-2
      `}
    >
      {icon && icon}
      <p className={"w-max text-sm text-neutral-50"}>{title}</p>
    </div>
  );
};
