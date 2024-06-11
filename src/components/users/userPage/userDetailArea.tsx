import { FC, Fragment } from "react";
import { UserInitials } from "@/components/users/userInitials";
import { Button } from "@/components/buttons/button";
import { UsernameAndName } from "@/components/users/usernameAndName";
import { User } from "@/lib/types";
import { FaBell } from "react-icons/fa6";
import { NotificationsButton } from "@/components/buttons/notificationsButton";
import UserClientButtons from "@/components/users/userPage/userClientButtons";

interface UserDetailAreaProps {
  user: User;
}

export const UserDetailArea: FC<UserDetailAreaProps> = ({ user }) => {
  return (
    <div className={"px-4"}>
      <section className={"flex h-14 justify-between"}>
        <span className={"-mt-1 w-fit !scale-[2] pl-6"}>
          <UserInitials name={user.name} />
        </span>
        <UserClientButtons />
      </section>

      <section className={"flex items-center justify-between"}>
        <div className={"flex flex-col gap-4"}>
          <UsernameAndName
            id={user.id}
            name={user.name}
            username={user.username}
          />
        </div>
      </section>
    </div>
  );
};
