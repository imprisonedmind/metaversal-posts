"use client";
import React, { createContext, useContext, useState } from "react";

type PostsContextValue = {
  postsLength: number | boolean;
  setPostsLength: (length: number) => void;
};

const defaultValues: PostsContextValue = {
  postsLength: false,
  setPostsLength: () => {},
};

const PostsContext = createContext<PostsContextValue>(defaultValues);

export const usePostsContext = () => useContext(PostsContext);

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [postsLength, setPostsLength] = useState<number | boolean>(false);

  return (
    <PostsContext.Provider value={{ postsLength, setPostsLength }}>
      {children}
    </PostsContext.Provider>
  );
};
