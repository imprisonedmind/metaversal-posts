import { Post, User } from "@/lib/types";

export async function GetUsers() {
  const url = process.env.NEXT_PUBLIC_USERS_API!;
  const res = await fetch(url, {});
  if (res.ok) {
    return (await res.json()) as User[];
  } else {
    throw Error(res.statusText);
  }
}

export async function GetSingleUser(userId: number) {
  const data = await GetUsers();
  if (data) {
    return data.find((user) => user.id === userId) as User;
  } else {
    throw Error("No Users");
  }
}

export async function GetAllPosts() {
  const url = process.env.NEXT_PUBLIC_POSTS_API!;

  const res = await fetch(url);

  if (res.ok) {
    return (await res.json()) as Post[];
  } else {
    throw Error(res.statusText);
  }
}

export async function GetUserPosts(id: number) {
  const posts = await GetAllPosts();

  return posts.filter((post) => post.userId == id);
}
