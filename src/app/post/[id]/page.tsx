import { GetPost } from "@/app/actions";
import { UserCard } from "@/components/users/userCard";
import { PostCard } from "@/components/posts/postCard";

interface PostProps {
  params: { id: string };
}

export default async function Page({ params: { id } }: PostProps) {
  const data = await GetPost(parseInt(id));

  return (
    <div className={"flex flex-col gap-8"}>
      <PostCard post={data} hideUserCard={true} canDelete={true} />
      <div className={"pl-4"}>
        <UserCard user={data.user} isLink={true} />
      </div>
    </div>
  );
}
