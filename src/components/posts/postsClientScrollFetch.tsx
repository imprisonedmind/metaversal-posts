"use client";
import { FC, useEffect, useState } from "react";
import { PostCard } from "@/components/posts/postCard";
import { Post } from "@/lib/types";
import { useInView } from "react-intersection-observer";
import { GetAllPosts } from "@/app/actions";
import Link from "next/link";
import SpinnerWrapper from "@/components/loading/spinnerWrapper";

interface PostsClientScrollFetchProps {
  initialData: Post[];
}

const NUMBER_OF_POSTS_TO_FETCH = 10;

export const PostsClientScrollFetch: FC<PostsClientScrollFetchProps> = ({
  initialData,
}) => {
  const [offset, setOffset] = useState(NUMBER_OF_POSTS_TO_FETCH);
  const [posts, setPosts] = useState<Post[]>(initialData);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView();

  const loadMorePosts = () => {
    GetAllPosts(page + 1, NUMBER_OF_POSTS_TO_FETCH).then((res) => {
      setPage(page + 1);
      setPosts([...posts, ...res]);
      setOffset(offset + NUMBER_OF_POSTS_TO_FETCH);
    });
  };

  useEffect(() => {
    if (inView) loadMorePosts();
  }, [inView]);

  return (
    <div className={"divide-y divide-neutral-100"}>
      {posts.map((post, index) => {
        return <PostCard key={post.user.id + post.id} post={post} />;
      })}
      <div ref={ref} className={"flex w-full items-center justify-center pb-4"}>
        {posts.length === 100 ? "All Loaded" : <SpinnerWrapper />}
      </div>
    </div>
  );
};
