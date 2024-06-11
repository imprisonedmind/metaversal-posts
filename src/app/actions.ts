"use server";

import { Post, User } from "@/lib/types";

/**
 * Faking pagination as I am limited with the API.
 * Also scrambling data for the posts area to seem natural.
 * */
export async function GetAllPosts(page: number = 1, limit: number = 10) {
  const url = process.env.NEXT_PUBLIC_POSTS_API!;
  const res = await fetch(url);

  if (res.ok) {
    let posts = (await res.json()) as Post[];
    posts = posts.sort(() => Math.random() - 0.5);

    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedPosts = posts.slice(start, end);

    const postsWithUser = await Promise.all(
      paginatedPosts.map(async (post) => {
        const user = await GetSingleUser(post.userId);
        return { ...post, user };
      }),
    );
    return postsWithUser as Post[];
  } else {
    throw Error(res.statusText);
  }
}

export async function GetPost(id: number) {
  const url = process.env.NEXT_PUBLIC_POSTS_API!;
  const res = await fetch(`${url}?id=${id}`);

  if (res.ok) {
    const post = (await res.json()) as Post[];

    const postWithUser = await Promise.all(
      post.map(async (postItem) => {
        const user = await GetSingleUser(postItem.userId);
        return { ...postItem, user };
      }),
    );

    return postWithUser[0] as Post;
  } else {
    throw Error("No post with that id");
  }
}

export async function GetUsers() {
  const url = process.env.NEXT_PUBLIC_USERS_API!;
  const res = await fetch(url);
  if (res.ok) {
    const users = await res.json();
    return users as User[];
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

export async function GetUserPosts(userId: number) {
  const url = `${process.env.NEXT_PUBLIC_POSTS_API}?userId=${userId}`;
  const res = await fetch(url);

  if (res.ok) {
    return (await res.json()) as Post[];
  } else {
    throw Error(res.statusText);
  }
}
