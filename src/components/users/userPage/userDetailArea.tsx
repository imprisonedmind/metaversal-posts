import { FC } from "react";
import { UserInitials } from "@/components/users/userInitials";
import { UsernameAndName } from "@/components/users/usernameAndName";
import { User } from "@/lib/types";
import UserClientButtons from "@/components/users/userPage/userClientButtons";
import { UserIconText } from "@/components/users/userPage/userIconText";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { UserCompany } from "@/components/users/userPage/userCompany";

interface UserDetailAreaProps {
  user: User;
}

export const UserDetailArea: FC<UserDetailAreaProps> = ({ user }) => {
  return (
    <div className={"px-4"}>
      <section className={"flex h-14 justify-between"}>
        <span className={"-mt-1 w-fit !scale-[2] pl-4 md:pl-6"}>
          <UserInitials name={user.name} />
        </span>
        <UserClientButtons />
      </section>

      <section
        className={
          "flex flex-col md:flex-row md:items-center md:justify-between"
        }
      >
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
        <UserCompany
          name={user.company.name}
          bs={user.company.bs}
          catchPhrase={user.company.catchPhrase}
        />
      </section>
    </div>
  );
};
