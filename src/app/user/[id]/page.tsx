import { Fragment, ReactNode, Suspense } from "react";
import UserPosts from "@/components/users/userPage/userPosts";
import { GetSingleUser, GetUserPosts } from "@/app/actions";
import { PostsProvider } from "@/lib/postsContext";
import { StickyNav } from "@/components/sickyNav/stickyNav";
import { UserHeroImage } from "@/components/users/userPage/userHeroImage";
import { UserDetailArea } from "@/components/users/userPage/userDetailArea";
import SpinnerWrapper from "@/components/loading/spinnerWrapper";

export interface UserProps {
  params: { id: string };
}

const PostsWrapper = async ({ id }: { id: number }) => {
  const posts = await GetUserPosts(id);

  return <UserPosts posts={posts} />;
};

const UserWrapper = async ({
  id,
  children,
}: {
  id: number;
  children: ReactNode;
}) => {
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

export default async function User({ params: { id } }: UserProps) {
  return (
    <Fragment>
      <PostsProvider>
        <Suspense fallback={<SpinnerWrapper />}>
          <UserWrapper id={parseInt(id)}>
            <Suspense fallback={<SpinnerWrapper />}>
              <PostsWrapper id={parseInt(id)} />
            </Suspense>
          </UserWrapper>
        </Suspense>
      </PostsProvider>
    </Fragment>
  );
}
