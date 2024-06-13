import { GetPost } from "@/app/actions";
import { UserCard } from "@/components/users/userCard";
import { PostCard } from "@/components/posts/postCard";
import { Suspense } from "react";
import SpinnerWrapper from "@/components/loading/spinnerWrapper";

interface PostProps {
  params: { id: string };
}

const PostWrapper = async ({ id }: { id: number }) => {
  const data = await GetPost(id);

  return (
    <div className={"flex flex-col gap-8"}>
      <PostCard post={data} hideUserCard={true} canDelete={true} />
      <div className={"pl-4"}>
        <UserCard user={data.user} isLink={true} />
      </div>
    </div>
  );
};

export default function Page({ params: { id } }: PostProps) {
  return (
    <Suspense fallback={<SpinnerWrapper />}>
      <PostWrapper id={parseInt(id)} />
    </Suspense>
  );
}
