"use client";
import { usePostsContext } from "@/lib/postsContext";
import { useEffect } from "react";

/**
 * Everything related to this and usePostsContext is gross and hacky
 * doing it the lightest way without having to re-fetch the data, but all of this
 * just to get a number in the sticky nav is too much, has to be a better way.
 * */
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
