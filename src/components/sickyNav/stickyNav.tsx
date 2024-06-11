"use client";
import { FC, useEffect, useState } from "react";
import { StickyNavMainWrapper } from "@/components/sickyNav/stickyNavMainWrapper";
import { StickyNavInsideWrapper } from "@/components/sickyNav/stickyNavInsideWrapper";
import { StickyNavLeftSide } from "@/components/sickyNav/stickyNavLeftSide";
import { StickyNavRightSide } from "@/components/sickyNav/stickyNavRightSide";

interface UserStickyNavProps {
  name: string;
  postsLength?: number;
  author?: string;
}

export const StickyNav: FC<UserStickyNavProps> = ({
  name,
  postsLength,
  author,
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
        <StickyNavLeftSide
          name={name}
          postsLength={postsLength}
          author={author}
        />
        <StickyNavRightSide scrolled={scrolled} />
      </StickyNavInsideWrapper>
    </StickyNavMainWrapper>
  );
};
