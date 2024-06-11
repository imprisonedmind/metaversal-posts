import { GetSingleUser, GetUserPosts } from "@/lib/fetchHelpers";
import { UserHeroImage } from "@/components/users/userPage/userHeroImage";
import { UserDetailArea } from "@/components/users/userPage/userDetailArea";
import { UserPosts } from "@/components/users/userPage/userPosts";
import { UserStickyNav } from "@/components/users/userPage/sickyNav/userStickyNav";

export interface UserProps {
  params: { id: string };
}

export default async function User({ params: { id } }: UserProps) {
  const user = await GetSingleUser(parseInt(id));
  const posts = await GetUserPosts(parseInt(id));

  return (
    <div>
      <UserStickyNav name={user.name} postsLength={posts.length} />
      <UserHeroImage id={id} />
      <div className={"flex flex-col"}>
        <UserDetailArea user={user} />
        <div className={"mt-4 rounded-full border-t border-neutral-100"} />
        <UserPosts posts={posts} />
      </div>
    </div>
  );
}
