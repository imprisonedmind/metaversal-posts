"use client";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

interface UserStickyNavProps {
  name: string;
  postsLength: number;
}

export const UserStickyNav: FC<UserStickyNavProps> = ({
  name,
  postsLength,
}) => {
  const { back } = useRouter();

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
    <section
      className={`
        ${scrolled && "bg-neutral-50/50 backdrop-blur-sm"} sticky top-0 z-50 py-4
      `}
    >
      <div
        className={`
          ${scrolled && "translate-x-2"}
          flex items-center gap-2 transition duration-150 ease-in-out
      `}
      >
        <div
          onClick={() => back()}
          className={`
            group cursor-pointer rounded-full p-2 transition duration-75
            ease-in-out hover:bg-neutral-50
        `}
        >
          <FaArrowLeft className={"h-4 w-4 text-neutral-950"} />
        </div>
        <div>
          <p>{name}</p>
          <p className={"text-xs text-neutral-500"}>{postsLength} posts</p>
        </div>
      </div>
    </section>
  );
};
