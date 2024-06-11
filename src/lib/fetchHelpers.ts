import { Post, User } from "@/lib/types";

export async function GetUsers() {
  const url = process.env.NEXT_PUBLIC_USERS_API!;
  const res = await fetch(`${url}`);
  if (res.ok) {
    return (await res.json()) as User[];
  } else {
    throw Error(res.statusText);
  }
}

export async function GetSingleUser(userId: number) {
  const url = process.env.NEXT_PUBLIC_USERS_API!;
  const res = await fetch(`${url}?id=${userId}`);
  if (res.ok) {
    const user = await res.json();
    return user[0] as User;
  } else {
    throw Error("No Users");
  }
}

export async function GetAllPosts() {
  const url = process.env.NEXT_PUBLIC_POSTS_API!;
  const userUrl = process.env.NEXT_PUBLIC_USERS_API!;

  const res = await fetch(url);

  if (res.ok) {
    const posts = (await res.json()) as Post[];

    return await Promise.all(
      posts.map(async (post) => {
        const user = await GetSingleUser(post.userId);
        return { ...post, user };
      }),
    );
  } else {
    throw Error(res.statusText);
  }
}

export async function GetUserPosts(userId: number) {
  const url = `${process.env.NEXT_PUBLIC_POSTS_API}?userId=${userId}`;
  const res = await fetch(url);

  if (res.ok) {
    return (await res.json()) as Post[];
  } else {
    throw Error(res.statusText);
  }
}
