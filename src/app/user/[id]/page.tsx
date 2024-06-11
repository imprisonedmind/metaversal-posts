import { GetSingleUser, GetUserPosts } from "@/lib/fetchHelpers";
import { UserStickyNav } from "@/components/users/userPage/userStickyNav";
import { UserHeroImage } from "@/components/users/userPage/userHeroImage";
import { UserDetailArea } from "@/components/users/userPage/userDetailArea";
import { PostCard } from "@/components/posts/postCard";

export interface UserProps {
  params: { id: string };
}

export default async function User({ params: { id } }: UserProps) {
  const user = await GetSingleUser(parseInt(id));
  const posts = await GetUserPosts(parseInt(id));

  return (
    <div>
      <UserStickyNav name={user.name} postsLength={posts.length} />
      <UserHeroImage prop={""} />
      <div className={"flex flex-col"}>
        <UserDetailArea user={user} />
        <div className={"mt-4 rounded-full border-t border-neutral-100"} />
        <section className={"divide-y divide-neutral-100"}>
          {posts.map((post, index) => {
            return (
              <PostCard
                key={post.userId + post.userId}
                hideUserCard={true}
                post={post}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
}
