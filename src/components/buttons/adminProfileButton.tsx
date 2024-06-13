import { FC } from "react";
import { RiAdminFill } from "react-icons/ri";

interface AdminProfileButtonProps {
  callBack: () => void;
}

export const AdminProfileButton: FC<AdminProfileButtonProps> = ({
  callBack,
}) => {
  return (
    <button
      onClick={callBack}
      className={`
        z-[600] flex h-fit w-fit cursor-pointer items-center justify-center rounded-full 
        border border-neutral-50 bg-neutral-950 p-2 shadow-md
      `}
    >
      <RiAdminFill className={"h-4 w-4 text-neutral-50"} />
    </button>
  );
};
