"use client";
import React, { createContext, useContext, useState } from "react";

type PostsContextValue = {
  postsLength: number;
  setPostsLength: (length: number) => void;
};

const defaultValues: PostsContextValue = {
  postsLength: 0,
  setPostsLength: () => {},
};

const PostsContext = createContext<PostsContextValue>(defaultValues);

export const usePostsContext = () => useContext(PostsContext);

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [postsLength, setPostsLength] = useState<number>(0);

  return (
    <PostsContext.Provider value={{ postsLength, setPostsLength }}>
      {children}
    </PostsContext.Provider>
  );
};
