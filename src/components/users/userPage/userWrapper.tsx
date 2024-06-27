import { Fragment, ReactNode } from "react";
import { GetSingleUser } from "@/app/actions";
import { StickyNav } from "@/components/sickyNav/stickyNav";
import { UserHeroImage } from "@/components/users/userPage/userHeroImage";
import { UserDetailArea } from "@/components/users/userPage/userDetailArea";

interface UserWrapperProps {
  id: number;
  children: ReactNode;
}

export const UserWrapper = async ({ id, children }: UserWrapperProps) => {
  const user = await GetSingleUser(id);

  return (
    <Fragment>
      <StickyNav name={user.name} />
      <UserHeroImage id={id} />
      <div className={"flex flex-col"}>
        <UserDetailArea user={user} />
        <div className={"mt-4 rounded-full border-t border-neutral-100"} />
        {children}
      </div>
    </Fragment>
  );
};
