import { PostsClientScrollFetch } from "@/components/posts/postsClientScrollFetch";
import { GetAllPosts } from "@/app/actions";
import { Suspense } from "react";
import SpinnerWrapper from "@/components/loading/spinnerWrapper";

export default async function Home() {
  return (
    <Suspense fallback={<SpinnerWrapper />}>
      <PostsWrapper />
    </Suspense>
  );
}

const PostsWrapper = async () => {
  const data = await GetAllPosts();
  return <PostsClientScrollFetch initialData={data} />;
};
