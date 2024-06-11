"use client";
import { FC, useEffect, useState } from "react";
import { StickyNavInsideWrapper } from "@/components/users/userPage/sickyNav/stickyNavInsideWrapper";
import { StickyNavMainWrapper } from "@/components/users/userPage/sickyNav/stickyNavMainWrapper";
import { StickyNavLeftSide } from "@/components/users/userPage/sickyNav/stickyNavLeftSide";
import { StickyNavRightSide } from "@/components/users/userPage/sickyNav/stickyNavRightSide";

interface UserStickyNavProps {
  name: string;
  postsLength: number;
}

export const UserStickyNav: FC<UserStickyNavProps> = ({
  name,
  postsLength,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StickyNavMainWrapper scrolled={scrolled}>
      <StickyNavInsideWrapper scrolled={scrolled}>
        <StickyNavLeftSide name={name} postsLength={postsLength} />
        <StickyNavRightSide scrolled={scrolled} />
      </StickyNavInsideWrapper>
    </StickyNavMainWrapper>
  );
};
