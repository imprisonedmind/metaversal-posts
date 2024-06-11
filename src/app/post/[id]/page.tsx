import { GetPost } from "@/app/actions";

interface PostProps {
  params: { id: string };
}

export default async function Page({ params: { id } }: PostProps) {
  const data = await GetPost(parseInt(id));

  return (
    <div className={`px-4`}>
      <p className={"capitalize"}>{data.title}</p>
      <p className={"text-sm capitalize text-neutral-500"}>{data.body}</p>
    </div>
  );
}
