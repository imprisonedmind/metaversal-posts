import { GetPost } from "@/app/actions";
import { UserCard } from "@/components/users/userCard";

interface PostProps {
  params: { id: string };
}

export default async function Page({ params: { id } }: PostProps) {
  const data = await GetPost(parseInt(id));

  console.log(data);

  return (
    <div className={"flex flex-col gap-8 px-4"}>
      <div className={`flex flex-col gap-1`}>
        <p className={"capitalize"}>{data.title}</p>
        <p className={"text-sm capitalize text-neutral-500"}>{data.body}</p>
      </div>
      <UserCard user={data.user} isLink={true} />
    </div>
  );
}
