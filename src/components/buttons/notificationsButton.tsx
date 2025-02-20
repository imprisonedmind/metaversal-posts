import { FC } from "react";
import { FaBell } from "react-icons/fa6";

interface NotificationsButtonProps {
  callBack: () => void;
}

export const NotificationsButton: FC<NotificationsButtonProps> = ({
  callBack,
}) => {
  return (
    <div
      onClick={callBack}
      className={`
        cursor-pointer rounded-md bg-gradient-to-t from-green-500 to-green-400 p-2 
        text-neutral-50
      `}
    >
      <FaBell className={"h-3 w-3"} />
    </div>
  );
};
