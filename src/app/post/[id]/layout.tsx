import { Fragment, ReactNode } from "react";
import { UserStickyNav } from "@/components/users/userPage/sickyNav/userStickyNav";
import { GetPost } from "@/app/actions";

interface LayoutProps {
  children: ReactNode;
  params: { id: string };
}

export default async function Layout({
  children,
  params: { id },
}: LayoutProps) {
  const data = await GetPost(parseInt(id));

  return (
    <Fragment>
      <UserStickyNav name={data.title} author={data.user.name} />
      {children}
    </Fragment>
  );
}
