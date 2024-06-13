"use client";
import { usePostsContext } from "@/lib/postsContext";
import { useEffect } from "react";

export default function PostsLengthHandler({
  postsLength,
}: {
  postsLength: number;
}) {
  const { setPostsLength } = usePostsContext();

  useEffect(() => {
    setPostsLength(postsLength);
  }, []);

  return null;
}
