import { Fragment, Suspense } from "react";
import UserPosts from "@/components/users/userPage/userPosts";
import { PostsProvider } from "@/lib/postsContext";
import SpinnerWrapper from "@/components/loading/spinnerWrapper";
import { UserWrapper } from "@/components/users/userPage/userWrapper";

export interface UserProps {
  params: { id: string };
}

export default async function User({ params: { id } }: UserProps) {
  return (
    <Fragment>
      <PostsProvider>
        <Suspense fallback={<SpinnerWrapper />}>
          <UserWrapper id={parseInt(id)}>
            <Suspense fallback={<SpinnerWrapper />}>
              <UserPosts id={parseInt(id)} />
            </Suspense>
          </UserWrapper>
        </Suspense>
      </PostsProvider>
    </Fragment>
  );
}
