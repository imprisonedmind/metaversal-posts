import { FC } from "react";
import { getInitials } from "@/lib/utilities";

interface UserInitialsProps {
  name: string;
}

export const UserInitials: FC<UserInitialsProps> = ({ name }) => {
  return (
    <div className={"flex items-center justify-center"}>
      <div
        className={`
        flex h-8 w-8 items-center justify-center rounded-md 
        bg-green-500 shadow-sm
        after:absolute after:h-8 after:w-8 after:rotate-45 after:rounded-md
        after:bg-gradient-to-t after:from-green-500 after:via-green-300 after:to-green-500
        after:shadow-sm
      `}
      />
      <p className={"absolute text-sm"}>{getInitials(name)}</p>
    </div>
  );
};
