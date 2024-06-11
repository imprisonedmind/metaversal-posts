import { FC } from "react";
import { getInitials } from "@/lib/utilities";

interface UserInitialsProps {
  name: string;
  small?: boolean;
}

export const UserInitials: FC<UserInitialsProps> = ({ name, small }) => {
  return (
    <div className={"relative flex items-center justify-center"}>
      <div
        className={`
          ${
            small
              ? "h-5 w-5 rounded-[5px] after:h-5 after:w-5 after:rounded-[4px]"
              : "h-8 w-8 rounded-md after:h-8 after:w-8 after:rounded-md"
          }
          flex items-center justify-center bg-green-500 shadow-sm after:absolute 
          after:rotate-45 after:bg-gradient-to-t after:from-green-500 after:via-green-300 
          after:to-green-500 after:shadow-sm
        `}
      />
      <p className={`${small ? "text-[10px]" : "text-sm"} absolute `}>
        {getInitials(name)}
      </p>
    </div>
  );
};
