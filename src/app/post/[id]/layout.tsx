import { Fragment, ReactNode } from "react";
import { GetPost } from "@/app/actions";
import { StickyNav } from "@/components/sickyNav/stickyNav";

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
      <StickyNav name={data.title} author={data.user.name} />
      {children}
    </Fragment>
  );
}
