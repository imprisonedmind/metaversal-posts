"use client";
import { Button } from "@/components/buttons/button";
import { useAdminContext } from "@/lib/adminContext";
import { useEffect, useState } from "react";

export default function ProfileMenu() {
  const { isAdmin, makeAdmin, makeUser } = useAdminContext();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      // TODO: fix the animation here
      className={`
        ${scrolled ? " -right-4 top-16 " : "right-0 top-12"}
        absolute z-[500] flex h-fit w-fit flex-col rounded-md border border-neutral-200 
        bg-neutral-50 drop-shadow-xl transition duration-300 ease-in-out
      `}
    >
      <div className={"p-x flex flex-row items-center px-4 py-2"}>
        <p className={"text-md"}>Settings</p>
      </div>
      <div className={"w-full border-t border-neutral-100"} />
      <span className={"mx-auto w-fit p-4"}>
        <Button
          callBack={() => (isAdmin ? makeUser() : makeAdmin())}
          title={isAdmin ? "User Mode" : "Admin Mode"}
          style={
            isAdmin ? "from-blue-500 to-blue-400" : "from-red-600 to-red-500"
          }
        />
      </span>
    </div>
  );
}
