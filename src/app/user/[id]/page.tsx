import { UserHeroImage } from "@/components/users/userPage/userHeroImage";
import { Fragment, Suspense } from "react";
import SpinnerWrapper from "@/components/loading/spinnerWrapper";
import UserPosts from "@/components/users/userPage/userPosts";
import { UserDetailArea } from "@/components/users/userPage/userDetailArea";
import { GetSingleUser, GetUserPosts } from "@/app/actions";
import { StickyNav } from "@/components/sickyNav/stickyNav";
import { PostsProvider } from "@/lib/postsContext";

export interface UserProps {
  params: { id: string };
}

const PostsWrapper = async ({ id }: { id: number }) => {
  const posts = await GetUserPosts(id);

  return <UserPosts posts={posts} />;
};

export default async function User({ params: { id } }: UserProps) {
  const user = await GetSingleUser(parseInt(id));

  return (
    <Fragment>
      <PostsProvider>
        <StickyNav name={user.name} />
        <UserHeroImage id={id} />
        <div className={"flex flex-col"}>
          <UserDetailArea user={user} />
          <div className={"mt-4 rounded-full border-t border-neutral-100"} />
          <Suspense fallback={<SpinnerWrapper />}>
            <PostsWrapper id={parseInt(id)} />
          </Suspense>
        </div>
      </PostsProvider>
    </Fragment>
  );
}
