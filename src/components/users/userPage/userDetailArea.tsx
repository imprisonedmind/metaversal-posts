import { FC } from "react";
import { UserInitials } from "@/components/users/userInitials";
import { UsernameAndName } from "@/components/users/usernameAndName";
import { User } from "@/lib/types";
import UserClientButtons from "@/components/users/userPage/userClientButtons";
import { UserIconText } from "@/components/users/userPage/userIconText";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

interface UserDetailAreaProps {
  user: User;
}

export const UserDetailArea: FC<UserDetailAreaProps> = ({ user }) => {
  console.log(user);

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
          <div className={"flex flex-row gap-4"}>
            <UserIconText
              target={"_blank"}
              link={`https://${user.website}`}
              icon={<FaGlobeAmericas className={"h-3 w-3"} />}
              title={user.website}
            />
            <UserIconText
              link={`mailto:${user.email}`}
              icon={<IoMail className={"h-3 w-3"} />}
              title={user.email}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
